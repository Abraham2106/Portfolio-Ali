import { describe, it, expect } from "vitest";
import { filterPortfolioItems } from "./filter-portfolio-items";
import type { PortfolioItem } from "../../domain/portfolio-item";
import { asPortfolioItemId, asNum, asYear, asTag, asImageUrl } from "../../domain/value-objects";

describe("filterPortfolioItems", () => {
  const mockItems: PortfolioItem[] = [
    { id: asPortfolioItemId(1), num: asNum("01"), year: asYear("2024"), tag: asTag("Tecnología"), title: "Project 1", variant: "proyecto", imageUrl: asImageUrl("https://example.com/1.jpg") },
    { id: asPortfolioItemId(2), num: asNum("02"), year: asYear("2024"), tag: asTag("Investigación"), title: "Investigation 1", variant: "investigacion", extract: "Summary" },
    { id: asPortfolioItemId(3), num: asNum("03"), year: asYear("2024"), tag: asTag("Fotografía"), variant: "foto", imageUrl: asImageUrl("https://example.com/3.jpg") },
    { id: asPortfolioItemId(4), num: asNum("04"), year: asYear("2024"), tag: asTag("Tecnología"), title: "Project 2", variant: "proyecto", imageUrl: asImageUrl("https://example.com/4.jpg") },
  ];

  it("returns all items when filter is 'Todo'", () => {
    const result = filterPortfolioItems(mockItems, "Todo");
    expect(result).toHaveLength(4);
    expect(result).toEqual(mockItems);
  });

  it("returns only proyectos when filter is 'Proyectos'", () => {
    const result = filterPortfolioItems(mockItems, "Proyectos");
    expect(result).toHaveLength(2);
    expect(result.every((item) => item.variant === "proyecto")).toBe(true);
  });

  it("returns only investigaciones when filter is 'Investigaciones'", () => {
    const result = filterPortfolioItems(mockItems, "Investigaciones");
    expect(result).toHaveLength(1);
    expect(result[0].variant).toBe("investigacion");
  });

  it("returns only fotos when filter is 'Fotos'", () => {
    const result = filterPortfolioItems(mockItems, "Fotos");
    expect(result).toHaveLength(1);
    expect(result[0].variant).toBe("foto");
  });

  it("returns all items for empty array", () => {
    const result = filterPortfolioItems([], "Proyectos");
    expect(result).toHaveLength(0);
  });

  it("preserves order of items", () => {
    const result = filterPortfolioItems(mockItems, "Proyectos");
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(4);
  });
});
