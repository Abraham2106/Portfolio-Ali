import { useMemo } from "react";
import { SocialCard, type SocialCardModel } from "../../../entities/social";
import { SOCIAL_LINKS } from "../../../infrastructure/data/socials";
import { tokens, type ThemeToken } from "../../../shared/design-system/tokens";

function LinkedInSVG() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function DriveSVG() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.9 2.1L8.4 9.9 3 19h6l4.5-7.8L12.9 2.1z" />
      <path d="M21 19H9l-3-5.2h12L21 19z" />
      <path d="M15.6 9.9H8.4L3 19h6.6l6-10.1z" />
    </svg>
  );
}

function MailSVG() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

const ICON_MAP = {
  linkedin: LinkedInSVG,
  drive: DriveSVG,
  email: MailSVG,
};

const ACCENT_MAP: Record<keyof typeof ICON_MAP, { token: ThemeToken; hex: string }> = {
  linkedin: { token: "--color-action", hex: tokens.color.action.value },
  drive: { token: "--color-pedagogy", hex: tokens.color.pedagogy.value },
  email: { token: "--color-action", hex: tokens.color.action.value },
};

export function FooterSection() {
  const socialCards = useMemo<SocialCardModel[]>(
    () =>
      SOCIAL_LINKS.map((link) => ({
        ...link,
        Icon: ICON_MAP[link.id],
        accentToken: ACCENT_MAP[link.id].token,
        accentHex: ACCENT_MAP[link.id].hex,
      })),
    []
  );

  return (
    <footer
      id="contacto"
      style={{
        background: "var(--color-ink)",
        borderTop: "1px solid rgba(250,244,237,0.06)",
        padding: "100px 60px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-20px",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(120px, 18vw, 220px)",
          fontWeight: "700",
          color: "rgba(250,244,237,0.02)",
          lineHeight: "1",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
        }}
      >
        CONECTEMOS
      </div>

      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,192,75,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontWeight: "300",
              color: "var(--color-action)",
              letterSpacing: "0.18em",
            }}
          >
            04
          </span>
          <div
            style={{
              height: "1px",
              width: "40px",
              background: "linear-gradient(90deg, var(--color-action), transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "11px",
              fontWeight: "500",
              color: "#7A4550",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Contacto
          </span>
        </div>

        <div style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 100px)",
              fontWeight: "700",
              color: "var(--color-cream)",
              lineHeight: "1.0",
              letterSpacing: "-0.03em",
              marginBottom: "8px",
            }}
          >
            Conectemos
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 100px)",
              fontWeight: "300",
              fontStyle: "italic",
              color: "rgba(250,244,237,0.22)",
              lineHeight: "1.0",
              letterSpacing: "-0.03em",
            }}
          >
            y creemos juntos
          </h2>
        </div>

        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "15px",
            color: "rgba(250,244,237,0.45)",
            lineHeight: "1.8",
            maxWidth: "480px",
            marginBottom: "48px",
          }}
        >
          Abierta a colaboraciones con instituciones educativas, talleres formativos y proyectos de
          investigación. No dudes en escribirme — siempre hay lugar para una buena conversación sobre
          educación.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "80px" }}>
          {socialCards.map((link) => (
            <SocialCard key={link.label} link={link} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(250,244,237,0.07)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: "700",
                color: "var(--color-identity)",
                letterSpacing: "-0.01em",
              }}
            >
              SM
            </span>
            <div style={{ width: "1px", height: "16px", background: "rgba(250,244,237,0.15)" }} />
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "12px",
                color: "rgba(250,244,237,0.3)",
                letterSpacing: "0.06em",
              }}
            >
              Sofía Martínez · Portfolio Educativo 2025
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--color-action)",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--color-pedagogy)",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--color-accent)",
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 80px 24px 48px !important; }
        }
      `}</style>
    </footer>
  );
}


