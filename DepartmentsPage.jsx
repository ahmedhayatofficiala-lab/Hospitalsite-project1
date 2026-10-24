import { useOutletContext } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Departments from '../components/Departments.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'

const steps = [
  {
    number: '01',
    title: 'Consult',
    text: 'Meet your specialist and share your history, symptoms and goals in a calm, unhurried consultation.'
  },
  {
    number: '02',
    title: 'Diagnose',
    text: 'Imaging, laboratory tests and specialist reporting are coordinated on-site for faster answers.'
  },
  {
    number: '03',
    title: 'Treat & follow up',
    text: 'You leave with a clear treatment plan, written guidance and a scheduled review with your care team.'
  }
]

export default function DepartmentsPage() {
  const { openAppointment } = useOutletContext()

  return (
    <main id="main">
      <PageHeader
        eyebrow="Medical departments"
        title="Comprehensive Care, All in One Place"
        lead="Explore specialized medical services designed around your health and well-being, delivered by consultants who work together across disciplines."
        crumb="Departments"
      />

      <Departments showHead={false} />

      <section className="section dept-approach" aria-labelledby="dept-approach-title">
        <div className="container dept-approach__grid">
          <div className="dept-approach__media">
            <img
              src="/images/reception.jpg"
              alt="Hospital reception guiding patients to specialist departments"
              width="900"
              height="1100"
              loading="lazy"
              decoding="async"
            />
            <div className="dept-approach__badge">
              <span className="dept-approach__badge-value">20+</span>
              <span className="dept-approach__badge-label">
                Medical specialties
                <small>Sample figure for layout</small>
              </span>
            </div>
          </div>

          <div className="dept-approach__content">
            <p className="eyebrow">How we work</p>
            <h2 id="dept-approach-title" className="section-title">
              Every Department, Connected
            </h2>
            <p className="section-lead">
              Our departments share one patient record and one care plan, so your specialists
              always see the bigger picture. Here is what a typical journey looks like.
            </p>

            <ol className="dept-approach__steps">
              {steps.map(({ number, title, text }) => (
                <li className="dept-approach__step" key={number}>
                  <span className="dept-approach__step-number" aria-hidden="true">
                    {number}
                  </span>
                  <div>
                    <h3 className="dept-approach__step-title">{title}</h3>
                    <p className="dept-approach__step-text">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <AppointmentCTA onBookAppointment={openAppointment} />
    </main>
  )
}
