import type { ImageUrl, Num, PortfolioItemId, Tag, Year } from "./value-objects";

/** Variants for portfolio items. */
export type PortfolioVariant = "investigacion" | "foto" | "proyecto";

/** Base fields shared by all portfolio items. */
export interface PortfolioItemBase {
  /** Unique item id. */
  id: PortfolioItemId;
  /** Display number (e.g. "01"). */
  num: Num;
  /** Category tag. */
  tag: Tag;
  /** Year label. */
  year: Year;
  /** Whether the item is featured. */
  featured?: boolean;
}

/** Research item variant. */
export interface InvestigacionItem extends PortfolioItemBase {
  /** Discriminator. */
  variant: "investigacion";
  /** Title text. */
  title: string;
  /** Summary excerpt. */
  extract: string;
}

/** Photo item variant. */
export interface FotoItem extends PortfolioItemBase {
  /** Discriminator. */
  variant: "foto";
  /** Image URL. */
  imageUrl: ImageUrl;
}

/** Project item variant. */
export interface ProyectoItem extends PortfolioItemBase {
  /** Discriminator. */
  variant: "proyecto";
  /** Title text. */
  title: string;
  /** Image URL. */
  imageUrl: ImageUrl;
}

/** Union of all portfolio item variants. */
export type PortfolioItem = InvestigacionItem | FotoItem | ProyectoItem;


