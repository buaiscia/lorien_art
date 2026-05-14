import { ContactForm } from '../components/ContactForm'
import { PageShell } from './PageShell'

export function KontaktPage() {
  return (
    <PageShell
      eyebrow="Kontakt"
      title="Napište mi"
      description="Máte zájem o spolupráci nebo se chcete jen zeptat? Napište mi a ozvu se co nejdříve."
    >
      <ContactForm formName="kontakt" />
    </PageShell>
  )
}
