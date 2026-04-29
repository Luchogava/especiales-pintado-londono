import { Container } from './Container'

export function Footer({ company, navigation, whatsappLink }) {
  return (
    <footer className="bg-[#050c16] py-14 text-slate-300">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-2xl font-bold text-white">{company.name}</p>
          <p className="mt-4 max-w-xl leading-8 text-slate-400">
            Transporte terrestre especial de pasajeros en Colombia con experiencia, orden y atención cercana para cada
            servicio.
          </p>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-brand-gold">Enlaces</p>
          <div className="mt-4 space-y-3">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="block transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-brand-gold">Contacto</p>
          <div className="mt-4 space-y-3">
            <p>{company.phoneDisplay}</p>
            <p>{company.email}</p>
            <p>{company.coverage}</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-block font-bold text-white">
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
