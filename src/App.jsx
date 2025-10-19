import Hero from './components/Hero';
import PropertyHighlights from './components/PropertyHighlights';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0d] text-white">
      <Hero />
      <PropertyHighlights />
      <Services />
      <ContactCTA />
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Skyline Realty Web. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
