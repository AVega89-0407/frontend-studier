import { useState } from 'react'
import { gitCommands } from '../data/gitCommands'

export default function GitPage() {
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState(null)

  const handleCopy = (cmd) => {
    navigator.clipboard.writeText(cmd)
    setCopied(cmd)
    setTimeout(() => setCopied(null), 2000)
  }

  const filtered = gitCommands.map((section) => ({
    ...section,
    commands: section.commands.filter(
      (c) =>
        c.cmd.toLowerCase().includes(search.toLowerCase()) ||
        c.desc.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((s) => s.commands.length > 0)

  return (
    <div>
      <h1 className="h4 fw-semibold mb-1">Git-kommandon</h1>
      <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
        Klicka på ett kommando för att kopiera det.
      </p>

      <input
        type="search"
        className="form-control mb-4"
        placeholder="Sök kommando eller beskrivning..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ maxWidth: 400 }}
      />

      <div className="d-flex flex-column gap-4">
        {filtered.map((section) => (
          <div key={section.category}>
            <h2 className="h6 text-muted mb-2" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              {section.category}
            </h2>
            <div className="card">
              <div className="list-group list-group-flush">
                {section.commands.map((item) => (
                  <button
                    key={item.cmd}
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    style={{ fontSize: '14px' }}
                    onClick={() => handleCopy(item.cmd)}
                  >
                    <code style={{ color: '#0d6efd', fontSize: '13px' }}>{item.cmd}</code>
                    <div className="d-flex align-items-center gap-3">
                      <span className="text-muted">{item.desc}</span>
                      <span style={{ fontSize: '12px', color: copied === item.cmd ? 'green' : 'transparent', minWidth: 60 }}>
                        {copied === item.cmd ? '✓ Kopierat' : ''}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}