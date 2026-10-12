import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, MapPin, Users, CheckCircle2 } from 'lucide-react'
import { clubs } from '../data/clubs'

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function ClubDetail({ joined, onJoin }) {
  const { clubId } = useParams()
  const club = clubs.find(item => item.id === clubId)
  if (!club) return <main className="mx-auto min-h-[70vh] max-w-4xl px-5 py-20 text-center"><h1 className="text-3xl font-bold">Club not found</h1><p className="mt-3 text-muted">This club may have moved or no longer exists.</p><Link className="button-dark mt-6 inline-flex" to="/clubs">Back to clubs</Link></main>
  const hasJoined = joined.includes(club.id)
  return <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
    <Link to="/clubs" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-forest"><ArrowLeft size={17}/> All clubs</Link>
    <section className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-[1.05fr_.95fr]">
      <div className="relative min-h-[300px] lg:min-h-[520px]"><img src={club.image} alt={`${club.name} community`} className="absolute inset-0 h-full w-full object-cover"/><span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-forest">{club.category}</span></div>
      <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
        <div className="mb-4 text-4xl" aria-hidden="true">{club.icon}</div>
        <p className="eyebrow">Find your community</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{club.name}</h1>
        <p className="mt-5 leading-7 text-muted">{club.description}</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted"><span className="flex items-center gap-2"><Users size={17}/>{club.members} members</span><span className="flex items-center gap-2"><Clock3 size={17}/>{club.meeting}</span></div>
        <p className="mt-3 flex items-center gap-2 text-sm text-muted"><MapPin size={17}/>{club.location}</p>
        <div className="mt-8">
          {hasJoined
            ? <div role="status" className="flex items-center gap-2 rounded-2xl bg-[#eff6df] px-5 py-4 font-bold text-forest"><CheckCircle2 size={21}/> You have joined this club!</div>
            : <button onClick={() => onJoin(club.id)} className="button-dark w-full justify-center sm:w-auto">Join this club <ArrowUpRight size={18}/></button>}
          <p className="mt-3 text-xs text-muted">{hasJoined ? 'Your membership is saved in this browser.' : 'Free to join · Your choice is saved on this device.'}</p>
        </div>
      </div>
    </section>
    <section className="py-14 sm:py-16">
      <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="eyebrow">Save the date</p><h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">Upcoming events</h2></div><p className="text-sm text-muted">Meet the members in real life.</p></div>
      <div className="grid gap-4 md:grid-cols-2">
        {club.events.map((event, index) => <article key={event.name} className="flex gap-4 rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6">
          <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-lime text-forest"><CalendarDays size={19}/><span className="mt-0.5 text-[9px] font-bold uppercase">Event</span></div>
          <div><p className="text-xs font-bold uppercase tracking-wider text-forest">Event 0{index + 1} · {formatDate(event.date)}</p><h3 className="mt-1 text-lg font-bold text-ink">{event.name}</h3><p className="mt-2 text-sm text-muted">{event.time} · {event.location}</p></div>
        </article>)}
      </div>
    </section>
  </main>
}