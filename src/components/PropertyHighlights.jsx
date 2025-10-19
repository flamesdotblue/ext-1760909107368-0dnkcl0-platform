import { MapPin, Star } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Skyline Penthouse',
    location: 'Downtown, Metropolis',
    price: '$2,450,000',
    image:
      'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTa3lsaW5lJTIwUGVudGhvdXNlfGVufDB8MHx8fDE3NjA5MDkxNjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Modern Family Villa',
    location: 'Oakridge, Suburbia',
    price: '$985,000',
    image:
      'https://images.unsplash.com/photo-1696237461860-630be53f179c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYW1pbHklMjBWaWxsYXxlbnwwfDB8fHwxNzYwOTA5MTY3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Curated Urban Loft',
    location: 'Arts District',
    price: '$725,000',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function PropertyHighlights() {
  return (
    <section id="highlights" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-center gap-2 text-white/80">
        <Star className="h-5 w-5 text-yellow-300" />
        <span className="text-sm">Showcase listings beautifully</span>
      </div>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Property highlights that win attention
        </h2>
        <p className="max-w-lg text-white/70">
          Capture interest with elegant cards, crisp photos, interactive maps, and instant inquiry forms — optimized for both desktop and mobile.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg transition hover:shadow-xl"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <div className="mt-1 flex items-center gap-1 text-sm text-white/70">
                <MapPin className="h-4 w-4" /> {p.location}
              </div>
              <div className="mt-3 text-base font-medium text-white">{p.price}</div>
              <div className="mt-4 flex gap-2">
                <button className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10">
                  Details
                </button>
                <button className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-white/90">
                  Inquire
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
