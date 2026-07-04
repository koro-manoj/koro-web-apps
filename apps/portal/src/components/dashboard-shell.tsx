"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AuthUser } from "@koro/api-client";
import { Badge, Button } from "@koro/ui";
import { useAuth } from "@/lib/auth-context";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: "◫" },
  { label: "Orders", href: "/dashboard/orders", icon: "◈" },
  { label: "Customers", href: "/dashboard/customers", icon: "◎" },
  { label: "Analytics", href: "/dashboard/analytics", icon: "◉" },
  { label: "Settings", href: "/dashboard/settings", icon: "⚙" },
];

export function DashboardShell({
  user,
  children,
}: {
  user: AuthUser;
  children: React.ReactNode;
}) {
  const { logout } = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex portal-grid-bg">
      <aside className="hidden md:flex w-64 flex-col border-r border-koro-border bg-koro-surface/80 backdrop-blur-sm">
        <SidebarBrand />
        <SidebarNav pathname={pathname} />
        <SidebarUser user={user} onLogout={() => logout()} />
      </aside>

      {mobileNavOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-koro-ink/60 backdrop-blur-sm"
          onClick={() => setMobileNavOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 flex flex-col border-r border-koro-border bg-koro-surface transition-transform duration-300 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarBrand />
        <SidebarNav pathname={pathname} onNavigate={() => setMobileNavOpen(false)} />
        <SidebarUser user={user} onLogout={() => logout()} />
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="md:hidden flex items-center justify-between p-4 border-b border-koro-border bg-koro-surface/80 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setMobileNavOpen(true)}
            className="p-2 -ml-2 text-koro-muted hover:text-koro-ink transition-colors"
            aria-label="Open navigation"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
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

function SidebarBrand() {
  return (
    <div className="p-6 border-b border-koro-border">
      <Link href="/dashboard" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-koro-accent flex items-center justify-center shadow-lg shadow-koro-accent/20">
          <span className="text-white font-bold text-sm">K</span>
        </div>
        <div>
          <span className="font-display text-xl text-koro-ink block leading-none">Koro</span>
          <span className="text-[10px] uppercase tracking-widest text-koro-muted font-semibold">
            Portal
          </span>
        </div>
      </Link>
    </div>
  );
}

function SidebarNav({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className="flex-1 p-4 space-y-1">
      {navItems.map((item) => {
        const active = item.href === pathname;
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              active
                ? "bg-koro-accent/15 text-koro-accent"
                : "text-koro-muted hover:text-koro-ink hover:bg-koro-raised"
            }`}
          >
            <span className="text-base opacity-70">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarUser({
  user,
  onLogout,
}: {
  user: AuthUser;
  onLogout: () => void;
}) {
  return (
    <div className="p-4 border-t border-koro-border">
      <div className="flex items-center gap-3 px-2 mb-4">
        <div className="w-9 h-9 rounded-full bg-koro-teal/20 flex items-center justify-center text-koro-teal font-semibold text-sm ring-2 ring-koro-teal/10">
          {user.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-koro-ink truncate">{user.name}</p>
          <p className="text-xs text-koro-muted truncate">{user.email}</p>
        </div>
        <Badge variant="success">Active</Badge>
      </div>
      <Button variant="ghost" size="sm" fullWidth onClick={onLogout}>
        Sign out
      </Button>
    </div>
  );
}
