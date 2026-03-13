import type { PortfolioItem } from "../../domain/portfolio-item";

/** Available filters for portfolio items. */
export type PortfolioFilter = "Todo" | "Proyectos" | "Investigaciones" | "Fotos";

/** Filters items by a portfolio filter. */
export function filterPortfolioItems(items: PortfolioItem[], filter: PortfolioFilter): PortfolioItem[] {
  if (filter === "Todo") return items;
  if (filter === "Proyectos") return items.filter((item) => item.variant === "proyecto");
  if (filter === "Investigaciones") return items.filter((item) => item.variant === "investigacion");
  if (filter === "Fotos") return items.filter((item) => item.variant === "foto");
  return items;
}


