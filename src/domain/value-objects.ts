/** Branded identifier for portfolio items. */
export type PortfolioItemId = number & { readonly __brand: "PortfolioItemId" };

/** Branded two-digit label (e.g. "01"). */
export type Num = string & { readonly __brand: "Num" };

/** Branded year value (YYYY). */
export type Year = string & { readonly __brand: "Year" };

/** Branded tag text. */
export type Tag = string & { readonly __brand: "Tag" };

/** Branded URL string. */
export type Url = string & { readonly __brand: "Url" };

/** Branded image URL string. */
export type ImageUrl = Url & { readonly __brand: "ImageUrl" };

/** Casts a number to a PortfolioItemId. */
export const asPortfolioItemId = (value: number) => value as PortfolioItemId;

/** Casts a string to a Num. */
export const asNum = (value: string) => value as Num;

/** Casts a string to a Year. */
export const asYear = (value: string) => value as Year;

/** Casts a string to a Tag. */
export const asTag = (value: string) => value as Tag;

/** Casts a string to a Url. */
export const asUrl = (value: string) => value as Url;

/** Casts a string to an ImageUrl. */
export const asImageUrl = (value: string) => value as ImageUrl;


