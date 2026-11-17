/**
 * Alle Bilder kommen aus reference/ und werden von vite-imagetools verkleinert,
 * in AVIF/WebP umgewandelt und mit Hash ausgeliefert. Die Originale bleiben unverändert.
 */
import type { AvatarKey, FeatureKey, Locale, PurchaseKey } from '../i18n/types'

/* App-Store-Poster: per Zuschnitt nur der Handy-Teil (unten), ohne die gestaltete Überschrift. */
const posters = import.meta.glob<ImagePicture>('../../reference/appstore/*/*.png', {
  query: '?aspect=1320:2270&fit=cover&position=bottom&w=300;600&format=avif;webp;jpg&as=picture',
  import: 'default',
  eager: true,
})

const avatars = import.meta.glob<ImagePicture>('../../reference/avatars/*.png', {
  query: '?w=160;320&format=avif;webp;png&as=picture',
  import: 'default',
  eager: true,
})

const purchases = import.meta.glob<ImagePicture>('../../reference/purchases/*.png', {
  query: '?w=320;640&format=avif;webp;jpg&as=picture',
  import: 'default',
  eager: true,
})

const bikeFeature = import.meta.glob<ImagePicture>('../../reference/purchases/{rad-challenge,bike-challenge-en}.png', {
  query: '?w=360;720&format=avif;webp;jpg&as=picture',
  import: 'default',
  eager: true,
})

export { default as appIcon } from '../../reference/icon/app-icon-1024.png?w=96;192&format=avif;webp;png&as=picture'

function pick(map: Record<string, ImagePicture>, match: (path: string) => boolean): ImagePicture {
  const hit = Object.entries(map).find(([path]) => match(path))
  if (!hit) throw new Error('Bild fehlt in reference/')
  return hit[1]
}

/** Poster 01–05 je Sprache, über die Nummer gewählt (Dateinamen unterscheiden sich je Sprache). */
export function poster(locale: Locale, nr: '01' | '02' | '03' | '04' | '05'): ImagePicture {
  return pick(posters, (p) => p.includes(`/appstore/${locale}/${nr}-`))
}

/** Screenshot je Funktion. Rad hat kein Poster und nutzt das Rad-Challenge-Bild. */
export const featureImage = (locale: Locale, key: FeatureKey): { pic: ImagePicture; phone: boolean } => {
  const nr = ({ walk: '02', stairs: '04', board: '01', friends: '03', streaks: '05' } as const)[key as Exclude<FeatureKey, 'bike'>]
  if (key === 'bike') {
    return {
      pic: pick(bikeFeature, (p) => p.endsWith(locale === 'de' ? 'rad-challenge.png' : 'bike-challenge-en.png')),
      phone: false,
    }
  }
  return { pic: poster(locale, nr), phone: true }
}

export const avatarImage = (key: AvatarKey): ImagePicture => pick(avatars, (p) => p.endsWith(`/${key}.png`))

const purchaseFiles: Record<PurchaseKey, Record<Locale, string>> = {
  periods: { de: 'zeitraeume', en: 'periods-en' },
  bike: { de: 'rad-challenge', en: 'bike-challenge-en' },
  unlockAll: { de: 'alles-freischalten', en: 'unlock-everything-en' },
  // Das Kostüm-Paket gibt es nur auf Deutsch.
  costumes: { de: 'kostuem-paket', en: 'kostuem-paket' },
}

export const purchaseImage = (locale: Locale, key: PurchaseKey): ImagePicture =>
  pick(purchases, (p) => p.endsWith(`/${purchaseFiles[key][locale]}.png`))
