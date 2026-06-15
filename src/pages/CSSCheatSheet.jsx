import CodeBlock from '../components/CodeBlock'

const sections = [
  {
    title: 'Flexbox',
    items: [
      { label: 'Centrera allting', code: `display: flex;\njustify-content: center;\nalign-items: center;` },
      { label: 'Jämnt mellanrum', code: `display: flex;\njustify-content: space-between;` },
      { label: 'Kolumn-layout', code: `display: flex;\nflex-direction: column;\ngap: 1rem;` },
    ],
  },
  {
    title: 'Grid',
    items: [
      { label: 'Tre lika kolumner', code: `display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 1rem;` },
      { label: 'Auto-fit responsivt', code: `display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\ngap: 1rem;` },
    ],
  },
  {
    title: 'Positionering',
    items: [
      { label: 'Centrera absolut', code: `position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);` },
      { label: 'Sticky navbar', code: `position: sticky;\ntop: 0;\nz-index: 100;` },
    ],
  },
  {
    title: 'Vanliga utilities',
    items: [
      { label: 'Trunkera text', code: `overflow: hidden;\nwhite-space: nowrap;\ntext-overflow: ellipsis;` },
      { label: 'Smooth scroll', code: `html {\n  scroll-behavior: smooth;\n}` },
      { label: 'CSS-variabel', code: `:root {\n  --primary: #0d6efd;\n}\n\n.btn {\n  background: var(--primary);\n}` },
    ],
  },
]

export default function CSSCheatSheet() {
  return (
    <div>
      <h1 className="h4 fw-semibold mb-1">CSS cheat sheet</h1>
      <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
        De mönster du använder mest — snabbt tillgängliga.
      </p>
      <div className="d-flex flex-column gap-4">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="h6 mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6c757d' }}>
              {section.title}
            </h2>
            <div className="row g-3">
              {section.items.map((item) => (
                <div key={item.label} className="col-md-6">
                  <div className="card h-100">
                    <div className="card-header bg-white" style={{ fontSize: '13px', color: '#495057' }}>
                      {item.label}
                    </div>
                    <div className="card-body p-0">
                      <CodeBlock code={item.code} language="css" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}