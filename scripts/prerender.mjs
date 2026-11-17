/**
 * Vorrendern nach dem Vite-Build: jede Seite wird als echtes HTML geschrieben,
 * dazu 404.html, die alten Adressen datenschutz.html/support.html, sitemap.xml,
 * robots.txt und das Web-App-Manifest.
 */
import { readFile, rm, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, pagePaths, legacyPaths, SITE_URL, BASE_URL } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
)
let template = await readFile(join(dist, 'index.html'), 'utf8')

// CSS direkt ins HTML schreiben (spart eine blockierende Anfrage) und die Schrift vorladen.
const cssLink = template.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/)
if (cssLink) {
  const cssFile = join(dist, cssLink[1].slice(BASE_URL.length))
  const css = await readFile(cssFile, 'utf8')
  const font = css.match(/url\(([^)]*nunito-latin-wght-normal[^)]*\.woff2)\)/)?.[1]
  const preload = font ? `<link rel="preload" href="${font}" as="font" type="font/woff2" crossorigin>\n    ` : ''
  template = template.replace(cssLink[0], `${preload}<style>${css}</style>`)
}

// Auf "/" ohne Sprachwahl: Browser, deren Hauptsprache nicht Deutsch ist, kommen auf /en/.
// Nicht bei Navigation innerhalb der Seite (Sprachumschalter) und nicht für Suchmaschinen.
const languageRedirect = `<script>(function(){try{if(document.referrer.indexOf(location.origin)===0)return;if(/bot|crawl|spider|slurp|lighthouse|preview/i.test(navigator.userAgent))return;if(/^de\\b/i.test(navigator.language||'de'))return;location.replace(${JSON.stringify(BASE_URL)}+'en/'+location.hash)}catch(e){}})()</script>`

/** "/en/support/" → dist/en/support/index.html, "/support.html" → dist/support.html */
const fileFor = (path) => (path.endsWith('.html') ? join(dist, path) : join(dist, path, 'index.html'))

async function write(path, { notFound = false, extraHead = '' } = {}) {
  const { html, head, locale } = render(path, { notFound })
  const out = template
    .replace('<html lang="de">', `<html lang="${locale}">`)
    .replace('<!--app-head-->', head + (extraHead ? `\n    ${extraHead}` : ''))
    .replace('<div id="root"><!--app-html--></div>', `<div id="root"${notFound ? ' data-page="404"' : ''}>${html}</div>`)
  const file = notFound ? join(dist, '404.html') : fileFor(path)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, out)
  console.log('  ✓', file.replace(dist, 'dist'))
}

console.log('Vorrendern:')
for (const [key, paths] of Object.entries(pagePaths)) {
  for (const path of Object.values(paths)) {
    await write(path, { extraHead: key === 'home' && path === '/' ? languageRedirect : '' })
  }
}
for (const path of Object.keys(legacyPaths)) await write(path)
await write('/404', { notFound: true })

// sitemap.xml mit hreflang-Alternativen
const url = (p) => `${SITE_URL}${p}`
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.values(pagePaths)
  .flatMap((paths) =>
    Object.values(paths).map(
      (p) => `  <url>
    <loc>${url(p)}</loc>
    <xhtml:link rel="alternate" hreflang="de" href="${url(paths.de)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${url(paths.en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(paths.de)}"/>
  </url>`,
    ),
  )
  .join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${url('/sitemap.xml')}\n`)
await writeFile(
  join(dist, 'site.webmanifest'),
  JSON.stringify(
    {
      name: 'Schrittheld',
      short_name: 'Schrittheld',
      start_url: BASE_URL,
      display: 'standalone',
      background_color: '#FFF8EC',
      theme_color: '#2A66EB',
      icons: [
        { src: `${BASE_URL}icons/icon-192.png`, sizes: '192x192', type: 'image/png' },
        { src: `${BASE_URL}icons/icon-512.png`, sizes: '512x512', type: 'image/png' },
      ],
    },
    null,
    2,
  ),
)
// GitHub Pages soll Dateien nicht durch Jekyll schicken
await writeFile(join(dist, '.nojekyll'), '')
// Eigene Domain für GitHub Pages (nur wenn die Seite im Root einer Domain liegt)
if (BASE_URL === '/') await writeFile(join(dist, 'CNAME'), `${new URL(SITE_URL).hostname}\n`)
console.log('  ✓ sitemap.xml, robots.txt, site.webmanifest')

await rm(ssrDir, { recursive: true, force: true })
