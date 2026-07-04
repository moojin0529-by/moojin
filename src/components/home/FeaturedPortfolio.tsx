import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { getFeaturedPortfolio, categoryLabels } from "@/lib/portfolio";

export function FeaturedPortfolio() {
  const items = getFeaturedPortfolio(6);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              대표 시공 사례
            </h2>
            <p className="mt-2 text-gray-500">직접 시공한 현장을 확인해보세요.</p>
          </div>
          <Link
            href="/portfolio"
            className="hidden text-sm font-semibold text-brand-600 sm:inline-block"
          >
            전체보기 →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
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

        <div className="mt-8 text-center sm:hidden">
          <Link href="/portfolio" className="text-sm font-semibold text-brand-600">
            시공 사례 전체보기 →
          </Link>
        </div>
      </Container>
    </section>
  );
}
