import type { ActivityItem } from "@koro/api-client";
import { Card, CardHeader } from "@koro/ui";

const typeIcons: Record<ActivityItem["type"], { icon: string; color: string }> =
  {
    order: { icon: "◈", color: "text-koro-accent bg-koro-accent/15" },
    customer: { icon: "◎", color: "text-koro-teal bg-koro-teal/15" },
    payment: { icon: "◆", color: "text-emerald-400 bg-emerald-400/15" },
    alert: { icon: "△", color: "text-amber-400 bg-amber-400/15" },
  };

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <Card variant="elevated" padding="none">
      <div className="p-6 pb-0">
        <CardHeader
          title="Recent activity"
          subtitle="Latest events across your workspace"
        />
      </div>

      <ul className="divide-y divide-koro-border">
        {items.map((item, index) => {
          const { icon, color } = typeIcons[item.type];

          return (
            <li
              key={item.id}
              className="flex items-start gap-4 px-6 py-4 hover:bg-koro-raised/50 transition-colors animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <span
                className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm ${color}`}
              >
                {icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-koro-ink">{item.title}</p>
                <p className="text-sm text-koro-muted mt-0.5">
                  {item.description}
                </p>
              </div>
              <time className="text-xs text-koro-muted whitespace-nowrap">
                {formatRelativeTime(item.timestamp)}
              </time>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

function formatRelativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
