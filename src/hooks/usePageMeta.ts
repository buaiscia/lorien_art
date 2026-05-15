import { useEffect } from 'react'

const DEFAULT_TITLE = 'Lorien Art – Harfa, Keramika, Henna & Malování'
const DEFAULT_DESCRIPTION =
  'Portfolio a služby Lorien Art – harfa pro vaše akce, keramika, malování hennou, malování na sklo a dřevořezba.'

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta && description) meta.content = description

    return () => {
      document.title = DEFAULT_TITLE
      if (meta) meta.content = DEFAULT_DESCRIPTION
    }
  }, [title, description])
}
