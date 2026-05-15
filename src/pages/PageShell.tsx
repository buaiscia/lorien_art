import type { ReactNode } from 'react'

type PageShellProps = {
  eyebrow: string
  title: string
  description: string
  wideDescription?: boolean
  children?: ReactNode
}

export function PageShell({
  eyebrow,
  title,
  description,
  wideDescription = false,
  children,
}: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
      <section className="flex flex-col gap-8">
        <div className="border-b border-stone-200 pb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-5xl text-stone-900 md:text-6xl">
            {title}
          </h2>
          <p className={`mt-5 text-base leading-7 text-stone-600${wideDescription ? '' : ' max-w-2xl'}`}>
            {description}
          </p>
        </div>

        {children}
      </section>
    </main>
  )
}
