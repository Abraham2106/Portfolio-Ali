import { useRef } from "react";
import { useRafLoop } from "../../../infrastructure/raf/use-raf-loop";
import { usePointerListener } from "../../../infrastructure/pointer/use-pointer-listener";
import { usePageVisibility } from "../../../infrastructure/visibility/use-page-visibility";

/**
 * Regla de oro: el posicionado SÓLO ocurre en el loop RAF via transform.
 * onMove sólo actualiza estado visual (escala, color, tamaño del anillo).
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const lblRef = useRef<HTMLSpanElement>(null);
  const isVisible = usePageVisibility();

  const s = useRef({
    mx: -300,
    my: -300,
    rx: -300,
    ry: -300,
    dotScale: 1,
    dotOpacity: 1,
    dotColor: "var(--color-action)",
    ringW: 36,
    ringH: 36,
    ringML: -18,
    ringMT: -18,
    ringBg: "transparent",
    ringBorder: "rgba(233,74,106,0.28)",
    labelOpacity: 0,
  });

  usePointerListener(
    ({ x, y, target }) => {
      const c = s.current;
      c.mx = x;
      c.my = y;

      const el = target;
      const isCard = !!el?.closest(".card-lift");
      const isBtn = !isCard && (!!el?.closest("button") || !!el?.closest("a"));
      const isNav = !!el?.closest(".nav-pill-item");

      c.dotOpacity = isCard ? 0 : 1;
      c.dotColor = isNav ? "var(--color-pedagogy)" : "var(--color-action)";
      c.dotScale = isBtn ? 1.5 : 1;

      if (isCard) {
        c.ringW = 76;
        c.ringH = 76;
        c.ringML = -38;
        c.ringMT = -38;
        c.ringBg = "rgba(233,74,106,0.07)";
        c.ringBorder = "rgba(233,74,106,0.55)";
        c.labelOpacity = 1;
      } else if (isBtn) {
        c.ringW = 52;
        c.ringH = 52;
        c.ringML = -26;
        c.ringMT = -26;
        c.ringBg = "rgba(233,74,106,0.05)";
        c.ringBorder = "rgba(233,74,106,0.45)";
        c.labelOpacity = 0;
      } else {
        c.ringW = 36;
        c.ringH = 36;
        c.ringML = -18;
        c.ringMT = -18;
        c.ringBg = "transparent";
        c.ringBorder = "rgba(233,74,106,0.28)";
        c.labelOpacity = 0;
      }
    },
    { enabled: isVisible }
  );

  useRafLoop(() => {
    const c = s.current;
    c.rx += (c.mx - c.rx) * 0.1;
    c.ry += (c.my - c.ry) * 0.1;

    if (dotRef.current) {
      const d = dotRef.current;
      d.style.transform = `translate(${c.mx}px, ${c.my}px) scale(${c.dotScale})`;
      d.style.opacity = String(c.dotOpacity);
      d.style.background = c.dotColor;
    }

    if (ringRef.current) {
      const r = ringRef.current;
      r.style.transform = `translate(${c.rx}px, ${c.ry}px)`;
      r.style.width = `${c.ringW}px`;
      r.style.height = `${c.ringH}px`;
      r.style.marginLeft = `${c.ringML}px`;
      r.style.marginTop = `${c.ringMT}px`;
      r.style.background = c.ringBg;
      r.style.borderColor = c.ringBorder;
    }

    if (lblRef.current) {
      lblRef.current.style.opacity = String(c.labelOpacity);
    }
  }, { enabled: isVisible });

  return (
    <>
      <style>{`
        @media (pointer: fine)  { * { cursor: none !important; } }
        @media (pointer: coarse){ .custom-cur { display: none !important; } }
      `}</style>

      <div
        ref={dotRef}
        className="custom-cur"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          marginTop: "-3.5px",
          marginLeft: "-3.5px",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: "var(--color-action)",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          transition:
            "opacity 0.18s, background 0.18s, transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      />

      <div
        ref={ringRef}
        className="custom-cur"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          marginTop: "-18px",
          marginLeft: "-18px",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1.5px solid rgba(233,74,106,0.28)",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          transition:
            "width 0.36s cubic-bezier(0.34,1.56,0.64,1), height 0.36s cubic-bezier(0.34,1.56,0.64,1), margin 0.36s cubic-bezier(0.34,1.56,0.64,1), background 0.22s, border-color 0.22s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          ref={lblRef}
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "9px",
            fontWeight: "700",
            letterSpacing: "0.12em",
            color: "var(--color-action)",
            opacity: 0,
            transition: "opacity 0.18s",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          VER
        </span>
      </div>
    </>
  );
}


