import CodeBlock from '../components/CodeBlock'

const examples = [
  {
    title: 'Knappar',
    code: `<button className="btn btn-primary">Primary</button>
<button className="btn btn-outline-secondary">Outline</button>
<button className="btn btn-danger btn-sm">Liten</button>`,
    preview: (
      <div className="d-flex gap-2 flex-wrap">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-outline-secondary">Outline</button>
        <button className="btn btn-danger btn-sm">Liten</button>
      </div>
    ),
  },
  {
    title: 'Alert',
    code: `<div className="alert alert-success">Sparades!</div>
<div className="alert alert-warning">OBS: kontrollera fälten.</div>
<div className="alert alert-danger">Något gick fel.</div>`,
    preview: (
      <div className="d-flex flex-column gap-2">
        <div className="alert alert-success mb-0">Sparades!</div>
        <div className="alert alert-warning mb-0">OBS: kontrollera fälten.</div>
        <div className="alert alert-danger mb-0">Något gick fel.</div>
      </div>
    ),
  },
  {
    title: 'Badges',
    code: `<span className="badge bg-primary">Ny</span>
<span className="badge bg-success">Aktiv</span>
<span className="badge bg-secondary">Draft</span>`,
    preview: (
      <div className="d-flex gap-2">
        <span className="badge bg-primary">Ny</span>
        <span className="badge bg-success">Aktiv</span>
        <span className="badge bg-secondary">Draft</span>
      </div>
    ),
  },
  {
    title: 'Formulär',
    code: `<div className="mb-3">
  <label className="form-label">E-post</label>
  <input type="email" className="form-control" placeholder="namn@exempel.se" />
</div>
<div className="mb-3">
  <label className="form-label">Meddelande</label>
  <textarea className="form-control" rows="3" />
</div>
<button className="btn btn-primary">Skicka</button>`,
    preview: (
      <div style={{ maxWidth: 400 }}>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: 14 }}>E-post</label>
          <input type="email" className="form-control" placeholder="namn@exempel.se" />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: 14 }}>Meddelande</label>
          <textarea className="form-control" rows="3" />
        </div>
        <button className="btn btn-primary">Skicka</button>
      </div>
    ),
  },
  {
    title: 'Grid — tre kolumner',
    code: `<div className="row g-3">
  <div className="col-md-4">
    <div className="card p-3">Kolumn 1</div>
  </div>
  <div className="col-md-4">
    <div className="card p-3">Kolumn 2</div>
  </div>
  <div className="col-md-4">
    <div className="card p-3">Kolumn 3</div>
  </div>
</div>`,
    preview: (
      <div className="row g-3">
        {['Kolumn 1', 'Kolumn 2', 'Kolumn 3'].map((t) => (
          <div key={t} className="col-md-4">
            <div className="card p-3 text-center" style={{ fontSize: 14 }}>{t}</div>
          </div>
        ))}
      </div>
    ),
  },
]

export default function BootstrapPage() {
  return (
    <div>
      <h1 className="h4 fw-semibold mb-1">Bootstrap-komponenter</h1>
      <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
        Levande preview + kod du kan kopiera direkt.
      </p>
      <div className="d-flex flex-column gap-4">
        {examples.map((ex) => (
          <div key={ex.title} className="card">
            <div className="card-header bg-white" style={{ fontSize: '14px', fontWeight: 500 }}>
              {ex.title}
            </div>
            <div className="card-body">{ex.preview}</div>
            <div className="card-footer p-0">
              <CodeBlock code={ex.code} language="jsx" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}