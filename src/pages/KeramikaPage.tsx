import { ContactForm } from '../components/ContactForm'
import { PageShell } from './PageShell'
import ceramicsImg from '../assets/ceramics.jpg'

export function KeramikaPage() {
  return (
    <PageShell
      eyebrow="Keramika"
      title="Ručně tvořená keramika"
      description="Každý kus je originál — modelovaný, glazovaný a vypalovaný v domácí dílně. Figurky, vázy, nádoby i dekorativní předměty dostupné k objednání."
    >
      {/* Image + description */}
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start lg:grid-cols-[480px_1fr]">
        <img
          src={ceramicsImg}
          alt="Ukázka keramiky"
          className="w-full rounded-2xl object-cover shadow-md"
        />
        <div className="flex flex-col gap-6 text-stone-700">
          <div>
            <h3 className="font-serif text-2xl text-stone-900">O tvorbě</h3>
            <p className="mt-3 leading-7">
              Placeholder text — zde bude popis tvorby, technik, materiálů
              a inspirace autorky.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Co nabízím</h3>
            <ul className="mt-3 list-disc pl-5 leading-8 text-stone-600">
              <li>Figurky a sochy</li>
              <li>Dekorativní vázy a misky</li>
              <li>Nádoby pro každodenní použití</li>
              <li>Zakázková tvorba na přání</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Objednávky</h3>
            <p className="mt-3 leading-7">
              Zboží není skladem — každý kus vzniká na objednávku. Napište
              níže a domluvíme se na detailech.
            </p>
          </div>
        </div>
      </div>

      <ContactForm formName="keramika-kontakt" />
    </PageShell>
  )
}
