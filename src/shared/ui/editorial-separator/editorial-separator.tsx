import * as React from "react";

/** Props for the editorial separator. */
export interface EditorialSeparatorProps {
  /** Section number (e.g. "01"). */
  number: string;
  /** Label text. */
  label: string;
  /** Accent color CSS variable. */
  accentVar?: string;
}

/** Editorial separator with number, line, and label. */
export function EditorialSeparator({ number, label, accentVar }: EditorialSeparatorProps) {
  const accent = accentVar ?? "var(--color-accent)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "13px",
          fontWeight: "300",
          color: accent,
          letterSpacing: "0.18em",
        }}
      >
        {number}
      </span>
      <div
        style={{
          height: "1px",
          width: "40px",
          background: `linear-gradient(90deg, ${accent}, transparent)`,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "11px",
          fontWeight: "500",
          color: "var(--color-ink-subtle)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}


