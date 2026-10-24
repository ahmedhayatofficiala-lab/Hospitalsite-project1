import { useOutletContext } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ContactPreview from '../components/ContactPreview.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'

export default function ContactPage() {
  const { openAppointment } = useOutletContext()

  return (
    <main id="main">
      <PageHeader
        eyebrow="Contact"
        title="Talk to Our Healthcare Team"
        lead="Reach the hospital for appointment questions, department information or visiting guidance. Contact details below are placeholders pending verification."
        crumb="Contact"
      />
      <ContactPreview showHead={false} />
      <AppointmentCTA onBookAppointment={openAppointment} />
    </main>
  )
}
