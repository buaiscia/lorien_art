import { PageShell } from './PageShell'
import ruzneImg from '../assets/madera_ruzne.jpg'

export function RuznePage() {
  return (
    <PageShell
      eyebrow="Různé"
      title="Další tvorba"
      description="Různorodá umělecká tvorba — řezbářství, dřevěné reliéfy a další ruční práce. Zakázky dle přání."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start lg:grid-cols-[480px_1fr]">
        <img
          src={ruzneImg}
          alt="Různé umělecké práce"
          className="w-full rounded-2xl object-cover shadow-md"
        />
        <div className="flex flex-col gap-6 text-stone-700">
          <div>
            <h3 className="font-serif text-2xl text-stone-900">O tvorbě</h3>
            <p className="mt-3 leading-7">
              Placeholder text — zde bude popis dalších uměleckých technik a materiálů.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Možnosti</h3>
            <ul className="mt-3 list-disc pl-5 leading-8 text-stone-600">
              <li>Dřevěné reliéfy a plastiky</li>
              <li>Zakázkové práce</li>
              <li>Dárkové předměty</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Ceník</h3>
            <p className="mt-3 leading-7">
              Placeholder text — ceny a dostupné práce budou doplněny.
            </p>
          </div>
        </div>
      </div>

    </PageShell>
  )
}
