"use client"

import { useI18n } from "@/lib/i18n-context"
import { LINKS } from "@/lib/i18n"

export function Research() {
  const { t } = useI18n()
  const r = t.research

  return (
    <section id="research" className="tint">
      <div className="wrap section research">
        <div className="aidapt">
          <div className="aidapt-text">
            <p className="kicker">{r.kicker}</p>
            <h2 className="h2">{r.title}</h2>
            <p className="lead">{r.lead}</p>
            <p className="muted" style={{ margin: 0 }}>{r.body}</p>
            <a className="ulink" href={LINKS.aidapt} target="_blank" rel="noopener">{r.link}</a>
          </div>
          <dl className="facts">
            {r.facts.map(f => (
              <div className="fact" key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="themes">
          {r.themes.map(th => (
            <article className="theme" key={th.title}>
              <h3>{th.title}</h3>
              <p>{th.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
