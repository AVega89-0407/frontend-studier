import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-regular-svg-icons'
import { faBootstrap, faHtml5, faCss, faJs, faReact, faGitAlt, faMicrosoft } from '@fortawesome/free-brands-svg-icons'

import BuyMeACoffee from './BuyMeACoffee'

const sections = [
      {
    label: 'Start',
    links: [
      { to: '/', icon: <FontAwesomeIcon icon={faHouse} />, label: 'Dashboard' },
    ],
},
  {
    label: 'Komponenter',
    links: [{ to: '/bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} />, label: 'Bootstrap' }],
  },
  {
    label: 'Cheat sheets',
    links: [
      { to: '/html', icon: <FontAwesomeIcon icon={faHtml5} />, label: 'HTML' },
      { to: '/css', icon: <FontAwesomeIcon icon={faCss} />, label: 'CSS' },
      { to: '/js', icon: <FontAwesomeIcon icon={faJs} />, label: 'JavaScript' },
      { to: '/react', icon: <FontAwesomeIcon icon={faReact} />, label: 'React' },
      { to: '/aspnet', icon: <FontAwesomeIcon icon={faMicrosoft} />, label: 'ASP.NET' },
    ],
  },
  {
    label: 'Verktyg',
    links: [{ to: '/git', icon: <FontAwesomeIcon icon={faGitAlt} />, label: 'Git' }],
  },
]

export default function Sidebar() {
  return (
    <nav className="sidebar d-flex flex-column py-3">
      <div style={{ padding: '8px 20px 20px', color: '#fff', fontWeight: 500, fontSize: '15px' }}>
        Frontend Cheat Sheets
      </div>
      {sections.map((section) => (
        <div key={section.label}>
          <p className="nav-section">{section.label}</p>
          {section.links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span style={{ marginRight: 8 }}>{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>
      ))}

      <p>Hoppas dessa cheat sheets hjälper dig!</p>
      <BuyMeACoffee />
    </nav>
  )
}