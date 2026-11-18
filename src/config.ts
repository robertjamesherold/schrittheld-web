/**
 * Zentrale Einstellungen der Website.
 *
 * APP_STORE_ID: die numerische ID aus App Store Connect (App-Informationen → Apple-ID),
 * z. B. '6740000000'. Solange sie leer ist, verlinken die Buttons auf die App-Store-Suche
 * und der Smart-App-Banner wird weggelassen.
 */
export const APP_STORE_ID = '6830978656'

export const appStoreUrl = (locale: 'de' | 'en'): string =>
  APP_STORE_ID
    ? `https://apps.apple.com/${locale === 'de' ? 'de' : 'us'}/app/id${APP_STORE_ID}`
    : `https://apps.apple.com/${locale === 'de' ? 'de' : 'us'}/search?term=${locale === 'de' ? 'Schrittheld' : 'Step%20Hero'}`

/** Absolute Adresse der Website ohne abschließenden Schrägstrich (aus SITE_URL beim Build). */
export const SITE_URL: string = __SITE_URL__

export const CONTACT = {
  name: 'Robert James Herold',
  street: 'Im Kammerfest 23',
  city: '63628 Bad Soden-Salmünster',
  email: 'robertjamesherold@icloud.com',
} as const
