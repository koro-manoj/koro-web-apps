import type { DashboardStats } from "@koro/api-client";

type StatKey = keyof DashboardStats;

const statConfig: Record<
  StatKey,
  { label: string; format: (v: number) => string; accent: string }
> = {
  revenue: {
    label: "Revenue",
    format: (v) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(v),
    accent: "text-koro-accent",
  },
  orders: {
    label: "Orders",
    format: (v) => v.toLocaleString(),
    accent: "text-koro-teal",
  },
  customers: {
    label: "Customers",
    format: (v) => v.toLocaleString(),
    accent: "text-koro-ink",
  },
  conversion: {
    label: "Conversion",
    format: (v) => `${v.toFixed(2)}%`,
    accent: "text-koro-accent",
  },
};

export function StatsGrid({ stats }: { stats: DashboardStats }) {
  const keys = Object.keys(statConfig) as StatKey[];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {keys.map((key, index) => {
        const config = statConfig[key];
        const stat = stats[key];
        const isPositive = stat.change >= 0;

        return (
          <article
            key={key}
            className="stat-card-glow rounded-2xl border border-koro-border bg-koro-surface p-6 animate-fade-up"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-koro-muted mb-3">
              {config.label}
            </p>
            <p className={`font-display text-3xl ${config.accent} mb-3`}>
              {config.format(stat.value)}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span
                className={`inline-flex items-center gap-0.5 font-medium ${
                  isPositive ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {isPositive ? "↑" : "↓"} {Math.abs(stat.change)}%
              </span>
              <span className="text-koro-muted">{stat.period}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
