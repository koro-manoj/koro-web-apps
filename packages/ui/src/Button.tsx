import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "var(--koro-accent)",
    color: "#fff",
    border: "1px solid transparent",
  },
  secondary: {
    background: "var(--koro-surface-raised)",
    color: "var(--koro-ink)",
    border: "1px solid var(--koro-border)",
  },
  ghost: {
    background: "transparent",
    color: "var(--koro-ink-muted)",
    border: "1px solid transparent",
  },
  danger: {
    background: "var(--koro-danger)",
    color: "#fff",
    border: "1px solid transparent",
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "6px 12px", fontSize: "13px", borderRadius: "var(--koro-radius-sm)" },
  md: { padding: "10px 18px", fontSize: "14px", borderRadius: "var(--koro-radius-md)" },
  lg: { padding: "14px 24px", fontSize: "15px", borderRadius: "var(--koro-radius-md)" },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      disabled,
      children,
      style,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        fontFamily: "var(--koro-font-sans)",
        fontWeight: 600,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled || loading ? 0.6 : 1,
        transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
        width: fullWidth ? "100%" : undefined,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      {loading && <Spinner size={size === "sm" ? 14 : 16} />}
      {children}
    </button>
  )
);

Button.displayName = "Button";

function Spinner({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ animation: "koro-spin 0.8s linear infinite" }}
    >
      <style>{`@keyframes koro-spin { to { transform: rotate(360deg); } }`}</style>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="32 32"
        opacity="0.3"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { Spinner };
