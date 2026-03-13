import type { SectionId } from "../../domain/nav-item";
import type { SectionPosition } from "../../application/scroll/get-active-section";

/** Reads current offsetTop values for each section id. */
export function getSectionPositions(ids: readonly SectionId[]): SectionPosition[] {
  return ids.map((id) => {
    const el = document.getElementById(id);
    return { id, top: el?.offsetTop ?? 0 };
  });
}


