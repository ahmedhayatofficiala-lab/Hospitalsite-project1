import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main id="main" className="not-found">
      <div className="container not-found__inner">
        <p className="eyebrow">404</p>
        <h1 className="section-title">This page could not be found.</h1>
        <p className="section-lead">
          The page you are looking for may have moved. Return to the homepage to continue.
        </p>
        <Link className="btn btn--primary" to="/">
          Back to Homepage
        </Link>
      </div>
    </main>
  )
}
