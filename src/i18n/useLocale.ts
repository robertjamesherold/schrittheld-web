import { createContext, useContext } from 'react'
import { de } from './de'
import { en } from './en'
import type { Dict, Locale } from './types'
import { pagePaths, type PageKey } from '../lib/pages'

export const dictionaries: Record<Locale, Dict> = { de, en }

export const LocaleContext = createContext<Locale>('de')

export function useLocale() {
  const locale = useContext(LocaleContext)
  return {
    locale,
    t: dictionaries[locale],
    /** Router-Pfad einer Seite in der aktuellen Sprache */
    to: (page: PageKey) => pagePaths[page][locale],
  }
}
