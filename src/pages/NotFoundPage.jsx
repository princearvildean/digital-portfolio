import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="not-found page-section section-pad"><div className="section-index">404 · Not found</div><h1>That page does not exist.</h1><Link className="primary-link" to="/">Return to start <span>↗</span></Link></section>
}
