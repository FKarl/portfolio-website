"use client"

import { useI18n } from "@/lib/i18n-context"
import type { ProjectItem } from "@/lib/i18n"

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

function ProjectCard({ project }: { project: ProjectItem }) {
  const letter = project.title.trim().charAt(0)

  return (
    <div
      style={{
        background: "var(--surface)", border: "1px solid var(--rule)",
        borderRadius: "var(--r)", overflow: "hidden",
        display: "flex", flexDirection: "column",
        transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = "translateY(-4px)"
        el.style.boxShadow = "var(--shadow)"
        el.style.borderColor = "var(--accent-line)"
        const mono = el.querySelector(".proj-monogram") as HTMLElement | null
        if (mono) { mono.style.opacity = ".18"; mono.style.transform = "translate(-50%, -52%)" }
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
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
        {project.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.image}
            alt={project.title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <>
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
          </>
        )}
        <span style={{
          position: "absolute", bottom: 16, left: 18, right: 18,
          fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: project.image ? "rgba(255,255,255,0.85)" : "var(--ink-3)",
          letterSpacing: ".08em", textTransform: "uppercase" as const,
          display: "flex", gap: 10, alignItems: "center",
          textShadow: project.image ? "0 1px 3px rgba(0,0,0,.5)" : "none",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: project.image ? "rgba(255,255,255,0.85)" : "var(--accent)", flexShrink: 0 }} />
          {project.tag}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 26px 26px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "var(--accent)", letterSpacing: ".1em", textTransform: "uppercase" as const }}>{project.tag}</span>
        <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-.018em", margin: 0, lineHeight: 1.1 }}>{project.title}</h3>
        <p style={{ color: "var(--ink-2)", fontSize: 14.5, flex: 1, lineHeight: 1.55, margin: 0 }}>{project.body}</p>

        {/* Links */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginTop: 4 }}>
          {project.links.map((lnk, i) => (
            <a
              key={lnk.label}
              href={lnk.href}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "7px 14px", borderRadius: 999,
                fontSize: 12, fontWeight: 500, fontFamily: "var(--font-mono, monospace)",
                textDecoration: "none",
                background: i === 0 ? "var(--ink)" : "transparent",
                color: i === 0 ? "var(--bg)" : "var(--ink)",
                border: i === 0 ? "1px solid var(--ink)" : "1px solid var(--rule)",
                transition: "all .15s ease",
                letterSpacing: ".02em",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = "var(--accent)"
                el.style.color = "white"
                el.style.borderColor = "var(--accent)"
                el.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = i === 0 ? "var(--ink)" : "transparent"
                el.style.color = i === 0 ? "var(--bg)" : "var(--ink)"
                el.style.borderColor = i === 0 ? "var(--ink)" : "var(--rule)"
                el.style.transform = ""
              }}
            >
              {lnk.label}
              <span style={{ fontSize: 11 }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
