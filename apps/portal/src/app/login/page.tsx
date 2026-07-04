"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Input } from "@koro/ui";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { login, user, loading: authLoading } = useAuth();
  const [email, setEmail] = useState("demo@koro.io");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center portal-grid-bg">
        <div className="w-8 h-8 border-2 border-koro-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (user) {
    router.replace("/dashboard");
    return null;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await login({ email, password });
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex portal-grid-bg">
      <aside className="hidden lg:flex lg:w-[45%] relative overflow-hidden bg-koro-surface border-r border-koro-border">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(196,92,38,0.25), transparent), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(26,127,122,0.15), transparent)",
          }}
        />
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-koro-accent mb-8">
              Koro Platform
            </span>
            <h1 className="font-display text-5xl xl:text-6xl text-koro-ink leading-[1.1] tracking-tight">
              Operations
              <br />
              <em className="text-koro-teal not-italic">redefined.</em>
            </h1>
          </div>
          <blockquote className="max-w-sm">
            <p className="text-koro-muted text-lg leading-relaxed">
              &ldquo;Koro gave us visibility we never had. Every metric, every
              order — in one place.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-koro-muted">
              — Sarah Chen, VP Operations
            </footer>
          </blockquote>
        </div>
      </aside>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-up">
          <div className="mb-10 lg:hidden">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-koro-accent">
              Koro Portal
            </span>
            <h1 className="font-display text-3xl text-koro-ink mt-2">
              Sign in
            </h1>
          </div>

          <div className="hidden lg:block mb-10">
            <h2 className="font-display text-3xl text-koro-ink">Welcome back</h2>
            <p className="text-koro-muted mt-2">
              Enter your credentials to access the dashboard.
            </p>
          </div>

          <Card variant="elevated" padding="lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                autoComplete="email"
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />

              {error && (
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}

              <Button type="submit" loading={submitting} fullWidth size="lg">
                Sign in
              </Button>
            </form>
          </Card>

          <p className="mt-8 text-center text-sm text-koro-muted">
            Demo credentials:{" "}
            <code className="text-koro-accent bg-koro-accent/10 px-2 py-0.5 rounded">
              demo@koro.io
            </code>{" "}
            /{" "}
            <code className="text-koro-accent bg-koro-accent/10 px-2 py-0.5 rounded">
              password
            </code>
          </p>
        </div>
      </main>
    </div>
  );
}
