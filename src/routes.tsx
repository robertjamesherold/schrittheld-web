import type { RouteObject } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './pages/Home'
import { Imprint } from './pages/Imprint'
import { NotFound } from './pages/NotFound'
import { Privacy } from './pages/Privacy'
import { Support } from './pages/Support'

export const routes: RouteObject[] = [
  {
    path: '/en',
    element: <Layout locale="en" />,
    children: [
      { index: true, element: <Home /> },
      { path: 'support', element: <Support /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'imprint', element: <Imprint /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/',
    element: <Layout locale="de" />,
    children: [
      { index: true, element: <Home /> },
      { path: 'support', element: <Support /> },
      { path: 'datenschutz', element: <Privacy /> },
      { path: 'impressum', element: <Imprint /> },
      // Alte Adressen aus App Store Connect und der App
      { path: 'datenschutz.html', element: <Privacy /> },
      { path: 'support.html', element: <Support /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
