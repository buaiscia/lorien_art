import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta('Stránka nenalezena | Lorien Art')

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-stone-400">404</p>
      <h2 className="mt-3 font-serif text-5xl text-stone-900 md:text-6xl">Stránka nenalezena</h2>
      <p className="mt-5 max-w-sm text-base leading-7 text-stone-500">
        Tato stránka neexistuje nebo byla přesunuta.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-white! transition hover:bg-stone-700"
      >
        Zpět na úvod
      </Link>
    </main>
  )
}
