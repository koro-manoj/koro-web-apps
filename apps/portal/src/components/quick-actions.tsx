"use client";

import Link from "next/link";
import { Button } from "@koro/ui";

const actions = [
  { label: "New order", href: "/dashboard/orders", variant: "primary" as const },
  { label: "Export report", href: "/dashboard/analytics", variant: "secondary" as const },
  { label: "Invite member", href: "/dashboard/settings", variant: "ghost" as const },
];

export function QuickActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {actions.map((action) => (
        <Link key={action.label} href={action.href}>
          <Button variant={action.variant} size="sm">
            {action.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
