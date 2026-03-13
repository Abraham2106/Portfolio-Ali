import { useEffect, useRef, useState } from "react";
import { filterPortfolioItems } from "../../../application/portfolio/filter-portfolio-items";
import type { PortfolioItem } from "../../../domain/portfolio-item";
import type { PortfolioFilter } from "../../../application/portfolio/filter-portfolio-items";
import { PortfolioCard } from "../../../entities/portfolio";
import { useImageStatus } from "../../../features/image-loading/model/use-image-status";
import { PortfolioFilterBar } from "../../../features/portfolio-filter/ui/portfolio-filter";
import { usePortfolioFilter, useUrlSyncedFilter } from "../../../features/portfolio-filter/model/use-portfolio-filter";
import { PORTFOLIO_ITEMS } from "../../../infrastructure/data/portfolio-items";
import { useIntersectionObserver } from "../../../infrastructure/observers/use-intersection-observer";

function PortfolioGridItem({
  item,
  index,
  activeFilter,
  gridVisible,
}: {
  item: PortfolioItem;
  index: number;
  activeFilter: PortfolioFilter;
  gridVisible: boolean;
}) {
  const isFeatured = activeFilter === "Todo" && index === 0;
  const hasImage = item.variant !== "investigacion";
  const { status, onLoad, onError } = useImageStatus(Number(item.id), hasImage);

  let gridColumn = "span 4";
  let gridRow = "span 2";
  const delay = index * 85;

  if (activeFilter === "Todo") {
    if (index === 0) {
      gridColumn = "span 8";
      gridRow = "span 3";
    } else {
      gridColumn = "span 4";
      gridRow = "span 3";
    }
  } else {
    gridColumn = "span 4";
    gridRow = "span 3";
  }

  return (
    <div
      className={`reveal-item${gridVisible ? " is-visible" : ""}`}
      style={{
        gridColumn,
        gridRow,
        minHeight: "280px",
        transitionDelay: `${delay}ms`,
      }}
    >
      <PortfolioCard
        item={item}
        isFeatured={isFeatured}
        imageStatus={status}
        onImageLoad={onLoad}
        onImageError={onError}
      />
    </div>
  );
}

export function FeedSection() {
  useUrlSyncedFilter();
  const { activeFilter } = usePortfolioFilter();
  const filtered = filterPortfolioItems(PORTFOLIO_ITEMS, activeFilter);

  const [gridVisible, setGridVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [filterKey, setFilterKey] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const headerObs = useIntersectionObserver(headerRef, { threshold: 0.2 }, !headerVisible);
  const gridObs = useIntersectionObserver(gridRef, { threshold: 0.06 }, !gridVisible);

  useEffect(() => {
    if (headerObs.isIntersecting) setHeaderVisible(true);
  }, [headerObs.isIntersecting]);

  useEffect(() => {
    if (gridObs.isIntersecting) setGridVisible(true);
  }, [gridObs.isIntersecting]);

  useEffect(() => {
    if (!gridVisible) return;
    setGridVisible(false);
    const timeout = window.setTimeout(() => setGridVisible(true), 40);
    setFilterKey((k) => k + 1);
    return () => window.clearTimeout(timeout);
  }, [activeFilter]);

  return (
    <section id="feed" style={{ padding: "100px 60px 100px", maxWidth: "1400px", margin: "0 auto" }}>
      <div
        ref={headerRef}
        className={`reveal-item${headerVisible ? " is-visible" : ""}`}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontWeight: "300",
              color: "var(--color-accent)",
              letterSpacing: "0.18em",
            }}
          >
            02
          </span>
          <div
            style={{
              height: "1px",
              width: "40px",
              background: "linear-gradient(90deg, var(--color-accent), transparent)",
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
            Mi trabajo
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: "700",
              color: "var(--color-ink)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
            }}
          >
            Proyectos &{" "}
            <span style={{ fontWeight: "300", fontStyle: "italic", color: "var(--color-ink-soft)" }}>
              Exploraciones
            </span>
          </h2>

          <PortfolioFilterBar />
        </div>
      </div>

      <div
        ref={gridRef}
        key={filterKey}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "24px",
          gridAutoRows: "minmax(120px, auto)",
        }}
      >
        {filtered.map((item, index) => (
          <PortfolioGridItem
            key={Number(item.id)}
            item={item}
            index={index}
            activeFilter={activeFilter}
            gridVisible={gridVisible}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #feed { padding: 80px 24px !important; }
          #feed > div:last-of-type { grid-template-columns: 1fr 1fr !important; }
          #feed > div:last-of-type > div { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        @media (max-width: 600px) {
          #feed > div:last-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}


