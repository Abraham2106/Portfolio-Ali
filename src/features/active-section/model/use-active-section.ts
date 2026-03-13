import { useEffect, useMemo, useRef } from "react";
import type { NavItem } from "../../../domain/nav-item";
import { getActiveSection } from "../../../application/scroll/get-active-section";
import { getSectionPositions } from "../../../infrastructure/scroll/get-section-positions";
import { useResizeListener } from "../../../infrastructure/scroll/use-resize-listener";
import { useScrollListener } from "../../../infrastructure/scroll/use-scroll-listener";
import { useAppDispatch } from "../../../app/providers/app-store-provider";

/** Options for active section tracking. */
export interface ActiveSectionOptions {
  /** Scroll offset in pixels. */
  offset?: number;
  /** Throttle interval in milliseconds. */
  throttleMs?: number;
}

/** Tracks the active section and syncs it to global state. */
export function useActiveSectionTracking(items: NavItem[], options: ActiveSectionOptions = {}) {
  const { offset = 140, throttleMs = 50 } = options;
  const dispatch = useAppDispatch();
  const positionsRef = useRef<ReturnType<typeof getSectionPositions>>([]);
  const ids = useMemo(() => items.map((item) => item.id), [items]);

  useEffect(() => {
    positionsRef.current = getSectionPositions(ids);
  }, [ids]);

  useResizeListener(() => {
    positionsRef.current = getSectionPositions(ids);
  });

  useScrollListener(
    (scrollY) => {
      const positions = positionsRef.current;
      if (!positions.length) return;
      const active = getActiveSection(positions, scrollY, offset);
      dispatch({ type: "set-active-section", sectionId: active });
    },
    { throttleMs }
  );
}


