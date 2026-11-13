// Refreshes the publication snapshot that is baked into the static HTML
// (so search engines and AI crawlers see the papers without running
// JavaScript) and regenerates public/llms.txt from it.
// Runs before every build. If DBLP cannot be reached, the existing snapshot
// is kept and the build continues.
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const snapshotPath = path.join(root, "lib", "dblp-snapshot.json")
const llmsPath = path.join(root, "public", "llms.txt")

const QUERY = `
PREFIX dblp: <https://dblp.org/rdf/schema#>
SELECT ?pub ?title ?year ?type ?venue ?ee
       (GROUP_CONCAT(CONCAT(STR(?ord), ":", ?aname); separator="|") AS ?authors)
WHERE {
  ?pub dblp:authoredBy <https://dblp.org/pid/239/6427-1> ; dblp:title ?title .
  OPTIONAL { ?pub dblp:yearOfPublication ?year }
  OPTIONAL { ?pub dblp:bibtexType ?type }
  OPTIONAL { ?pub dblp:publishedIn ?venue }
  OPTIONAL { ?pub dblp:primaryDocumentPage ?ee }
  ?pub dblp:hasSignature ?sig .
  ?sig dblp:signatureDblpName ?aname ; dblp:signatureOrdinal ?ord .
}
GROUP BY ?pub ?title ?year ?type ?venue ?ee
ORDER BY DESC(?year) ?pub`

async function fetchBindings() {
  const res = await fetch(`https://sparql.dblp.org/sparql?query=${encodeURIComponent(QUERY)}`, {
    headers: { Accept: "application/sparql-results+json" },
    signal: AbortSignal.timeout(20000),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const bindings = (await res.json()).results.bindings
  if (!bindings.length) throw new Error("empty result")
  return bindings
}

function toLlmsTxt(bindings) {
  const v = (b, k) => b[k]?.value?.trim() ?? ""
  const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, "")
  const published = new Set(bindings.filter(b => v(b, "venue") !== "CoRR").map(b => norm(v(b, "title"))))
  const pubs = bindings
    .filter(b => v(b, "venue") !== "CoRR" || !published.has(norm(v(b, "title"))))
    .map(b => {
      const authors = v(b, "authors").split("|").filter(Boolean)
        .map(a => { const i = a.indexOf(":"); return [parseInt(a.slice(0, i)) || 0, a.slice(i + 1).replace(/\s+\d+$/, "")] })
        .sort((x, y) => x[0] - y[0]).map(a => a[1]).join(", ")
      const venue = v(b, "venue") === "CoRR" ? "arXiv preprint" : v(b, "venue")
      const title = v(b, "title").replace(/\.$/, "")
      const url = v(b, "ee")
      return `- ${url ? `[${title}](${url})` : title}: ${authors}. ${venue}, ${v(b, "year")}.`
    })

  return `# Fabian Karl

> Fabian Karl is a PhD researcher in natural language processing at the Technical University of Munich (TUM), at the sebis chair of Prof. Dr. Florian Matthes. He makes language models work in expert domains where training data is scarce, private or expensive, with a focus on synthetic data generation, information retrieval and model evaluation for medical and other specialized text.

This is his personal research website, https://www.fkarl.de. It is available in English and German.

## Current project

- [AIdapt](https://www.cs.cit.tum.de/sebis/research/natural-language-processing/adapting-ai-models-to-specialized-domains-via-grounded-synthetic-data-generation-aidapt/): Adapting AI Models to Specialized Domains via Grounded Synthetic Data Generation. Fabian Karl leads this project within the Software Campus Leadership Accelerator, with DATEV eG as industry partner and funding from the German Federal Ministry of Research, Technology and Space (BMFTR). It runs from March 2027 to February 2029 and builds an automated pipeline that grounds synthetic data generation in domain documents and validates the output before it is used for training or evaluation.

## Research areas

- Synthetic data: generating training and evaluation data that respects domain constraints.
- Retrieval: finding and ranking the right documents so that models answer from evidence.
- Evaluation: benchmarks and studies that test whether models hold up on real-world text.

## Publications

${pubs.join("\n")}

The authoritative list is on [DBLP](https://dblp.uni-trier.de/pid/239/6427-1.html) and [Google Scholar](https://scholar.google.com/citations?user=Pv9PEEQAAAAJ).

## Background

- 2025 to present: PhD researcher, Technical University of Munich, sebis chair.
- 2024: PhD researcher in NLP, Ulm University.
- 2024: M.Sc. Computer Science, Ulm University.
- 2022: B.Sc. Computer Science, Ulm University.

## Side projects

- [German Party Manifestos](https://www.tadl.fkarl.de/): topic modeling of party manifestos with LDA, HDP and BERT.
- [Efficient Inferencing](https://github.com/FKarl/Efficient-Inferencing): distillation, pruning and quantization of small language models.
- [Graph-MLP Sampling](https://github.com/FKarl/Graph-MLP-Sampling): thirteen sampling strategies compared across six benchmarks.

## Contact and profiles

- Email: fabian.karl@tum.de
- [CV (PDF)](https://www.fkarl.de/resources/CV_Fabian_Karl.pdf)
- [Google Scholar](https://scholar.google.com/citations?user=Pv9PEEQAAAAJ)
- [DBLP](https://dblp.uni-trier.de/pid/239/6427-1.html)
- [ORCID](https://orcid.org/0009-0008-0079-5604)
- [GitHub](https://github.com/FKarl)
- [LinkedIn](https://www.linkedin.com/in/FKarl)
`
}

let bindings
try {
  bindings = await fetchBindings()
  writeFileSync(snapshotPath, JSON.stringify({ fetchedAt: new Date().toISOString().slice(0, 10), bindings }, null, 2) + "\n")
  console.log(`[dblp] snapshot updated: ${bindings.length} records`)
} catch (err) {
  console.warn(`[dblp] could not refresh snapshot (${err.message}); keeping the existing one`)
  try { bindings = JSON.parse(readFileSync(snapshotPath, "utf8")).bindings } catch { bindings = [] }
}
if (bindings.length) writeFileSync(llmsPath, toLlmsTxt(bindings))
