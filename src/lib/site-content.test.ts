import { describe, expect, it } from "vitest";
import * as siteContent from "./site-content";

describe("site-content.ts", () => {
  it("provides canonical URLs and contact info", () => {
    expect(siteContent.siteUrl).toBe("https://metyatech.com");
    expect(siteContent.supportEmail).toBe("support@metyatech.com");
    expect(siteContent.legalNoticeEmail).toBe("support@metyatech.com");
  });

  it("exports properly structured company info", () => {
    expect(siteContent.company.name).toBe("metyatech");
    expect(siteContent.company.operator).toBe("metyatech");
  });

  it("exports properly structured product info for Meal Autopilot", () => {
    expect(siteContent.mealAutopilot.name).toBe("Meal Autopilot");
    expect(siteContent.mealAutopilot.price).toBe("¥680 / month");
    expect(siteContent.mealAutopilot.features.length).toBeGreaterThan(0);
    expect(siteContent.mealAutopilot.billing.length).toBeGreaterThan(0);
    expect(siteContent.mealAutopilot.policies.length).toBeGreaterThan(0);
    expect(siteContent.mealAutopilot.support.length).toBeGreaterThan(0);
  });

  it("includes essential legal notice details", () => {
    const { legalNotice } = siteContent.mealAutopilot;
    expect(legalNotice.operator).toBe("metyatech");
    expect(legalNotice.representative).toBe("Kota Yamamoto");
    expect(legalNotice.price).toBe("¥680 per month");
  });
});
