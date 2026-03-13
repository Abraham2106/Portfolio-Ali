import { useCallback } from "react";

/** Returns a helper for scrolling to a section by id. */
export function useScrollToId() {
  return useCallback((id: string, options: ScrollIntoViewOptions = { behavior: "smooth" }) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView(options);
  }, []);
}


