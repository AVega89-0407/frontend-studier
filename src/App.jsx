import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import BootstrapPage from './pages/BootstrapPage'
import CSSCheatSheet from './pages/CSSCheatSheet'
import ReactCheatSheet from './pages/ReactCheatSheet'
import GitPage from './pages/GitPage'
import AspNetPage from './pages/AspNetPage'
import JSCheatSheet from './pages/JSCheatSheet'
import HTMLCheatSheet from './pages/HTMLCheatSheet'

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/start" replace />} />
            <Route path='/start' element={<Dashboard />} />
            <Route path="/bootstrap" element={<BootstrapPage />} />
            <Route path="/html" element={<HTMLCheatSheet />} />
            <Route path="/css" element={<CSSCheatSheet />} />
            <Route path="/js"   element={<JSCheatSheet />} />
            <Route path="/react" element={<ReactCheatSheet />} />
            <Route path="/git" element={<GitPage />} />
            <Route path="/aspnet" element={<AspNetPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}