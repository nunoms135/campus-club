import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Clubs from './pages/Clubs'
import ClubDetail from './pages/ClubDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'

const STORAGE_KEY = 'campus-club-finder-joined'

export default function App() {
  const [joined, setJoined] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(joined)) } catch { /* Storage may be disabled */ }
  }, [joined])

  const joinClub = (clubId) => setJoined(current => current.includes(clubId) ? current : [...current, clubId])

  return <div className="min-h-screen bg-paper text-ink">
    <Navbar joinedCount={joined.length} />
    <Routes>
      <Route path="/" element={<Home joined={joined} />} />
      <Route path="/clubs" element={<Clubs joined={joined} />} />
      <Route path="/clubs/:clubId" element={<ClubDetail joined={joined} onJoin={joinClub} />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <footer className="border-t border-black/[0.07] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-semibold text-ink">Campus <span className="text-forest">Club</span> <span className="font-normal text-muted">© 2026 Campus Club Finder</span></p>
        <p>Made for finding your people, one club at a time.</p>
      </div>
    </footer>
  </div>
}