import { HeroPreview } from "./hero-preview";

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay pointer-events-none" aria-hidden />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="max-w-xl">
            <p
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-brand-copper mb-6 animate-slide-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              Operations Platform
            </p>

            <h1
              className="font-display text-5xl md:text-6xl xl:text-7xl text-brand-navy leading-[1.05] tracking-tight animate-slide-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              See your business
              <br />
              <span className="text-brand-sage italic">with clarity.</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl text-brand-slate leading-relaxed max-w-lg animate-slide-up"
              style={{ animationDelay: "0.35s", opacity: 0 }}
            >
              Koro unifies orders, customers, and analytics into one workspace —
              so your team moves faster with fewer blind spots.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <a href="#pricing" className="cta-primary">
                Start free trial
              </a>
              <a href="#features" className="cta-secondary">
                Explore features
              </a>
            </div>
          </div>

          <HeroPreview />
        </div>
      </div>
    </section>
  );
}
