import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PortfolioBrowser } from "@/components/portfolio/PortfolioBrowser";
import { getAllPortfolio } from "@/lib/portfolio";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "시공 사례",
  description: `${siteConfig.companyName}의 시스템 에어컨, 인테리어 시공 사례를 확인해보세요.`,
};

export default function PortfolioPage() {
  const entries = getAllPortfolio();

  return (
    <Container className="py-14 sm:py-20">
      <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">시공 사례</h1>
      <p className="mt-3 text-gray-500">{siteConfig.companyName}이(가) 직접 시공한 현장입니다.</p>

      <PortfolioBrowser entries={entries} />
    </Container>
  );
}
