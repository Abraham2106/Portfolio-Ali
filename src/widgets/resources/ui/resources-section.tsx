import { ResourceTag } from "../../../entities/resource";
import { RESOURCES } from "../../../infrastructure/data/resources";

export function ResourcesSection() {
  return (
    <section
      id="recursos"
      style={{
        background: "var(--color-ink)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${i * 14.28}%`,
            width: "1px",
            background: "rgba(250,244,237,0.03)",
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-100px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233,74,106,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ padding: "0 60px", marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                fontWeight: "300",
                color: "var(--color-pedagogy)",
                letterSpacing: "0.18em",
              }}
            >
              03
            </span>
            <div
              style={{
                height: "1px",
                width: "40px",
                background: "linear-gradient(90deg, var(--color-pedagogy), transparent)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "11px",
                fontWeight: "500",
                color: "#5A8A4A",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Biblioteca abierta
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: "700",
                color: "var(--color-cream)",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
              }}
            >
              Recursos para{" "}
              <span style={{ fontWeight: "300", fontStyle: "italic", color: "rgba(250,244,237,0.5)" }}>
                Docentes
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "14px",
                color: "rgba(250,244,237,0.4)",
                maxWidth: "300px",
                lineHeight: "1.7",
                textAlign: "right",
              }}
            >
              Materiales de descarga libre para enriquecer tu práctica pedagógica.
            </p>
          </div>
        </div>

        <div className="scrollbar-hide" style={{ overflowX: "auto", paddingBottom: "8px" }}>
          <div
            style={{
              display: "flex",
              gap: "14px",
              padding: "0 60px",
              width: "max-content",
            }}
          >
            {RESOURCES.map((resource) => (
              <ResourceTag key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        <div
          style={{
            padding: "28px 60px 0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "4px" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === 0 ? "24px" : "6px",
                  height: "3px",
                  borderRadius: "9999px",
                  background: i === 0 ? "var(--color-action)" : "rgba(250,244,237,0.15)",
                  transition: "width 0.3s",
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "11px",
              color: "rgba(250,244,237,0.3)",
              letterSpacing: "0.1em",
            }}
          >
            DESLIZÁ PARA VER MÁS
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #recursos > div > div:first-child,
          #recursos > div > div:last-child { padding: 0 24px !important; }
          #recursos > div > div:nth-child(2) > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}


