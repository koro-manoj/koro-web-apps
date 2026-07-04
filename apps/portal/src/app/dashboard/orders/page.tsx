"use client";

import { DashboardShell } from "@/components/dashboard-shell";
import { useAuth } from "@/lib/auth-context";

const orders = [
  { id: "48291", customer: "Acme Industries", amount: 2499, status: "Fulfilled" },
  { id: "48288", customer: "Northwind Traders", amount: 899, status: "Shipped" },
  { id: "48285", customer: "Meridian Labs", amount: 149, status: "Processing" },
  { id: "48280", customer: "Summit Health", amount: 4200, status: "Paid" },
];

export default function OrdersPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <DashboardShell user={user}>
      <header className="mb-8">
        <h1 className="font-display text-3xl text-koro-ink">Orders</h1>
        <p className="text-koro-muted mt-1">Recent order activity across your workspace.</p>
      </header>

      <div className="rounded-2xl border border-koro-border bg-koro-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-koro-raised/60 text-left text-koro-muted uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3">Order</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-koro-border">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-koro-raised/40">
                <td className="px-6 py-4 font-medium text-koro-ink">#{order.id}</td>
                <td className="px-6 py-4 text-koro-muted">{order.customer}</td>
                <td className="px-6 py-4 text-koro-accent">${order.amount.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-koro-teal/10 text-koro-teal">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
