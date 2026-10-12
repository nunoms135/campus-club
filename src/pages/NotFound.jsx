import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'
export default function NotFound() {
  return <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-20 text-center"><span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-lime text-forest"><Compass size={30}/></span><p className="mt-7 text-sm font-bold uppercase tracking-[.18em] text-forest">404 · Wrong turn?</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">This page wandered off.</h1><p className="mt-4 max-w-md leading-7 text-muted">We couldn’t find the page you’re looking for. Let’s get you back to familiar campus ground.</p><Link to="/" className="button-dark mt-7"><ArrowLeft size={17}/> Back to home</Link></main>
}