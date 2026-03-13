/** Minimal DOMRect-like shape for pure calculations. */
export interface RectLike {
  /** Top position. */
  top: number;
  /** Bottom position. */
  bottom: number;
  /** Height. */
  height: number;
}

/** Viewport bounds for visibility checks. */
export interface ViewportBounds {
  /** Viewport height. */
  height: number;
}

/** Returns true if a rect is in viewport with the given threshold (0..1). */
export function isInViewport(rect: RectLike, viewport: ViewportBounds, threshold: number): boolean {
  const trigger = rect.top + rect.height * threshold;
  return trigger >= 0 && rect.top <= viewport.height;
}


