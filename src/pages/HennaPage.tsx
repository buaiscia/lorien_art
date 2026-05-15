import { useCallback, useEffect, useState } from 'react'
import { PageShell } from './PageShell'

import img1 from '../assets/henna/henna_1.jpg'
import img2 from '../assets/henna/henna_2.jpg'
import img3 from '../assets/henna/henna_3.jpg'
import img4 from '../assets/henna/henna_4.jpg'
import img5 from '../assets/henna/henna_5.jpg'
import img6 from '../assets/henna/henna_6.jpg'
import img7 from '../assets/henna/henna_7.jpg'
import img8 from '../assets/henna/henna_8.jpg'
import img9 from '../assets/henna/henna_9.jpg'
import img10 from '../assets/henna/henna_10.jpg'
import img11 from '../assets/henna/henna_11.jpg'
import img12 from '../assets/henna/henna_12.jpg'
import img13 from '../assets/henna/henna_13.jpg'
import img14 from '../assets/henna/henna_14.jpg'
import img15 from '../assets/henna/henna_15.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]

export function HennaPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const prev = useCallback(
    () => setActiveIndex(i => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [],
  )
  const next = useCallback(
    () => setActiveIndex(i => (i !== null ? (i + 1) % images.length : null)),
    [],
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeIndex])

  return (
    <PageShell
      eyebrow="Henna"
      title="Přírodní henna tetování"
      description="Dočasné, bezpečné a originální henna tetování na kůži. Vhodné na svatby, slavnosti, festivaly nebo jen tak pro radost."
    >
      <div className="mb-12 grid gap-10 md:grid-cols-[1fr_1fr] md:items-start lg:grid-cols-[480px_1fr]">
        <div className="flex flex-col gap-6 text-stone-700">
          <div>
            <h3 className="font-serif text-2xl text-stone-900">O hennových vzorech</h3>
            <p className="mt-3 leading-7">
              Placeholder text — zde bude popis techniky, používaných materiálů a stylu vzorů.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Příležitosti</h3>
            <ul className="mt-3 list-disc pl-5 leading-8 text-stone-600">
              <li>Svatby a zásnuby</li>
              <li>Festivaly a slavnosti</li>
              <li>Narozeninové oslavy</li>
              <li>Firemní akce</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Ceník</h3>
            <p className="mt-3 leading-7">
              Placeholder text — ceny a dostupné balíčky budou doplněny.
            </p>
          </div>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="columns-2 gap-3 sm:columns-3">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Otevřít obrázek ${i + 1}`}
            onClick={() => setActiveIndex(i)}
            className="mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
          >
            <img
              src={src}
              alt={`Henna ${i + 1}`}
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Náhled obrázku"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={close}
        >
          <div
            className="relative flex max-h-full max-w-5xl flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[activeIndex]}
              alt={`Henna ${activeIndex + 1}`}
              className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
            <p className="mt-3 text-sm text-white/50">
              {activeIndex + 1} / {images.length}
            </p>
          </div>

          <button
            type="button"
            aria-label="Zavřít"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/25"
          >
            ✕
          </button>

          <button
            type="button"
            aria-label="Předchozí"
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/25"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Další"
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/25"
          >
            ›
          </button>
        </div>
      )}
    </PageShell>
  )
}
