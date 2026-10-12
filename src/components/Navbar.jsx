import { Link, NavLink } from 'react-router-dom'
import { Compass, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ joinedCount = 0 }) {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-forest text-lime"><Compass size={22} /></span>
          <span className="font-bold tracking-tight text-ink">Campus <span className="text-forest">Club</span></span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/clubs" className={linkClass}>Explore clubs</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
        <div className="hidden md:block">
          <Link to="/clubs" className="button-dark !px-5 !py-3">Find your people <span aria-hidden="true">↗</span></Link>
        </div>
        <button className="rounded-xl p-2 text-ink md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && <div className="border-t border-black/5 px-5 pb-5 pt-3 md:hidden">
        <div className="flex flex-col gap-1">
          <NavLink onClick={() => setOpen(false)} to="/" end className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/clubs" className={linkClass}>Explore clubs</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
        </div>
      </div>}
    </header>
  )
}