import { describe, it, expect } from "vitest";
import { isInViewport } from "./is-in-viewport";
import type { RectLike, ViewportBounds } from "./is-in-viewport";

describe("isInViewport", () => {
  const viewport: ViewportBounds = { height: 1000 };

  it("returns true for element fully visible in viewport", () => {
    const rect: RectLike = { top: 100, bottom: 300, height: 200 };
    expect(isInViewport(rect, viewport, 0)).toBe(true);
  });

  it("returns true for element at top of viewport", () => {
    const rect: RectLike = { top: 0, bottom: 200, height: 200 };
    expect(isInViewport(rect, viewport, 0)).toBe(true);
  });

  it("returns true for element at bottom of viewport", () => {
    const rect: RectLike = { top: 900, bottom: 1100, height: 200 };
    expect(isInViewport(rect, viewport, 0)).toBe(true);
  });

  it("returns false for element above viewport", () => {
    const rect: RectLike = { top: -300, bottom: -100, height: 200 };
    expect(isInViewport(rect, viewport, 0)).toBe(false);
  });

  it("returns false for element below viewport", () => {
    const rect: RectLike = { top: 1001, bottom: 1201, height: 200 };
    expect(isInViewport(rect, viewport, 0)).toBe(false);
  });

  it("respects threshold parameter", () => {
    const rect: RectLike = { top: 900, bottom: 1100, height: 200 };
    // With threshold 0.5, trigger point is at top + height * 0.5 = 900 + 100 = 1000
    expect(isInViewport(rect, viewport, 0.5)).toBe(true);
    
    // Element just below threshold should return false
    const rectBelow: RectLike = { top: 950, bottom: 1150, height: 200 };
    expect(isInViewport(rectBelow, viewport, 0.5)).toBe(false);
  });

  it("handles element partially in viewport", () => {
    const rect: RectLike = { top: 900, bottom: 1050, height: 150 };
    expect(isInViewport(rect, viewport, 0)).toBe(true);
  });

  it("handles zero height element", () => {
    const rect: RectLike = { top: 500, bottom: 500, height: 0 };
    expect(isInViewport(rect, viewport, 0)).toBe(true);
  });

  it("handles threshold of 1", () => {
    const rect: RectLike = { top: 800, bottom: 1000, height: 200 };
    // trigger = 800 + 200 * 1 = 1000, which is at viewport.height
    expect(isInViewport(rect, viewport, 1)).toBe(true);
  });

  it("handles threshold of 0", () => {
    const rect: RectLike = { top: 1000, bottom: 1200, height: 200 };
    // trigger = 1000 + 200 * 0 = 1000, which equals viewport.height
    expect(isInViewport(rect, viewport, 0)).toBe(true);
  });
});
