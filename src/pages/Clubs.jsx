import { useMemo, useState } from 'react'
import { LayoutGrid, List, ArrowDownAZ, Users } from 'lucide-react'
import { clubs, categories } from '../data/clubs'
import ClubCard from '../components/ClubCard'

export default function Clubs({ joined }) {
  const [sort, setSort] = useState('az')
  const [view, setView] = useState('grid')
  const [category, setCategory] = useState('All clubs')
  const sortedClubs = useMemo(() => {
    return [...clubs]
      .filter(club => category === 'All clubs' || club.category === category)
      .sort((a, b) => sort === 'az' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
  }, [sort, category])

  return <main className="mx-auto min-h-[75vh] max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
    <div className="mb-10">
      <p className="eyebrow">The club directory</p>
      <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Explore the clubs.</h1><p className="mt-3 max-w-xl text-muted">A new interest, a new friend, a new favorite place to be. Start anywhere.</p></div>
        <div className="rounded-2xl bg-white px-4 py-3 text-sm text-muted shadow-sm"><span className="font-bold text-ink">{clubs.length}</span> communities to discover</div>
      </div>
    </div>
    <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-black/[0.06] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2" aria-label="Filter clubs by category">
        {categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-3.5 py-2 text-xs font-bold transition sm:text-sm ${category === item ? 'bg-forest text-white' : 'bg-paper text-muted hover:bg-lime/60 hover:text-forest'}`}>{item}</button>)}
      </div>
      <div className="flex items-center gap-2 self-end sm:self-auto">
        <label htmlFor="club-sort" className="sr-only">Sort clubs</label>
        <span className="text-sm text-muted"><ArrowDownAZ size={17} /></span>
        <select id="club-sort" value={sort} onChange={e => setSort(e.target.value)} className="rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm font-semibold text-ink outline-none focus:ring-2 focus:ring-forest/30">
          <option value="az">Name A–Z</option><option value="za">Name Z–A</option>
        </select>
        <div className="flex rounded-xl bg-paper p-1" aria-label="Choose club layout">
          <button aria-label="Grid view" aria-pressed={view === 'grid'} onClick={() => setView('grid')} className={`rounded-lg p-2 ${view === 'grid' ? 'bg-white text-forest shadow-sm' : 'text-muted'}`}><LayoutGrid size={18} /></button>
          <button aria-label="List view" aria-pressed={view === 'list'} onClick={() => setView('list')} className={`rounded-lg p-2 ${view === 'list' ? 'bg-white text-forest shadow-sm' : 'text-muted'}`}><List size={18} /></button>
        </div>
      </div>
    </div>
    <p className="mb-5 text-sm text-muted">Showing <strong className="text-ink">{sortedClubs.length}</strong> {sortedClubs.length === 1 ? 'club' : 'clubs'}{category !== 'All clubs' ? ` in ${category}` : ''}</p>
    {sortedClubs.length ? <div className={view === 'grid' ? 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-4'}>
      {sortedClubs.map(club => view === 'grid'
        ? <ClubCard key={club.id} club={club} joined={joined.includes(club.id)} />
        : <article key={club.id} className="flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white sm:flex-row">
          <img src={club.image} alt="" className="h-48 w-full object-cover sm:h-auto sm:w-64" loading="lazy" />
          <div className="flex flex-1 flex-col justify-center p-5 sm:p-7"><div className="flex items-center gap-2"><span className="text-xl">{club.icon}</span><span className="text-xs font-bold text-forest">{club.category}</span>{joined.includes(club.id) && <span className="rounded-full bg-lime px-2.5 py-1 text-xs font-bold text-forest">Joined ✓</span>}</div><h2 className="mt-2 text-2xl font-bold text-ink">{club.name}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{club.shortDescription}</p><div className="mt-4 flex flex-wrap items-center justify-between gap-4"><span className="flex items-center gap-1.5 text-xs text-muted"><Users size={15}/>{club.members} members</span><a href={`/clubs/${club.id}`} className="button-dark !px-4 !py-2.5">View details ↗</a></div></div>
        </article>
      )}
    </div> : <div className="rounded-3xl border border-dashed border-black/15 bg-white py-16 text-center"><p className="text-lg font-bold text-ink">No clubs in this category yet.</p><button onClick={() => setCategory('All clubs')} className="mt-3 font-semibold text-forest underline">Show all clubs</button></div>}
  </main>
}