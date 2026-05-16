"use client"

import { useI18n } from "@/lib/i18n-context"

export function Now() {
  const { t } = useI18n()

  return (
    <section id="now" className="section-pad" style={{ background: "var(--surface)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div className="container-design">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 24, marginBottom: 48, flexWrap: "wrap" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--accent)", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 10 }}>{t.now.kicker}</div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-.028em", lineHeight: 1.02, margin: 0 }}>{t.now.title}</h2>
          </div>
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="grid gap-4 md:grid-cols-3">
          {t.now.items.map((item, i) => (
            <NowCard key={i} item={item} index={i} total={t.now.items.length} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function NowCard({ item, index, total }: { item: { statusLabel: string; title: string; body: string; tag: string }; index: number; total: number }) {
  return (
    <li
      style={{
        background: "var(--bg)", border: "1px solid var(--rule)",
        borderRadius: "var(--r)", padding: "24px 26px 22px",
        display: "flex", flexDirection: "column", gap: 14,
        minHeight: 220,
        transition: "all .25s cubic-bezier(.2,.7,.2,1)",
        position: "relative", overflow: "hidden",
        cursor: "default",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLLIElement
        el.style.transform = "translateY(-3px)"
        el.style.borderColor = "var(--accent-line)"
        el.style.boxShadow = "var(--shadow)"
        const glow = el.querySelector(".now-glow") as HTMLElement | null
        if (glow) glow.style.opacity = "1"
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLLIElement
        el.style.transform = ""
        el.style.borderColor = "var(--rule)"
        el.style.boxShadow = ""
        const glow = el.querySelector(".now-glow") as HTMLElement | null
        if (glow) glow.style.opacity = "0"
      }}
    >
      {/* Glow */}
      <div className="now-glow" style={{
        position: "absolute", top: "-40%", right: "-40%",
        width: 200, height: 200,
        background: "radial-gradient(circle, var(--accent-soft), transparent 70%)",
        opacity: 0, transition: "opacity .3s ease", pointerEvents: "none",
      }} />

      {/* Head */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, position: "relative" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "var(--font-mono, monospace)", fontSize: 10.5, letterSpacing: ".1em",
          textTransform: "uppercase" as const, color: "var(--accent)",
          padding: "4px 10px 4px 8px", borderRadius: 999,
          background: "var(--accent-soft)", fontWeight: 500,
        }}>
          <span style={{ position: "relative", width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }}>
            <span className="animate-ring-pulse" style={{ position: "absolute", inset: -2, borderRadius: "50%", border: "1px solid var(--accent)" }} />
          </span>
          {item.statusLabel}
        </span>
        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--ink-3)", letterSpacing: ".08em" }}>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <h3 style={{ fontWeight: 500, fontSize: 19, letterSpacing: "-.012em", lineHeight: 1.25, margin: 0, position: "relative" }}>{item.title}</h3>
      <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55, flex: 1, margin: 0, position: "relative" }}>{item.body}</p>

      <div style={{
        fontFamily: "var(--font-mono, monospace)", fontSize: 10.5, color: "var(--ink-3)", letterSpacing: ".04em",
        paddingTop: 14, borderTop: "1px dashed var(--rule)",
        display: "flex", alignItems: "center", gap: 8, position: "relative",
      }}>
        <span style={{ color: "var(--accent)", fontWeight: 600 }}>#</span>
        {item.tag}
      </div>
    </li>
  )
}
