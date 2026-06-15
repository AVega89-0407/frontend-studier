import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

export default function CodeBlock({ code, language = 'jsx' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-wrap rounded" style={{ fontSize: '13px' }}>
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: '1rem',
              borderRadius: '8px',
              margin: 0,
              overflowX: 'auto',
            }}
          >
            <button
              className="btn btn-sm btn-outline-light copy-btn"
              onClick={handleCopy}
            >
              {copied ? '✓ Kopierat' : 'Kopiera'}
            </button>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}