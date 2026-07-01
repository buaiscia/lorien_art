import { useState } from 'react'

type ContactFormProps = {
  formName: string
}

export function ContactForm({ formName }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, value.toString()))
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <section>
        <div className="rounded-2xl bg-stone-50 px-8 py-12 text-center">
          <p className="font-serif text-2xl text-stone-900">Zpráva odeslána!</p>
          <p className="mt-2 text-sm text-stone-500">Ozvu se co nejdříve.</p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-6 rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-white! transition hover:bg-stone-700"
          >
            Odeslat další zprávu
          </button>
        </div>
      </section>
    )
  }

  return (
    <section>
      <p className="mt-2 font-serif text-2xl italic tracking-wide text-stone-800">Romana Buaiscia</p>

      <p className="mt-6 text-base text-stone-700">Telefon: 725 964 038</p>

      <p className="mt-4 text-sm text-stone-500">
        Napište mi a ozvu se co nejdříve.
      </p>


      <form
        name={formName}
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
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
            disabled={status === 'sending'}
            className="rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white! transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:opacity-60"
          >
            {status === 'sending' ? 'Odesílám…' : 'Odeslat zprávu'}
          </button>
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-600">Něco se pokazilo. Zkuste to znovu.</p>
          )}
        </div>
      </form>
    </section>
  )
}
