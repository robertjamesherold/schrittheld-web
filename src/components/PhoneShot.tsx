import { Picture } from './Picture'

interface PhoneShotProps {
  pic: ImagePicture
  alt: string
  /** Neigung in Grad */
  rotate?: number
  priority?: boolean
  className?: string
  sizes?: string
}

/**
 * iPhone-Screenshot aus dem App-Store-Poster (Handy-Teil), leicht schräg mit hartem Schatten.
 * Das Bild enthält den Gerätrahmen schon; hier kommt nur die Comic-Inszenierung dazu.
 */
export const PhoneShot = ({ pic, alt, rotate = -3, priority = false, className = '', sizes = '(min-width: 768px) 300px, 72vw' }: PhoneShotProps) => (
  <div
    // Das Hero-Bild (priority) ist sofort sichtbar, damit es den LCP nicht verzögert.
    className={`${priority ? '' : 'reveal'} relative mx-auto w-[72vw] max-w-[300px] ${className}`}
    style={priority ? undefined : { ['--reveal-rotate' as string]: `${rotate * 2}deg` }}
  >
    <div className="overflow-hidden rounded-[28px] border-3 border-ink shadow-comic-lg" style={{ transform: `rotate(${rotate}deg)` }}>
      <Picture pic={pic} alt={alt} sizes={sizes} priority={priority} imgClassName="block h-auto w-full" />
    </div>
  </div>
)
