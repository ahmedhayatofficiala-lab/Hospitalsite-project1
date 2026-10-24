import { useOutletContext } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ScrollStorySection from '../components/ScrollStorySection.jsx'
import Facilities from '../components/Facilities.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'

export default function PatientServicesPage() {
  const { openAppointment } = useOutletContext()

  return (
    <main id="main">
      <PageHeader
        eyebrow="Patient services"
        title="Care That Stays With You"
        lead="From your first appointment to follow-up, our patient services team coordinates the details so you can focus on getting better."
        crumb="Patient Services"
      />
      <ScrollStorySection />
      <Facilities />
      <AppointmentCTA onBookAppointment={openAppointment} />
    </main>
  )
}
