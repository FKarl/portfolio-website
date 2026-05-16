"use client"

import { useI18n } from "@/lib/i18n-context"

export function Timeline() {
  const { t } = useI18n()

  return (
    <section id="timeline" className="section-pad">
      <div className="container-design">
        <div style={{ display: "flex", alignItems: "end", gap: 24, marginBottom: 48, flexWrap: "wrap" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--accent)", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 10 }}>{t.timeline.kicker}</div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-.028em", lineHeight: 1.02, margin: 0 }}>
              {t.timeline.titleA}{" "}
              <em style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)", letterSpacing: "-.015em" }}>{t.timeline.titleB}</em>
            </h2>
          </div>
        </div>

        <div style={{ position: "relative", paddingLeft: 8 }}>
          {t.timeline.items.map((item, i) => (
            <TimelineRow key={i} item={item} isFirst={i === 0} isLast={i === t.timeline.items.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineRow({ item, isFirst, isLast }: { item: { year: string; title: string; org: string; body: string }; isFirst: boolean; isLast: boolean }) {
  return (
    <div
      className="tl-row"
      style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, paddingBottom: 8, position: "relative" }}
      onMouseEnter={e => {
        const yr = e.currentTarget.querySelector(".tl-yr-dot") as HTMLElement | null
        if (yr) { yr.style.transform = "scale(1.3)"; yr.style.background = "var(--accent)" }
      }}
      onMouseLeave={e => {
        const yr = e.currentTarget.querySelector(".tl-yr-dot") as HTMLElement | null
        if (yr) { yr.style.transform = ""; yr.style.background = "var(--bg)" }
      }}
    >
      <style>{`
        @media (min-width: 760px) {
          .tl-row { grid-template-columns: 160px 1fr !important; gap: 48px !important; }
          .tl-yr { padding-left: 36px !important; }
          .tl-yr-dot { left: 10px !important; top: 14px !important; }
          .tl-yr-line { left: 15px !important; top: 26px !important; }
          .tl-card { margin-left: 0 !important; }
        }
        @media (max-width: 759px) {
          .tl-yr { padding-left: 28px !important; font-size: 36px !important; }
          .tl-card { margin-left: 28px; margin-bottom: 12px; }
        }
      `}</style>

      {/* Year column */}
      <div className="tl-yr" style={{
        fontFamily: "var(--font-serif, serif)", fontStyle: "italic",
        fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-.025em",
        color: "var(--ink)", position: "relative", paddingLeft: 36,
        paddingTop: 2, alignSelf: "start",
      }}>
        {/* Dot */}
        <span className="tl-yr-dot" style={{
          content: "", position: "absolute", left: 10, top: 14,
          width: 12, height: 12, borderRadius: "50%",
          background: "var(--bg)", border: "2px solid var(--accent)",
          boxShadow: "0 0 0 4px var(--bg)", zIndex: 2,
          transition: "transform .2s ease, background .2s ease",
          display: "block",
        }} />
        {/* Line */}
        {!isLast && (
          <span className="tl-yr-line" style={{
            position: "absolute", left: 15, top: 26, bottom: -32,
            width: 2,
            background: isLast ? "linear-gradient(180deg, var(--accent-line), transparent)" : "var(--accent-line)",
            zIndex: 1, display: "block",
          }} />
        )}
        {item.year}
        {isFirst && (
          <span style={{
            display: "block", fontFamily: "var(--font-mono, monospace)", fontSize: 10,
            fontStyle: "normal", letterSpacing: ".12em", color: "var(--ink-3)",
            textTransform: "uppercase" as const, marginTop: 8,
          }}>present</span>
        )}
      </div>

      {/* Card */}
      <div className="tl-card"
        style={{
          background: "var(--surface)", border: "1px solid var(--rule)",
          borderRadius: "var(--r)", padding: "22px 26px", marginBottom: 24,
          transition: "all .25s cubic-bezier(.2,.7,.2,1)",
          boxShadow: "var(--shadow-sm)", position: "relative",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-line)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow)" }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.borderColor = "var(--rule)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)" }}
      >
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap" as const, marginBottom: 8 }}>
          <h3 style={{ fontSize: 19, fontWeight: 600, margin: 0, letterSpacing: "-.01em", lineHeight: 1.25 }}>{item.title}</h3>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-mono, monospace)", fontSize: 11,
            color: "var(--ink-2)", letterSpacing: ".04em",
            padding: "3px 10px", borderRadius: 999,
            background: "var(--surface-2)", border: "1px solid var(--rule)",
            whiteSpace: "nowrap" as const,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
            {item.org}
          </span>
        </div>
        <p style={{ color: "var(--ink-2)", fontSize: 14.5, lineHeight: 1.55, margin: 0, maxWidth: "38rem" }}>{item.body}</p>
      </div>
    </div>
  )
}
