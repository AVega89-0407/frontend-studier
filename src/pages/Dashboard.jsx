import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-regular-svg-icons'
import { faBootstrap, faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faMicrosoft } from '@fortawesome/free-brands-svg-icons'

// 1. Uppdaterade ikoner i arrayen (notera att faCss byttes till faCss3Alt för free-brands)
const cards = [
  {
    to: '/bootstrap',
    icon: faBootstrap,
    title: 'Bootstrap',
    desc: 'Komponenter, grid och utility-klasser med levande preview.',
    color: '#6610f2',
    bg: '#f3eeff',
  },
  {
    to: '/html',
    icon: faHtml5,
    title: 'HTML',
    desc: 'Semantik, formulär, tillgänglighet och SEO-taggar.',
    color: '#e8590c',
    bg: '#fff0e6',
  },
  {
    to: '/css',
    icon: faCss3Alt, // Ändrad till faCss3Alt då 'faCss' inte finns i brands
    title: 'CSS',
    desc: 'Flexbox, grid, positionering och vanliga utility-mönster.',
    color: '#0d6efd',
    bg: '#e8f0fe',
  },
  {
    to: '/js',
    icon: faJs,
    title: 'JavaScript',
    desc: 'Variabler, array-metoder, async och vanliga mönster.',
    color: '#c9a800',
    bg: '#fefbe6',
  },
  {
    to: '/react',
    icon: faReact,
    title: 'React',
    desc: 'Hooks, props, villkorlig rendering och vanliga mönster.',
    color: '#0ca678',
    bg: '#e6f7f2',
  },
  {
    to: '/git',
    icon: faGitAlt,
    title: 'Git',
    desc: 'Kommandon för grenar, historik, ångra och remote.',
    color: '#f76707',
    bg: '#fff3e8',
  },
  {
    to: '/aspnet',
    icon: faMicrosoft, // Använder faHouse som du importerade (eller byt till valfri ikon)
    title: 'ASP.NET',
    desc: 'Razor-syntax, C#-mönster, Entity Framework och dotnet CLI.',
    color: '#d6336c',
    bg: '#fdeef4',
  },
]

const tips = [
  { icon: '💡', text: 'Klicka på ett kommando i Git- eller ASP.NET-sidan för att kopiera det direkt.' },
  { icon: '📋', text: 'Alla kodexempel har en kopiera-knapp uppe till höger.' },
  { icon: '🔍', text: 'Git-sidan har sökfunktion — filtrera på kommando eller beskrivning.' },
]

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 5) return 'God natt'
  if (hour < 10) return 'God morgon'
  if (hour < 13) return 'God förmiddag'
  if (hour < 18) return 'God eftermiddag'
  return 'God kväll'
}

export default function Dashboard() {
  const today = new Date().toLocaleDateString('sv-SE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div>
      {/* Hälsning */}
      <div className="mb-5">
        <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
          {today}
        </p>
        <h1 className="fw-semibold mb-1" style={{ fontSize: '26px' }}>
          {getGreeting()}
        </h1>
        <p className="text-muted" style={{ fontSize: '15px', maxWidth: 500 }}>
          Din personliga referens för frontend-studier. Välj en sektion nedan för att komma igång.
        </p>
      </div>

      {/* Sektionskort */}
      <h2
        className="mb-3"
        style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#6c757d' }}
      >
        Sektioner
      </h2>
      <div className="row g-3 mb-5">
        {cards.map((card) => (
          <div key={card.to} className="col-md-4">
            <Link
              to={card.to}
              className="text-decoration-none"
            >
              <div
                className="card h-100"
                style={{
                  border: '0.5px solid #e9ecef',
                  borderRadius: '12px',
                  transition: 'box-shadow 0.15s, transform 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div className="card-body">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '10px',
                      background: card.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      marginBottom: '12px',
                    }}
                  >
                    {/* 2. Här ritas Font Awesome-ikonen ut med dynamisk färg */}
                    <FontAwesomeIcon icon={card.icon} style={{ color: card.color }} />
                  </div>
                  <h3
                    className="mb-1"
                    style={{ fontSize: '15px', fontWeight: 500, color: '#212529' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mb-0 text-muted"
                    style={{ fontSize: '13px', lineHeight: 1.5 }}
                  >
                    {card.desc}
                  </p>
                </div>
                <div
                  className="card-footer bg-white d-flex align-items-center"
                  style={{
                    borderTop: '0.5px solid #f1f3f5',
                    borderRadius: '0 0 12px 12px',
                    fontSize: '13px',
                    color: card.color,
                    fontWeight: 500,
                    padding: '10px 16px',
                  }}
                >
                  Öppna {card.title} →
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Tips */}
      <h2
        className="mb-3"
        style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#6c757d' }}
      >
        Tips
      </h2>
      <div className="card" style={{ border: '0.5px solid #e9ecef', borderRadius: '12px' }}>
        <div className="list-group list-group-flush">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="list-group-item d-flex align-items-start gap-3"
              style={{ fontSize: '14px', border: 'none', padding: '14px 16px' }}
            >
              <span style={{ fontSize: '16px' }}>{tip.icon}</span>
              <span className="text-muted">{tip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}