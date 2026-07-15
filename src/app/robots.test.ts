import { describe, expect, it } from "vitest";
import robots from "./robots";

describe("robots.ts", () => {
  it("allows all user agents and specifies the sitemap", () => {
    const result = robots();
    expect(result.rules).toEqual({
      userAgent: "*",
      allow: "/",
    });
    expect(result.sitemap).toBe("https://metyatech.com/sitemap.xml");
  });
});
