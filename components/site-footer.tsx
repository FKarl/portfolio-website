"use client"

import { useI18n } from "@/lib/i18n-context"
import { LINKS } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer id="contact" className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-kicker">{t.contact.kicker}</p>
          <a className="footer-mail" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
        </div>
        <div className="footer-bottom">
          <nav className="footer-nav" aria-label="Profiles">
            <a href={LINKS.scholar} target="_blank" rel="noopener">Google Scholar</a>
            <a href={LINKS.dblp} target="_blank" rel="noopener">DBLP</a>
            <a href={LINKS.orcid} target="_blank" rel="noopener">ORCID</a>
            <a href={LINKS.github} target="_blank" rel="noopener">GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          </nav>
          <span className="footer-note">© {new Date().getFullYear()} Fabian Karl · {t.contact.colophon}</span>
        </div>
      </div>
    </footer>
  )
}
