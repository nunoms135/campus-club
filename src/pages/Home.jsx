import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Compass, Heart, Sparkles, Users } from 'lucide-react'
import { clubs } from '../data/clubs'
import ClubCard from '../components/ClubCard'

export default function Home({ joined }) {
  return <main>
    <section className="hero-wrap overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-24">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[.13em] text-forest">
            <Sparkles size={14} /> Your campus, your community
          </div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-.055em] text-ink sm:text-6xl lg:text-[4.5rem]">Your people are <span className="font-serif italic text-forest">out there.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Find the club that feels like you. Explore interests, meet your kind of people, and make campus life more than just classes.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/clubs" className="button-dark">Explore all clubs <ArrowRight size={18} /></Link>
            <Link to="/about" className="button-light">How it works</Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-black/10 pt-6">
            <div className="flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime"><Users size={17} /></span><div><p className="text-lg font-bold leading-5">5</p><p className="text-xs text-muted">student clubs</p></div></div>
            <div className="flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white"><Heart size={17} /></span><div><p className="text-lg font-bold leading-5">593+</p><p className="text-xs text-muted">club members</p></div></div>
            <div className="flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white"><Compass size={17} /></span><div><p className="text-lg font-bold leading-5">1</p><p className="text-xs text-muted">campus community</p></div></div>
          </div>
        </div>
        <div className="hero-art relative mx-auto w-full max-w-[580px]">
          <div className="absolute -left-3 top-8 z-10 rounded-2xl bg-white p-4 shadow-soft sm:-left-8">
            <div className="flex -space-x-2"><span className="avatar bg-[#f3b69d]">J</span><span className="avatar bg-[#c4d8ac]">A</span><span className="avatar bg-[#d4c4ee]">M</span><span className="avatar bg-[#f4d47a]">+</span></div>
            <p className="mt-2 text-xs font-bold text-ink">Good things happen together</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] rounded-bl-[6rem]">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1300&q=90" alt="A group of university friends enjoying time together outdoors" className="h-[360px] w-full object-cover sm:h-[490px]" />
          </div>
          <div className="absolute -bottom-5 right-3 max-w-[245px] rounded-2xl bg-lime p-4 shadow-soft sm:-right-5 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-forest">A little reminder</p>
            <p className="mt-1 text-lg font-bold leading-snug text-forest">The best part of campus is who you meet.</p>
          </div>
          <span className="absolute -right-3 -top-4 -z-10 h-28 w-28 rounded-full border-[18px] border-[#e7eddb] sm:-right-8" />
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
      <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><p className="eyebrow">A place to start</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Find your kind of thing.</h2><p className="mt-3 max-w-xl text-muted">From building robots to making art, there’s a space for what lights you up.</p></div>
        <Link to="/clubs" className="inline-flex items-center gap-2 self-start font-bold text-forest sm:self-auto">All clubs <ArrowUpRight size={18} /></Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clubs.slice(0, 3).map(club => <ClubCard key={club.id} club={club} joined={joined.includes(club.id)} />)}
      </div>
    </section>
    <section className="mx-5 mb-16 overflow-hidden rounded-[2rem] bg-forest sm:mx-8 lg:mx-auto lg:max-w-7xl">
      <div className="flex flex-col justify-between gap-7 px-7 py-10 sm:px-12 sm:py-12 md:flex-row md:items-center">
        <div><p className="eyebrow !text-lime">Your next chapter starts here</p><h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Come as you are. Leave with a community.</h2></div>
        <Link to="/clubs" className="button-lime shrink-0">Meet your club <ArrowRight size={18} /></Link>
      </div>
    </section>
  </main>
}