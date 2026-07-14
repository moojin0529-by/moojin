import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { services } from "@/data/services";

export function ServicesSummary() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          서비스 안내
        </h2>
        <p className="mt-2 text-gray-500">필요한 서비스를 선택해 자세히 알아보세요.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <PlaceholderImage label={`${service.title} 시공 사진`} />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {service.summary}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-600">
                  자세히 보기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
