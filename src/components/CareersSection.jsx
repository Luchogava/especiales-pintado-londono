import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function CareersSection({ openings, email }) {
  const subject = encodeURIComponent('Hoja de vida - Convocatoria Servicios Especiales Pintado Londo\u00f1o')

  return (
    <section id="convocatorias" className="bg-slate-50 py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Talento humano"
            title="Convocatorias para hacer parte de nuestro equipo"
            description={
              <>
                Publicamos aqu&iacute; oportunidades laborales y bancos de hojas de vida para personas que quieran
                aportar a una operaci&oacute;n segura, puntual y bien atendida.
              </>
            }
          />

          <div className="mt-8 rounded-[1.8rem] border border-brand-silver/20 bg-white p-6 shadow-card">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-green">Canal de postulaci&oacute;n</p>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              Env&iacute;a tu hoja de vida al correo comercial indicando en el asunto el cargo o &aacute;rea de inter&eacute;s.
            </p>
            <a
              href={`mailto:${email}?subject=${subject}`}
              className="mt-5 inline-flex rounded-full bg-brand-navy px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_16px_32px_rgba(6,34,75,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-green"
            >
              Enviar hoja de vida
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {openings.map((opening, index) => (
            <details
              key={opening.title}
              className="group rounded-[1.7rem] border border-brand-silver/20 bg-white p-5 shadow-card transition open:border-brand-green/40 open:shadow-premium"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
                <span>
                  <span className="inline-flex rounded-full bg-brand-navy px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                    Convocatoria 0{index + 1}
                  </span>
                  <span className="mt-4 block font-display text-2xl font-bold text-brand-navy">{opening.title}</span>
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
                <p className="mt-5 text-sm font-black uppercase tracking-[0.22em] text-brand-green">Requisitos</p>
                <ul className="mt-3 space-y-3">
                  {opening.requirements.map((requirement) => (
                    <li key={requirement} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <span className="mt-2 h-2 w-2 rounded-full bg-brand-green" aria-hidden="true" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
