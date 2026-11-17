import { Picture } from '../components/Picture'
import { SectionHeading } from '../components/SectionHeading'
import { toneBg, type Tone } from '../components/tones'
import { useLocale } from '../i18n/useLocale'
import type { AvatarKey } from '../i18n/types'
import { avatarImage } from '../lib/images'

const avatars: AvatarKey[] = [
  'fuchs-held',
  'katze-astronaut',
  'hund-cowboy',
  'baer-koenig',
  'einhorn-neon',
  'dino-galaxie',
  'pinguin-radler',
  'hase-kappe',
  'eule-zauberer',
  'frosch-sonnenbrille',
  'panda-kopfhoerer',
  'schwein-pirat',
  'maus-blume',
  'eichhoernchen-gipfel',
]

const bgs: Tone[] = ['sky', 'sun', 'steps', 'flights', 'cycling', 'white', 'sky']

export const AvatarGallery = () => {
  const { t } = useLocale()
  return (
    <section id="avatare" aria-labelledby="avatars-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading id="avatars-title" tag={t.avatars.tag} tone="cycling" title={t.avatars.heading} lead={t.avatars.lead} />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 lg:grid-cols-7">
          {avatars.map((key, i) => (
            <li key={key} className="tilt-hover">
              <figure className="reveal flex h-full flex-col overflow-hidden rounded-comic border-3 border-ink bg-panel shadow-comic-sm">
                <div className={`bg-dots ${toneBg[bgs[i % bgs.length] ?? 'sky']} p-2`}>
                  <Picture pic={avatarImage(key)} alt="" sizes="(min-width: 1024px) 140px, (min-width: 640px) 22vw, 45vw" imgClassName="mx-auto h-auto w-full max-w-[160px]" />
                </div>
                <figcaption className="border-t-3 border-ink px-2 py-2 text-center text-sm font-extrabold leading-tight text-fg">
                  {t.avatars.names[key]}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
