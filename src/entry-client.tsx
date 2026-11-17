import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { basePath } from './lib/pages'
import './styles/index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter basename={basePath || undefined}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Vorgerenderte Seiten werden hydriert. Die 404-Seite passt auf jede Adresse und wird deshalb
// neu gerendert (z. B. auf Englisch unter /en/…); im Dev-Server ist #root leer.
if (root.firstElementChild && root.dataset.page !== '404') hydrateRoot(root, app)
else {
  root.textContent = ''
  createRoot(root).render(app)
}
