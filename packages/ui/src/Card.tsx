import { type HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "elevated" | "outline";
  padding?: "none" | "sm" | "md" | "lg";
};

const paddingMap = {
  none: "0",
  sm: "16px",
  md: "24px",
  lg: "32px",
};

export function Card({
  variant = "default",
  padding = "md",
  children,
  style,
  ...props
}: CardProps) {
  const variantStyles: React.CSSProperties =
    variant === "elevated"
      ? { boxShadow: "var(--koro-shadow-md)", border: "1px solid var(--koro-border)" }
      : variant === "outline"
        ? { border: "1px solid var(--koro-border)", boxShadow: "none" }
        : { border: "1px solid var(--koro-border)", boxShadow: "var(--koro-shadow-sm)" };

  return (
    <div
      style={{
        background: "var(--koro-surface)",
        borderRadius: "var(--koro-radius-lg)",
        padding: paddingMap[padding],
        ...variantStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "20px",
        gap: "16px",
      }}
    >
      <div>
        <h3
          style={{
            margin: 0,
            fontSize: "17px",
            fontWeight: 600,
            color: "var(--koro-ink)",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            style={{
              margin: "4px 0 0",
              fontSize: "13px",
              color: "var(--koro-ink-muted)",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
