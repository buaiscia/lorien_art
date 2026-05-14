import { ContactForm } from '../components/ContactForm'
import { PageShell } from './PageShell'
import glassImg from '../assets/glass_homepage.jpg'

export function MalovaniPage() {
  return (
    <PageShell
      eyebrow="Malování"
      title="Ručně malované předměty"
      description="Ručně malované skleněné předměty a svíčky s ornamentálními vzory. Každý kus je originál — ideální jako dárek i dekorace."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start lg:grid-cols-[480px_1fr]">
        <img
          src={glassImg}
          alt="Malování na sklo"
          className="w-full rounded-2xl object-cover shadow-md"
        />
        <div className="flex flex-col gap-6 text-stone-700">
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Technika</h3>
            <p className="mt-3 leading-7">
              Placeholder text — zde bude popis používané techniky a materiálů.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Možnosti</h3>
            <ul className="mt-3 list-disc pl-5 leading-8 text-stone-600">
              <li>Vázy a dekorativní sklenice</li>
              <li>Skleničky na zakázku</li>
              <li>Válcové svíčky s mandala vzory</li>
              <li>Svíčky a sklo na zakázku</li>
              <li>Dárkové sety</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Ceník</h3>
            <p className="mt-3 leading-7">
              Placeholder text — ceny a dostupné předměty budou doplněny.
            </p>
          </div>
        </div>
      </div>

      <ContactForm formName="malovani-kontakt" />
    </PageShell>
  )
}
