import { usePageMeta } from '../hooks/usePageMeta'
import { PageShell } from './PageShell'
import harp1Img from '../assets/harp/harp_1.jpg'
import harp2Img from '../assets/harp/harp_2.jpg'

const classical = [
  'J. S. Bach: Preludium č. 1 C dur (BWV 846)',
  'J. S. Bach: Jesus bleibet meine Freude – BWV 147 (imprese + improvizace)',
  'A. Dvořák: Largo (imprese + improvizace na hlavní téma)',
  'S. Pratt: The Little Fountain',
  'J. Pachelbel: Kánon v D dur',
  'G. F. Handel / Halvorsen: Passacaglia (imprese + improvizace na hlavní téma)',
  'G. F. Handel: Chaconne',
  'C. Debussy: Clair de Lune (imprese + improvizace na hlavní téma)',
  'Yiruma: River Flows in You',
  'M. Glinka: The Lark',
]

const filmAndPop = [
  'E. Morricone: Gabrielův hoboj',
  'E. Morricone: Once Upon a Time in the West',
  'H. Blake: Walking in the Air',
  'A. Menken: Beauty and the Beast',
  'N. Rota: A Time for Us (Romeo a Julie)',
  'C. M. Schönberg: I Dreamed a Dream (Les Misérables)',
  'O. Brzobohatý: Modlitba (Anděl Páně 2)',
  'K. Svoboda: Cirkus Humberto',
  'J. Powell & H. Gregson-Williams: Fairytale (Shrek)',
  'H. Mancini: Moon River (Breakfast at Tiffany\'s)',
  'P. McCartney: Yesterday',
  'D. H. Conant: Nightingale',
  'L. Cohen: Hallelujah',
  'ABBA: The Winner Takes It All',
  'E. Presley: Can\'t Help Falling in Love',
  'Alphaville: Forever Young',
  'Simon & Garfunkel - The Sound of Silence',
  'Farewell Waltz',
]

const folk = [
  'Danny Boy',
  'Eleanor Plunkett',
  'Inisheer',
  'Sally Gardens',
  'Wild Mountain Thyme',
  'A New Dawn',
  'Dawning of the Day',
  'My Love Is Like a Red Red Rose',
  'Let No Man Steal Your Thyme',
  'Looking at the Rain through a Dirty Window',
  'Skye Boat Song',
  'Sands of Hosta',
  'Highland Boat Song',
  'Bonny Portmore',
  'Foggy Dew',
  'Star of the Country Down',
  'Greensleeves',
  'Believe Me, If All Those Endearing Young Charms',
  'In the Bleak Midwinter',
  'Ye Banks and Braes',
  'Tis the Last Rose of Summer',
  'The Lark in the Clear Air',
  'The Parting Glass',
  'Brian Boru\'s',
  'Glenlivet',
  'D. Grant: Chrissie\'s',

]

export function HarfaPage() {
  usePageMeta(
    'Harfa | Lorien Art',
    'Hudba harfy pro vaše svatby, vernisáže a soukromé akce. Rozsáhlý repertoár klasiky, filmové hudby i irského folku.',
  )
  return (
    <PageShell
      eyebrow="Harfa"
      title="Hudba pro vaše výjimečné okamžiky"
      description="Zvuk harfy dokáže vytvořit kouzelnou atmosféru během vašeho svatebního dne, na vernisáži, oslavě i na dalších soukromých, firemních či kulturních akcích."
      wideDescription
    >
      {/* Bio */}
      <div className="text-stone-700">
        <h3 className="font-serif text-2xl text-stone-900">O mně</h3>
        <p className="mt-3 leading-7">
          Vystudovala jsem překladatelství a tlumočnictví španělštiny a angličtiny na FF UK v
          Praze a stále tlumočím. Odmalička se ale také věnuji hudbě a výtvarnému tvoření. Než
          jsem se zamilovala do harfy, hrála jsem na akordeon, altovou flétnu, kytaru, klavír a
          saxofon. Harfa mi ale učarovala natolik, že se ji po letech intenzivního studia věnuji
          naplno. Hraju hlavně na svatbách, vernisážích, soukromých a firemních oslavách, ale
          ráda vám vytvořím hudební podkres nebo přímo program i pro další příležitosti. Nabízím
          také pasivní muzikoterapii.
        </p>
      </div>

      {/* Images side by side */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <img
          src={harp1Img}
          alt="Harpistka při vystoupení"
          className="w-full rounded-2xl object-cover shadow-md"
        />
        <img
          src={harp2Img}
          alt="Harpistka při vystoupení"
          className="w-full rounded-2xl object-cover shadow-md"
        />
      </div>

      {/* Repertoár */}
      <div className="mt-14">
        <h3 className="font-serif text-2xl text-stone-900">Repertoár</h3>
        <p className="mt-3 leading-7 text-stone-700">
          Ráda vám poradím s výběrem skladeb pro každou událost. Hraju klasiku, filmovou hudbu,
          irský a skotský folk i populární skladby. Pokud máte nějakou oblíbenou píseň, kterou
          byste rádi ve svých významných chvílích slyšeli, můžu ji též upravit pro harfu. Ráda také
          improvizuji a vytvářím imprese na různá hudební témata.
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          <div>
            <ul className="space-y-1.5 text-sm leading-6 text-stone-600">
              {classical.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-1.5 text-sm leading-6 text-stone-600">
              {filmAndPop.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-1.5 text-sm leading-6 text-stone-600">
              {folk.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </PageShell>
  )
}
