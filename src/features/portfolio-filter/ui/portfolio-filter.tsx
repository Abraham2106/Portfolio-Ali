import { PORTFOLIO_FILTERS, usePortfolioFilter } from "../model/use-portfolio-filter";

/** Filter pill group for the portfolio feed. */
export function PortfolioFilterBar({ onChange }: { onChange?: () => void }) {
  const { activeFilter, setFilter } = usePortfolioFilter();

  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        background: "rgba(30,18,20,0.04)",
        borderRadius: "9999px",
        padding: "4px",
      }}
    >
      {PORTFOLIO_FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            setFilter(filter);
            onChange?.();
          }}
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "13px",
            fontWeight: activeFilter === filter ? "600" : "400",
            color: activeFilter === filter ? "var(--color-cream)" : "var(--color-ink-subtle)",
            background: activeFilter === filter ? "var(--color-action)" : "transparent",
            border: "none",
            borderRadius: "9999px",
            padding: "8px 18px",
            cursor: "pointer",
            transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            whiteSpace: "nowrap",
            transform: activeFilter === filter ? "scale(1.04)" : "scale(1)",
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}


