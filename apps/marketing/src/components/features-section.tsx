const features = [
  {
    number: "01",
    title: "Unified dashboard",
    description:
      "Revenue, orders, customers, and conversion — live metrics in one view with period-over-period context.",
  },
  {
    number: "02",
    title: "Real-time activity",
    description:
      "Track orders, payments, and alerts as they happen. No more refreshing five tabs to stay informed.",
  },
  {
    number: "03",
    title: "Laravel-ready API",
    description:
      "Typed client library connects to your existing Laravel backend. Swap mock mode off when you're ready.",
  },
  {
    number: "04",
    title: "Role-based access",
    description:
      "Granular permissions for admins, managers, and operators. Built for teams that share responsibility.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-copper mb-4">
            Capabilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-brand-navy tracking-tight">
            Everything your ops team needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative pl-6 border-l-2 border-brand-navy/8 hover:border-brand-copper transition-colors duration-300"
            >
              <span className="feature-number text-sm font-semibold text-brand-copper/60 tracking-widest">
                {feature.number}
              </span>
              <h3 className="font-display text-2xl text-brand-navy mt-3 mb-3 group-hover:text-brand-copper transition-colors">
                {feature.title}
              </h3>
              <p className="text-brand-slate leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
