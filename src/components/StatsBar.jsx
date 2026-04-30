import { Container } from './Container'

function ItemIcon({ type }) {
  if (type === 'years') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  if (type === 'coverage') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M12 21C15.5 17.4 18 14.5 18 11.5C18 8.46 15.31 6 12 6C8.69 6 6 8.46 6 11.5C6 14.5 8.5 17.4 12 21Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="11" r="2.3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 3L5 6V11C5 15.55 7.91 19.8 12 21C16.09 19.8 19 15.55 19 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function IsoSeal({ title }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-gold bg-brand-ink text-center text-[10px] font-black uppercase leading-tight text-white shadow-[0_12px_30px_rgba(5,26,52,0.24)]">
      <span>
        ISO
        <br />
        {title.includes('9001') ? '9001' : '45001'}
      </span>
    </div>
  )
}

export function StatsBar({ stats }) {
  return (
    <section className="relative -mt-10 z-10">
      <Container>
        <div className="grid gap-4 rounded-[2rem] border border-brand-navy/10 bg-white p-4 shadow-card md:grid-cols-2 xl:grid-cols-4 xl:p-5">
          {stats.map((item) => (
            <div key={item.value} className="rounded-[1.4rem] bg-slate-50 p-5">
              <div className="mb-4 flex items-center gap-4">
                {item.type === 'iso' ? (
                  <IsoSeal title={item.value} />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-sand text-brand-navy">
                    <ItemIcon type={item.type} />
                  </div>
                )}
                <p className="font-display text-xl font-bold text-brand-navy">{item.value}</p>
              </div>
              <p className="text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
