import { PageShell } from './PageShell'
import ruzneImg from '../assets/madera_ruzne.jpg'

export function RuznePage() {
  return (
    <PageShell
      eyebrow="Různé"
      title="DALŠÍ TVORBA"
      description="Miluji přírodu, pokorně v ní hledám inspiraci pro hudbu i pro další tvoření. Tady je pár ukázek dřevořezby. Dlátka sice už pár let odpočívají ve skříni, ale trpělivě čekají, až zase přijde jejich čas."
      wideDescription
    >
      <img
        src={ruzneImg}
        alt="Různé umělecké práce"
        className="w-full rounded-2xl object-cover shadow-md"
      />

    </PageShell>
  )
}
