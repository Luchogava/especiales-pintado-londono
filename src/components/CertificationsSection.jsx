import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function IsoMark({ code }) {
  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-brand-gold bg-gradient-to-br from-brand-ink via-brand-blue to-brand-navy text-center shadow-[0_18px_40px_rgba(5,26,52,0.28)]">
      <div className="text-white">
        <p className="text-lg font-black tracking-[0.28em]">ISO</p>
        <p className="mt-1 text-2xl font-extrabold">{code}</p>
      </div>
    </div>
  )
}

export function CertificationsSection({ certifications }) {
  return (
    <section id="certificaciones" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Certificaciones"
          title="Respaldos que fortalecen la calidad y la seguridad del servicio"
          description=""
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {certifications.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-brand-navy/10 bg-gradient-to-br from-white to-brand-sand p-8 shadow-card"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <IsoMark code={item.title.includes('9001') ? '9001' : '45001'} />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">{item.tag}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
