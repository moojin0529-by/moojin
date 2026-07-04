import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { getPortfolioByCategory, categoryLabels, type PortfolioCategory } from "@/lib/portfolio";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "시공 사례",
  description: `${siteConfig.companyName}의 시스템 에어컨, 인테리어 시공 사례를 확인해보세요.`,
};

const tabs: { value: PortfolioCategory | "all"; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "aircon", label: "시스템 에어컨" },
  { value: "interior", label: "인테리어" },
];

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = (tabs.some((t) => t.value === category) ? category : "all") as
    | PortfolioCategory
    | "all";

  const cases = getPortfolioByCategory(activeCategory);

  return (
    <Container className="py-14 sm:py-20">
      <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">시공 사례</h1>
      <p className="mt-3 text-gray-500">{siteConfig.companyName}이(가) 직접 시공한 현장입니다.</p>

      <div className="mt-8 flex gap-2">
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            href={tab.value === "all" ? "/portfolio" : `/portfolio?category=${tab.value}`}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              activeCategory === tab.value
                ? "bg-brand-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {cases.length === 0 ? (
        <p className="mt-16 text-center text-gray-400">등록된 시공 사례가 없습니다.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <PlaceholderImage label={item.title} />
              <div className="p-5">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                  {categoryLabels[item.category]}
                </span>
                <h3 className="mt-3 line-clamp-2 font-bold text-gray-900 group-hover:text-brand-600">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.location}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
}
