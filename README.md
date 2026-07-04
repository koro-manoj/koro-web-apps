# Koro Web Apps

Monorepo for the Koro platform frontends — a typed API client, shared UI library, customer portal, and marketing site.

## Stack

| Package / App | Description |
|---------------|-------------|
| `packages/api-client` | Typed HTTP client for Laravel REST API |
| `packages/ui` | Shared React component library with design tokens |
| `apps/portal` | Next.js 14 dashboard — login, stats, activity feed |
| `apps/marketing` | Next.js 14 marketing site |

**Tooling:** pnpm workspaces, TypeScript, Tailwind CSS

## Prerequisites

- Node.js 18.17+
- pnpm 8+

## Setup

```bash
pnpm install
pnpm build
```

Copy environment config for the portal:

```bash
cp apps/portal/.env.example apps/portal/.env.local
```

## Development

```bash
# All apps in parallel
pnpm dev

# Individual apps
pnpm dev:portal      # http://localhost:3000
pnpm dev:marketing   # http://localhost:3001
```

### Portal demo login

When `NEXT_PUBLIC_USE_MOCK_API=true` (default):

- Email: `demo@koro.io`
- Password: `password`

### Laravel API integration

Set in `apps/portal/.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-laravel-api.example.com
NEXT_PUBLIC_USE_MOCK_API=false
```

Expected Laravel endpoints:

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/auth/login` | Returns token + user |
| POST | `/api/auth/logout` | Revokes session |
| GET | `/api/auth/me` | Current authenticated user |
| GET | `/api/dashboard/overview` | Stats + recent activity |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages and apps |
| `pnpm lint` | Lint all workspaces |
| `pnpm typecheck` | Type-check all workspaces |

## Project structure

```
koro-web-apps/
├── apps/
│   ├── portal/          # Authenticated dashboard
│   └── marketing/       # Public marketing site
├── packages/
│   ├── api-client/      # @koro/api-client
│   └── ui/              # @koro/ui
├── docs/
│   ├── architecture.md
│   └── DEPLOYMENT.md
└── .cursor/rules/       # Engineering standards
```

## Branch strategy

- `main` — stable releases
- `dev` — integration branch
- `feature/*` — feature work

See [docs/architecture.md](docs/architecture.md) for system design details.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for production deployment (portal :3000, marketing :3001).

## Live demo

**URL:** _Pending deployment_ — [GitHub](https://github.com/koro-manoj/koro-web-apps)
