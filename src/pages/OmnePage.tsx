import { usePageMeta } from '../hooks/usePageMeta'
import { PageShell } from './PageShell'
import omneProfilePicture from '../assets/omne_profile_picture.jpg'

export function OmnePage() {
  usePageMeta(
    'O mně | Lorien Art',
    'Představení Romany Buaiscii a její umělecké cesty.',
  )

  return (
    <PageShell
      eyebrow="O mně"
      title="O mně"
      description=""
      wideDescription
    >
      <div className="grid items-start gap-8 md:grid-cols-[360px_1fr]">
        <img
          src={omneProfilePicture}
          alt="Portrét Romany"
          className="w-full rounded-2xl object-cover shadow-md"
        />

        <p className="leading-7 text-stone-700">
          Vystudovala jsem překladatelství a tlumočnictví španělštiny a angličtiny na FF UK v
          Praze a stále tlumočím. Odmalička se ale také věnuji hudbě a výtvarnému tvoření. Než
          jsem se zamilovala do harfy, hrála jsem na akordeon, altovou flétnu, kytaru, klavír a
          saxofon.
          <br />
          <br />
          Harfa mi ale učarovala natolik, že se ji po letech intenzivního studia věnuji
          naplno. Hraju hlavně na svatbách, vernisážích, soukromých a firemních oslavách, ale
          ráda vám vytvořím hudební podkres nebo přímo program i pro další příležitosti. Nabízím
          také pasivní muzikoterapii.
        </p>
      </div>
    </PageShell>
  )
}
