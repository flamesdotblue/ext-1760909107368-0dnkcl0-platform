import { Mail, Phone } from 'lucide-react';

export default function ContactCTA() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    alert(`Thanks, ${name}! We'll reach out at ${email}.\n\nYour message:\n${message}`);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold tracking-tight">Let’s build your real estate site</h2>
          <p className="mt-3 text-white/70">
            Tell us about your market, services, and goals. We’ll craft a modern website that helps you win more listings and close more deals.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@skylineweb.studio
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> (555) 123-4567
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-white/80">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none placeholder:text-white/40 focus:border-white/40"
                  placeholder="Alex Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-white/80">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none placeholder:text-white/40 focus:border-white/40"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-white/80">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full resize-none rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none placeholder:text-white/40 focus:border-white/40"
                placeholder="Share your timeline, market area, services, and any inspiration sites."
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/50">By submitting, you agree to our terms.</p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Request proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
