"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { useI18n } from "@/lib/i18n-context"
import type { Lang } from "@/lib/i18n"

export function Navbar() {
  const { t, lang, setLang } = useI18n()
  const { resolvedTheme, setTheme } = useTheme()
  const [sheetOpen, setSheetOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => { setMounted(true) }, [])

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.now, href: "#now" },
    { label: t.nav.research, href: "#timeline" },
    { label: t.nav.publications, href: "#publications" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const isDark = resolvedTheme === "dark"

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <>
      <header style={{
        position: "sticky", top: 16, zIndex: 50,
        margin: "16px var(--pad-x) 0",
        background: "color-mix(in oklab, var(--surface) 88%, transparent)",
        backdropFilter: "blur(20px) saturate(1.2)",
        WebkitBackdropFilter: "blur(20px) saturate(1.2)",
        border: "1px solid var(--rule)",
        borderRadius: 999,
        padding: "7px 8px 7px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "var(--shadow-sm)",
        gap: 16,
      }}>
        {/* Brand */}
        <a href="#top" style={{
          display: "flex", alignItems: "center", gap: 12,
          fontWeight: 600, fontSize: 14, letterSpacing: "-.01em",
          textDecoration: "none", color: "inherit",
        }}>
          <span style={{
            width: 26, height: 26, borderRadius: "50%",
            background: "var(--ink)", color: "var(--bg)",
            display: "grid", placeItems: "center",
            fontSize: 11, fontWeight: 600,
            fontFamily: "var(--font-mono, monospace)",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}>FK</span>
          <span>Fabian Karl</span>
          <span style={{
            fontFamily: "var(--font-mono, monospace)", fontSize: 11,
            color: "var(--ink-3)", alignItems: "center",
            gap: 6, paddingLeft: 12,
            borderLeft: "1px solid var(--rule)", marginLeft: 4,
          }} className="hidden md:inline-flex">
            <span className="animate-pulse-ring" style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--good)",
            }} />
            <span>{t.status}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex" style={{ gap: 2 }}>
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} style={{
              textDecoration: "none", color: "var(--ink-2)",
              fontSize: 13, fontWeight: 500,
              padding: "8px 12px", borderRadius: 999,
              transition: "all .15s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)"; (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface-2)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink-2)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {/* Lang pill */}
          <div style={{
            display: "flex", background: "var(--surface-2)",
            borderRadius: 999, padding: 3,
          }}>
            {(["en", "de"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)}
                aria-pressed={lang === l}
                style={{
                  appearance: "none", background: lang === l ? "var(--surface)" : "transparent",
                  border: 0, padding: "5px 10px", borderRadius: 999,
                  fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                  color: lang === l ? "var(--ink)" : "var(--ink-3)",
                  cursor: "pointer", fontWeight: 500,
                  boxShadow: lang === l ? "var(--shadow-sm)" : "none",
                  transition: "all .15s ease",
                }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          {mounted && (
            <button onClick={toggleTheme} aria-label="Toggle theme"
              style={{
                appearance: "none", border: 0, background: "transparent",
                width: 36, height: 36, borderRadius: 999,
                cursor: "pointer", color: "var(--ink-2)",
                display: "grid", placeItems: "center",
                transition: "all .15s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--surface-2)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--ink)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "var(--ink-2)" }}
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6L4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                </svg>
              )}
            </button>
          )}

          {/* Hamburger (mobile) */}
          <button onClick={() => setSheetOpen(true)} aria-label="Menu"
            className="lg:hidden"
            style={{
              appearance: "none", border: 0, background: "transparent",
              width: 36, height: 36, borderRadius: 999,
              cursor: "pointer", color: "var(--ink-2)",
              display: "grid", placeItems: "center",
              transition: "all .15s ease",
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      {sheetOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "var(--bg)", zIndex: 100,
          padding: "80px var(--pad-x) 24px",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          <button onClick={() => setSheetOpen(false)} aria-label="Close"
            style={{
              position: "absolute", top: 20, right: "var(--pad-x)",
              appearance: "none", border: 0, background: "transparent",
              width: 36, height: 36, borderRadius: 999,
              cursor: "pointer", color: "var(--ink-2)",
              display: "grid", placeItems: "center", fontSize: 18,
            }}>✕</button>
          {navLinks.map((item, i) => (
            <a key={item.href} href={item.href}
              onClick={() => setSheetOpen(false)}
              style={{
                fontSize: 28, fontWeight: 500, padding: "18px 0",
                borderBottom: "1px solid var(--rule)",
                textDecoration: "none", color: "var(--ink)",
                display: "flex", alignItems: "center", gap: 14,
                letterSpacing: "-.015em",
              }}>
              <span style={{
                fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                color: "var(--ink-3)", width: 32, fontWeight: 400,
              }}>0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
