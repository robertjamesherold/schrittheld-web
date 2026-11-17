interface PictureProps {
  pic: ImagePicture
  alt: string
  /** Darstellungsbreite für `sizes`, z. B. "(min-width: 768px) 300px, 60vw" */
  sizes: string
  className?: string
  imgClassName?: string
  /** true nur für Bilder im sichtbaren Bereich beim Laden (Hero) */
  priority?: boolean
}

const order = ['avif', 'webp']

/** <picture> aus einem vite-imagetools-Ergebnis mit festen Abmessungen gegen Layout-Sprünge. */
export const Picture = ({ pic, alt, sizes, className, imgClassName, priority = false }: PictureProps) => {
  const sources = Object.entries(pic.sources).sort(([a], [b]) => {
    const ia = order.indexOf(a)
    const ib = order.indexOf(b)
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib)
  })
  return (
    <picture className={className}>
      {sources.map(([format, srcset]) => (
        <source key={format} type={`image/${format === 'jpg' ? 'jpeg' : format}`} srcSet={srcset} sizes={sizes} />
      ))}
      <img
        src={pic.img.src}
        width={pic.img.w}
        height={pic.img.h}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        // React 18 kennt fetchPriority noch nicht als Prop; klein geschrieben landet es unverändert im HTML.
        {...(priority ? { fetchpriority: 'high' } : {})}
        className={imgClassName}
      />
    </picture>
  )
}
