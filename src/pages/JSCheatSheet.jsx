import CodeBlock from '../components/CodeBlock'
import { jsSections } from '../data/jsData'

export default function JSCheatSheet() {
  return (
    <div>
      <h1 className="h4 fw-semibold mb-1">JavaScript cheat sheet</h1>
      <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
        Variabler, array-metoder, async och vanliga mönster.
      </p>
      <div className="d-flex flex-column gap-5">
        {jsSections.map((section) => (
          <div key={section.title}>
            <h2
              className="mb-3"
              style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#6c757d' }}
            >
              {section.title}
            </h2>
            <div className="row g-3">
              {section.items.map((item) => (
                <div key={item.label} className={section.items.length === 1 ? 'col-12' : 'col-md-6'}>
                  <div className="card h-100">
                    <div className="card-header bg-white" style={{ fontSize: '13px', fontWeight: 500 }}>
                      {item.label}
                    </div>
                    <div className="card-body p-0">
                      <CodeBlock code={item.code} language="javascript" />
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