import Spline from '@splinetool/react-spline';
import { Home, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/20 to-[#0c0c0d]" />
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-[#0c0c0d] to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-white/80" />
            Premium Web for Realtors
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Elevate your real estate brand with a high-converting website
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Showcase listings, capture leads, and grow your business with a modern, lightning-fast site designed for realtors and brokerages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black shadow/50 shadow-black/20 transition hover:bg-white/90"
            >
              <Home className="h-4 w-4" />
              Get a free site audit
            </a>
            <a
              href="#highlights"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
