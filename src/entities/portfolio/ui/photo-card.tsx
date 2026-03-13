import type { PortfolioCardProps } from "../model/portfolio-card-registry";

/** Photo card variant. */
export function PhotoCard({ item, imageStatus, onImageLoad, onImageError }: PortfolioCardProps) {
  if (item.variant !== "foto") return null;
  const loaded = imageStatus === "loaded";

  return (
    <div
      className="card-lift img-zoom"
      style={{
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(30,18,20,0.08)",
        height: "100%",
        minHeight: "280px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {!loaded && (
        <div
          className="skeleton"
          style={{ position: "absolute", inset: 0, zIndex: 1, borderRadius: "24px" }}
        />
      )}
      <img
        src={item.imageUrl}
        alt={item.tag}
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
          bottom: "16px",
          left: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "11px",
            fontWeight: "300",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(250,244,237,0.7)",
            background: "rgba(30,18,20,0.35)",
            backdropFilter: "blur(8px)",
            padding: "4px 10px",
            borderRadius: "9999px",
          }}
        >
          {item.num} — {item.tag}
        </span>
      </div>
    </div>
  );
}


