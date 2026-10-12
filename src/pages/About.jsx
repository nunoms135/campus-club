import { Link } from 'react-router-dom'
import { Compass, HeartHandshake, Laptop, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  { icon: Compass, title: 'Discover', text: 'Browse five student communities across technology, arts, academics, outdoors, and more.' },
  { icon: HeartHandshake, title: 'Get involved', text: 'Open a club profile, learn about its meeting rhythm, and see what events are coming up.' },
  { icon: ShieldCheck, title: 'Keep your choices', text: 'Joining a club is saved locally in your browser—no account or backend needed.' }
]
export default function About() {
  return <main className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
    <section className="max-w-3xl"><p className="eyebrow">A little about us</p><h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">Campus is better <span className="font-serif italic text-forest">together.</span></h1><p className="mt-6 text-lg leading-8 text-muted">Campus Club Finder helps students find their people beyond the classroom. Explore student-led communities, learn what makes each one special, and save the clubs you want to be part of.</p></section>
    <section className="mt-12 grid gap-5 md:grid-cols-3">{features.map(({icon: Icon, title, text}) => <article key={title} className="rounded-3xl border border-black/[0.06] bg-white p-7"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-forest"><Icon size={22}/></span><h2 className="mt-5 text-xl font-bold text-ink">{title}</h2><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>)}</section>
    <section className="mt-14 grid gap-8 rounded-[2rem] bg-forest p-7 text-white sm:p-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
      <div><div className="flex items-center gap-2 text-lime"><Laptop size={20}/><span className="text-xs font-bold uppercase tracking-widest">Built for learning</span></div><h2 className="mt-4 text-3xl font-semibold tracking-tight">The technology behind it.</h2></div>
      <div><p className="leading-7 text-white/75">This single-page app is built with React functional components and Hooks, Vite for development and bundling, React Router for page navigation, and Tailwind CSS for responsive styling. Club information lives in a separate JavaScript data file. Joined club IDs are stored in browser localStorage, so membership persists between visits on the same browser.</p><div className="mt-5 flex flex-wrap gap-2">{['React','Vite','React Router','Tailwind CSS',].map(item => <span key={item} className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold">{item}</span>)}</div></div>
    </section>
    <div className="mt-12 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-bold text-ink">Ready to find your people?</h2><p className="mt-1 text-muted">Your next favorite campus memory could start with a club.</p></div><Link to="/clubs" className="button-dark">Explore clubs <Sparkles size={17}/></Link></div>
  </main>
}