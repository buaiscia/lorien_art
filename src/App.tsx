import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { HarfaPage } from './pages/HarfaPage'
import { HennaPage } from './pages/HennaPage'
import { KeramikaPage } from './pages/KeramikaPage'
import { KontaktPage } from './pages/KontaktPage'
import { MalovaniNaSklePage } from './pages/MalovaniNaSklePage'
import { MalovaniSvicekPage } from './pages/MalovaniSvicekPage'

const navigationItems = [
  { to: '/', label: 'Domů', end: true },
  { to: '/harfa', label: 'Harfa', end: false },
  { to: '/keramika', label: 'Keramika', end: false },
  { to: '/henna', label: 'Henna', end: false },
  { to: '/malovani-na-sklo', label: 'Malování na sklo', end: false },
  { to: '/malovani-svicek', label: 'Malování svíček', end: false },
  { to: '/kontakt', label: 'Kontakt', end: false },
] as const

function NavItems({ onSelect }: { onSelect?: () => void }) {
  return (
    <>
      {navigationItems.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            end={item.end}
            onClick={onSelect}
            className={({ isActive }) =>
              [
                'block rounded-full px-4 py-2 transition',
                isActive
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-200/70 hover:bg-stone-300/80',
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  )
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-stone-800">
      <header
        className="relative z-50 border-b border-stone-300/60 backdrop-blur"
        style={{ background: 'antiquewhite', height: '90px' }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">lorienart</p>
            <h1 className="font-serif text-2xl text-stone-900">Zakladni struktura webu</h1>
          </div>

          {/* Desktop nav */}
          <nav aria-label="Hlavni navigace" className="hidden md:block">
            <ul className="flex gap-2 text-sm font-medium text-stone-600">
              <NavItems />
            </ul>
          </nav>

          {/* Burger button — mobile only */}
          <button
            type="button"
            aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition hover:bg-stone-200/60 md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-stone-700 transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-stone-700 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-stone-700 transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="absolute left-0 right-0 top-full border-b border-stone-300/60 py-3 md:hidden"
            style={{ background: 'antiquewhite' }}
          >
            <nav aria-label="Mobilni navigace">
              <ul className="flex flex-col gap-1 px-6 text-sm font-medium text-stone-600">
                <NavItems onSelect={() => setMenuOpen(false)} />
              </ul>
            </nav>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/harfa" element={<HarfaPage />} />
        <Route path="/keramika" element={<KeramikaPage />} />
        <Route path="/henna" element={<HennaPage />} />
        <Route path="/malovani-na-sklo" element={<MalovaniNaSklePage />} />
        <Route path="/malovani-svicek" element={<MalovaniSvicekPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
      </Routes>
    </div>
  )
}
