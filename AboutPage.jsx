import { useOutletContext } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import AboutHospital from '../components/AboutHospital.jsx'
import TrustStrip from '../components/TrustStrip.jsx'
import Testimonials from '../components/Testimonials.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'

export default function AboutPage() {
  const { openAppointment } = useOutletContext()

  return (
    <main id="main">
      <PageHeader
        eyebrow="About us"
        title="A Hospital Built Around People"
        lead="Clinical expertise, honest communication and a genuine commitment to the community we serve - these are the foundations of Meridian Hospital."
        crumb="About Us"
      />
      <AboutHospital showCta={false} />
      <TrustStrip />
      <Testimonials />
      <AppointmentCTA onBookAppointment={openAppointment} />
    </main>
  )
}
