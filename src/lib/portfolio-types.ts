export type PortfolioCategory = "aircon" | "interior" | "cleaning" | "both";

export interface PortfolioFrontmatter {
  title: string;
  slug: string;
  category: PortfolioCategory;
  location: string;
  spaceType: string;
  duration: string;
  date: string;
  thumbnail: string;
  images: string[];
  featured: boolean;
}

export interface PortfolioEntry extends PortfolioFrontmatter {
  content: string;
}

export const categoryLabels: Record<PortfolioCategory, string> = {
  aircon: "시스템 에어컨",
  interior: "인테리어",
  cleaning: "시스템 세척",
  both: "에어컨+인테리어",
};

/**
 * "both"(에어컨+인테리어 일괄 시공)는 aircon/interior 필터에만 함께 노출되어야 하며
 * cleaning처럼 서로 무관한 카테고리와는 매칭되면 안 된다.
 */
export function categoryMatches(entryCategory: PortfolioCategory, target: PortfolioCategory): boolean {
  if (entryCategory === target) return true;
  return entryCategory === "both" && (target === "aircon" || target === "interior");
}
