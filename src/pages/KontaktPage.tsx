import { ContactForm } from '../components/ContactForm'
import { PageShell } from './PageShell'
import portraitImg from '../assets/kontakt.jpg'

export function KontaktPage() {
  return (
    <PageShell
      eyebrow="Kontakt"
      title="Napište mi"
      description="Máte zájem o spolupráci nebo se chcete jen na něco zeptat? Napište mi a ozvu se co nejdříve."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start lg:grid-cols-[420px_1fr]">
        <img
          src={portraitImg}
          alt="Portrét umělkyně"
          className="w-full rounded-2xl object-cover shadow-md"
        />
        <div>
          <ContactForm formName="kontakt" />
        </div>
      </div>
    </PageShell>
  )
}
