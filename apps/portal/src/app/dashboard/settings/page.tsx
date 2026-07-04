"use client";

import { Button, Card, Input } from "@koro/ui";
import { DashboardShell } from "@/components/dashboard-shell";
import { useAuth } from "@/lib/auth-context";

export default function SettingsPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <DashboardShell user={user}>
      <header className="mb-8">
        <h1 className="font-display text-3xl text-koro-ink">Settings</h1>
        <p className="text-koro-muted mt-1">Profile and workspace preferences.</p>
      </header>

      <div className="max-w-xl space-y-6">
        <Card variant="elevated" padding="lg">
          <h2 className="font-semibold text-koro-ink mb-4">Profile</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input label="Name" defaultValue={user.name} />
            <Input label="Email" type="email" defaultValue={user.email} />
            <Button type="submit" size="sm">Save changes</Button>
          </form>
        </Card>

        <Card padding="lg">
          <h2 className="font-semibold text-koro-ink mb-2">API connection</h2>
          <p className="text-sm text-koro-muted mb-4">
            Backend URL is configured via <code className="text-koro-accent">NEXT_PUBLIC_API_URL</code>.
            Mock mode uses seeded demo data when <code className="text-koro-accent">NEXT_PUBLIC_USE_MOCK_API=true</code>.
          </p>
        </Card>
      </div>
    </DashboardShell>
  );
}
