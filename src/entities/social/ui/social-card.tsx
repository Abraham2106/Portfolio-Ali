import { useState, type FC } from "react";
import type { ThemeToken } from "../../../shared/design-system/tokens";
import { tokenVar } from "../../../shared/design-system/tokens";

/** Minimal data required by the SocialCard component. */
export interface SocialCardModel {
  /** Display label. */
  label: string;
  /** Secondary detail text. */
  detail: string;
  /** URL target. */
  href: string;
  /** Icon component. */
  Icon: FC;
  /** Accent token CSS variable name. */
  accentToken: ThemeToken;
  /** Accent color hex value for alpha usage. */
  accentHex: string;
}

/** Social card link with accent styling. */
export function SocialCard({ link }: { link: SocialCardModel }) {
  const [hovered, setHovered] = useState(false);
  const accentColor = tokenVar(link.accentToken);
  const accentHex = link.accentHex;

  return (
    <a
      href={link.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "18px",
        padding: "20px 28px",
        background: hovered ? "rgba(250,244,237,0.05)" : "transparent",
        border: "1px solid rgba(250,244,237,0.1)",
        borderLeft: `3px solid ${hovered ? accentColor : "rgba(250,244,237,0.1)"}`,
        borderRadius: "16px",
        textDecoration: "none",
        transition: "all 0.28s ease",
        cursor: "pointer",
        flex: 1,
        minWidth: "220px",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: hovered ? `${accentHex}18` : "rgba(250,244,237,0.06)",
          border: `1px solid ${hovered ? `${accentHex}40` : "rgba(250,244,237,0.1)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? accentColor : "rgba(250,244,237,0.5)",
          flexShrink: 0,
          transition: "all 0.28s ease",
        }}
      >
        <link.Icon />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: "600",
            color: "var(--color-cream)",
            letterSpacing: "-0.01em",
          }}
        >
          {link.label}
        </div>
        <div
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "12px",
            color: "rgba(250,244,237,0.38)",
            marginTop: "2px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {link.detail}
        </div>
      </div>

      <span
        style={{
          fontSize: "18px",
          color: hovered ? accentColor : "rgba(250,244,237,0.2)",
          transition: "all 0.28s ease",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          display: "inline-block",
          flexShrink: 0,
        }}
      >
        →
      </span>
    </a>
  );
}
