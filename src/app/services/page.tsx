import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "서비스 안내",
  description: `${siteConfig.companyName}의 시스템 에어컨, 인테리어, 시스템 세척 서비스를 안내합니다.`,
};

export default function ServicesPage() {
  return (
    <Container className="py-14 sm:py-20">
      <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">서비스 안내</h1>
      <p className="mt-3 max-w-2xl text-gray-500">
        시스템 에어컨 설치, 인테리어, 이미 사용 중인 시스템 에어컨 세척까지 — 필요에 맞는
        서비스를 확인해보세요. 에어컨과 인테리어를 함께 진행하는 일괄 시공 패키지도
        제공합니다.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
          >
            <PlaceholderImage label={`${service.title} 시공 사진`} ratio="aspect-[3/2]" />
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-brand-600">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{service.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-600">
                자세히 보기 →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
