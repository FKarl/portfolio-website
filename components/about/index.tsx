"use client"

import { useI18n } from "@/lib/i18n-context"
import type { Lang } from "@/lib/i18n"

const CODING_START_YEAR = 2017

const NUM_WORDS: Record<Lang, Record<number, string>> = {
  en: { 1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty" },
  de: { 1:"ein",2:"zwei",3:"drei",4:"vier",5:"fünf",6:"sechs",7:"sieben",8:"acht",9:"neun",10:"zehn",11:"elf",12:"zwölf",13:"dreizehn",14:"vierzehn",15:"fünfzehn",16:"sechzehn",17:"siebzehn",18:"achtzehn",19:"neunzehn",20:"zwanzig" },
}

function yearsInWords(lang: Lang): string {
  const n = new Date().getFullYear() - CODING_START_YEAR
  return NUM_WORDS[lang][n] ?? String(n)
}

export function About() {
  const { t, lang } = useI18n()

  return (
    <section id="about" className="section-pad">
      <div className="container-design">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 24, marginBottom: 48, flexWrap: "wrap" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "var(--accent)", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 10 }}>{t.about.kicker}</div>
            <h2 style={{ fontWeight: 500, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-.028em", lineHeight: 1.02, margin: 0 }}>
              {t.about.titleA}{" "}
              <em style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)", letterSpacing: "-.015em" }}>{t.about.titleB}</em>
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          {/* Prose */}
          <div style={{ fontSize: 18.5, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: "36rem" }}>
            <p style={{ margin: "0 0 18px" }}>{t.about.p1}</p>
            <p style={{ margin: "0 0 18px" }}>{t.about.p2}</p>
            <p style={{ margin: 0 }}>{t.about.p3.replace("{years}", yearsInWords(lang)).replace(/^\w/, c => c.toUpperCase())}</p>
          </div>

          {/* Fact card */}
          <div style={{
            background: "var(--surface)", border: "1px solid var(--rule)",
            borderRadius: "var(--r)", padding: 28,
            display: "flex", flexDirection: "column", gap: 20,
            boxShadow: "var(--shadow-sm)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 160, height: 160, background: "radial-gradient(circle at 100% 0%, var(--accent-soft), transparent 70%)", pointerEvents: "none" }} />
            <h4 style={{ fontSize: 12, fontFamily: "var(--font-mono, monospace)", color: "var(--ink-3)", letterSpacing: ".12em", textTransform: "uppercase" as const, margin: 0, position: "relative" }}>{t.about.factsTitle}</h4>
            <div style={{ position: "relative" }}>
              {t.about.facts.map((f, i) => (
                <div key={f.k} style={{
                  display: "flex", justifyContent: "space-between", gap: 12,
                  padding: "12px 0", borderTop: i === 0 ? "none" : "1px solid var(--rule)",
                  fontSize: 14,
                }}>
                  <span style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono, monospace)", fontSize: 11, letterSpacing: ".04em", textTransform: "uppercase" as const }}>{f.k}</span>
                  <span style={{ color: "var(--ink)" }}>{f.v}</span>
                </div>
              ))}
            </div>
            <p style={{
              fontFamily: "var(--font-serif, serif)", fontStyle: "italic",
              fontSize: 24, lineHeight: 1.3, color: "var(--ink)", margin: 0, position: "relative",
            }}>
              <span style={{ color: "var(--accent)", fontSize: "1.2em", lineHeight: 0, verticalAlign: "-0.18em", marginRight: ".04em" }}>"</span>
              {t.about.pull}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
