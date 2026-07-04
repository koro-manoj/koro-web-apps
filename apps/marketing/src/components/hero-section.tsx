export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="max-w-3xl">
          <p
            className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-brand-copper mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            Operations Platform
          </p>

          <h1
            className="font-display text-5xl md:text-7xl text-brand-navy leading-[1.05] tracking-tight animate-slide-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            See your business
            <br />
            <span className="text-brand-sage italic">with clarity.</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-brand-slate leading-relaxed max-w-xl animate-slide-up"
            style={{ animationDelay: "0.35s", opacity: 0 }}
          >
            Koro unifies orders, customers, and analytics into one workspace —
            so your team moves faster with fewer blind spots.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <a
              href="#pricing"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-copper rounded-lg hover:bg-brand-copper/90 transition-all hover:shadow-lg hover:shadow-brand-copper/20"
            >
              Start free trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-brand-navy border border-brand-navy/15 rounded-lg hover:border-brand-navy/30 transition-colors"
            >
              Explore features
            </a>
          </div>
        </div>

        <div
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-brand-copper/10 animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <div className="absolute inset-8 rounded-full border border-brand-sage/15" />
          <div className="absolute inset-16 rounded-full bg-brand-copper/5" />
        </div>
      </div>
    </section>
  );
}
