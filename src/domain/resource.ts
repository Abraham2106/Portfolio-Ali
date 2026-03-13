import type { Num } from "./value-objects";

/** Resource type label. */
export type ResourceType = "PDF" | "DOC" | "PDF+DOC";

/** Semantic accent role for resource UI. */
export type ResourceAccent = "identity" | "action" | "accent" | "pedagogy";

/** Downloadable resource entity. */
export interface Resource {
  /** Unique id. */
  id: number;
  /** Display number. */
  num: Num;
  /** Display name. */
  name: string;
  /** Short description. */
  description: string;
  /** File type label. */
  type: ResourceType;
  /** Accent role for UI mapping. */
  accent: ResourceAccent;
}


