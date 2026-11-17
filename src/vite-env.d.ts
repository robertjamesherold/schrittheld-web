/// <reference types="vite/client" />

declare const __SITE_URL__: string

/** Ergebnis von vite-imagetools mit `as=picture` */
interface ImagePicture {
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}

declare module '*as=picture' {
  const picture: ImagePicture
  export default picture
}
