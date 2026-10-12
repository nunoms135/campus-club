import { Link } from 'react-router-dom'
import { ArrowUpRight, Users } from 'lucide-react'

export default function ClubCard({ club, joined }) {
  return (
    <article className="club-card group overflow-hidden rounded-3xl border border-black/[0.06] bg-white">
      <Link to={`/clubs/${club.id}`} className="relative block overflow-hidden" aria-label={`View ${club.name} details`}>
        <img src={club.image} alt="" className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink">{club.category}</span>
        {joined && <span className="absolute right-4 top-4 rounded-full bg-lime px-3 py-1.5 text-xs font-bold text-forest">Joined ✓</span>}
      </Link>
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight text-ink">{club.name}</h3>
          <span className="text-2xl" aria-hidden="true">{club.icon}</span>
        </div>
        <p className="min-h-[48px] text-sm leading-6 text-muted">{club.shortDescription}</p>
        <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted"><Users size={15} /> {club.members} members</span>
          <Link to={`/clubs/${club.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-forest hover:gap-2">
            Details <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}