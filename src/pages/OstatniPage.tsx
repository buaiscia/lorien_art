import { ContactForm } from '../components/ContactForm'
import { PageShell } from './PageShell'
import hennaImg from '../assets/henna.jpg'

export function OstatniPage() {
  return (
    <PageShell
      eyebrow="Ostatní"
      title="Další služby"
      description="Kromě harfy a keramiky nabízím i další ruční tvorbu — henna tetování na kůži, malování svíček a další. Více detailů bude doplněno."
    >
      {/* Image + description */}
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start lg:grid-cols-[480px_1fr]">
        <img
          src={hennaImg}
          alt="Henna tetování na ruce"
          className="w-full rounded-2xl object-cover shadow-md"
        />
        <div className="flex flex-col gap-6 text-stone-700">
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Henna</h3>
            <p className="mt-3 leading-7">
              Přírodní henna tetování na kůži — dočasné, bezpečné a
              originální. Vhodné na svatby, slavnosti, festivaly nebo jen
              tak pro radost.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Malování svíček</h3>
            <p className="mt-3 leading-7">
              Placeholder text — popis služby, ukázky, dostupnost.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Další</h3>
            <p className="mt-3 leading-7">
              Tato sekce bude postupně doplňována o nové služby a ukázky
              tvorby.
            </p>
          </div>
        </div>
      </div>

      <ContactForm formName="ostatni-kontakt" />
    </PageShell>
  )
}
