import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: '70vh' }}
    >
      <div
        style={{
          fontSize: '64px',
          fontWeight: 600,
          color: '#e9ecef',
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}
      >
        404
      </div>
      <h1 className="fw-semibold mb-2" style={{ fontSize: '22px' }}>
        Den här sidan finns inte
      </h1>
      <p className="text-muted mb-4" style={{ fontSize: '15px' }}>
        Precis som en trasig länk — men det här går faktiskt att fixa.
      </p>
      <Link to="/" className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 22px' }}>
        ← Tillbaka till dashboard
      </Link>
    </div>
  )
}