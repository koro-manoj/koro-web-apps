import { type InputHTMLAttributes, forwardRef } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, style, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {label && (
          <label
            htmlFor={inputId}
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--koro-ink-muted)",
              letterSpacing: "0.02em",
            }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          style={{
            padding: "11px 14px",
            fontSize: "15px",
            fontFamily: "var(--koro-font-sans)",
            color: "var(--koro-ink)",
            background: "var(--koro-surface-raised)",
            border: `1px solid ${error ? "var(--koro-danger)" : "var(--koro-border)"}`,
            borderRadius: "var(--koro-radius-md)",
            outline: "none",
            transition: "border-color 0.15s ease, box-shadow 0.15s ease",
            ...style,
          }}
          {...props}
        />
        {error && (
          <span style={{ fontSize: "12px", color: "var(--koro-danger)" }}>
            {error}
          </span>
        )}
        {hint && !error && (
          <span style={{ fontSize: "12px", color: "var(--koro-ink-subtle)" }}>
            {hint}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
