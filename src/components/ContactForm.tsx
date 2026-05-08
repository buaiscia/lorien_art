type ContactFormProps = {
  formName: string
}

export function ContactForm({ formName }: ContactFormProps) {
  return (
    <section className="border-t border-stone-200 pt-12">
      <h3 className="font-serif text-3xl text-stone-900">Kontaktujte mě</h3>
      <p className="mt-2 text-sm text-stone-500">
        Napište mi a ozvu se co nejdříve.
      </p>

      <form
        name={formName}
        method="POST"
        data-netlify="true"
        className="mt-8 grid gap-5 sm:grid-cols-2"
      >
        <input type="hidden" name="form-name" value={formName} />

        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${formName}-name`} className="text-sm font-medium text-stone-700">
            Jméno
          </label>
          <input
            id={`${formName}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Vaše jméno"
            className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${formName}-email`} className="text-sm font-medium text-stone-700">
            E-mail
          </label>
          <input
            id={`${formName}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vas@email.cz"
            className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor={`${formName}-message`} className="text-sm font-medium text-stone-700">
            Zpráva
          </label>
          <textarea
            id={`${formName}-message`}
            name="message"
            rows={5}
            required
            placeholder="Napište svou zprávu…"
            className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
          >
            Odeslat zprávu
          </button>
        </div>
      </form>
    </section>
  )
}
