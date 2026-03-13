import type { PortfolioItem, PortfolioVariant } from "../../../domain/portfolio-item";
import type { LoadStatus } from "../../../shared/lib/types";

/** Props shared by all portfolio card renderers. */
export interface PortfolioCardProps {
  /** Portfolio item to render. */
  item: PortfolioItem;
  /** Whether the item is featured in the layout. */
  isFeatured?: boolean;
  /** Image loading status for image-based variants. */
  imageStatus?: LoadStatus;
  /** Image load handler. */
  onImageLoad?: () => void;
  /** Image error handler. */
  onImageError?: () => void;
}

/** Renderer signature for a portfolio card variant. */
export type PortfolioCardRenderer = (props: PortfolioCardProps) => JSX.Element;

const registry = new Map<PortfolioVariant, PortfolioCardRenderer>();

/** Registers a renderer for a specific variant. */
export function registerPortfolioCard(variant: PortfolioVariant, renderer: PortfolioCardRenderer) {
  registry.set(variant, renderer);
}

/** Resolves a renderer for a specific variant. */
export function getPortfolioCardRenderer(variant: PortfolioVariant) {
  const renderer = registry.get(variant);
  if (!renderer) {
    throw new Error(`Missing renderer for variant: ${variant}`);
  }
  return renderer;
}


