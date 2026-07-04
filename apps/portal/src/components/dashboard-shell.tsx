"use client";

import Link from "next/link";
import type { AuthUser } from "@koro/api-client";
import { Button } from "@koro/ui";
import { useAuth } from "@/lib/auth-context";

const navItems = [
  { label: "Overview", href: "/dashboard", active: true },
  { label: "Orders", href: "#", active: false },
  { label: "Customers", href: "#", active: false },
  { label: "Analytics", href: "#", active: false },
  { label: "Settings", href: "#", active: false },
];

export function DashboardShell({
  user,
  children,
}: {
  user: AuthUser;
  children: React.ReactNode;
}) {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex portal-grid-bg">
      <aside className="hidden md:flex w-64 flex-col border-r border-koro-border bg-koro-surface/80 backdrop-blur-sm">
        <div className="p-6 border-b border-koro-border">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-koro-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-display text-xl text-koro-ink">Koro</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-koro-accent/15 text-koro-accent"
                  : "text-koro-muted hover:text-koro-ink hover:bg-koro-raised"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-koro-border">
          <div className="flex items-center gap-3 px-2 mb-4">
            <div className="w-9 h-9 rounded-full bg-koro-teal/20 flex items-center justify-center text-koro-teal font-semibold text-sm">
              {user.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-koro-ink truncate">
                {user.name}
              </p>
              <p className="text-xs text-koro-muted truncate">{user.email}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" fullWidth onClick={() => logout()}>
            Sign out
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="md:hidden flex items-center justify-between p-4 border-b border-koro-border bg-koro-surface/80 backdrop-blur-sm">
          <Link href="/dashboard" className="font-display text-xl text-koro-ink">
            Koro
          </Link>
          <Button variant="ghost" size="sm" onClick={() => logout()}>
            Sign out
          </Button>
        </header>

        <main className="flex-1 p-6 md:p-10 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
