"use client"

import * as React from "react"
import { type Lang, type I18nContent, i18n } from "@/lib/i18n"

interface I18nContextValue {
  lang: Lang
  t: I18nContent
  setLang: (lang: Lang) => void
}

const I18nContext = React.createContext<I18nContextValue>({
  lang: "en",
  t: i18n.en,
  setLang: () => {},
})

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en")

  React.useEffect(() => {
    const stored = localStorage.getItem("lang-fk-v2") as Lang | null
    const browser = (navigator.language || "en").slice(0, 2) as Lang
    const initial: Lang = stored || (["en", "de"].includes(browser) ? browser : "en")
    setLangState(initial)
  }, [])

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem("lang-fk-v2", l)
    document.documentElement.lang = l
  }, [])

  const value = React.useMemo<I18nContextValue>(
    () => ({ lang, t: i18n[lang], setLang }),
    [lang, setLang]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return React.useContext(I18nContext)
}
