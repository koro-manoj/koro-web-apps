"use client";

import {
  createApiClient,
  type AuthUser,
  type DashboardOverview,
  type KoroApiClient,
  type LoginCredentials,
} from "@koro/api-client";
import {
  delay,
  mockDashboardOverview,
  mockLogin,
  mockUser,
} from "./mock-data";

const TOKEN_KEY = "koro_auth_token";

function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
}

function useMockApi(): boolean {
  return process.env.NEXT_PUBLIC_USE_MOCK_API === "true";
}

function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

function setStoredToken(token: string | null): void {
  if (typeof window === "undefined") return;
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
}

let clientInstance: KoroApiClient | null = null;

export function getApiClient(): KoroApiClient {
  if (!clientInstance) {
    clientInstance = createApiClient({
      baseUrl: getApiBaseUrl(),
      getToken: getStoredToken,
      onUnauthorized: () => {
        setStoredToken(null);
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      },
    });
  }
  return clientInstance;
}

export async function loginUser(
  credentials: LoginCredentials
): Promise<AuthUser> {
  if (useMockApi()) {
    await delay(600);
    const response = mockLogin(credentials);
    if (!response) {
      throw new Error("Invalid email or password");
    }
    setStoredToken(response.token);
    return response.user;
  }

  const client = getApiClient();
  const { data } = await client.auth.login(credentials);
  setStoredToken(data.token);
  return data.user;
}

export async function logoutUser(): Promise<void> {
  if (!useMockApi()) {
    try {
      await getApiClient().auth.logout();
    } catch {
      // proceed with local cleanup
    }
  }
  setStoredToken(null);
}

export async function fetchCurrentUser(): Promise<AuthUser | null> {
  const token = getStoredToken();
  if (!token) return null;

  if (useMockApi()) {
    await delay(300);
    return mockUser;
  }

  try {
    const { data } = await getApiClient().auth.me();
    return data;
  } catch {
    setStoredToken(null);
    return null;
  }
}

export async function fetchDashboardOverview(): Promise<DashboardOverview> {
  if (useMockApi()) {
    await delay(500);
    return mockDashboardOverview;
  }

  const { data } = await getApiClient().dashboard.overview();
  return data;
}

export { getStoredToken, setStoredToken };
