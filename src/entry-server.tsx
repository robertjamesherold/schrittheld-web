import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from './App'
import { basePath, legacyPaths, localeFromPath, pageKeyFromPath, pagePaths } from './lib/pages'
import { renderHead } from './lib/head'

export { legacyPaths, pagePaths }
export { SITE_URL } from './config'
export const BASE_URL = import.meta.env.BASE_URL

/** Rendert eine Seite für den Build. `path` ist relativ zur Basis, z. B. "/en/support/". */
export function render(path: string, opts: { notFound?: boolean } = {}) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={`${basePath}${path}`} basename={basePath || undefined}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  const locale = localeFromPath(path)
  const legacy = legacyPaths[path]
  const page = opts.notFound ? 'notFound' : (pageKeyFromPath(path) ?? 'notFound')
  const head = renderHead({
    page,
    locale,
    // Alte .html-Adressen verweisen per Canonical auf die neue Seite.
    canonical: legacy ? pagePaths[legacy][locale] : undefined,
  })
  return { html, head, locale }
}
