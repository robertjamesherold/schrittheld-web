/**
 * Vorschau des Builds wie auf GitHub Pages: Unterpfad, index.html in Ordnern,
 * Weiterleitung auf den abschließenden Schrägstrich und 404.html für alles andere.
 */
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'
import { extname, join, normalize, resolve } from 'node:path'

const dist = resolve('dist')
const base = (process.env.BASE_PATH ?? '/').replace(/\/?$/, '/')
const port = Number(process.env.PORT ?? 4173)
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json',
}

const isFile = (p) => stat(p).then((s) => s.isFile(), () => false)
const isDir = (p) => stat(p).then((s) => s.isDirectory(), () => false)

createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://x')
  const send = async (file, status = 200) => {
    const type = types[extname(file)] ?? 'application/octet-stream'
    let body = await readFile(file)
    const headers = { 'content-type': type }
    // Wie GitHub Pages: Text wird komprimiert ausgeliefert
    if (/text|javascript|xml|json|svg/.test(type) && /gzip/.test(req.headers['accept-encoding'] ?? '')) {
      body = gzipSync(body)
      headers['content-encoding'] = 'gzip'
    }
    res.writeHead(status, headers)
    res.end(body)
  }
  if (!url.pathname.startsWith(base)) return send(join(dist, '404.html'), 404)
  const rel = normalize(decodeURIComponent(url.pathname.slice(base.length)))
  const target = join(dist, rel)
  if (!target.startsWith(dist)) return send(join(dist, '404.html'), 404)
  if (await isFile(target)) return send(target)
  if (await isDir(target)) {
    if (!url.pathname.endsWith('/')) {
      res.writeHead(301, { location: `${url.pathname}/${url.search}` })
      return res.end()
    }
    if (await isFile(join(target, 'index.html'))) return send(join(target, 'index.html'))
  }
  return send(join(dist, '404.html'), 404)
}).listen(port, () => console.log(`Vorschau: http://localhost:${port}${base}`))
