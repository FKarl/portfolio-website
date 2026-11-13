"use client"

import { useI18n } from "@/lib/i18n-context"

export function Projects() {
  const { t } = useI18n()

  return (
    <section id="projects" className="wrap section projects">
      <h2>{t.projects.title}</h2>
      <div>
        {t.projects.items.map(item => (
          <a className="project" key={item.href} href={item.href} target="_blank" rel="noopener">
            <span className="project-main">
              <span className="project-title">{item.title}</span>
              <span className="project-body">{item.body}</span>
            </span>
            <span className="project-link">{item.linkLabel}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
