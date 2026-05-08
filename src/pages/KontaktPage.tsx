import { PageShell } from './PageShell'

export function KontaktPage() {
  return (
    <PageShell
      eyebrow="Kontakt"
      title="Centralni kontaktni stranka"
      description="Samostatna stranka pro email, socialni site, caste dotazy a hlavni formular. Aktualne je pripravena jen jako placeholder v projektove kostre."
    >
      <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h3 className="font-serif text-2xl text-stone-900">Kontaktni blok</h3>
        <p className="mt-3 text-sm leading-7 text-stone-600">
          Pozdeji doplnime konkretni kontaktni udaje a vybrany staticky formular.
        </p>
      </section>
    </PageShell>
  )
}
