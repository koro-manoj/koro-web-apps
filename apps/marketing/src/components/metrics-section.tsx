const metrics = [
  { value: "40%", label: "Faster reporting cycles" },
  { value: "2.4×", label: "Increase in team visibility" },
  { value: "99.9%", label: "Platform uptime SLA" },
  { value: "500+", label: "Teams onboarded" },
];

export function MetricsSection() {
  return (
    <section id="results" className="py-20 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center md:text-left">
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
