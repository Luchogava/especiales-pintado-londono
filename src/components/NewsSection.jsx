import { useEffect, useRef, useState } from 'react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

const newsIntro = {
  eyebrow: 'Actualidad en Ruta',
  title: 'Historias que reflejan nuestra operaci\u00f3n, cultura y compromiso',
  description:
    'Compartimos eventos institucionales, actividades de equipo y momentos que muestran la esencia humana y operativa de Servicios Especiales Pintado Londo\u00f1o.',
  featureLabel: 'Memoria institucional',
  featureText:
    'Un espacio para destacar celebraciones, jornadas de seguridad, reconocimientos y noticias que fortalecen nuestra identidad como empresa de transporte especial de pasajeros.',
}

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

function ShareEvent({ event, website }) {
  const [copied, setCopied] = useState(false)
  const url = `${website}/?evento=${encodeURIComponent(event.slug)}#evento-${event.slug}`
  const text = `${event.title} - Servicios Especiales Pintado Londo\u00f1o`
  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(`${text}. Conoce esta publicaci\u00f3n:`)
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  const secondaryClass =
    'rounded-full border border-white/20 bg-white/8 px-4 py-2.5 text-sm font-bold text-white transition hover:border-brand-green hover:text-brand-green'

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.prompt('Copia este enlace para compartir el evento:', url)
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

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={share}
        className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-brand-navy"
      >
        <ShareIcon /> Compartir evento
      </button>
      <a href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`} target="_blank" rel="noreferrer" className={secondaryClass}>
        WhatsApp
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer" className={secondaryClass}>
        Facebook
      </a>
      <a href={linkedInUrl} target="_blank" rel="noreferrer" className={secondaryClass}>
        LinkedIn
      </a>
      <a href={`mailto:?subject=${encodeURIComponent(text)}&body=${encodedText}%20${encodedUrl}`} className={secondaryClass}>
        Correo
      </a>
      <button type="button" onClick={copyLink} className={secondaryClass}>
        {copied ? 'Enlace copiado' : 'Copiar enlace'}
      </button>
    </div>
  )
}

function EventCard({ event, company }) {
  const articleRef = useRef(null)
  const eventId = `evento-${event.slug}`

  useEffect(() => {
    function focusSharedEvent() {
      const selectedEvent = new URLSearchParams(window.location.search).get('evento')
      const matchesHash = window.location.hash === `#${eventId}`

      if (selectedEvent !== event.slug && !matchesHash) return
      if (!articleRef.current) return

      window.requestAnimationFrame(() => {
        articleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    focusSharedEvent()
    window.addEventListener('hashchange', focusSharedEvent)
    return () => window.removeEventListener('hashchange', focusSharedEvent)
  }, [event.slug, eventId])

  return (
    <article
      ref={articleRef}
      id={eventId}
      className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_28px_80px_rgba(0,0,0,0.28)] target:ring-4 target:ring-brand-green/20"
    >
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div
          className={`relative min-h-[20rem] overflow-hidden ${
            event.images[0].fit === 'contain'
              ? 'bg-[radial-gradient(circle_at_center,rgba(116,192,67,0.14),transparent_40%),linear-gradient(145deg,#040b16,#10233b)] p-2'
              : ''
          }`}
        >
          <img
            src={event.images[0].src}
            alt={event.images[0].alt}
            className={`h-full w-full transition duration-500 ${
              event.images[0].fit === 'contain' ? 'object-contain' : 'object-cover'
            }`}
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-brand-green px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
              {event.category}
            </span>
            <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-navy">
              {event.date}
            </span>
          </div>
        </div>

        <div className="bg-[radial-gradient(circle_at_top_right,rgba(116,192,67,0.16),transparent_35%),linear-gradient(145deg,#06224b_0%,#040b16_100%)] p-7 text-white sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-brand-green">Evento destacado</p>
          <h3 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">{event.title}</h3>
          <p className="mt-5 text-lg leading-8 text-slate-200">{event.summary}</p>

          <details className="group mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-bold text-white">Leer detalle del evento</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-green/35 text-xl font-bold text-brand-green transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 leading-8 text-slate-300">{event.description}</p>
            <ul className="mt-5 space-y-3">
              {event.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            {event.acknowledgements ? (
              <div className="mt-6 rounded-[1.2rem] border border-brand-green/20 bg-brand-green/10 p-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green">
                  {event.acknowledgements.title}
                </p>
                <p className="mt-3 leading-7 text-slate-200">{event.acknowledgements.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.acknowledgements.companies.map((companyName) => (
                    <span
                      key={companyName}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-white"
                    >
                      {companyName}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </details>

          <ShareEvent event={event} website={company.website} />
        </div>
      </div>

      <div className="grid gap-3 bg-white p-3 sm:grid-cols-2">
        {event.images.slice(1).map((image) => (
          <div
            key={image.src}
            className={`aspect-[16/10] overflow-hidden rounded-[1.2rem] ${
              image.fit === 'contain'
                ? 'bg-[radial-gradient(circle_at_center,rgba(116,192,67,0.14),transparent_38%),linear-gradient(145deg,#040b16,#132235)] p-2'
                : 'bg-slate-100'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`h-full w-full transition duration-500 hover:scale-[1.03] ${
                image.fit === 'contain' ? 'object-contain' : 'object-cover'
              }`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </article>
  )
}

export function NewsSection({ events, company }) {
  return (
    <section id="actualidad" className="relative overflow-hidden bg-[linear-gradient(145deg,#040b16_0%,#06224b_58%,#07162d_100%)] py-24 text-white">
      <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-10" aria-hidden="true" />
      <div className="absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-brand-green/20 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            eyebrow={newsIntro.eyebrow}
            title={newsIntro.title}
            description={newsIntro.description}
            theme="dark"
          />
          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 text-slate-200 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-green">{newsIntro.featureLabel}</p>
            <p className="mt-3 leading-7">{newsIntro.featureText}</p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} company={company} />
          ))}
        </div>
      </Container>
    </section>
  )
}
