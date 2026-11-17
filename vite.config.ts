import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// Die Seite läuft auf der eigenen Domain schrittheld.app im Root.
// Für einen Unterpfad (z. B. GitHub Pages ohne Domain): BASE_PATH=/schrittheld-web/ SITE_URL=… npm run build
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.BASE_PATH ?? '/'

  return {
    base,
    define: {
      __SITE_URL__: JSON.stringify(
        (env.SITE_URL ?? 'https://schrittheld.app').replace(/\/$/, ''),
      ),
    },
    plugins: [
      react(),
      imagetools({
        // Ohne ausdrückliche Angaben nichts umwandeln; jede Einbindung legt Größen und Formate selbst fest.
        defaultDirectives: () => new URLSearchParams(),
      }),
      // Dateien mit fester URL (Favicon, Touch-Icon, PWA-Icons, Open-Graph-Bilder)
      viteStaticCopy({
        targets: [
          { src: 'reference/icon/{favicon-32,apple-touch-icon,icon-192,icon-512}.png', dest: 'icons', rename: { stripBase: true } },
          { src: 'reference/og/og-image-{de,en}.png', dest: 'og', rename: { stripBase: true } },
        ],
      }),
    ],
    build: {
      assetsInlineLimit: 0,
    },
  }
})
