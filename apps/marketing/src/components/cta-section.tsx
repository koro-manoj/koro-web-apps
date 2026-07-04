import { PORTAL_LOGIN_URL } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay pointer-events-none" aria-hidden />
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <h2 className="font-display text-4xl md:text-5xl text-brand-navy tracking-tight">
          Ready to bring clarity to your operations?
        </h2>
        <p className="mt-6 text-lg text-brand-slate leading-relaxed">
          Join teams who replaced scattered tools with one platform built for
          the way they actually work.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={PORTAL_LOGIN_URL} className="cta-primary">
            Open the portal
          </a>
          <a href="#features" className="cta-secondary">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
