import { type HTMLAttributes } from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "accent";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    background: "var(--koro-surface-sunken)",
    color: "var(--koro-ink-muted)",
  },
  success: {
    background: "rgba(29, 122, 74, 0.12)",
    color: "var(--koro-success)",
  },
  warning: {
    background: "rgba(184, 134, 11, 0.12)",
    color: "var(--koro-warning)",
  },
  danger: {
    background: "rgba(192, 57, 43, 0.12)",
    color: "var(--koro-danger)",
  },
  accent: {
    background: "var(--koro-accent-soft)",
    color: "var(--koro-accent)",
  },
};

export function Badge({
  variant = "default",
  children,
  style,
  ...props
}: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.03em",
        textTransform: "uppercase",
        borderRadius: "999px",
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
