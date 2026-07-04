const previewStats = [
  { label: "Revenue", value: "$284,500", change: "+12.4%", accent: "text-brand-copper" },
  { label: "Orders", value: "1,847", change: "+8.2%", accent: "text-brand-sage" },
  { label: "Customers", value: "12,430", change: "+5.1%", accent: "text-brand-navy" },
  { label: "Conversion", value: "3.24%", change: "+0.8%", accent: "text-brand-copper" },
];

const previewActivity = [
  { title: "Order #4821 fulfilled", time: "2m ago" },
  { title: "New customer: Acme Corp", time: "18m ago" },
  { title: "Payment received — $4,200", time: "1h ago" },
];

export function HeroPreview() {
  return (
    <div
      className="relative animate-fade-in lg:absolute lg:right-8 xl:right-12 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-md mx-auto lg:mx-0 mt-16 lg:mt-0"
      style={{ animationDelay: "0.55s", opacity: 0 }}
    >
      <div className="absolute -inset-4 rounded-3xl bg-brand-copper/10 blur-2xl" aria-hidden />
      <div className="relative rounded-2xl border border-brand-navy/10 bg-white shadow-2xl shadow-brand-navy/10 overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-brand-navy/8 bg-brand-cream/80">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-auto text-[11px] font-medium text-brand-slate/70 tracking-wide">
            portal.koro.io
          </span>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-brand-slate/60 font-semibold">
                Overview
              </p>
              <p className="font-display text-lg text-brand-navy mt-0.5">
                Good morning, Demo
              </p>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-sage/10 text-brand-sage">
              Live
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {previewStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-brand-navy/6 bg-brand-cream/50 p-3"
              >
                <p className="text-[10px] uppercase tracking-wider text-brand-slate/60 font-semibold">
                  {stat.label}
                </p>
                <p className={`font-display text-lg ${stat.accent} mt-1`}>
                  {stat.value}
                </p>
                <p className="text-[11px] text-emerald-600 font-medium mt-0.5">
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-brand-navy/6 overflow-hidden">
            <div className="px-3 py-2 border-b border-brand-navy/6 bg-brand-cream/40">
              <p className="text-[11px] font-semibold text-brand-navy">
                Recent activity
              </p>
            </div>
            <ul className="divide-y divide-brand-navy/5">
              {previewActivity.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-between gap-3 px-3 py-2.5 text-xs"
                >
                  <span className="text-brand-slate truncate">{item.title}</span>
                  <span className="text-brand-slate/50 whitespace-nowrap shrink-0">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
