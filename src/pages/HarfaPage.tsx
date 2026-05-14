import { PageShell } from './PageShell'
import harpImg from '../assets/harp.png'

export function HarfaPage() {
  return (
    <PageShell
      eyebrow="Harfa"
      title="Hudba pro vaše výjimečné okamžiky"
      description="Harfa přináší jedinečnou atmosféru na svatby, firemní akce, soukromé oslavy i kulturní události. Repertoár zahrnuje klasiku, film, folk i soudobé skladby."
    >
      {/* Image + description */}
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start lg:grid-cols-[480px_1fr]">
        <img
          src={harpImg}
          alt="Harpistka při vystoupení"
          className="w-full rounded-2xl object-cover shadow-md"
        />
        <div className="flex flex-col gap-6 text-stone-700">
          <div>
            <h3 className="font-serif text-2xl text-stone-900">O mně</h3>
            <p className="mt-3 leading-7">
              Placeholder text — zde bude krátké bio harpistky, vzdělání,
              zkušenosti a reference z vystoupení.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Repertoár</h3>
            <p className="mt-3 leading-7">
              Klasická hudba, filmové melodie, folk a moderní skladby.
              Program lze přizpůsobit charakteru akce a přání klienta.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Typy akcí</h3>
            <ul className="mt-3 list-disc pl-5 leading-8 text-stone-600">
              <li>Svatební obřady a recepce</li>
              <li>Firemní a společenské události</li>
              <li>Soukromé oslavy a večírky</li>
              <li>Kulturní a charitativní akce</li>
            </ul>
          </div>
        </div>
      </div>

    </PageShell>
  )
}
