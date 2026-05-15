import { useCallback, useEffect, useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { PageShell } from './PageShell'

import img1 from '../assets/painting/malovani_1.jpg'
import img2 from '../assets/painting/malovani_2.jpg'
import img3 from '../assets/painting/malovani_3.jpg'
import img4 from '../assets/painting/malovani_4.jpg'
import img5 from '../assets/painting/malovani_5.jpg'
import img6 from '../assets/painting/malovani_6.jpg'
import img7 from '../assets/painting/malovani_7.jpg'
import img8 from '../assets/painting/malovani_8.jpg'
import img9 from '../assets/painting/malovani_9.jpg'
import img10 from '../assets/painting/malovani_10.jpg'
import img11 from '../assets/painting/malovani_11.jpg'
import img12 from '../assets/painting/malovani_12.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]

export function MalovaniPage() {
  usePageMeta('Malování | Lorien Art', 'Ručně malované sklo, svíčky a další předměty.')
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
      eyebrow="Malování"
      title="Ručně malované sklo, svíčky a další předměty."
      description="Ozdobit se dá (skoro) všechno. Skleněné dózy na potraviny nebo na koření, svíčky...fantazii se meze nekladou. Věnuji se i pyrografice. V budoucnu plánuji nabízet i tyto zkrášlené věci na prodej (i na zakázku). Vše je ale stále v procesu (stejně jako tyto stránky), tak zatím alespoň sdílím pár obrázků pro představu a pro radost."
      wideDescription
    >
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
              alt={`Malování ${i + 1}`}
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
              alt={`Malování ${activeIndex + 1}`}
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
