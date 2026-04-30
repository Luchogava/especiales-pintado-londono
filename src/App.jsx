import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { QuickActionsSection } from './components/QuickActionsSection'
import { QuoteSection } from './components/QuoteSection'
import { ServicesSection } from './components/ServicesSection'
import { StatsBar } from './components/StatsBar'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WhyChooseUs } from './components/WhyChooseUs'
import {
  company,
  navigation,
  reasons,
  services,
  stats,
  values,
  whatsappMessage,
} from './data/siteContent'

function App() {
  const whatsappLink = `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white font-body text-slate-900">
      <Header navigation={navigation} whatsappLink={whatsappLink} />
      <main>
        <Hero company={company} whatsappLink={whatsappLink} />
        <ServicesSection services={services} />
        <StatsBar stats={stats} />
        <QuickActionsSection whatsappLink={whatsappLink} />
        <WhyChooseUs reasons={reasons} />
        <AboutSection values={values} />
        <QuoteSection phoneRaw={company.phoneRaw} email={company.email} />
      </main>
      <Footer company={company} navigation={navigation} whatsappLink={whatsappLink} />
      <WhatsAppButton href={whatsappLink} />
    </div>
  )
}

export default App
