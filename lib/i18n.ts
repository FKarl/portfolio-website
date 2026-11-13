export type Lang = "en" | "de"

export interface Fact {
  k: string
  v: string
}

export interface Theme {
  title: string
  body: string
}

export interface TimelineItem {
  year: string
  title: string
  org: string
}

export interface ProjectItem {
  title: string
  body: string
  linkLabel: string
  href: string
}

export interface I18nContent {
  nav: { research: string; publications: string; about: string; contact: string; switchLang: string; toggleTheme: string }
  hero: { kicker: string; h1: string; lead: string; cta: string; cv: string; photoAlt: string }
  research: {
    kicker: string
    title: string
    lead: string
    body: string
    link: string
    facts: Fact[]
    themes: Theme[]
  }
  publications: {
    title: string
    subtitleA: string
    subtitleB: string
    sourceFallback: string
    loading: string
    empty: string
    filters: Record<string, string>
    types: Record<string, string>
    paper: string
    bibtex: string
    showMore: string
    showLess: string
    undated: string
  }
  about: { title: string; lead: string; body: string; cv: string; photoAlt: string; timeline: TimelineItem[] }
  projects: { title: string; items: ProjectItem[] }
  contact: { kicker: string; colophon: string }
}

const en: I18nContent = {
  nav: { research: "Research", publications: "Publications", about: "About", contact: "Contact", switchLang: "Auf Deutsch wechseln", toggleTheme: "Toggle dark mode" },
  hero: {
    kicker: "PhD researcher, Technical University of Munich",
    h1: "I make language models work in expert domains where data is scarce.",
    lead: "Synthetic data, retrieval and evaluation for medicine, tax and other fields where real examples are private or expensive.",
    cta: "Get in touch",
    cv: "CV",
    photoAlt: "Portrait of Fabian Karl",
  },
  research: {
    kicker: "Current project · Software Campus Leadership Accelerator",
    title: "AIdapt: grounded synthetic data for specialized domains",
    lead: "I was selected for the Software Campus Leadership Accelerator to lead my own publicly funded research project, from proposal to delivery, together with DATEV eG.",
    body: "Expert annotation is costly, privacy rules lock real data away, and naively prompted synthetic data hallucinates. AIdapt builds an automated pipeline: generation grounded in domain documents and terminology, then validated before a model ever trains on it.",
    link: "Project page at TUM",
    facts: [
      { k: "Role", v: "Project lead" },
      { k: "Programme", v: "Software Campus Leadership Accelerator" },
      { k: "Industry partner", v: "DATEV eG" },
      { k: "Funding", v: "BMFTR" },
      { k: "Duration", v: "March 2027 to February 2029" },
    ],
    themes: [
      { title: "Synthetic data", body: "Generating training and evaluation data that respects domain constraints instead of drifting from them." },
      { title: "Retrieval", body: "Finding and ranking the right documents so that models answer from evidence." },
      { title: "Evaluation", body: "Benchmarks and studies that test whether models hold up on real-world text." },
    ],
  },
  publications: {
    title: "Publications",
    subtitleA: "Always current. Synced live from",
    subtitleB: ".",
    sourceFallback: "DBLP is unreachable right now. Showing a saved selection; the full list is on",
    loading: "Loading publications from DBLP…",
    empty: "No publications match this filter.",
    filters: { all: "All", conference: "Conference", journal: "Journal", workshop: "Workshop", preprint: "Preprint", thesis: "Thesis" },
    types: { conference: "Conference", journal: "Journal", workshop: "Workshop", preprint: "Preprint", thesis: "Thesis", article: "Article" },
    paper: "Paper",
    bibtex: "BibTeX",
    showMore: "Show all publications",
    showLess: "Show fewer",
    undated: "n.d.",
  },
  about: {
    title: "About",
    lead: "I believe practical applications drive the need for better algorithms. That is why my research starts from real documents and real constraints rather than clean benchmarks.",
    body: "I am a PhD candidate at the sebis chair of TU Munich. Before that I studied computer science at Ulm University, where I also began my doctoral research.",
    cv: "Full CV (PDF)",
    photoAlt: "Fabian Karl smiling, in an office hallway",
    timeline: [
      { year: "2025 to now", title: "PhD researcher", org: "TU Munich, sebis" },
      { year: "2024", title: "PhD researcher", org: "Ulm University" },
      { year: "2024", title: "M.Sc. Computer Science", org: "Ulm University, grade 1.2" },
      { year: "2022", title: "B.Sc. Computer Science", org: "Ulm University, grade 1.3" },
    ],
  },
  projects: {
    title: "Side projects and open source",
    items: [
      { title: "German Party Manifestos", body: "Topic modeling of party manifestos with LDA, HDP and BERT.", linkLabel: "Live demo", href: "https://www.tadl.fkarl.de/" },
      { title: "Efficient Inferencing", body: "Distillation, pruning and quantization of small language models.", linkLabel: "Code", href: "https://github.com/FKarl/Efficient-Inferencing" },
      { title: "Graph-MLP Sampling", body: "Thirteen sampling strategies compared across six benchmarks.", linkLabel: "Code", href: "https://github.com/FKarl/Graph-MLP-Sampling" },
    ],
  },
  contact: { kicker: "Collaboration, talks or questions about a paper", colophon: "Munich · No trackers" },
}

const de: I18nContent = {
  nav: { research: "Forschung", publications: "Publikationen", about: "Über mich", contact: "Kontakt", switchLang: "Switch to English", toggleTheme: "Dunkelmodus umschalten" },
  hero: {
    kicker: "Doktorand, Technische Universität München",
    h1: "Ich mache Sprachmodelle nutzbar für Fachgebiete, in denen Daten knapp sind.",
    lead: "Synthetische Daten, Retrieval und Evaluation für Medizin, Steuern und andere Bereiche, in denen echte Beispiele vertraulich oder teuer sind.",
    cta: "Kontakt aufnehmen",
    cv: "Lebenslauf",
    photoAlt: "Porträt von Fabian Karl",
  },
  research: {
    kicker: "Aktuelles Projekt · Software Campus Leadership Accelerator",
    title: "AIdapt: fundierte synthetische Daten für Fachdomänen",
    lead: "Ich wurde für den Software Campus Leadership Accelerator ausgewählt und leite dort mein eigenes öffentlich gefördertes Forschungsprojekt, vom Antrag bis zum Ergebnis, gemeinsam mit der DATEV eG.",
    body: "Annotation durch Fachleute ist teuer, Datenschutz hält echte Daten unter Verschluss, und naiv erzeugte synthetische Daten halluzinieren. AIdapt entwickelt eine automatisierte Pipeline: Die Generierung stützt sich auf Dokumente und Terminologie der Domäne, und jedes Beispiel wird validiert, bevor ein Modell damit trainiert wird.",
    link: "Projektseite der TUM",
    facts: [
      { k: "Rolle", v: "Projektleiter" },
      { k: "Programm", v: "Software Campus Leadership Accelerator" },
      { k: "Industriepartner", v: "DATEV eG" },
      { k: "Förderung", v: "BMFTR" },
      { k: "Laufzeit", v: "März 2027 bis Februar 2029" },
    ],
    themes: [
      { title: "Synthetische Daten", body: "Trainings- und Evaluationsdaten erzeugen, die die Regeln der Domäne einhalten, statt von ihnen abzudriften." },
      { title: "Retrieval", body: "Die richtigen Dokumente finden und ranken, damit Modelle auf Basis von Belegen antworten." },
      { title: "Evaluation", body: "Benchmarks und Studien, die prüfen, ob Modelle auf echten Texten bestehen." },
    ],
  },
  publications: {
    title: "Publikationen",
    subtitleA: "Immer aktuell. Live synchronisiert mit",
    subtitleB: ".",
    sourceFallback: "DBLP ist gerade nicht erreichbar. Angezeigt wird eine gespeicherte Auswahl; die vollständige Liste steht auf",
    loading: "Publikationen werden von DBLP geladen…",
    empty: "Keine Publikationen für diesen Filter.",
    filters: { all: "Alle", conference: "Konferenz", journal: "Journal", workshop: "Workshop", preprint: "Preprint", thesis: "Abschlussarbeit" },
    types: { conference: "Konferenz", journal: "Journal", workshop: "Workshop", preprint: "Preprint", thesis: "Abschlussarbeit", article: "Artikel" },
    paper: "Paper",
    bibtex: "BibTeX",
    showMore: "Alle Publikationen anzeigen",
    showLess: "Weniger anzeigen",
    undated: "o. J.",
  },
  about: {
    title: "Über mich",
    lead: "Ich bin überzeugt, dass praktische Anwendungen den Bedarf an besseren Algorithmen treiben. Deshalb beginnt meine Forschung bei echten Dokumenten und echten Rahmenbedingungen statt bei sauberen Benchmarks.",
    body: "Ich promoviere am Lehrstuhl sebis der TU München. Davor habe ich an der Universität Ulm Informatik studiert und dort auch meine Promotion begonnen.",
    cv: "Vollständiger Lebenslauf (PDF)",
    photoAlt: "Fabian Karl lächelnd in einem Büroflur",
    timeline: [
      { year: "Seit 2025", title: "Doktorand", org: "TU München, sebis" },
      { year: "2024", title: "Doktorand", org: "Universität Ulm" },
      { year: "2024", title: "M.Sc. Informatik", org: "Universität Ulm, Note 1,2" },
      { year: "2022", title: "B.Sc. Informatik", org: "Universität Ulm, Note 1,3" },
    ],
  },
  projects: {
    title: "Nebenprojekte und Open Source",
    items: [
      { title: "Deutsche Wahlprogramme", body: "Topic Modeling von Wahlprogrammen mit LDA, HDP und BERT.", linkLabel: "Live-Demo", href: "https://www.tadl.fkarl.de/" },
      { title: "Efficient Inferencing", body: "Distillation, Pruning und Quantisierung kleiner Sprachmodelle.", linkLabel: "Code", href: "https://github.com/FKarl/Efficient-Inferencing" },
      { title: "Graph-MLP Sampling", body: "Dreizehn Sampling-Strategien im Vergleich auf sechs Benchmarks.", linkLabel: "Code", href: "https://github.com/FKarl/Graph-MLP-Sampling" },
    ],
  },
  contact: { kicker: "Zusammenarbeit, Vorträge oder Fragen zu einem Paper", colophon: "München · Keine Tracker" },
}

export const i18n: Record<Lang, I18nContent> = { en, de }

export const LINKS = {
  email: "fabian.karl@tum.de",
  cv: "/resources/CV_Fabian_Karl.pdf",
  scholar: "https://scholar.google.com/citations?user=Pv9PEEQAAAAJ",
  github: "https://github.com/FKarl",
  linkedin: "https://www.linkedin.com/in/FKarl",
  orcid: "https://orcid.org/0009-0008-0079-5604",
  dblp: "https://dblp.uni-trier.de/pid/239/6427-1.html",
  aidapt:
    "https://www.cs.cit.tum.de/sebis/research/natural-language-processing/adapting-ai-models-to-specialized-domains-via-grounded-synthetic-data-generation-aidapt/",
}
