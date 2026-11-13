"use client"

import * as React from "react"
import { useI18n } from "@/lib/i18n-context"
import { LINKS } from "@/lib/i18n"
import snapshot from "@/lib/dblp-snapshot.json"

interface Pub {
  key: string
  title: string
  authors: string[]
  venue: string
  year: number | null
  type: string
  url: string
  /** DBLP record key, present only for entries that came from DBLP. */
  dblpKey?: string
}

// Manually curated entries, added when DBLP does not list a paper yet.
const MANUAL: Pub[] = []

// DBLP's page and XML exports sit behind a bot check that blocks scripted
// requests, so the list comes from DBLP's public SPARQL endpoint instead.
const DBLP_PID = "https://dblp.org/pid/239/6427-1"
const SPARQL_ENDPOINT = "https://sparql.dblp.org/sparql"
const SPARQL_QUERY = `
PREFIX dblp: <https://dblp.org/rdf/schema#>
SELECT ?pub ?title ?year ?type ?venue ?ee
       (GROUP_CONCAT(CONCAT(STR(?ord), ":", ?aname); separator="|") AS ?authors)
WHERE {
  ?pub dblp:authoredBy <${DBLP_PID}> ; dblp:title ?title .
  OPTIONAL { ?pub dblp:yearOfPublication ?year }
  OPTIONAL { ?pub dblp:bibtexType ?type }
  OPTIONAL { ?pub dblp:publishedIn ?venue }
  OPTIONAL { ?pub dblp:primaryDocumentPage ?ee }
  ?pub dblp:hasSignature ?sig .
  ?sig dblp:signatureDblpName ?aname ; dblp:signatureOrdinal ?ord .
}
GROUP BY ?pub ?title ?year ?type ?venue ?ee`

type Binding = Record<string, { value: string } | undefined>

function parseDblpSparql(bindings: Binding[]): Pub[] {
  return bindings.map(b => {
    const val = (k: string) => b[k]?.value?.trim() ?? ""
    const dblpKey = val("pub").replace(/^https?:\/\/dblp\.org\/rec\//, "")
    const title = val("title").replace(/\.$/, "")
    const venue = val("venue")
    const bibType = val("type").split("#").pop()?.toLowerCase() ?? ""
    const authors = val("authors").split("|").filter(Boolean)
      .map(a => { const i = a.indexOf(":"); return { ord: parseInt(a.slice(0, i)) || 0, name: a.slice(i + 1).replace(/\s+\d+$/, "") } })
      .sort((x, y) => x.ord - y.ord)
      .map(a => a.name)
    let type = "article"
    if (venue === "CoRR") type = "preprint"
    else if (bibType === "inproceedings") type = /@|workshop/i.test(venue) ? "workshop" : "conference"
    else if (bibType === "article") type = "journal"
    else if (bibType === "phdthesis" || bibType === "mastersthesis") type = "thesis"
    return { key: dblpKey || title, title, authors, venue: venue === "CoRR" ? "arXiv" : venue, year: parseInt(val("year")) || null, type, url: val("ee") || "#", dblpKey: dblpKey || undefined }
  })
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "")
const byYearDesc = (a: Pub, b: Pub) => (b.year ?? 0) - (a.year ?? 0) || Number(a.type === "preprint") - Number(b.type === "preprint")

function buildList(all: Pub[]): Pub[] {
  // Hide a preprint when the same title also exists as a published version.
  const published = new Set(all.filter(p => p.type !== "preprint").map(p => norm(p.title)))
  const list = all.filter(p => p.type !== "preprint" || !published.has(norm(p.title)))
  const seen = new Set(all.map(p => norm(p.title)))
  MANUAL.forEach(p => { if (!seen.has(norm(p.title))) list.push(p) })
  return list.sort(byYearDesc)
}

// Baked in at build time by scripts/update-dblp-snapshot.mjs, so the list is
// part of the static HTML and still shows when the live query fails.
const SNAPSHOT: Pub[] = buildList(parseDblpSparql(snapshot.bindings as Binding[]))

export async function loadPubs(): Promise<Pub[] | null> {
  try {
    const res = await fetch(`${SPARQL_ENDPOINT}?query=${encodeURIComponent(SPARQL_QUERY)}`, { headers: { Accept: "application/sparql-results+json" } })
    if (!res.ok) throw new Error(`${res.status}`)
    const all = parseDblpSparql((await res.json()).results.bindings)
    if (!all.length) throw new Error("empty")
    return buildList(all)
  } catch {
    return null
  }
}

const PUB_LIMIT = 10
const FILTER_ORDER = ["all", "conference", "journal", "workshop", "preprint", "thesis"]

export function Publications() {
  const { t } = useI18n()
  const p = t.publications
  const [pubs, setPubs] = React.useState<Pub[]>(SNAPSHOT)
  const [source, setSource] = React.useState<"loading" | "dblp" | "fallback">("loading")
  const [filter, setFilter] = React.useState("all")
  const [expanded, setExpanded] = React.useState(false)

  React.useEffect(() => {
    loadPubs().then(live => {
      if (live) { setPubs(live); setSource("dblp") } else setSource("fallback")
    })
  }, [])

  const filtered = filter === "all" ? pubs : pubs.filter(x => x.type === filter)
  const visible = expanded ? filtered : filtered.slice(0, PUB_LIMIT)
  const availableFilters = FILTER_ORDER.filter(k => k === "all" || pubs.some(x => x.type === k))

  const groups: Array<{ year: number | null; items: Pub[] }> = []
  visible.forEach(pub => {
    const last = groups[groups.length - 1]
    if (last && last.year === pub.year) last.items.push(pub)
    else groups.push({ year: pub.year, items: [pub] })
  })

  const dblpLink = <a href={LINKS.dblp} target="_blank" rel="noopener">DBLP</a>

  return (
    <section id="publications" className="wrap section pubs">
      <div className="pubs-head">
        <div>
          <h2 className="h2">{p.title}</h2>
          <p className="pubs-status" aria-live="polite">
            <span className={`dot${source === "fallback" ? " off" : ""}`} aria-hidden="true" />
            {source !== "fallback" && <span>{p.subtitleA} {dblpLink}{p.subtitleB}</span>}
            {source === "fallback" && <span>{p.sourceFallback} {dblpLink}.</span>}
          </p>
        </div>
        {availableFilters.length > 2 && (
          <div className="filters">
            {availableFilters.map(k => (
              <button
                key={k}
                type="button"
                className="filter"
                aria-pressed={filter === k}
                onClick={() => { setFilter(k); setExpanded(false) }}
              >
                {p.filters[k] ?? k}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        {visible.length === 0 && <p className="muted">{p.empty}</p>}
        {groups.map(g => (
          <div className="year-group" key={g.year ?? "undated"}>
            <h3 className="year">{g.year ?? p.undated}</h3>
            <ul className="year-pubs">
              {g.items.map(pub => (
                <li className="pub" key={pub.key}>
                  <div className="pub-main">
                    <h4>{pub.title}</h4>
                    <p className="pub-authors">{fmtAuthors(pub.authors)}</p>
                    {pub.venue && <p className="pub-venue">{pub.venue}</p>}
                    <div className="pub-links">
                      {pub.url !== "#" && <a href={pub.url} target="_blank" rel="noopener">{p.paper}</a>}
                      {pub.dblpKey && (
                        <a href={`https://dblp.org/rec/${pub.dblpKey}.html?view=bibtex`} target="_blank" rel="noopener">{p.bibtex}</a>
                      )}
                    </div>
                  </div>
                  <span className={`badge${pub.type === "conference" || pub.type === "journal" ? " accent" : ""}`}>
                    {p.types[pub.type] ?? pub.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {filtered.length > PUB_LIMIT && (
        <div>
          <button
            type="button"
            className="btn-outline"
            aria-expanded={expanded}
            onClick={() => {
              if (expanded) document.getElementById("publications")?.scrollIntoView({ block: "start" })
              setExpanded(v => !v)
            }}
          >
            {expanded ? p.showLess : `${p.showMore} (${filtered.length})`}
          </button>
        </div>
      )}
    </section>
  )
}

function fmtAuthors(authors: string[]) {
  return authors.map((a, i) => (
    <React.Fragment key={`${a}-${i}`}>
      {i > 0 && ", "}
      {/Fabian\s*Karl/i.test(a) ? <strong>{a}</strong> : a}
    </React.Fragment>
  ))
}
