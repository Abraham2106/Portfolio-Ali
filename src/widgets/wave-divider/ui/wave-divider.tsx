/** Organic wave transition from cream to ink-dark. */
export function WaveDivider() {
  return (
    <div style={{ background: "var(--color-cream)", lineHeight: 0, display: "block" }}>
      <svg
        viewBox="0 0 1440 88"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "88px" }}
        aria-hidden
      >
        <path
          d="M0,32 C180,70 360,8 540,40 C720,72 900,12 1080,44 C1260,76 1380,28 1440,44 L1440,88 L0,88 Z"
          fill="rgba(30,18,20,0.35)"
        />
        <path
          d="M0,48 C200,88 440,10 720,52 C1000,94 1240,14 1440,48 L1440,88 L0,88 Z"
          fill="var(--color-ink)"
        />
      </svg>
    </div>
  );
}


