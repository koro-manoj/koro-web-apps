import type {
  AuthTokenResponse,
  AuthUser,
  DashboardOverview,
  LoginCredentials,
} from "@koro/api-client";

export const mockUser: AuthUser = {
  id: 1,
  name: "Alex Rivera",
  email: "alex@koro.io",
  role: "admin",
  avatar_url: null,
};

export const mockAuthResponse: AuthTokenResponse = {
  token: "mock-token-koro-demo",
  token_type: "Bearer",
  expires_in: 3600,
  user: mockUser,
};

export const mockDashboardOverview: DashboardOverview = {
  stats: {
    revenue: { value: 284750, change: 12.4, period: "vs last month" },
    orders: { value: 1842, change: 8.1, period: "vs last month" },
    customers: { value: 9673, change: 3.2, period: "vs last month" },
    conversion: { value: 4.28, change: -0.3, period: "vs last month" },
  },
  recent_activity: [
    {
      id: "1",
      type: "order",
      title: "Order #48291 fulfilled",
      description: "Enterprise plan — Acme Industries",
      timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
      meta: { amount: 2499 },
    },
    {
      id: "2",
      type: "customer",
      title: "New customer onboarded",
      description: "Meridian Labs signed up for Pro tier",
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    },
    {
      id: "3",
      type: "payment",
      title: "Payment received",
      description: "Invoice #INV-2024-0892 — $12,400",
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
      meta: { amount: 12400 },
    },
    {
      id: "4",
      type: "alert",
      title: "Inventory threshold reached",
      description: "SKU-4421 below minimum stock level",
      timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    },
    {
      id: "5",
      type: "order",
      title: "Order #48288 shipped",
      description: "Standard plan — Northwind Traders",
      timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
      meta: { amount: 899 },
    },
  ],
};

export function mockLogin(
  credentials: LoginCredentials
): AuthTokenResponse | null {
  if (
    credentials.email === "demo@koro.io" &&
    credentials.password === "password"
  ) {
    return mockAuthResponse;
  }
  return null;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
