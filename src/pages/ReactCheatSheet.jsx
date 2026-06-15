import CodeBlock from '../components/CodeBlock'

const hooks = [
  {
    name: 'useState',
    desc: 'Hantera lokalt state i en komponent.',
    code: `const [count, setCount] = useState(0)

return (
  <button onClick={() => setCount(count + 1)}>
    Klickad {count} gånger
  </button>
)`,
  },
  {
    name: 'useEffect',
    desc: 'Kör kod när komponenten mountas eller när ett värde ändras.',
    code: `useEffect(() => {
  document.title = \`Du har \${count} meddelanden\`
}, [count])   // körs varje gång count ändras

useEffect(() => {
  fetchData()
}, [])        // [] = körs bara en gång vid mount`,
  },
  {
    name: 'useRef',
    desc: 'Referera direkt till ett DOM-element eller spara ett värde utan re-render.',
    code: `const inputRef = useRef(null)

const focusInput = () => {
  inputRef.current.focus()
}

return <input ref={inputRef} />`,
  },
  {
    name: 'useContext',
    desc: 'Dela state globalt utan prop drilling.',
    code: `const ThemeContext = createContext('light')

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  )
}

function Child() {
  const theme = useContext(ThemeContext)
  return <p>Tema: {theme}</p>
}`,
  },
]

const patterns = [
  {
    name: 'Props',
    code: `function Hälsning({ namn, ålder = 25 }) {
  return <p>Hej {namn}, du är {ålder} år!</p>
}

<Hälsning namn="Anna" ålder={30} />`,
  },
  {
    name: 'Lista med .map()',
    code: `const frukter = ['äpple', 'banan', 'päron']

return (
  <ul>
    {frukter.map((frukt) => (
      <li key={frukt}>{frukt}</li>
    ))}
  </ul>
)`,
  },
  {
    name: 'Villkorlig rendering',
    code: `{isLoggedIn ? (
  <p>Välkommen tillbaka!</p>
) : (
  <button>Logga in</button>
)}

{hasError && <p className="text-danger">Något gick fel.</p>}`,
  },
]

export default function ReactCheatSheet() {
  return (
    <div>
      <h1 className="h4 fw-semibold mb-1">React cheat sheet</h1>
      <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
        Hooks och vanliga mönster du använder hela tiden.
      </p>

      <h2 className="h6 mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6c757d' }}>
        Hooks
      </h2>
      <div className="d-flex flex-column gap-3 mb-5">
        {hooks.map((hook) => (
          <div key={hook.name} className="card">
            <div className="card-header bg-white d-flex align-items-center gap-2">
              <code style={{ color: '#0d6efd', fontSize: '14px' }}>{hook.name}</code>
              <span className="text-muted" style={{ fontSize: '13px' }}>— {hook.desc}</span>
            </div>
            <div className="card-body p-0">
              <CodeBlock code={hook.code} language="jsx" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="h6 mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6c757d' }}>
        Vanliga mönster
      </h2>
      <div className="row g-3">
        {patterns.map((p) => (
          <div key={p.name} className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg-white" style={{ fontSize: '13px', fontWeight: 500 }}>{p.name}</div>
              <div className="card-body p-0">
                <CodeBlock code={p.code} language="jsx" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}