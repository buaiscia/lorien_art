import { ContactForm } from '../components/ContactForm'
import { PageShell } from './PageShell'
import hennaImg from '../assets/henna.jpg'

export function HennaPage() {
  return (
    <PageShell
      eyebrow="Henna"
      title="Přírodní henna tetování"
      description="Dočasné, bezpečné a originální henna tetování na kůži. Vhodné na svatby, slavnosti, festivaly nebo jen tak pro radost."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start lg:grid-cols-[480px_1fr]">
        <img
          src={hennaImg}
          alt="Henna tetování na ruce"
          className="w-full rounded-2xl object-cover shadow-md"
        />
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

      <ContactForm formName="henna-kontakt" />
    </PageShell>
  )
}
