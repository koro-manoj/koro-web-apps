export type ApiError = {
  message: string;
  errors?: Record<string, string[]>;
  status: number;
};

export type ApiResponse<T> = {
  data: T;
  message?: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type AuthUser = {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar_url?: string | null;
};

export type AuthTokenResponse = {
  token: string;
  token_type: string;
  expires_in: number;
  user: AuthUser;
};

export type DashboardStats = {
  revenue: { value: number; change: number; period: string };
  orders: { value: number; change: number; period: string };
  customers: { value: number; change: number; period: string };
  conversion: { value: number; change: number; period: string };
};

export type ActivityItem = {
  id: string;
  type: "order" | "customer" | "payment" | "alert";
  title: string;
  description: string;
  timestamp: string;
  meta?: Record<string, string | number>;
};

export type DashboardOverview = {
  stats: DashboardStats;
  recent_activity: ActivityItem[];
};

export type KoroApiClientConfig = {
  baseUrl: string;
  getToken?: () => string | null;
  onUnauthorized?: () => void;
};

export class KoroApiError extends Error {
  status: number;
  errors?: Record<string, string[]>;

  constructor(error: ApiError) {
    super(error.message);
    this.name = "KoroApiError";
    this.status = error.status;
    this.errors = error.errors;
  }
}

export class KoroApiClient {
  private baseUrl: string;
  private getToken?: () => string | null;
  private onUnauthorized?: () => void;

  constructor(config: KoroApiClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    this.getToken = config.getToken;
    this.onUnauthorized = config.onUnauthorized;
  }

  private async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers = new Headers(options.headers);
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");

    const token = this.getToken?.();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers,
    });

    if (response.status === 204) {
      return undefined as T;
    }

    const body = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (response.status === 401) {
        this.onUnauthorized?.();
      }
      throw new KoroApiError({
        message: body.message ?? "Request failed",
        errors: body.errors,
        status: response.status,
      });
    }

    return body as T;
  }

  auth = {
    login: (credentials: LoginCredentials) =>
      this.request<ApiResponse<AuthTokenResponse>>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      }),

    logout: () =>
      this.request<void>("/api/auth/logout", { method: "POST" }),

    me: () => this.request<ApiResponse<AuthUser>>("/api/auth/me"),
  };

  dashboard = {
    overview: () =>
      this.request<ApiResponse<DashboardOverview>>("/api/dashboard/overview"),
  };
}

export function createApiClient(config: KoroApiClientConfig): KoroApiClient {
  return new KoroApiClient(config);
}
