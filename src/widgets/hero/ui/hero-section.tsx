import { useRef, type MouseEvent } from "react";
import { EDUCATOR_PROFILE } from "../../../infrastructure/data/educator-profile";
import { useScrollListener } from "../../../infrastructure/scroll/use-scroll-listener";
import { useScrollToId } from "../../../infrastructure/scroll/use-scroll-to-id";

export function HeroSection() {
  const imgRef = useRef<HTMLImageElement>(null);
  const scrollToId = useScrollToId();

  useScrollListener((scrollY) => {
    if (!imgRef.current) return;
    imgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
  }, { throttleMs: 16 });

  const onMagMove = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.36;
    btn.style.transform = `translate(${x}px, ${y}px)`;
    btn.style.transition = "transform 0.1s linear";
  };
  const onMagLeave = (e: MouseEvent<HTMLButtonElement>, resetBg?: () => void) => {
    const btn = e.currentTarget;
    btn.style.transition =
      "transform 0.55s cubic-bezier(0.34,1.56,0.64,1), background 0.2s, border-color 0.2s";
    btn.style.transform = "translate(0,0)";
    resetBg?.();
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          padding: "80px 60px 40px",
          gap: "60px",
        }}
        className="hero-grid"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <div
            className="h-a1"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                fontWeight: "300",
                color: "var(--color-accent)",
                letterSpacing: "0.18em",
              }}
            >
              01
            </span>
            <div
              style={{
                height: "1px",
                width: "48px",
                background: "linear-gradient(90deg, var(--color-accent), rgba(229,109,138,0))",
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
              Portfolio Educativo
            </span>
          </div>

          <div className="h-a2" style={{ marginBottom: "8px" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(76px, 10vw, 130px)",
                fontWeight: "300",
                fontStyle: "italic",
                color: "var(--color-ink)",
                lineHeight: "0.92",
                letterSpacing: "-0.02em",
              }}
            >
              {EDUCATOR_PROFILE.displayName}
            </h1>
          </div>

          <div className="h-a3" style={{ marginBottom: "28px" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 7.5vw, 96px)",
                fontWeight: "700",
                color: "var(--color-identity)",
                lineHeight: "0.95",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              {EDUCATOR_PROFILE.displaySurname}
            </h1>
          </div>

          <div
            className="h-a3"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                height: "1px",
                flex: 1,
                background: "linear-gradient(90deg, rgba(30,18,20,0.15), transparent)",
              }}
            />
            <div
              style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-green-400)" }}
            />
            <div
              style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-action)" }}
            />
          </div>

          <div className="h-a4" style={{ marginBottom: "20px" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 2.2vw, 26px)",
                fontWeight: "400",
                fontStyle: "italic",
                color: "var(--color-ink-subtle)",
                lineHeight: "1.4",
                letterSpacing: "0.01em",
              }}
            >
              {EDUCATOR_PROFILE.roleTitle} &amp; <br />
              <span
                style={{
                  color: "var(--color-pedagogy)",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                {EDUCATOR_PROFILE.roleHighlight}
              </span>
            </p>
          </div>

          <div className="h-a4" style={{ marginBottom: "36px" }}>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "16px",
                fontWeight: "400",
                color: "var(--color-ink-muted)",
                lineHeight: "1.8",
                maxWidth: "460px",
              }}
            >
              {EDUCATOR_PROFILE.bio}
            </p>
          </div>

          <div
            className="h-a5"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "44px",
            }}
          >
            {EDUCATOR_PROFILE.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "var(--color-action)",
                  background: "var(--color-pink-50)",
                  border: "1px solid var(--color-pink-100)",
                  borderRadius: "9999px",
                  padding: "6px 14px",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="h-a6" style={{ display: "flex", gap: "14px" }}>
            <button
              onClick={() => scrollToId("feed")}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "14px",
                fontWeight: "600",
                color: "var(--color-cream)",
                background: "var(--color-action)",
                border: "none",
                borderRadius: "9999px",
                padding: "14px 32px",
                cursor: "pointer",
                letterSpacing: "0.04em",
                transition: "background 0.2s, transform 0.1s",
              }}
              onMouseMove={onMagMove}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-pink-700)";
              }}
              onMouseLeave={(e) =>
                onMagLeave(e, () => {
                  e.currentTarget.style.background = "var(--color-action)";
                })
              }
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToId("recursos")}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "14px",
                fontWeight: "500",
                color: "var(--color-ink)",
                background: "transparent",
                border: "1px solid rgba(30,18,20,0.2)",
                borderRadius: "9999px",
                padding: "14px 32px",
                cursor: "pointer",
                letterSpacing: "0.04em",
                transition: "border-color 0.2s, transform 0.1s",
              }}
              onMouseMove={onMagMove}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-pedagogy)";
              }}
              onMouseLeave={(e) =>
                onMagLeave(e, () => {
                  e.currentTarget.style.borderColor = "rgba(30,18,20,0.2)";
                })
              }
            >
              Recursos Gratis
            </button>
          </div>
        </div>

        <div
          className="h-a7"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-20px",
              fontFamily: "var(--font-display)",
              fontSize: "280px",
              fontWeight: "700",
              color: "var(--color-pink-50)",
              lineHeight: "1",
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.05em",
            }}
            aria-hidden
          >
            SM
          </div>

          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              right: "-24px",
              bottom: "-24px",
              border: "2px solid var(--color-pink-200)",
              borderRadius: "28px",
              pointerEvents: "none",
            }}
          />

          <div
            className="img-zoom"
            style={{
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "3/4",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0 32px 80px -20px rgba(30,18,20,0.22)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <img
              ref={imgRef}
              src={EDUCATOR_PROFILE.heroImageUrl}
              alt={`${EDUCATOR_PROFILE.fullName} — Educadora`}
              style={{
                width: "100%",
                height: "115%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                willChange: "transform",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(30,18,20,0.28) 0%, transparent 45%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(250,244,237,0.88)",
                backdropFilter: "blur(12px)",
                borderRadius: "9999px",
                padding: "8px 14px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--color-pedagogy)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "var(--color-ink)",
                }}
              >
                {EDUCATOR_PROFILE.location}
              </span>
            </div>
          </div>

          <div
            className="float-anim"
            style={{
              position: "absolute",
              top: "-18px",
              right: "10px",
              background: "var(--color-cream)",
              border: "1.5px solid var(--color-pink-100)",
              borderRadius: "14px",
              padding: "10px 18px",
              transform: "rotate(3deg)",
              boxShadow: "0 4px 16px rgba(30,18,20,0.08)",
              zIndex: 10,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-hand)",
                fontSize: "18px",
                fontWeight: "600",
                color: "var(--color-accent)",
              }}
            >
              ¡Aprender jugando! 🌿
            </span>
          </div>

          <div
            className="spin-slow"
            style={{
              position: "absolute",
              bottom: "-24px",
              left: "10px",
              width: "56px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
            aria-hidden
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "50px",
                color: "var(--color-pink-200)",
                lineHeight: "1",
              }}
            >
              ✦
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "-18px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              zIndex: 10,
            }}
            aria-hidden
          >
            {[3, 3, 3].map((_, i) => (
              <div key={i} style={{ display: "flex", gap: "5px" }}>
                {Array(3)
                  .fill(null)
                  .map((__, j) => (
                    <div
                      key={j}
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--color-green-200)",
                      }}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(30,18,20,0.08)",
          borderBottom: "1px solid rgba(30,18,20,0.08)",
          background: "var(--color-ink)",
          overflow: "hidden",
          padding: "14px 0",
          marginTop: "auto",
        }}
      >
        <div className="marquee-inner" style={{ width: "max-content" }}>
          {Array(4)
            .fill(EDUCATOR_PROFILE.marqueeText)
            .map((t, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  fontWeight: "300",
                  fontStyle: "italic",
                  color: "rgba(250,244,237,0.65)",
                  letterSpacing: "0.12em",
                  whiteSpace: "nowrap",
                  paddingRight: "0",
                }}
              >
                {t}
              </span>
            ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 100px 24px 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
