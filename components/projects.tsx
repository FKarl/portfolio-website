"use client"

import { useI18n } from "@/lib/i18n-context"

export function Projects() {
  const { t } = useI18n()

  return (
    <section id="projects" className="section-pad">
      <div className="container-design">
        <div style={{ display: "flex", alignItems: "end", gap: 24, marginBottom: 48, flexWrap: "wrap" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--accent)", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 10 }}>{t.projects.kicker}</div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-.028em", lineHeight: 1.02, margin: 0 }}>
              {t.projects.titleA}{" "}
              <em style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)", letterSpacing: "-.015em" }}>{t.projects.titleB}</em>
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {t.projects.items.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: { title: string; tag: string; body: string; link: string; linkLabel: string } }) {
  const letter = project.title.trim().charAt(0)

  return (
    <a href={project.link} target="_blank" rel="noopener"
      style={{
        background: "var(--surface)", border: "1px solid var(--rule)",
        borderRadius: "var(--r)", overflow: "hidden",
        display: "flex", flexDirection: "column",
        textDecoration: "none", color: "inherit",
        transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.transform = "translateY(-4px)"
        el.style.boxShadow = "var(--shadow)"
        el.style.borderColor = "var(--accent-line)"
        const mono = el.querySelector(".proj-monogram") as HTMLElement | null
        if (mono) { mono.style.opacity = ".18"; mono.style.transform = "translate(-50%, -52%)" }
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.transform = ""
        el.style.boxShadow = ""
        el.style.borderColor = "var(--rule)"
        const mono = el.querySelector(".proj-monogram") as HTMLElement | null
        if (mono) { mono.style.opacity = ".08"; mono.style.transform = "translate(-50%, -50%)" }
      }}
    >
      {/* Preview */}
      <div style={{
        aspectRatio: "16/9", background: "var(--surface-2)",
        position: "relative", overflow: "hidden",
        borderBottom: "1px solid var(--rule)",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 70% 30%, var(--accent-soft), transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, color-mix(in oklab, var(--accent) 6%, transparent), transparent 70%)",
        }} />
        <span className="proj-monogram" style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-serif, serif)", fontStyle: "italic",
          fontSize: "clamp(96px, 18vw, 168px)", lineHeight: 1, letterSpacing: "-.04em",
          color: "var(--ink)", opacity: .08,
          transition: "opacity .3s ease, transform .3s ease",
          pointerEvents: "none", userSelect: "none",
        }}>{letter}</span>
        <span style={{
          position: "absolute", bottom: 16, left: 18, right: 18,
          fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--ink-3)",
          letterSpacing: ".08em", textTransform: "uppercase" as const,
          display: "flex", gap: 10, alignItems: "center",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
          {project.tag}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 26px 26px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "var(--accent)", letterSpacing: ".1em", textTransform: "uppercase" as const }}>{project.tag}</span>
        <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-.018em", margin: 0, lineHeight: 1.1 }}>{project.title}</h3>
        <p style={{ color: "var(--ink-2)", fontSize: 14.5, flex: 1, lineHeight: 1.55, margin: 0 }}>{project.body}</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>
          {project.linkLabel}
          <span style={{ transition: "transform .2s ease" }}>→</span>
        </span>
      </div>
    </a>
  )
}
