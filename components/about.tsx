"use client"

import { useI18n } from "@/lib/i18n-context"
import { LINKS } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()
  const a = t.about

  return (
    <section id="about" className="tint">
      <div className="wrap section about">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="about-photo" src="/assets/hero/about.jpg" alt={a.photoAlt} width={2000} height={1333} loading="lazy" />
        <div className="about-text">
          <h2 className="h2">{a.title}</h2>
          <p className="lead">{a.lead}</p>
          <p className="muted">{a.body}</p>
          <ul className="timeline">
            {a.timeline.map((item, i) => (
              <li key={i}>
                <span className="when">{item.year}</span>
                <span><strong>{item.title}</strong>, {item.org}</span>
              </li>
            ))}
          </ul>
          <a className="ulink" href={LINKS.cv}>{a.cv}</a>
        </div>
      </div>
    </section>
  )
}
