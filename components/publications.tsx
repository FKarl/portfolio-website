"use client"

import * as React from "react"
import { useI18n } from "@/lib/i18n-context"

interface Pub {
  key: string
  title: string
  authors: string[]
  venue: string
  year: number | null
  type: string
  url: string
  tags: string[]
}

const FALLBACK: Pub[] = [
  {
    key: "karl2024crawldoc",
    title: "CRAWLDoc: A Dataset for Robust Ranking of Bibliographic Documents",
    authors: ["Fabian Karl", "Ansgar Scherp"],
    venue: "arXiv preprint",
    year: 2024, type: "preprint", url: "https://arxiv.org/abs/2406.06947", tags: ["NLP", "Information Retrieval"],
  },
  {
    key: "karl2024transformers",
    title: "Transformers are Short-Text Classifiers: A Study of Inductive Short-Text Classifiers on Benchmarks and Real-World Datasets",
    authors: ["Fabian Karl", "Ansgar Scherp"],
    venue: "International Conference on Natural Language and Speech Processing (ICNLSP)",
    year: 2023, type: "conference", url: "https://aclanthology.org/2023.icnlsp-1.16/", tags: ["NLP", "Text Classification"],
  },
  {
    key: "gencodeSearchNet",
    title: "GenCodeSearchNet: A Benchmark Test Suite for Evaluating Generalization in Programming Language Understanding",
    authors: ["Andor Diera", "Abdelhalim Dahou", "Lukas Galke", "Fabian Karl", "Florian Sihler", "Ansgar Scherp"],
    venue: "Association for Computational Linguistics",
    year: 2023, type: "workshop", url: "https://aclanthology.org/2023.genbench-1.2/", tags: ["NLP", "Generalization"],
  },
  {
    key: "karl2023efficient",
    title: "Efficient Inferencing in Language Models for Academic Writing Feedback",
    authors: ["Fabian Karl", "et al."],
    venue: "Workshop on Resource-Efficient NLP",
    year: 2024, type: "workshop", url: "#", tags: ["NLP", "Efficiency"],
  },
  {
    key: "karl2023graphmlp",
    title: "Graph-MLP Sampling: An Empirical Study of Sampling Strategies",
    authors: ["Fabian Karl"],
    venue: "Technical Report, Ulm University",
    year: 2023, type: "conference", url: "https://github.com/FKarl/Graph-MLP-Sampling", tags: ["Graph ML"],
  },
]

const MANUAL_TAGS: Record<string, string[]> = {
  "CRAWLDoc": ["NLP", "IR"],
  "Transformers are Short": ["NLP", "Classification"],
}

function parseDblpXml(text: string): Pub[] {
  const parser = new DOMParser()
  const doc = parser.parseFromString(text, "text/xml")
  if (doc.querySelector("parsererror")) throw new Error("parse error")
  const out: Pub[] = []
  doc.querySelectorAll("r > *").forEach(rec => {
    const tag = rec.tagName.toLowerCase()
    const get = (sel: string) => rec.querySelector(sel)?.textContent?.trim() ?? ""
    const authors = Array.from(rec.querySelectorAll("author")).map(a => a.textContent?.trim().replace(/\s+\d+$/, "") ?? "")
    const title = get("title").replace(/\.$/, "")
    const year = parseInt(get("year")) || null
    const venue = get("journal") || get("booktitle") || get("school") || ""
    const ee = rec.querySelector("ee")
    const url = ee ? ee.textContent?.trim() ?? "#" : "#"
    const key = rec.getAttribute("key") ?? `${tag}-${title.slice(0, 12)}`
    let type = "article"
    if (tag === "inproceedings") type = "conference"
    else if (tag === "article") type = "journal"
    else if (tag === "phdthesis" || tag === "mastersthesis") type = "thesis"
    else if (tag === "informal") type = "preprint"
    const tags = Object.entries(MANUAL_TAGS).find(([k]) => title.includes(k))?.[1] ?? []
    out.push({ key, title, authors, venue, year, type, url, tags })
  })
  out.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
  return out
}

export async function loadPubs(): Promise<{ source: "dblp" | "fallback"; pubs: Pub[] }> {
  try {
    const res = await fetch("https://dblp.org/pid/239/6427-1.xml", { headers: { Accept: "application/xml" } })
    if (!res.ok) throw new Error(`${res.status}`)
    const text = await res.text()
    const dblp = parseDblpXml(text)
    if (!dblp.length) throw new Error("empty")
    // Merge: add manual-only fallbacks not in dblp
    const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "")
    const seen = new Set(dblp.map(p => norm(p.title)))
    FALLBACK.forEach(p => { if (!seen.has(norm(p.title))) dblp.push(p) })
    dblp.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    return { source: "dblp", pubs: dblp }
  } catch {
    return { source: "fallback", pubs: FALLBACK.slice() }
  }
}

const PUB_LIMIT = 5
const FILTER_ORDER = ["all", "conference", "journal", "workshop", "preprint", "thesis"]

export function Publications() {
  const { t } = useI18n()
  const [pubs, setPubs] = React.useState<Pub[]>([])
  const [source, setSource] = React.useState<"loading" | "dblp" | "fallback">("loading")
  const [filter, setFilter] = React.useState("all")
  const [expanded, setExpanded] = React.useState(false)

  React.useEffect(() => {
    loadPubs().then(res => { setSource(res.source); setPubs(res.pubs) })
  }, [])

  React.useEffect(() => { setExpanded(false) }, [filter])

  const filtered = filter === "all" ? pubs : pubs.filter(p => p.type === filter)
  const visible = expanded ? filtered : filtered.slice(0, PUB_LIMIT)
  const hiddenCount = filtered.length - PUB_LIMIT

  const availableFilters = FILTER_ORDER.filter(k => k === "all" || pubs.some(p => p.type === k))

  return (
    <section id="publications" className="section-pad" style={{ background: "var(--surface)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div className="container-design">
        <div style={{ display: "flex", alignItems: "end", gap: 24, marginBottom: 24, flexWrap: "wrap" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--accent)", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 10 }}>{t.publications.kicker}</div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-.028em", lineHeight: 1.02, margin: "0 0 8px" }}>
              {t.publications.titleA}{" "}
              <em style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)", letterSpacing: "-.015em" }}>{t.publications.titleB}</em>
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 15, margin: 0, maxWidth: "30rem" }}>{t.publications.subtitle}</p>
          </div>
        </div>

        {/* Source + filters row */}
        <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, marginBottom: 24 }}>
          <div style={{
            fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--ink-3)",
            display: "inline-flex", alignItems: "center", gap: 8, letterSpacing: ".04em",
            opacity: source === "loading" ? 0.5 : 1,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: source === "dblp" ? "var(--good)" : source === "loading" ? "var(--ink-3)" : "var(--ink-3)", animation: source === "dblp" ? "pulse-ring 2.5s infinite" : "none" }} className={source === "dblp" ? "animate-pulse-ring" : ""} />
            {source === "loading" ? t.publications.loading : source === "dblp" ? `${t.publications.sourceDblp} · ${pubs.length}` : `${t.publications.sourceFallback} · ${pubs.length}`}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
            {availableFilters.map(k => (
              <button key={k} onClick={() => setFilter(k)}
                aria-pressed={filter === k}
                style={{
                  appearance: "none", background: filter === k ? "var(--ink)" : "var(--bg)",
                  border: `1px solid ${filter === k ? "var(--ink)" : "var(--rule)"}`,
                  color: filter === k ? "var(--bg)" : "var(--ink-2)",
                  fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                  padding: "6px 12px", borderRadius: 999, cursor: "pointer",
                  fontWeight: 500, transition: "all .15s ease",
                }}
                onMouseEnter={e => { if (filter !== k) { (e.currentTarget as HTMLButtonElement).style.color = "var(--ink)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--ink-3)" } }}
                onMouseLeave={e => { if (filter !== k) { (e.currentTarget as HTMLButtonElement).style.color = "var(--ink-2)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--rule)" } }}
              >
                {t.publications.filters[k] ?? k}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
          {source === "loading" && [1, 2, 3].map(i => (
            <li key={i} style={{ height: 90, background: "var(--bg)", border: "1px solid var(--rule)", borderRadius: "var(--r)", opacity: 0.5 }} />
          ))}
          {source !== "loading" && visible.length === 0 && (
            <li style={{ padding: "32px 0", color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: 12 }}>{t.publications.empty}</li>
          )}
          {visible.map(pub => <PubCard key={pub.key} pub={pub} />)}
        </ul>

        {/* Show more */}
        {hiddenCount > 0 && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <button onClick={() => {
              setExpanded(v => {
                if (v) setTimeout(() => document.getElementById("publications")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50)
                return !v
              })
            }}
              style={{
                appearance: "none", background: "var(--bg)", border: "1px solid var(--rule)",
                color: "var(--ink)", fontFamily: "var(--font-mono, monospace)", fontSize: 12,
                padding: "12px 22px", borderRadius: 999, cursor: "pointer",
                letterSpacing: ".04em",
                display: "inline-flex", alignItems: "center", gap: 10,
                transition: "all .2s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--ink)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--bg)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--bg)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--ink)"; (e.currentTarget as HTMLButtonElement).style.transform = "" }}
            >
              <span>{expanded ? t.publications.showLess : t.publications.showMore}</span>
              <span style={{ color: "var(--ink-3)" }}>{expanded ? `· ${filtered.length} total` : `· +${hiddenCount} more`}</span>
              <span style={{ display: "inline-block", transition: "transform .25s ease", transform: expanded ? "rotate(180deg)" : "" }}>↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function fmtAuthors(authors: string[]) {
  return authors.map(a => /Fabian\s*Karl/i.test(a) ? <strong key={a}>{a}</strong> : a).reduce((acc: React.ReactNode[], a, i) => {
    if (i > 0) acc.push(", ")
    acc.push(a)
    return acc
  }, [])
}

function PubCard({ pub }: { pub: Pub }) {
  return (
    <li>
      <a href={pub.url} target="_blank" rel="noopener"
        style={{
          background: "var(--bg)", border: "1px solid var(--rule)",
          borderRadius: "var(--r)", padding: "22px 26px",
          display: "grid", gap: 8, gridTemplateColumns: "1fr",
          transition: "transform .2s ease, border-color .2s ease, box-shadow .2s ease",
          textDecoration: "none", color: "inherit", position: "relative",
        }}
        className="pub-card-grid"
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-line)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "var(--shadow)" }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = ""; (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--rule)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "" }}
      >
        <style>{`@media (min-width: 760px) { .pub-card-grid { grid-template-columns: 64px 1fr 140px !important; align-items: baseline; gap: 28px !important; } }`}</style>
        <div style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontSize: 26, lineHeight: 1, color: "var(--accent)", letterSpacing: "-.01em" }}>{pub.year || "—"}</div>
        <div>
          <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-.008em", lineHeight: 1.3, margin: "0 0 6px", color: "var(--ink)" }}>{pub.title}</h3>
          {pub.venue && <div style={{ fontStyle: "italic", fontFamily: "var(--font-serif, serif)", fontSize: 17, color: "var(--ink-2)", margin: "4px 0 0" }}>{pub.venue}</div>}
          <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 8 }}>{fmtAuthors(pub.authors)}</div>
          {pub.tags.length > 0 && (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginTop: 8 }}>
              {pub.tags.map(tag => (
                <span key={tag} style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "var(--ink-2)", background: "var(--surface-2)", padding: "2px 8px", borderRadius: 4 }}>{tag}</span>
              ))}
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }} className="pub-card-right">
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, padding: "3px 10px", borderRadius: 999, background: "var(--accent-soft)", color: "var(--accent)", letterSpacing: ".08em", textTransform: "uppercase" as const, fontWeight: 500 }}>{pub.type}</span>
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--ink-3)", display: "inline-flex", alignItems: "center", gap: 4, transition: "color .15s ease" }}>View ↗</span>
        </div>
      </a>
    </li>
  )
}
