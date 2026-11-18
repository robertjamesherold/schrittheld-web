import { AppStoreBadge } from '../components/AppStoreBadge'
import { ImpactBurst } from '../components/ImpactBurst'
import { Picture } from '../components/Picture'
import { Sunburst } from '../components/Sunburst'
import { useLocale } from '../i18n/useLocale'
import type { AvatarKey } from '../i18n/types'
import { avatarImage } from '../lib/images'

const crew: AvatarKey[] = ['pinguin-radler', 'katze-astronaut', 'fuchs-held', 'einhorn-neon', 'eichhoernchen-gipfel']

export const CallToAction = () => {
  const { t } = useLocale()
  return (
    <Sunburst
      as="section"
      tone="cycling"
      // Mittelpunkt hinter der Helden-Truppe: oberer Innenabstand + halbe Höhe der Figuren (Maße in .cta-burst)
      center={{ x: '50%', y: 'calc(var(--cta-pt) + var(--crew-half))' }}
      aria-labelledby="cta-title"
      className="cta-burst overflow-hidden pb-20 pt-24 md:pb-28 md:pt-32"
    >
      <div aria-hidden="true" className="manga-lines manga-lines--tight" />
      <ImpactBurst />
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-4 text-center sm:px-6">
        <ul className="flex items-end justify-center -space-x-3" aria-hidden="true">
          {crew.map((key, i) => (
            <li
              key={key}
              className={`${i === 2 ? 'w-28 sm:w-32' : 'w-16 sm:w-24'} motion-safe:animate-hop`}
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              <Picture pic={avatarImage(key)} alt="" sizes="128px" imgClassName="h-auto w-full drop-shadow-comic" />
            </li>
          ))}
        </ul>
        <h2 id="cta-title" className="title-pop max-w-2xl text-4xl sm:text-6xl">
          {t.cta.heading}
        </h2>
        <p className="max-w-xl text-lg font-extrabold text-ink">{t.cta.body}</p>
        <AppStoreBadge />
      </div>
    </Sunburst>
  )
}
