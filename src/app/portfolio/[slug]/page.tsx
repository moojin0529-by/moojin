import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import {
  getAllPortfolio,
  getPortfolioBySlug,
  getRelatedPortfolio,
  categoryLabels,
} from "@/lib/portfolio";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return getAllPortfolio().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPortfolioBySlug(slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: `${entry.location} ${entry.spaceType} ${categoryLabels[entry.category]} 시공 사례. ${siteConfig.companyName}`,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getPortfolioBySlug(slug);
  if (!entry) notFound();

  const related = getRelatedPortfolio(entry, 3);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "시공 사례", path: "/portfolio" },
    { name: entry.title, path: `/portfolio/${entry.slug}` },
  ]);

  const infoRows = [
    ["위치", entry.location],
    ["공간 유형", entry.spaceType],
    ["시공 범위", categoryLabels[entry.category]],
    ["시공 기간", entry.duration],
  ];

  return (
    <Container className="py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav className="text-sm text-gray-400">
        <Link href="/portfolio" className="hover:text-brand-600">
          시공 사례
        </Link>{" "}
        / <span className="text-gray-600">{entry.title}</span>
      </nav>

      <h1 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">{entry.title}</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {entry.images.map((img, i) => (
              <PlaceholderImage key={img} label={`${entry.title} 사진 ${i + 1}`} />
            ))}
          </div>

          <article className="prose prose-sm mt-8 max-w-none text-gray-700 prose-headings:font-bold prose-headings:text-gray-900">
            <MDXRemote source={entry.content} />
          </article>
        </div>

        <aside className="h-fit rounded-2xl border border-gray-200 p-5">
          <p className="text-sm font-bold text-gray-900">프로젝트 정보</p>
          <dl className="mt-4 space-y-3 text-sm">
            {infoRows.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-3">
                <dt className="text-gray-500">{label}</dt>
                <dd className="text-right font-medium text-gray-800">{value}</dd>
              </div>
            ))}
          </dl>
          <LinkButton href="/contact" size="md" className="mt-6 w-full justify-center">
            견적 문의하기
          </LinkButton>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900">관련 시공 사례</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
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
        </section>
      )}
    </Container>
  );
}
