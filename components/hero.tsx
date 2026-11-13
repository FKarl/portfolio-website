"use client"

import { useI18n } from "@/lib/i18n-context"
import { LINKS } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()

  return (
    <section id="top" className="wrap hero">
      <div className="hero-text">
        <p className="hero-kicker">{t.hero.kicker}</p>
        <h1>{t.hero.h1}</h1>
        <p className="hero-lead">{t.hero.lead}</p>
        <div className="hero-links">
          <a className="btn" href={`mailto:${LINKS.email}`}>{t.hero.cta}</a>
          <span className="hero-profiles">
            <a className="ulink" href={LINKS.cv}>{t.hero.cv}</a>
            <a className="ulink" href={LINKS.scholar} target="_blank" rel="noopener">Scholar</a>
            <a className="ulink" href={LINKS.github} target="_blank" rel="noopener">GitHub</a>
            <a className="ulink" href={LINKS.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          </span>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-photo" src="/assets/hero/portrait.jpg" alt={t.hero.photoAlt} width={1100} height={1375} />
    </section>
  )
}
