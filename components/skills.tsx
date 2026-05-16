"use client"

import { useI18n } from "@/lib/i18n-context"

export function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="section-pad">
      <div className="container-design">
        <div style={{ display: "flex", alignItems: "end", gap: 24, marginBottom: 48, flexWrap: "wrap" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--accent)", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 10 }}>{t.skills.kicker}</div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-.028em", lineHeight: 1.02, margin: 0 }}>
              {t.skills.titleA}{" "}
              <em style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)", letterSpacing: "-.015em" }}>{t.skills.titleB}</em>
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {t.skills.groups.map(group => (
            <div key={group.name} style={{
              background: "var(--surface)", border: "1px solid var(--rule)",
              borderRadius: "var(--r)", padding: 26,
            }}>
              <h3 style={{
                fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                color: "var(--ink-3)", letterSpacing: ".14em", textTransform: "uppercase" as const,
                margin: "0 0 18px", display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                {group.name}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                {group.items.map(skill => (
                  <span key={skill}
                    style={{
                      padding: "6px 12px", borderRadius: 999,
                      background: "var(--bg)", border: "1px solid var(--rule)",
                      fontSize: 13, transition: "all .15s ease", cursor: "default",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.background = "var(--accent)"; (e.currentTarget as HTMLSpanElement).style.color = "white"; (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLSpanElement).style.transform = "translateY(-1px)" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.background = "var(--bg)"; (e.currentTarget as HTMLSpanElement).style.color = ""; (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--rule)"; (e.currentTarget as HTMLSpanElement).style.transform = "" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
