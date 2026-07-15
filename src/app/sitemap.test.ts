import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap.ts", () => {
  it("includes all published pages in the sitemap", () => {
    const result = sitemap();
    const urls = result.map((entry) => entry.url);

    expect(urls).toContain("https://metyatech.com");
    expect(urls).toContain("https://metyatech.com/meal-autopilot");
    expect(urls).toContain("https://metyatech.com/meal-autopilot/support");
    expect(urls).toContain("https://metyatech.com/meal-autopilot/privacy");
    expect(urls).toContain("https://metyatech.com/meal-autopilot/terms");
    expect(urls).toContain("https://metyatech.com/meal-autopilot/legal-notice");
  });

  it("sets monthly change frequency and appropriate priorities", () => {
    const result = sitemap();

    const root = result.find((e) => e.url === "https://metyatech.com");
    expect(root?.priority).toBe(1);
    expect(root?.changeFrequency).toBe("monthly");

    const subpage = result.find(
      (e) => e.url === "https://metyatech.com/meal-autopilot",
    );
    expect(subpage?.priority).toBe(0.8);
    expect(subpage?.changeFrequency).toBe("monthly");
  });
});
