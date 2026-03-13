import type { SectionId } from "../../domain/nav-item";

/** Section position used for active section calculation. */
export interface SectionPosition {
  /** Section id. */
  id: SectionId;
  /** Top offset in pixels. */
  top: number;
}

/** Gets the active section id based on scroll position and offset. */
export function getActiveSection(
  sections: SectionPosition[],
  scrollY: number,
  offset: number
): SectionId {
  for (let i = sections.length - 1; i >= 0; i -= 1) {
    if (sections[i].top <= scrollY + offset) return sections[i].id;
  }
  return sections[0]?.id ?? "hero";
}


