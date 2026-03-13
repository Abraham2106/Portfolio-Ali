import type { ImageUrl, Tag } from "./value-objects";

/** Educator profile shown in the hero section. */
export interface EducatorProfile {
  /** Full name. */
  fullName: string;
  /** Display name for hero (first name). */
  displayName: string;
  /** Surname for hero (last name). */
  displaySurname: string;
  /** Role title. */
  roleTitle: string;
  /** Highlighted role emphasis. */
  roleHighlight: string;
  /** Location label. */
  location: string;
  /** Bio paragraph. */
  bio: string;
  /** Tag list. */
  tags: Tag[];
  /** Hero image URL. */
  heroImageUrl: ImageUrl;
  /** Marquee text for the ticker. */
  marqueeText: string;
}


