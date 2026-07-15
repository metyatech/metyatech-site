import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/meal-autopilot",
    "/meal-autopilot/support",
    "/meal-autopilot/privacy",
    "/meal-autopilot/terms",
    "/meal-autopilot/legal-notice",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
