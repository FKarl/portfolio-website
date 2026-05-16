"use client"

import * as React from "react"
import { useI18n } from "@/lib/i18n-context"

function StatBar({ pubCount }: { pubCount: number | null }) {
  const { t } = useI18n()
  const stats = [
    { v: pubCount !== null ? String(pubCount) : "—", k: t.stats.pubs, delta: t.stats.deltaPubs },
    { v: "9", k: t.stats.years, delta: t.stats.deltaYears },
    { v: "1.2", k: t.stats.msc, delta: t.stats.deltaGrade },
  ]

  return (
    <div style={{
      maxWidth: 1280, margin: "56px auto 0",
      background: "var(--rule)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--r)", overflow: "hidden",
    }} className="grid gap-px grid-cols-2 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.k}
          style={{ background: "var(--surface)", padding: "22px 24px", display: "flex", flexDirection: "column", gap: 4, transition: "background .15s ease", cursor: "default" }}
          onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "color-mix(in oklab, var(--accent) 4%, var(--surface))"}
          onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "var(--surface)"}
        >
          <span style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontSize: 40, lineHeight: 1, letterSpacing: "-.02em", color: "var(--ink)" }}>{s.v}</span>
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--ink-3)", letterSpacing: ".04em", textTransform: "uppercase" as const, marginTop: 2 }}>{s.k}</span>
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "var(--accent)", marginTop: 6 }}>{s.delta}</span>
        </div>
      ))}
    </div>
  )
}

export function Header() {
  const { t } = useI18n()
  const [pubCount, setPubCount] = React.useState<number | null>(null)

  React.useEffect(() => {
    fetch("https://dblp.org/pid/239/6427-1.xml", { headers: { Accept: "application/xml" } })
      .then(r => r.text())
      .then(text => { const m = text.match(/<r\b/g); if (m) setPubCount(m.length) })
      .catch(() => {})
  }, [])

  return (
    <section id="top" style={{ padding: "clamp(48px, 7vw, 88px) var(--pad-x) clamp(48px, 7vw, 80px)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}
        className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-[72px] lg:items-center">

        {/* Left: text */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "5px 14px 5px 6px", borderRadius: 999,
            background: "var(--surface)", border: "1px solid var(--rule)",
            fontFamily: "var(--font-mono, monospace)", fontSize: 11,
            color: "var(--ink-2)", marginBottom: 28, letterSpacing: ".02em",
          }}>
            <span style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--accent-soft)", color: "var(--accent)", display: "grid", placeItems: "center" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.9 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>
            </span>
            {t.hero.role}
          </div>

          <h1 style={{ fontWeight: 500, fontSize: "clamp(40px, 7.5vw, 92px)", lineHeight: 1.02, letterSpacing: "-.038em", margin: 0 }}>
            {t.hero.h1Pre}<br />
            <em style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)", fontSize: "1.06em", letterSpacing: "-.025em" }}>
              {t.hero.h1It}
            </em>
            <em style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>.</em>
          </h1>

          <p style={{ marginTop: 28, fontSize: 19, color: "var(--ink-2)", maxWidth: "32rem", lineHeight: 1.5 }}>
            {t.hero.tagline}
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap" as const }}>
            <a href="/resources/CV_Fabian_Karl.pdf"
              className="btn-primary-link"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", background: "var(--ink)", color: "var(--bg)", border: "1px solid transparent", transition: "all .2s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--ink)"; (e.currentTarget as HTMLAnchorElement).style.transform = "" }}
            >
              {t.hero.ctaCv}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12"/><path d="M6 10l6 6 6-6"/><path d="M4 20h16"/></svg>
            </a>
            <a href="#contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", background: "transparent", color: "var(--ink)", border: "1px solid var(--rule)", transition: "all .2s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--ink-3)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--rule)" }}
            >
              {t.hero.ctaContact}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Right: portrait */}
        <div>
          <div style={{ position: "relative", aspectRatio: "4/5", maxWidth: 380, marginLeft: "auto", width: "100%" }}>
            <div
              style={{ position: "absolute", inset: 0, borderRadius: 20, background: "var(--surface)", border: "1px solid var(--rule)", boxShadow: "var(--shadow-lg)", overflow: "hidden", transition: "transform .4s cubic-bezier(.2,.7,.2,1)" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px) rotate(-0.6deg)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = ""}
            >
              <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/assets/hero/avatar.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }} />
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 20%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 55%), linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--ink) 30%, transparent))" }} />
              <span style={{ position: "absolute", bottom: 16, left: 18, fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "rgba(255,255,255,0.7)", letterSpacing: ".08em", zIndex: 1 }}>
                Fabian Karl · Munich
              </span>
            </div>
            <div style={{ position: "absolute", bottom: -14, right: -8, background: "var(--ink)", color: "var(--bg)", borderRadius: 12, padding: "12px 14px", boxShadow: "var(--shadow)", fontFamily: "var(--font-mono, monospace)", fontSize: 11, lineHeight: 1.5, border: "1px solid var(--ink)", zIndex: 2 }}>
              <div><span style={{ color: "var(--accent)", fontWeight: 500 }}>{t.hero.location}</span></div>
              <div>{t.hero.affiliation}</div>
              <div style={{ marginTop: 6, color: "var(--ink-3)" }}>2025 → present</div>
            </div>
          </div>
        </div>
      </div>

      <StatBar pubCount={pubCount} />
    </section>
  )
}
