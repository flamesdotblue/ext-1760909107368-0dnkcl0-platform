import { Rocket, Search, Users, Building2 } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'High-converting landing pages',
    desc: 'Purpose-built sections, lead magnets, and analytics to turn traffic into appointments.',
  },
  {
    icon: Building2,
    title: 'IDX-ready layouts',
    desc: 'Designed to integrate with IDX/MLS providers so buyers can search and save listings.',
  },
  {
    icon: Search,
    title: 'Local SEO & performance',
    desc: 'Lightning-fast pages, schema, and on-page SEO to rank for your neighborhoods.',
  },
  {
    icon: Users,
    title: 'Client portals & forms',
    desc: 'Simple inquiry forms, showing requests, and CRM-friendly data capture.',
  },
];

export default function Services() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for modern real estate</h2>
        <p className="max-w-2xl text-white/70">
          Everything you need to present properties, build trust, and convert more buyers and sellers — wrapped in a luxurious, contemporary design.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
