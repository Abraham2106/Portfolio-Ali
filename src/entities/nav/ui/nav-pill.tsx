import type { NavItem } from "../../domain/nav-item";

/** Props for the nav pill button. */
export interface NavPillProps {
  /** Navigation item. */
  item: NavItem;
  /** Whether the pill is active. */
  active: boolean;
  /** Click handler. */
  onClick: () => void;
}

/** Navigation pill button for the floating nav. */
export function NavPill({ item, active, onClick }: NavPillProps) {
  return (
    <button
      onClick={onClick}
      className={`nav-pill-item${active ? " nav-active" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 16px",
        border: "none",
        background: active ? "var(--color-pink-50)" : "transparent",
        borderRadius: "9999px",
        cursor: "pointer",
        color: active ? "var(--color-action)" : "var(--color-ink-subtle)",
        fontFamily: "var(--font-ui)",
        fontSize: "13px",
        fontWeight: active ? "600" : "400",
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
        transition: "background 0.2s, color 0.2s",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "10px",
          fontWeight: "300",
          color: active ? "var(--color-action)" : "var(--color-ink-faint)",
          letterSpacing: "0.05em",
        }}
      >
        {item.num}
      </span>
      {item.label}
    </button>
  );
}


