import { AboutSection } from './components/AboutSection'
import { CareersSection } from './components/CareersSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { NewsSection } from './components/NewsSection'
import { QuoteSection } from './components/QuoteSection'
import { ServicesSection } from './components/ServicesSection'
import { StatsBar } from './components/StatsBar'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WhyChooseUs } from './components/WhyChooseUs'
import {
  careerOpenings,
  company,
  navigation,
  newsEvents,
  reasons,
  services,
  stats,
  values,
  whatsappMessage,
} from './data/siteContent'

function App() {
  const whatsappLink = `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-fog font-body text-slate-900">
      <Header navigation={navigation} whatsappLink={whatsappLink} />
      <main id="contenido" tabIndex="-1">
        <Hero company={company} whatsappLink={whatsappLink} />
        <ServicesSection services={services} whatsappLink={whatsappLink} />
        <StatsBar stats={stats} />
        <WhyChooseUs reasons={reasons} />
        <QuoteSection phoneRaw={company.phoneRaw} email={company.email} />
        <AboutSection values={values} />
        <NewsSection events={newsEvents} company={company} />
        <CareersSection openings={careerOpenings} company={company} />
      </main>
      <Footer company={company} navigation={navigation} whatsappLink={whatsappLink} />
      <WhatsAppButton href={whatsappLink} />
    </div>
  )
}

export default App
