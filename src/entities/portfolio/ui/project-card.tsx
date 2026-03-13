import type { PortfolioCardProps } from "../model/portfolio-card-registry";

/** Project card variant. */
export function ProjectCard({ item, imageStatus, onImageLoad, onImageError }: PortfolioCardProps) {
  if (item.variant !== "proyecto") return null;
  const loaded = imageStatus === "loaded";

  return (
    <div
      className="card-lift"
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(30,18,20,0.07)",
        boxShadow: "0 2px 16px rgba(30,18,20,0.05)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        cursor: "pointer",
      }}
    >
      <div
        className="img-zoom"
        style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}
      >
        {!loaded && (
          <div className="skeleton" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        )}
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          onLoad={onImageLoad}
          onError={onImageError}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "var(--color-action)",
            color: "var(--color-cream)",
            fontFamily: "var(--font-ui)",
            fontSize: "10px",
            fontWeight: "600",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: "9999px",
          }}
        >
          {item.tag}
        </div>
      </div>
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "12px",
              fontWeight: "300",
              color: "var(--color-ink-light)",
              letterSpacing: "0.06em",
            }}
          >
            {item.num}
          </span>
          <div style={{ height: "1px", flex: 1, background: "rgba(30,18,20,0.08)" }} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "12px",
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
            fontSize: "20px",
            fontWeight: "600",
            color: "var(--color-ink)",
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "13px",
            color: "var(--color-action)",
            marginTop: "auto",
          }}
        >
          Ver proyecto ?
        </span>
      </div>
    </div>
  );
}


