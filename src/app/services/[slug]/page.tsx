import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CtaBanner } from "@/components/home/CtaBanner";
import { services, getServiceBySlug } from "@/data/services";
import { getPortfolioByCategory, categoryLabels } from "@/lib/portfolio";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} 시공`,
    description: `${siteConfig.serviceAreas[0]} ${service.title} 전문 시공. ${service.summary}`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedCases = getPortfolioByCategory(service.slug).slice(0, 3);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-brand-900 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-medium text-brand-200">{siteConfig.serviceAreas[0]}</p>
          <h1 className="mt-2 text-2xl font-extrabold sm:text-4xl">{service.title} 시공</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-brand-100">
            {service.heroDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.spaces.map((space) => (
              <span
                key={space}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium"
              >
                {space}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <LinkButton href="/contact" size="lg">
              무료 견적 문의
            </LinkButton>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <h2 className="text-xl font-bold text-gray-900">세부 서비스</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {service.items.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-900">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gray-50 py-14 sm:py-20">
        <Container>
          <h2 className="text-xl font-bold text-gray-900">시공 프로세스</h2>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            {["상담", "실측", "견적", "시공", "A/S"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-3">
                <span className="rounded-full bg-white px-4 py-2 font-medium shadow-sm">
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-gray-300">→</span>}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {relatedCases.length > 0 && (
        <Container className="py-14 sm:py-20">
          <h2 className="text-xl font-bold text-gray-900">관련 시공 사례</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {relatedCases.map((c) => (
              <Link
                key={c.slug}
                href={`/portfolio/${c.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
              >
                <PlaceholderImage label={c.title} />
                <div className="p-5">
                  <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                    {categoryLabels[c.category]}
                  </span>
                  <h3 className="mt-3 line-clamp-2 font-bold text-gray-900 group-hover:text-brand-600">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{c.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      )}

      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="text-xl font-bold text-gray-900">자주 묻는 질문</h2>
          <div className="mt-6 divide-y divide-gray-100 rounded-2xl border border-gray-200">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="cursor-pointer list-none font-medium text-gray-900 marker:content-none">
                  <span className="mr-2 text-brand-600">Q.</span>
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  <span className="mr-2 font-bold text-gray-400">A.</span>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
