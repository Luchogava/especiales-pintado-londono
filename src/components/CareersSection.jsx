import { useEffect, useRef } from 'react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { ShareVacancy } from './ShareVacancy'

function DetailList({ title, items }) {
  if (!items?.length) return null

  return (
    <div className="mt-5">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-green">{title}</p>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CareerOpening({ opening, index, company }) {
  const detailsRef = useRef(null)
  const vacancyId = `convocatoria-${opening.slug}`

  useEffect(() => {
    function revealSharedVacancy() {
      const selectedVacancy = new URLSearchParams(window.location.search).get('vacante')
      const matchesHash = window.location.hash === `#${vacancyId}`

      if (selectedVacancy !== opening.slug && !matchesHash) return

      detailsRef.current.open = true
      window.requestAnimationFrame(() => {
        detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    revealSharedVacancy()
    window.addEventListener('hashchange', revealSharedVacancy)
    return () => window.removeEventListener('hashchange', revealSharedVacancy)
  }, [opening.slug, vacancyId])

  return (
    <details
      ref={detailsRef}
      id={vacancyId}
      className="group scroll-mt-28 rounded-[1.2rem] border border-brand-silver/20 bg-white p-3 shadow-card transition open:border-brand-green/40 open:shadow-premium target:border-brand-green target:ring-4 target:ring-brand-green/15 sm:rounded-[1.7rem] sm:p-5"
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
        <span>
          <span className="inline-flex rounded-full bg-brand-navy px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
            Convocatoria 0{index + 1}
          </span>
          <span className="mt-3 block font-display text-lg font-bold text-brand-navy sm:mt-4 sm:text-2xl">{opening.title}</span>
          <span className="mt-3 flex flex-wrap gap-2 text-sm font-bold">
            <span className="rounded-full bg-brand-green/12 px-3 py-1 text-brand-green">{opening.status}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{opening.type}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{opening.location}</span>
          </span>
        </span>
        <span className="mt-1 flex h-11 min-w-11 items-center justify-center rounded-full border border-brand-silver/30 text-xl font-bold text-brand-navy transition group-open:rotate-45 group-open:border-brand-green group-open:text-brand-green">
          +
        </span>
      </summary>

      <div className="mt-6 border-t border-brand-silver/20 pt-5">
        <p className="text-base leading-7 text-slate-600">{opening.summary}</p>
        <DetailList title="Perfil requerido" items={opening.requirements} />
        <DetailList title={'Se valorará'} items={opening.preferred} />
        <DetailList title="Responsabilidades principales" items={opening.responsibilities} />
        <DetailList title={'Proceso de selección'} items={opening.selection} />

        <div className="mt-6 rounded-2xl bg-brand-navy p-5 text-white">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green">{'Postulación'}</p>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            {'Envía tu hoja de vida a '}<strong className="text-white">{company.email}</strong>{' con el asunto '}
            &ldquo;{opening.applicationSubject || 'Hoja de vida - Convocatoria'}&rdquo;.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent(opening.applicationSubject || 'Hoja de vida - Convocatoria')}`}
              className="btn-premium-green w-full sm:w-auto"
            >
              Postularme por correo
            </a>
            <a
              href={`https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(`Hola, deseo postularme a la convocatoria de ${opening.title}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-premium-ghost w-full sm:w-auto"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <ShareVacancy title={opening.title} website={company.website} vacancySlug={opening.slug} />
      </div>
    </details>
  )
}

export function CareersSection({ openings, company }) {
  const subject = encodeURIComponent('Hoja de vida - Convocatoria Servicios Especiales Pintado Londoño')

  return (
    <section id="convocatorias" className="bg-slate-50 py-10 sm:py-20">
      <Container className="grid gap-6 sm:gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Talento humano"
            title="Convocatorias laborales"
            description="Oportunidades laborales vigentes y banco de hojas de vida."
          />

          <div className="mt-5 rounded-[1.25rem] border border-brand-silver/20 bg-white p-4 shadow-card sm:mt-6 sm:rounded-[1.5rem] sm:p-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green sm:text-sm sm:tracking-[0.24em]">{'Canal de postulación'}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              {'Envía tu hoja de vida indicando el cargo o área de interés.'}
            </p>
            <a
              href={`mailto:${company.email}?subject=${subject}`}
              className="btn-premium-dark mt-5 w-full sm:w-auto"
            >
              Enviar hoja de vida
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {openings.map((opening, index) => (
            <CareerOpening key={opening.slug} opening={opening} index={index} company={company} />
          ))}
        </div>
      </Container>
    </section>
  )
}
