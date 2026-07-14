import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { PortfolioCategory, PortfolioFrontmatter, PortfolioEntry } from "@/lib/portfolio-types";
import { categoryMatches } from "@/lib/portfolio-types";

export type { PortfolioCategory, PortfolioFrontmatter, PortfolioEntry } from "@/lib/portfolio-types";
export { categoryLabels } from "@/lib/portfolio-types";

const PORTFOLIO_DIR = path.join(process.cwd(), "content", "portfolio");

export function getAllPortfolio(): PortfolioEntry[] {
  const files = fs.readdirSync(PORTFOLIO_DIR).filter((f) => f.endsWith(".mdx"));

  const entries = files.map((file) => {
    const raw = fs.readFileSync(path.join(PORTFOLIO_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return { ...(data as PortfolioFrontmatter), content };
  });

  return entries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedPortfolio(limit = 6): PortfolioEntry[] {
  const all = getAllPortfolio();
  const featured = all.filter((p) => p.featured);
  const list = featured.length > 0 ? featured : all;
  return list.slice(0, limit);
}

export function getPortfolioBySlug(slug: string): PortfolioEntry | undefined {
  return getAllPortfolio().find((p) => p.slug === slug);
}

export function getPortfolioByCategory(category: PortfolioCategory | "all"): PortfolioEntry[] {
  const all = getAllPortfolio();
  if (category === "all") return all;
  return all.filter((p) => categoryMatches(p.category, category));
}

export function getRelatedPortfolio(entry: PortfolioEntry, limit = 3): PortfolioEntry[] {
  return getAllPortfolio()
    .filter((p) => p.slug !== entry.slug && categoryMatches(p.category, entry.category))
    .slice(0, limit);
}
