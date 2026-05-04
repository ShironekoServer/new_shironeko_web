import type { MetadataRoute } from "next";

const routes = ["", "/shop", "/support", "/terms", "/privacy", "/commerce"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.shironekoserver.com${route}`,
    lastModified: new Date("2026-05-04"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
