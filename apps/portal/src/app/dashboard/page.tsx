"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { fetchDashboardOverview } from "@/lib/api";
import type { DashboardOverview } from "@koro/api-client";
import { DashboardShell } from "@/components/dashboard-shell";
import { StatsGrid } from "@/components/stats-grid";
import { ActivityFeed } from "@/components/activity-feed";
import { QuickActions } from "@/components/quick-actions";

export default function DashboardPage() {
  const { user } = useAuth();
  const [overview, setOverview] = useState<DashboardOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboardOverview()
      .then(setOverview)
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Failed to load dashboard")
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardShell user={user!}>
      <header className="mb-10 animate-fade-up flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <p className="text-sm text-koro-muted mb-1">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-display text-4xl text-koro-ink tracking-tight">
            Good {getGreeting()}, {user?.name.split(" ")[0]}
          </h1>
        </div>
        <QuickActions />
      </header>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-32 rounded-2xl bg-koro-surface border border-koro-border animate-pulse"
            />
          ))}
        </div>
      )}

      {error && (
        <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      {overview && (
        <>
          <StatsGrid stats={overview.stats} />
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <ActivityFeed items={overview.recent_activity} />
          </div>
        </>
      )}
    </DashboardShell>
  );
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
}
