export type Lang = "en" | "de"

export interface NowItem {
  statusLabel: string
  title: string
  body: string
  tag: string
}

export interface TimelineItem {
  year: string
  title: string
  org: string
  body: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectItem {
  title: string
  tag: string
  body: string
  image?: string
  links: ProjectLink[]
}

export interface SkillGroup {
  name: string
  items: string[]
}

export interface ContactChannel {
  label: string
  value: string
  href: string
}

export interface I18nContent {
  nav: { about: string; now: string; research: string; publications: string; projects: string; contact: string }
  hero: { role: string; tagline: string; ctaCv: string; ctaContact: string; location: string; affiliation: string; h1Pre: string; h1It: string }
  status: string
  about: { kicker: string; titleA: string; titleB: string; p1: string; p2: string; p3: string; pull: string; factsTitle: string; facts: Array<{ k: string; v: string }> }
  now: { kicker: string; title: string; items: NowItem[] }
  timeline: { kicker: string; titleA: string; titleB: string; items: TimelineItem[] }
  publications: {
    kicker: string; titleA: string; titleB: string; subtitle: string
    sourceDblp: string; sourceFallback: string; loading: string; empty: string
    filters: Record<string, string>; showMore: string; showLess: string
  }
  projects: { kicker: string; titleA: string; titleB: string; items: ProjectItem[] }
  skills: { kicker: string; titleA: string; titleB: string; groups: SkillGroup[] }
  contact: { kicker: string; titleA: string; titleB: string; body: string; channels: ContactChannel[] }
  footer: { tag: string; colophon: string }
  stats: { pubs: string; years: string; msc: string; bsc: string; deltaPubs: string; deltaYears: string; deltaGrade: string; deltaBsc: string }
}

const en: I18nContent = {
  nav: { about: "About", now: "Now", research: "Research", publications: "Publications", projects: "Projects", contact: "Contact" },
  hero: {
    role: "Data Scientist · ML Engineer · PhD Researcher",
    tagline: "I build machine learning systems for medicine, language, and the spaces between research and practice.",
    ctaCv: "Download CV",
    ctaContact: "Get in touch",
    location: "Munich, Germany",
    affiliation: "TU München · sebis",
    h1Pre: "Machine learning",
    h1It: "for messy human text",
  },
  status: "Open to collab",
  about: {
    kicker: "01 — About",
    titleA: "About",
    titleB: "me.",
    p1: "I am a Data Scientist and PhD candidate at the Technical University of Munich, where I research Medical NLP at the Chair of Software Engineering for Business Information Systems (sebis).",
    p2: "My work sits at the intersection of information retrieval, synthetic data generation, and model evaluation, building systems that read, reason, and recommend across messy real-world text.",
    p3: "Nine years of programming, several first-author papers, one master's degree (1.2), and a stubborn belief that good engineering is what makes research useful.",
    pull: "Practical applications drive the necessity for better algorithms.",
    factsTitle: "Quick facts",
    facts: [
      { k: "Based in", v: "Munich" },
      { k: "Affiliation", v: "TUM · sebis" },
      { k: "Focus", v: "Medical NLP" },
      { k: "Languages", v: "Python · LaTeX · Java" },
    ],
  },
  now: {
    kicker: "Current focus",
    title: "Now.",
    items: [
      { statusLabel: "Building", title: "Retrieval-augmented bibliographic extraction", body: "Extending CRAWLDoc with stronger reranking and cross-source linking.", tag: "CRAWLDoc · IR" },
      { statusLabel: "Researching", title: "Synthetic-data pipelines for clinical text", body: "Generating, filtering, and grounding training data for clinical document understanding.", tag: "Synthetic · Clinical" },
      { statusLabel: "Drafting", title: "Evaluation harnesses for small, domain-tuned LMs", body: "Benchmarks that compare distilled and quantized variants under realistic latency budgets.", tag: "Small LMs · Eval" },
    ],
  },
  timeline: {
    kicker: "02 — Academic journey",
    titleA: "Academic",
    titleB: "timeline.",
    items: [
      { year: "2025", title: "PhD Research, Medical NLP", org: "Technical University of Munich · sebis", body: "Continuing doctoral research with a focus on information retrieval, synthetic data, and evaluation of medical language models." },
      { year: "2024", title: "PhD Research, NLP", org: "Ulm University", body: "Started doctoral research on advanced natural-language processing techniques for scientific and bibliographic text." },
      { year: "2024", title: "M.Sc. Computer Science (1.2)", org: "Ulm University", body: "Thesis: \"Retrieval Augmented Information Extraction: Enhancing Language Models with CRAWLDoc.\"" },
      { year: "2022", title: "Student Research Assistant", org: "Data Science group", body: "Co-authored work on transformer-based short-text classification and other NLP topics." },
      { year: "2022", title: "B.Sc. Computer Science (1.3)", org: "Ulm University", body: "Thesis: \"Transformers are Short Text Classifiers.\"" },
    ],
  },
  publications: {
    kicker: "03 — Peer-reviewed & preprints",
    titleA: "Selected",
    titleB: "publications.",
    subtitle: "Synchronized live with DBLP, supplemented with manually curated entries.",
    sourceDblp: "Live from DBLP",
    sourceFallback: "Static fallback (DBLP unreachable)",
    loading: "Fetching publications from DBLP…",
    empty: "No publications match this filter.",
    filters: { all: "All", conference: "Conference", journal: "Journal", workshop: "Workshop", preprint: "Preprint", thesis: "Thesis" },
    showMore: "Show all",
    showLess: "Show less",
  },
  projects: {
    kicker: "04 — Selected work",
    titleA: "Selected",
    titleB: "projects.",
    items: [
      { title: "CRAWLDoc", tag: "Retrieval · LLM", body: "A robust ranking dataset for bibliographic web documents. Built to stress-test retrieval-augmented extraction across heterogeneous sources.", image: "/assets/projects/crawldoc/p1.png", links: [{ label: "Paper", href: "https://irrj.org/article/view/23861/27682" }] },
      { title: "German Party Manifestos", tag: "NLP · Topic Modeling", body: "Semi-automatic analysis of major German party manifestos using LDA, HDP, and BERT. Interactive demo ranks summaries and scores positions.", image: "/assets/projects/tadl/p1.png", links: [{ label: "Demo", href: "https://www.tadl.fkarl.de/" }, { label: "Code", href: "https://github.com/FKarl/Text-Analysis-of-Party-Programs" }] },
      { title: "Efficient Inferencing", tag: "Small LMs", body: "Distillation, pruning, and quantization for academic-writing feedback. Benchmarked on server CPUs, laptops, and SoC devices.", image: "/assets/projects/eff_inference/p1.png", links: [{ label: "Code", href: "https://github.com/FKarl/Efficient-Inferencing" }] },
      { title: "Graph-MLP Sampling", tag: "Graph ML", body: "Empirical study of thirteen sampling strategies for Graph-MLP across six benchmarks. Sampling is a hyperparameter, not a default.", image: "/assets/projects/Graph-MLP/p1.png", links: [{ label: "Code", href: "https://github.com/FKarl/Graph-MLP-Sampling" }, { label: "Paper", href: "https://github.com/FKarl/Graph-MLP-Sampling/blob/master/Graph_MLP_Sampling.pdf" }] },
    ],
  },
  skills: {
    kicker: "05 — Toolbox",
    titleA: "The",
    titleB: "toolbox.",
    groups: [
      { name: "Research", items: ["Medical NLP", "Information Retrieval", "Synthetic Data", "Model Evaluation", "Topic Modeling"] },
      { name: "Models", items: ["Transformers", "LLM Distillation", "Quantization", "Graph Neural Nets", "Retrieval-Augmented Generation"] },
      { name: "Stack", items: ["Python", "Java", "LaTeX", "Hugging Face", "FastAPI", "Docker", "Git"] },
    ],
  },
  contact: {
    kicker: "06 — Get in touch",
    titleA: "Let's",
    titleB: "talk.",
    body: "Open to collaborations on medical NLP, retrieval, and small-LM evaluation. Best reached by email. I read everything.",
    channels: [
      { label: "Email", value: "fabian.karl@tum.de", href: "mailto:fabian.karl@tum.de" },
      { label: "GitHub", value: "FKarl", href: "https://github.com/FKarl" },
      { label: "LinkedIn", value: "in/FKarl", href: "https://www.linkedin.com/in/FKarl" },
      { label: "Google Scholar", value: "Profile", href: "https://scholar.google.com/citations?user=Pv9PEEQAAAAJ" },
      { label: "ORCID", value: "0009-0008-0079-5604", href: "https://orcid.org/0009-0008-0079-5604" },
      { label: "DBLP", value: "239/6427-1", href: "https://dblp.uni-trier.de/pid/239/6427-1.html" },
    ],
  },
  footer: { tag: "PhD candidate · TU München", colophon: "No trackers" },
  stats: { pubs: "Publications", years: "Years coding", msc: "M.Sc. grade", bsc: "B.Sc. grade", deltaPubs: "↑ live from DBLP", deltaYears: "since 2017", deltaGrade: "Ulm '24", deltaBsc: "Ulm '22" },
}

const de: I18nContent = {
  nav: { about: "Über mich", now: "Aktuell", research: "Forschung", publications: "Publikationen", projects: "Projekte", contact: "Kontakt" },
  hero: {
    role: "Data Scientist · ML Engineer · Doktorand",
    tagline: "Ich entwickle Machine-Learning-Systeme für Medizin, Sprache und die Räume zwischen Forschung und Praxis.",
    ctaCv: "Lebenslauf",
    ctaContact: "Kontakt aufnehmen",
    location: "München, Deutschland",
    affiliation: "TU München · sebis",
    h1Pre: "Maschinelles Lernen",
    h1It: "für echte, chaotische Texte",
  },
  status: "Offen für Kollaboration",
  about: {
    kicker: "01 — Über mich",
    titleA: "Über",
    titleB: "mich.",
    p1: "Ich bin Data Scientist und Doktorand an der Technischen Universität München und forsche am Lehrstuhl sebis im Bereich Medical NLP.",
    p2: "Meine Arbeit liegt im Schnittfeld von Information Retrieval, synthetischer Datengenerierung und Modellevaluation, Systeme, die unstrukturierte Texte aus der echten Welt lesen, verarbeiten und empfehlen.",
    p3: "Neun Jahre Programmiererfahrung, mehrere Erstautoren-Publikationen, ein Master mit 1,2 und die hartnäckige Überzeugung, dass gute Forschung gute Engineering-Praxis braucht.",
    pull: "Praktische Anwendungen erzwingen bessere Algorithmen.",
    factsTitle: "Kurzprofil",
    facts: [
      { k: "Wohnort", v: "München" },
      { k: "Anbindung", v: "TUM · sebis" },
      { k: "Fokus", v: "Medical NLP" },
      { k: "Sprachen", v: "Python · LaTeX · Java" },
    ],
  },
  now: {
    kicker: "Worauf ich gerade fokussiere",
    title: "Aktuell.",
    items: [
      { statusLabel: "Im Bau", title: "Retrieval-augmentierte bibliografische Extraktion", body: "Erweiterung von CRAWLDoc mit stärkerem Reranking und Cross-Source-Linking.", tag: "CRAWLDoc · IR" },
      { statusLabel: "Forschung", title: "Synthetische-Daten-Pipelines für klinischen Text", body: "Generierung, Filterung und Grounding von Trainingsdaten für klinisches Textverständnis.", tag: "Synthetisch · Klinisch" },
      { statusLabel: "Schreiben", title: "Evaluation kleiner, domänenspezifischer Sprachmodelle", body: "Benchmarks für distillierte und quantisierte Varianten unter realistischen Latenz-Budgets.", tag: "Kleine Sprachmodelle" },
    ],
  },
  timeline: {
    kicker: "02 — Akademischer Werdegang",
    titleA: "Akademischer",
    titleB: "Werdegang.",
    items: [
      { year: "2025", title: "Promotion, Medical NLP", org: "TU München · sebis", body: "Fortsetzung der Promotion mit Fokus auf Information Retrieval, synthetische Daten und Evaluation medizinischer Sprachmodelle." },
      { year: "2024", title: "Promotion, NLP", org: "Universität Ulm", body: "Beginn der Promotion zu fortgeschrittenen Methoden der Sprachverarbeitung für wissenschaftliche und bibliografische Texte." },
      { year: "2024", title: "M.Sc. Informatik (1,2)", org: "Universität Ulm", body: 'Masterarbeit: „Retrieval Augmented Information Extraction mit CRAWLDoc.“' },
      { year: "2022", title: "Studentische Hilfskraft", org: "Data-Science-Gruppe", body: "Mitarbeit an Publikationen zu Transformer-basierter Kurztextklassifikation und weiteren NLP-Themen." },
      { year: "2022", title: "B.Sc. Informatik (1,3)", org: "Universität Ulm", body: 'Bachelorarbeit: „Transformers are Short Text Classifiers."' },
    ],
  },
  publications: {
    kicker: "03 — Peer-Review & Preprints",
    titleA: "Ausgewählte",
    titleB: "Publikationen.",
    subtitle: "Live aus DBLP synchronisiert, ergänzt um manuell gepflegte Einträge.",
    sourceDblp: "Live aus DBLP",
    sourceFallback: "Statische Fallback-Liste (DBLP nicht erreichbar)",
    loading: "Lade Publikationen aus DBLP…",
    empty: "Keine Publikationen entsprechen diesem Filter.",
    filters: { all: "Alle", conference: "Konferenz", journal: "Journal", workshop: "Workshop", preprint: "Preprint", thesis: "Abschlussarbeit" },
    showMore: "Alle anzeigen",
    showLess: "Weniger anzeigen",
  },
  projects: {
    kicker: "04 — Ausgewählte Arbeiten",
    titleA: "Ausgewählte",
    titleB: "Projekte.",
    items: [
      { title: "CRAWLDoc", tag: "Retrieval · LLM", body: "Ein robuster Ranking-Datensatz für bibliografische Web-Dokumente, gebaut, um Retrieval-augmentierte Extraktion über heterogene Quellen hinweg zu testen.", image: "/assets/projects/crawldoc/p1.png", links: [{ label: "Paper", href: "https://irrj.org/article/view/23861/27682" }] },
      { title: "Deutsche Wahlprogramme", tag: "NLP · Topic Modeling", body: "Halbautomatische Analyse großer deutscher Wahlprogramme mit LDA, HDP und BERT. Interaktive Demo bewertet Zusammenfassungen.", image: "/assets/projects/tadl/p1.png", links: [{ label: "Demo", href: "https://www.tadl.fkarl.de/" }, { label: "Code", href: "https://github.com/FKarl/Text-Analysis-of-Party-Programs" }] },
      { title: "Effiziente Inferenz", tag: "Kleine Sprachmodelle", body: "Distillation, Pruning und Quantisierung für akademisches Schreibfeedback, gebenchmarkt auf Server-CPUs, Laptops und SoC-Geräten.", image: "/assets/projects/eff_inference/p1.png", links: [{ label: "Code", href: "https://github.com/FKarl/Efficient-Inferencing" }] },
      { title: "Graph-MLP Sampling", tag: "Graph ML", body: "Empirische Studie zu dreizehn Sampling-Strategien für Graph-MLP über sechs Benchmarks. Sampling ist ein Hyperparameter, kein Default.", image: "/assets/projects/Graph-MLP/p1.png", links: [{ label: "Code", href: "https://github.com/FKarl/Graph-MLP-Sampling" }, { label: "Paper", href: "https://github.com/FKarl/Graph-MLP-Sampling/blob/master/Graph_MLP_Sampling.pdf"}] },
    ],
  },
  skills: {
    kicker: "05 — Werkzeugkasten",
    titleA: "Der",
    titleB: "Werkzeugkasten.",
    groups: [
      { name: "Forschung", items: ["Medical NLP", "Information Retrieval", "Synthetische Daten", "Modellevaluation", "Topic Modeling"] },
      { name: "Modelle", items: ["Transformer", "LLM-Distillation", "Quantisierung", "Graph Neural Nets", "RAG"] },
      { name: "Stack", items: ["Python", "Java", "LaTeX", "Hugging Face", "FastAPI", "Docker", "Git"] },
    ],
  },
  contact: {
    kicker: "07 — Schreib mir",
    titleA: "Schreib",
    titleB: "mir.",
    body: "Offen für Zusammenarbeit zu Medical NLP, Retrieval und Evaluation kleiner Sprachmodelle. Am besten per E-Mail, ich lese alles.",
    channels: [
      { label: "E-Mail", value: "fabian.karl@tum.de", href: "mailto:fabian.karl@tum.de" },
      { label: "GitHub", value: "FKarl", href: "https://github.com/FKarl" },
      { label: "LinkedIn", value: "in/FKarl", href: "https://www.linkedin.com/in/FKarl" },
      { label: "Google Scholar", value: "Profil", href: "https://scholar.google.com/citations?user=Pv9PEEQAAAAJ" },
      { label: "ORCID", value: "0009-0008-0079-5604", href: "https://orcid.org/0009-0008-0079-5604" },
      { label: "DBLP", value: "239/6427-1", href: "https://dblp.uni-trier.de/pid/239/6427-1.html" },
    ],
  },
  footer: { tag: "Doktorand · TU München", colophon: "Keine Tracker" },
  stats: { pubs: "Publikationen", years: "Jahre Code", msc: "M.Sc.-Note", bsc: "B.Sc.-Note", deltaPubs: "↑ live aus DBLP", deltaYears: "seit 2017", deltaGrade: "Ulm '24", deltaBsc: "Ulm '22" },
}

export const i18n: Record<Lang, I18nContent> = { en, de }
