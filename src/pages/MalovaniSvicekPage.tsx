import { ContactForm } from '../components/ContactForm'
import { PageShell } from './PageShell'
import candleImg from '../assets/candle_homepage.jpg'

export function MalovaniSvicekPage() {
  return (
    <PageShell
      eyebrow="Malování svíček"
      title="Ručně malované svíčky"
      description="Svíčky zdobené ornamentálními a mandala vzory. Krásný dárek i dekorace do každého domova."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start lg:grid-cols-[480px_1fr]">
        <img
          src={candleImg}
          alt="Ručně malovaná svíčka"
          className="w-full rounded-2xl object-cover shadow-md"
        />
        <div className="flex flex-col gap-6 text-stone-700">
          <div>
            <h3 className="font-serif text-2xl text-stone-900">O svíčkách</h3>
            <p className="mt-3 leading-7">
              Placeholder text — zde bude popis techniky zdobení, velikostí a dostupných vzorů.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Možnosti</h3>
            <ul className="mt-3 list-disc pl-5 leading-8 text-stone-600">
              <li>Válcové svíčky s mandala vzory</li>
              <li>Svíčky na zakázku</li>
              <li>Dárkové balení</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Ceník</h3>
            <p className="mt-3 leading-7">
              Placeholder text — ceny a dostupné modely budou doplněny.
            </p>
          </div>
        </div>
      </div>

      <ContactForm formName="malovani-svicek-kontakt" />
    </PageShell>
  )
}
