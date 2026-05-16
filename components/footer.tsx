"use client"

import { useI18n } from "@/lib/i18n-context"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer style={{ padding: "32px var(--pad-x)", borderTop: "1px solid var(--rule)" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid", gap: 12, alignItems: "center",
        fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--ink-3)", letterSpacing: ".04em",
      }} className="grid sm:grid-cols-3">
        <div>{t.footer.tag}</div>
        <div style={{ textAlign: "center" }}>© 2026 Fabian Karl</div>
        <div style={{ textAlign: "right" }}>{t.footer.colophon}</div>
      </div>
    </footer>
  )
}
