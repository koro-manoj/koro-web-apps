const metrics = [
  { value: "40%", label: "Faster reporting cycles" },
  { value: "2.4×", label: "Increase in team visibility" },
  { value: "99.9%", label: "Platform uptime SLA" },
  { value: "500+", label: "Teams onboarded" },
];

export function MetricsSection() {
  return (
    <section id="results" className="py-20 bg-brand-navy text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(196,92,38,0.15), transparent), radial-gradient(ellipse 50% 60% at 80% 50%, rgba(74,124,111,0.12), transparent)",
        }}
        aria-hidden
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center md:text-left animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s`, opacity: 0 }}
            >
              <p className="font-display text-4xl md:text-5xl text-brand-copper mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-white/60 leading-snug">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
