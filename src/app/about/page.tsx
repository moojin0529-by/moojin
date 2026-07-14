import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { siteConfig } from "@/config/site";
import { greeting, history, licenses, promises, siteGallery } from "@/data/about";

export const metadata: Metadata = {
  title: "회사소개",
  description: `${siteConfig.companyName} 회사소개, 사업자 정보, 시공 지역 안내`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-900 py-16 text-white sm:py-20">
        <Container>
          <h1 className="text-2xl font-extrabold sm:text-3xl">회사소개</h1>
          <div className="mt-6 max-w-2xl space-y-4">
            {greeting.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-brand-100">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="text-xl font-bold text-gray-900">{siteConfig.companyName}의 약속</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {promises.map((p) => (
              <div key={p.title}>
                <p className="font-bold text-brand-600">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">시공 현장</h2>
              <p className="mt-2 text-sm text-gray-500">
                {siteConfig.companyName}이(가) 직접 시공한 다양한 현장입니다.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="hidden text-sm font-semibold text-brand-600 sm:inline-block"
            >
              시공 사례 전체보기 →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {siteGallery.map((caption) => (
              <PlaceholderImage key={caption} label={caption} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/portfolio" className="text-sm font-semibold text-brand-600">
              시공 사례 전체보기 →
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <section>
            <h2 className="text-xl font-bold text-gray-900">회사 연혁</h2>
            <ol className="mt-5 space-y-4 border-l border-gray-200 pl-5">
              {history.map((h) => (
                <li key={h.year} className="relative">
                  <span className="absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full bg-brand-600" />
                  <p className="text-sm font-bold text-brand-600">{h.year}</p>
                  <p className="text-sm text-gray-600">{h.event}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 text-xl font-bold text-gray-900">보유 면허/자격</h2>
            <ul className="mt-4 space-y-2">
              {licenses.map((license) => (
                <li key={license} className="text-sm text-gray-600">
                  · {license}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">사업자 정보</h2>
            <dl className="mt-5 divide-y divide-gray-100 rounded-xl border border-gray-200 text-sm">
              {[
                ["상호", siteConfig.companyName],
                ["대표자", siteConfig.business.representative],
                ["사업자등록번호", siteConfig.business.registrationNumber],
                ["주소", siteConfig.business.address],
                ["대표전화", siteConfig.phone],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4 px-4 py-3">
                  <dt className="w-28 shrink-0 font-medium text-gray-500">{label}</dt>
                  <dd className="text-gray-800">{value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 text-xl font-bold text-gray-900">시공 지역</h2>
            <p className="mt-3 text-sm text-gray-600">{siteConfig.serviceAreas.join(", ")}</p>

            <h2 className="mt-10 text-xl font-bold text-gray-900">오시는 길</h2>
            <p className="mt-3 text-sm text-gray-600">{siteConfig.business.address}</p>
            {siteConfig.naverMapUrl ? (
              <a
                href={siteConfig.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-brand-600"
              >
                네이버 지도에서 보기 →
              </a>
            ) : (
              <div className="mt-3 flex aspect-video w-full items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400">
                지도 영역 (네이버 지도 링크/이미지 준비 중)
              </div>
            )}
          </section>
        </div>
      </Container>
    </>
  );
}
