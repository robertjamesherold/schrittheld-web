/**
 * Alle Bilder kommen aus reference/ und werden von vite-imagetools verkleinert,
 * in AVIF/WebP umgewandelt und mit Hash ausgeliefert. Die Originale bleiben unverändert.
 */
import type { AvatarKey, Locale, PurchaseKey } from '../i18n/types'

/* Abschnittsbilder (1600 x 1200): zwei iPhones vor farbigem Comic-Hintergrund. */
const sections = import.meta.glob<ImagePicture>('../../reference/sections/*/*.jpg', {
  query: '?w=480;800;1200;1600&format=avif;webp;jpg&as=picture',
  import: 'default',
  eager: true,
})

/* Einzelne iPhones, freigestellt (transparent) – daher PNG statt JPEG als Rückfall. */
const phones = import.meta.glob<ImagePicture>('../../reference/phones/*/*.png', {
  query: '?w=280;400;560;738&format=avif;webp;png&as=picture',
  import: 'default',
  eager: true,
})

const illustrations = import.meta.glob<ImagePicture>('../../reference/illustrations/zu-fuss.png', {
  query: '?w=600;1000;1600&format=avif;webp;jpg&as=picture',
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

export { default as appIcon } from '../../reference/icon/app-icon-1024.png?w=96;192&format=avif;webp;png&as=picture'

function pick(map: Record<string, ImagePicture>, match: (path: string) => boolean): ImagePicture {
  const hit = Object.entries(map).find(([path]) => match(path))
  if (!hit) throw new Error('Bild fehlt in reference/')
  return hit[1]
}

export type SectionKey = 'on-foot' | 'board' | 'stairs' | 'bike' | 'friends' | 'world' | 'avatar'
export const sectionImage = (locale: Locale, key: SectionKey): ImagePicture =>
  pick(sections, (p) => p.endsWith(`/sections/${locale}/${key}.jpg`))

export type PhoneKey =
  | 'foot'
  | 'journey'
  | 'board'
  | 'stairs'
  | 'climb'
  | 'bike'
  | 'bike-board'
  | 'friends'
  | 'badges'
  | 'world'
  | 'avatar'
  | 'compass'
export const phoneImage = (locale: Locale, key: PhoneKey): ImagePicture =>
  pick(phones, (p) => p.endsWith(`/phones/${locale}/${key}.png`))

/** Illustration „Zu Fuß“ ohne Text, für beide Sprachen gleich. */
export const routeIllustration: ImagePicture = pick(illustrations, () => true)

export const avatarImage = (key: AvatarKey): ImagePicture => pick(avatars, (p) => p.endsWith(`/${key}.png`))

const purchaseFiles: Record<PurchaseKey, Record<Locale, string>> = {
  periods: { de: 'zeitraeume', en: 'periods-en' },
  bike: { de: 'rad-challenge', en: 'bike-challenge-en' },
  worldTour: { de: 'weltreise', en: 'world-tour-en' },
  unlockAll: { de: 'alles-freischalten', en: 'unlock-everything-en' },
  // Das Kostüm-Paket gibt es nur auf Deutsch.
  costumes: { de: 'kostuem-paket', en: 'kostuem-paket' },
}

export const purchaseImage = (locale: Locale, key: PurchaseKey): ImagePicture =>
  pick(purchases, (p) => p.endsWith(`/${purchaseFiles[key][locale]}.png`))
