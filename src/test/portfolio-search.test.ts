import { describe, expect, it } from "vitest";
import { searchPortfolio, getItemsBySkill } from "@/lib/portfolio";

describe("portfolio search", () => {
  it("finds Kotlin work when searching the alias 'kt'", () => {
    const titles = searchPortfolio("kt").map((item) => item.title);
    expect(titles).toContain("Pomodoro KMP");
  });

  it("finds the hackathon achievement by its event name", () => {
    const titles = searchPortfolio("hackathon").map((item) => item.title);
    expect(titles).toContain("Lead-Trace AI service");
  });
});

describe("skill pages", () => {
  it("lists items from every collection that reference the skill", () => {
    const collections = new Set(getItemsBySkill("kotlin").map((item) => item.collection));
    expect(collections).toEqual(new Set(["projects", "certifications", "volunteering"]));
  });
});
