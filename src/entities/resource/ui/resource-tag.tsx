import { useState } from "react";
import type { Resource, ResourceAccent } from "../../../domain/resource";
import { tokenVar, tokens, type ThemeToken } from "../../../shared/design-system/tokens";

const ACCENT_MAP: Record<ResourceAccent, { token: ThemeToken; hex: string }> = {
  identity: { token: "--color-identity", hex: tokens.color.identity.value },
  action: { token: "--color-action", hex: tokens.color.action.value },
  accent: { token: "--color-accent", hex: tokens.color.accent.value },
  pedagogy: { token: "--color-pedagogy", hex: tokens.color.pedagogy.value },
};

/** Resource pill/tag component. */
export function ResourceTag({ resource }: { resource: Resource }) {
  const [hovered, setHovered] = useState(false);
  const accent = ACCENT_MAP[resource.accent];
  const accentColor = tokenVar(accent.token);
  const accentHex = accent.hex;

  return (
    <div
      className="resource-tag"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "22px 28px",
        background: hovered ? "rgba(250,244,237,0.07)" : "rgba(250,244,237,0.04)",
        border: `1px solid rgba(250,244,237,${hovered ? "0.14" : "0.08"})`,
        borderLeft: `3px solid ${hovered ? accentColor : "rgba(250,244,237,0.12)"}`,
        borderRadius: "16px",
        cursor: "pointer",
        flexShrink: 0,
        width: "260px",
        transition: "all 0.25s ease",
        boxShadow: hovered ? `-4px 0 0 0 ${accentHex}30` : "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "11px",
          fontWeight: "300",
          color: accentColor,
          letterSpacing: "0.1em",
          flexShrink: 0,
          opacity: 0.8,
        }}
      >
        {resource.num}
      </span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "17px",
            fontWeight: "600",
            color: "var(--color-cream)",
            lineHeight: "1.2",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            letterSpacing: "-0.01em",
          }}
        >
          {resource.name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "11px",
            color: "rgba(250,244,237,0.45)",
            marginTop: "3px",
            whiteSpace: "nowrap",
          }}
        >
          {resource.description}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "9px",
            fontWeight: "600",
            letterSpacing: "0.12em",
            color: accentColor,
            background: `${accentHex}18`,
            border: `1px solid ${accentHex}30`,
            borderRadius: "9999px",
            padding: "3px 8px",
          }}
        >
          {resource.type.replace("+", " + ")}
        </span>
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "1px solid rgba(250,244,237,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: hovered ? accentColor : "rgba(250,244,237,0.4)",
            fontSize: "14px",
            transition: "color 0.2s",
            flexShrink: 0,
          }}
        >
          ↓
        </div>
      </div>
    </div>
  );
}


