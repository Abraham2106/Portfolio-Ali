import { describe, it, expect } from "vitest";
import { getActiveSection } from "./get-active-section";
import type { SectionPosition } from "./get-active-section";

describe("getActiveSection", () => {
  const sections: SectionPosition[] = [
    { id: "hero", top: 0 },
    { id: "feed", top: 800 },
    { id: "resources", top: 1600 },
    { id: "footer", top: 2400 },
  ];

  it("returns first section when scrollY is at top", () => {
    const result = getActiveSection(sections, 0, 100);
    expect(result).toBe("hero");
  });

  it("returns hero section before first threshold", () => {
    const result = getActiveSection(sections, 400, 100);
    expect(result).toBe("hero");
  });

  it("returns feed section when scrollY crosses feed threshold", () => {
    const result = getActiveSection(sections, 850, 100);
    expect(result).toBe("feed");
  });

  it("returns resources section when scrollY crosses resources threshold", () => {
    const result = getActiveSection(sections, 1650, 100);
    expect(result).toBe("resources");
  });

  it("returns footer section when scrollY crosses footer threshold", () => {
    const result = getActiveSection(sections, 2450, 100);
    expect(result).toBe("footer");
  });

  it("respects offset parameter", () => {
    // With offset 50, section triggered 50px earlier
    const result = getActiveSection(sections, 750, 50);
    expect(result).toBe("feed");
  });

  it("returns first section for empty array", () => {
    const result = getActiveSection([], 1000, 100);
    expect(result).toBe("hero");
  });

  it("handles negative scrollY", () => {
    const result = getActiveSection(sections, -100, 100);
    expect(result).toBe("hero");
  });

  it("returns last section when scrollY is beyond all thresholds", () => {
    const result = getActiveSection(sections, 5000, 100);
    expect(result).toBe("footer");
  });

  it("transitions between sections accurately", () => {
    // Test transition point at exactly the threshold
    const atThreshold = getActiveSection(sections, 800, 0);
    expect(atThreshold).toBe("feed");

    const beforeThreshold = getActiveSection(sections, 799, 0);
    expect(beforeThreshold).toBe("hero");
  });
});
