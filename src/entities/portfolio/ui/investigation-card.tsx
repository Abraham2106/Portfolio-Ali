import type { PortfolioCardProps } from "../model/portfolio-card-registry";

/** Investigation card variant. */
export function InvestigationCard({ item, isFeatured }: PortfolioCardProps) {
  if (item.variant !== "investigacion") return null;
  const featured = Boolean(isFeatured);

  return (
    <div
      className="card-lift"
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: featured ? "40px" : "32px",
        border: "1px solid rgba(30,18,20,0.07)",
        boxShadow: "0 2px 16px rgba(30,18,20,0.05)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-10px",
          right: "16px",
          fontFamily: "var(--font-display)",
          fontSize: featured ? "120px" : "100px",
          fontWeight: "700",
          color: "rgba(232,68,90,0.04)",
          lineHeight: "1",
          userSelect: "none",
          letterSpacing: "-0.04em",
        }}
      >
        {item.num}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: featured ? "28px" : "20px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "11px",
            fontWeight: "600",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-action)",
          }}
        >
          {item.tag}
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "13px",
            fontWeight: "300",
            color: "var(--color-ink-light)",
            letterSpacing: "0.06em",
          }}
        >
          {item.year}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: featured ? "clamp(22px, 2.2vw, 30px)" : "22px",
          fontWeight: "600",
          color: "var(--color-ink)",
          lineHeight: "1.3",
          marginBottom: "16px",
          letterSpacing: "-0.01em",
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "14px",
          fontWeight: "400",
          color: "var(--color-ink-muted)",
          lineHeight: "1.75",
          flex: 1,
          marginBottom: "24px",
        }}
      >
        {item.extract}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "20px",
          borderTop: "1px solid rgba(30,18,20,0.07)",
          marginTop: "auto",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "15px",
            fontStyle: "italic",
            color: "var(--color-ink-subtle)",
          }}
        >
          Leer documento
        </span>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "var(--color-pink-50)",
            border: "1px solid var(--color-pink-100)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            color: "var(--color-action)",
            flexShrink: 0,
          }}
        >
          ?
        </div>
      </div>
    </div>
  );
}


