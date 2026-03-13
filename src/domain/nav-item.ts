import type { Num } from "./value-objects";

/** Section ids for navigation. */
export type SectionId = "hero" | "feed" | "recursos" | "contacto";

/** Navigation item entity. */
export interface NavItem {
  /** Section id. */
  id: SectionId;
  /** Display label. */
  label: string;
  /** Display number. */
  num: Num;
}


