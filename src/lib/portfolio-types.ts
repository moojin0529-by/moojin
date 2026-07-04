export type PortfolioCategory = "aircon" | "interior" | "both";

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
  both: "에어컨+인테리어",
};
