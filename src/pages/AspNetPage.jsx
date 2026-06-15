import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import {
  razorSyntax,
  csharpPatterns,
  efCommands,
  dotnetCli,
} from '../data/aspnetData'

const tabs = ['Razor syntax', 'C#-mönster', 'Entity Framework', 'dotnet CLI']

function CommandTable({ sections }) {
  const [copied, setCopied] = useState(null)

  const handleCopy = (cmd) => {
    navigator.clipboard.writeText(cmd)
    setCopied(cmd)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="d-flex flex-column gap-4">
      {sections.map((section) => (
        <div key={section.category}>
          <h3
            className="mb-2"
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              color: '#6c757d',
            }}
          >
            {section.category}
          </h3>
          <div className="card">
            <div className="list-group list-group-flush">
              {section.commands.map((item) => (
                <button
                  key={item.cmd}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  style={{ fontSize: '14px' }}
                  onClick={() => handleCopy(item.cmd)}
                >
                  <code style={{ color: '#0d6efd', fontSize: '13px' }}>
                    {item.cmd}
                  </code>
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-muted">{item.desc}</span>
                    <span
                      style={{
                        fontSize: '12px',
                        color: 'green',
                        minWidth: 70,
                        opacity: copied === item.cmd ? 1 : 0,
                        transition: 'opacity 0.2s',
                      }}
                    >
                      ✓ Kopierat
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CodeGrid({ items }) {
  return (
    <div className="d-flex flex-column gap-3">
      {items.map((item) => (
        <div key={item.label} className="card">
          <div
            className="card-header bg-white"
            style={{ fontSize: '13px', fontWeight: 500 }}
          >
            {item.label}
          </div>
          <div className="card-body p-0">
            <CodeBlock code={item.code} language="csharp" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AspNetPage() {
  const [activeTab, setActiveTab] = useState(0)

  const descriptions = [
    'Razor-syntax du använder i .cshtml-filer.',
    'Vanliga C#-mönster i PageModel och LINQ.',
    'Entity Framework Core — migrations och DbContext. Klicka för att kopiera.',
    'dotnet CLI — skapa, kör och hantera projekt. Klicka för att kopiera.',
  ]

  return (
    <div>
      <h1 className="h4 fw-semibold mb-1">ASP.NET Core / Razor Pages</h1>
      <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
        {descriptions[activeTab]}
      </p>

      <ul className="nav nav-tabs mb-4">
        {tabs.map((tab, i) => (
          <li key={tab} className="nav-item">
            <button
              className={`nav-link ${activeTab === i ? 'active' : ''}`}
              style={{ fontSize: '14px' }}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {activeTab === 0 && <CodeGrid items={razorSyntax} />}
      {activeTab === 1 && <CodeGrid items={csharpPatterns} />}
      {activeTab === 2 && <CommandTable sections={efCommands} />}
      {activeTab === 3 && <CommandTable sections={dotnetCli} />}
    </div>
  )
}