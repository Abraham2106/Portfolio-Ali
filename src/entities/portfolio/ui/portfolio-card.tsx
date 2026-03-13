import type { PortfolioCardProps } from "../model/portfolio-card-registry";
import { getPortfolioCardRenderer } from "../model/portfolio-card-registry";

/** Orchestrates the correct card renderer by variant. */
export function PortfolioCard(props: PortfolioCardProps) {
  const Renderer = getPortfolioCardRenderer(props.item.variant);
  return <Renderer {...props} />;
}


