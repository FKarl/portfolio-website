"use client"

import { useI18n } from "@/lib/i18n-context"

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
      <div className="container-design">
        <div style={{ display: "flex", alignItems: "end", gap: 24, marginBottom: 36, flexWrap: "wrap" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--accent)", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 10 }}>{t.contact.kicker}</div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-.028em", lineHeight: 1.02, margin: 0 }}>
              {t.contact.titleA}{" "}
              <em style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)", letterSpacing: "-.015em" }}>{t.contact.titleB}</em>
            </h2>
          </div>
        </div>

        <p style={{
          fontFamily: "var(--font-serif, serif)", fontStyle: "italic",
          fontSize: "clamp(24px, 3vw, 38px)", lineHeight: 1.25,
          color: "var(--ink)", maxWidth: "38rem",
          margin: "0 0 36px",
        }}>
          {t.contact.body}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.contact.channels.map(ch => (
            <ContactCard key={ch.label} channel={ch} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCard({ channel }: { channel: { label: string; value: string; href: string } }) {
  return (
    <a href={channel.href} target={channel.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener"
      style={{
        background: "var(--bg)", border: "1px solid var(--rule)",
        borderRadius: "var(--r)", padding: "22px 24px",
        textDecoration: "none", color: "inherit",
        display: "flex", flexDirection: "column", gap: 6,
        transition: "all .2s ease",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--ink)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--bg)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--ink)" }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg)"; (e.currentTarget as HTMLAnchorElement).style.color = ""; (e.currentTarget as HTMLAnchorElement).style.transform = ""; (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--rule)" }}
    >
      {/* Arrow indicator */}
      <span style={{
        position: "absolute", top: 20, right: 22,
        fontSize: 16, color: "var(--ink-3)",
        transition: "all .2s ease",
        pointerEvents: "none",
      }}>→</span>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "var(--ink-3)" }}>{channel.label}</span>
      <span style={{ fontSize: 18, fontWeight: 500, paddingRight: 28 }}>{channel.value}</span>
    </a>
  )
}
