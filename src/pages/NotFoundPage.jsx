import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="not-found page-section section-pad"><div className="section-index">404 - NOT FOUND</div><h1>This page took a wrong turn.</h1><Link className="primary-link" to="/">Return to start <span>↗</span></Link></section>
}
