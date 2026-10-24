import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import QuickActions from '../components/QuickActions.jsx'
import HomeHighlights from '../components/HomeHighlights.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import HealthPackages from '../components/HealthPackages.jsx'
import Faq from '../components/Faq.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'

export default function HomePage() {
  const { openAppointment } = useOutletContext()

  return (
    <main id="main">
      <Hero onBookAppointment={openAppointment} />
      <QuickActions onBookAppointment={openAppointment} />
      <HomeHighlights />
      <WhyChooseUs />
      <HealthPackages onBookAppointment={openAppointment} />
      <Faq />
      <AppointmentCTA onBookAppointment={openAppointment} />
    </main>
  )
}
