import type { DashboardStats } from "@koro/api-client";
import { Badge } from "@koro/ui";

type StatKey = keyof DashboardStats;

const statConfig: Record<
  StatKey,
  { label: string; format: (v: number) => string; accent: string; bar: string }
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
    bar: "bg-koro-accent",
  },
  orders: {
    label: "Orders",
    format: (v) => v.toLocaleString(),
    accent: "text-koro-teal",
    bar: "bg-koro-teal",
  },
  customers: {
    label: "Customers",
    format: (v) => v.toLocaleString(),
    accent: "text-koro-ink",
    bar: "bg-koro-ink/40",
  },
  conversion: {
    label: "Conversion",
    format: (v) => `${v.toFixed(2)}%`,
    accent: "text-koro-accent",
    bar: "bg-koro-accent/70",
  },
};

const trendBars = [0.45, 0.62, 0.55, 0.78, 0.68, 0.85, 0.72, 0.92];

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
            className="stat-card-glow rounded-2xl border border-koro-border bg-koro-surface p-6 animate-fade-up group hover:border-koro-accent/30 transition-colors"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-koro-muted">
                {config.label}
              </p>
              <Badge variant={isPositive ? "success" : "danger"}>
                {isPositive ? "↑" : "↓"} {Math.abs(stat.change)}%
              </Badge>
            </div>
            <p className={`font-display text-3xl ${config.accent} mb-4`}>
              {config.format(stat.value)}
            </p>
            <div className="flex items-end gap-1 h-8 mb-2">
              {trendBars.map((height, i) => (
                <span
                  key={i}
                  className={`flex-1 rounded-sm ${config.bar} opacity-40 group-hover:opacity-70 transition-opacity`}
                  style={{ height: `${height * 100}%` }}
                />
              ))}
            </div>
            <p className="text-xs text-koro-muted">{stat.period}</p>
          </article>
        );
      })}
    </div>
  );
}
