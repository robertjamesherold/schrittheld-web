export const locales = ['de', 'en'] as const
export type Locale = (typeof locales)[number]

/**
 * Texte dürfen eine kleine Auszeichnung enthalten (siehe components/RichText.tsx):
 * **fett**, _kursiv_ und [Linktext](https://…). Mehr braucht die Seite nicht.
 */
export type Rich = string

export type FeatureKey = 'walk' | 'stairs' | 'bike' | 'board' | 'world' | 'friends' | 'streaks'
export type ExtraKey = 'hero' | 'watch' | 'privacy'
export type HeroSlideKey =
  | 'foot'
  | 'board'
  | 'stairs'
  | 'climb'
  | 'bike'
  | 'friends'
  | 'world'
  | 'badges'
  | 'avatar'
  | 'journey'
export type PurchaseKey = 'periods' | 'bike' | 'worldTour' | 'unlockAll' | 'costumes'
export type AvatarKey =
  | 'fuchs-held'
  | 'katze-astronaut'
  | 'hund-cowboy'
  | 'baer-koenig'
  | 'einhorn-neon'
  | 'dino-galaxie'
  | 'pinguin-radler'
  | 'hase-kappe'
  | 'eule-zauberer'
  | 'frosch-sonnenbrille'
  | 'panda-kopfhoerer'
  | 'schwein-pirat'
  | 'maus-blume'
  | 'eichhoernchen-gipfel'

export interface PageMeta {
  title: string
  description: string
}

export interface LegalSection {
  /** Anker für das Inhaltsverzeichnis */
  id: string
  title: string
  /** Absätze; ein Eintrag, der mit "- " beginnt, wird als Liste dargestellt (Zeilen mit "\n- " trennen) */
  body: Rich[]
}

export interface Dict {
  appName: string
  /** Sprache als Wort in der eigenen Sprache, für den Umschalter */
  languageName: string
  meta: {
    home: PageMeta
    support: PageMeta
    privacy: PageMeta
    imprint: PageMeta
    notFound: PageMeta
  }
  a11y: {
    skipToContent: string
    languageSwitch: string
    homeLink: string
    mainNav: string
    toc: string
    opensMail: string
  }
  nav: {
    features: string
    howItWorks: string
    support: string
  }
  appStore: {
    /** Alt-Text des offiziellen Badges */
    badgeAlt: string
    /** Text für den Ersatz-Button, solange die Badge-Datei fehlt */
    fallbackLabel: string
  }
  hero: {
    subtitle: string
    pitch: Rich
    facts: [string, string, string]
    iconAlt: string
    /** Karussell mit den Highlight-Screens (sections/HeroCarousel.tsx) */
    carousel: {
      label: string
      pause: string
      play: string
      slides: Record<HeroSlideKey, { label: string; alt: string }>
    }
  }
  features: {
    heading: string
    lead: string
    items: Record<FeatureKey, { tag: string; title: string; body: Rich; points: string[]; alt: string }>
    extras: Record<ExtraKey, { tag: string; title: string; body: Rich }>
  }
  how: {
    tag: string
    heading: string
    steps: [Step, Step, Step]
    illustrationAlt: string
  }
  avatars: {
    tag: string
    heading: string
    lead: string
    editorAlt: string
    names: Record<AvatarKey, string>
  }
  purchases: {
    tag: string
    heading: string
    lead: string
    noSubscription: string
    items: Record<PurchaseKey, { title: string; body: string; alt: string }>
  }
  privacyPromise: {
    tag: string
    heading: string
    points: [PromisePoint, PromisePoint, PromisePoint]
    more: string
  }
  cta: {
    heading: string
    body: string
  }
  footer: {
    support: string
    privacy: string
    imprint: string
    madeWith: string
    language: string
  }
  support: {
    tag: string
    heading: string
    lead: string
    contactTitle: string
    contactBody: Rich
    faqTitle: string
    faq: { q: string; a: Rich }[]
    legalTitle: string
    eula: string
  }
  privacy: {
    tag: string
    heading: string
    updated: string
    summaryLabel: string
    summary: Rich
    sections: LegalSection[]
  }
  imprint: {
    tag: string
    heading: string
    sections: LegalSection[]
  }
  notFound: {
    heading: string
    body: string
    back: string
  }
}

interface Step {
  title: string
  body: string
}

interface PromisePoint {
  title: string
  body: string
}
