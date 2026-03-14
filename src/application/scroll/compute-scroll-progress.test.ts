import { describe, it, expect } from "vitest";
import { computeScrollProgress } from "./compute-scroll-progress";

describe("computeScrollProgress", () => {
  it("returns 0 when scrollY is at top", () => {
    const result = computeScrollProgress(0, 1000, 500);
    expect(result).toBe(0);
  });

  it("returns 1 when scrollY is at bottom", () => {
    const result = computeScrollProgress(500, 1000, 500);
    expect(result).toBe(1);
  });

  it("returns 0.5 at midpoint", () => {
    const result = computeScrollProgress(250, 1000, 500);
    expect(result).toBeCloseTo(0.5, 2);
  });

  it("returns 0 when page is shorter than viewport", () => {
    const result = computeScrollProgress(0, 300, 500);
    expect(result).toBe(0);
  });

  it("clamps to 1 when scrollY exceeds scrollable distance", () => {
    const result = computeScrollProgress(600, 1000, 500);
    expect(result).toBe(1);
  });

  it("calculates progress correctly for various positions", () => {
    const result = computeScrollProgress(100, 1000, 500);
    expect(result).toBeCloseTo(0.2, 2);
  });

  it("handles edge case with scrollHeight equal to viewportHeight", () => {
    const result = computeScrollProgress(0, 500, 500);
    expect(result).toBe(0);
  });

  it("handles negative scrollY gracefully", () => {
    const result = computeScrollProgress(-10, 1000, 500);
    expect(result).toBeGreaterThanOrEqual(0);
  });
});
