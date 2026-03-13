import { useAppState } from "../../../app/providers/app-store-provider";
import { useScrollProgress } from "../../../infrastructure/scroll/use-scroll-progress";

export function ScrollProgress() {
  const { activeSectionId } = useAppState();
  const pct = useScrollProgress({ throttleMs: 16 });

  return (
    <div
      aria-hidden
      data-active-section={activeSectionId}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "3px",
        height: "100vh",
        zIndex: 500,
        background: "rgba(233,74,106,0.08)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: `${pct * 100}%`,
          background:
            "linear-gradient(to bottom, var(--color-action) 0%, var(--color-accent) 40%, var(--color-green-400) 75%, var(--color-pedagogy) 100%)",
          borderRadius: "0 0 3px 3px",
          transition: "height 0.08s linear",
        }}
      />

      <div
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: "var(--color-action)",
          marginLeft: "-2px",
          marginTop: "-3px",
          boxShadow: "0 0 8px rgba(233,74,106,0.65)",
          opacity: pct > 0.01 ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </div>
  );
}


