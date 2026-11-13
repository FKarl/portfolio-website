"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useI18n } from "@/lib/i18n-context"

export function SiteHeader() {
  const { t, lang, setLang } = useI18n()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <header className="wrap site-header">
      <a href="#top" className="brand">Fabian Karl</a>
      <nav className="nav" aria-label="Main">
        <div className="nav nav-links">
          <a href="#research">{t.nav.research}</a>
          <a href="#publications">{t.nav.publications}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <div className="nav-tools">
          <button
            type="button"
            className="icon-btn"
            lang={lang === "en" ? "de" : "en"}
            aria-label={t.nav.switchLang}
            onClick={() => setLang(lang === "en" ? "de" : "en")}
          >
            {lang === "en" ? "DE" : "EN"}
          </button>
          <button
            type="button"
            className="icon-btn"
            aria-label={t.nav.toggleTheme}
            aria-pressed={isDark}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
