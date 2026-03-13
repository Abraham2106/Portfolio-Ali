import type { Url } from "./value-objects";

/** Social link kind. */
export type SocialKind = "linkedin" | "drive" | "email";

/** Social link entity. */
export interface SocialLink {
  /** Unique id. */
  id: SocialKind;
  /** Display label. */
  label: string;
  /** Secondary detail. */
  detail: string;
  /** URL. */
  href: Url;
}


