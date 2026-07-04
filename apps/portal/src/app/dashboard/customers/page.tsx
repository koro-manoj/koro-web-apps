"use client";

import { DashboardShell } from "@/components/dashboard-shell";
import { useAuth } from "@/lib/auth-context";

const customers = [
  { name: "Acme Industries", email: "ops@acme.io", plan: "Enterprise", mrr: 2499 },
  { name: "Meridian Labs", email: "hello@meridian.io", plan: "Pro", mrr: 149 },
  { name: "Northwind Traders", email: "billing@northwind.io", plan: "Pro", mrr: 899 },
  { name: "Summit Health", email: "admin@summit.health", plan: "Enterprise", mrr: 4200 },
];

export default function CustomersPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <DashboardShell user={user}>
      <header className="mb-8">
        <h1 className="font-display text-3xl text-koro-ink">Customers</h1>
        <p className="text-koro-muted mt-1">Accounts and subscription tiers.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {customers.map((customer) => (
          <article
            key={customer.email}
            className="rounded-2xl border border-koro-border bg-koro-surface p-6 hover:border-koro-accent/30 transition-colors"
          >
            <h2 className="font-semibold text-koro-ink">{customer.name}</h2>
            <p className="text-sm text-koro-muted mt-1">{customer.email}</p>
            <dl className="mt-4 flex gap-6 text-sm">
              <div>
                <dt className="text-koro-muted text-xs uppercase tracking-wider">Plan</dt>
                <dd className="font-medium text-koro-ink mt-1">{customer.plan}</dd>
              </div>
              <div>
                <dt className="text-koro-muted text-xs uppercase tracking-wider">MRR</dt>
                <dd className="font-medium text-koro-accent mt-1">${customer.mrr.toLocaleString()}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </DashboardShell>
  );
}
