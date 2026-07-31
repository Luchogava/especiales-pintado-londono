import { useState } from 'react'

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
    </svg>
  )
}

export function ShareVacancy({ title, website, vacancySlug }) {
  const [copied, setCopied] = useState(false)
  const url = `${website}/?vacante=${encodeURIComponent(vacancySlug)}#convocatoria-${vacancySlug}`
  const text = `${title} - Servicios Especiales Pintado Londoño`
  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(`${text}. Conoce los requisitos y postúlate:`)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.prompt('Copia este enlace para compartir la convocatoria:', url)
    }
  }

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title: text, text, url })
      } catch {
        // Closing the native share menu is not an application error.
      }
      return
    }
    await copyLink()
  }

  const secondaryClass =
    'rounded-full border border-brand-silver/35 bg-white px-4 py-2.5 text-sm font-bold text-brand-navy transition hover:border-brand-green hover:text-brand-green'

  return (
    <div className="mt-6 rounded-2xl border border-brand-silver/25 bg-slate-50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-navy">Comparte esta oportunidad</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
        >
          <ShareIcon /> Compartir
        </button>
        <a href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`} target="_blank" rel="noreferrer" className={secondaryClass}>
          WhatsApp
        </a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer" className={secondaryClass}>
          LinkedIn
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer" className={secondaryClass}>
          Facebook
        </a>
        <a href={`mailto:?subject=${encodeURIComponent(text)}&body=${encodedText}%20${encodedUrl}`} className={secondaryClass}>
          Correo
        </a>
        <button type="button" onClick={copyLink} className={secondaryClass}>
          {copied ? 'Enlace copiado' : 'Copiar enlace'}
        </button>
      </div>
    </div>
  )
}
