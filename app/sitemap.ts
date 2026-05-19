import type { MetadataRoute } from "next";

const pages = [
  "",
  "/shop",
  "/support",
  "/terms",
  "/privacy",
  "/commerce",
];

const routes = [
  ...pages,
  ...pages.map((page) => `/en${page}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.shironekoserver.com${route}`,
    lastModified: new Date("2026-05-04"),
    changeFrequency: route === "" || route === "/en"
      ? "weekly"
      : "monthly",
    priority: route === "" || route === "/en"
      ? 1
      : 0.8,
  }));
}