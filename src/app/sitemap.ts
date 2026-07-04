import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { getAllPortfolio } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const portfolioRoutes = getAllPortfolio().map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes];
}
