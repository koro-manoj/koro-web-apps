"use client";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatsGrid } from "@/components/stats-grid";
import { useAuth } from "@/lib/auth-context";
import { mockDashboardOverview } from "@/lib/mock-data";

export default function AnalyticsPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <DashboardShell user={user}>
      <header className="mb-8">
        <h1 className="font-display text-3xl text-koro-ink">Analytics</h1>
        <p className="text-koro-muted mt-1">Performance trends and conversion metrics.</p>
      </header>

      <StatsGrid stats={mockDashboardOverview.stats} />

      <section className="mt-10 rounded-2xl border border-koro-border bg-koro-surface p-6">
        <h2 className="font-semibold text-koro-ink mb-4">Conversion funnel</h2>
        <div className="space-y-4">
          {[
            { label: "Site visits", value: 48200, width: "100%" },
            { label: "Sign-ups", value: 3840, width: "68%" },
            { label: "Trials started", value: 1920, width: "42%" },
            { label: "Paid conversions", value: 820, width: "24%" },
          ].map((step) => (
            <div key={step.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-koro-muted">{step.label}</span>
                <span className="font-medium text-koro-ink">{step.value.toLocaleString()}</span>
              </div>
              <div className="h-2 rounded-full bg-koro-raised overflow-hidden">
                <div className="h-full bg-koro-accent rounded-full" style={{ width: step.width }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
