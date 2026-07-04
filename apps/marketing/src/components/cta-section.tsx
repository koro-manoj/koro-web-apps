export function CtaSection() {
  return (
    <section className="py-24 md:py-32 hero-gradient">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-brand-navy tracking-tight">
          Ready to bring clarity to your operations?
        </h2>
        <p className="mt-6 text-lg text-brand-slate leading-relaxed">
          Join teams who replaced scattered tools with one platform built for
          the way they actually work.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="http://localhost:3000/login"
            className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white bg-brand-copper rounded-lg hover:bg-brand-copper/90 transition-all hover:shadow-lg hover:shadow-brand-copper/20"
          >
            Open the portal
          </a>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 text-sm font-semibold text-brand-navy border border-brand-navy/15 rounded-lg hover:border-brand-navy/30 transition-colors"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
