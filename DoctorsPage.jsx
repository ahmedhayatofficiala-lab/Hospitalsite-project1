import { useOutletContext } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Doctors from '../components/Doctors.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'

export default function DoctorsPage() {
  const { openAppointment, openProfile } = useOutletContext()

  return (
    <main id="main">
      <PageHeader
        eyebrow="Our doctors"
        title="Meet Our Medical Specialists"
        lead="Consultants from cardiology, neurology, orthopedics and pediatrics work together to deliver coordinated, evidence-led care."
        crumb="Our Doctors"
      />
      <Doctors
        showHead={false}
        onBookAppointment={openAppointment}
        onOpenProfile={openProfile}
      />
      <AppointmentCTA onBookAppointment={openAppointment} />
    </main>
  )
}
