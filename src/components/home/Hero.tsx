import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900" />
      <Container className="relative flex flex-col items-start gap-6 py-20 sm:py-28">
        <p className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-brand-100">
          {siteConfig.serviceAreas[0]} 시공 전문
        </p>
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {siteConfig.serviceAreas[0]} 시스템 에어컨 · 인테리어 전문 시공
        </h1>
        <p className="max-w-xl text-base text-brand-100 sm:text-lg">
          무료 현장 실측부터 시공, A/S까지 — {siteConfig.companyName}이(가) 책임지고
          진행합니다.
        </p>

        <div className="mt-2 flex flex-wrap gap-3">
          <LinkButton href="/contact" size="lg">
            무료 견적 문의
          </LinkButton>
          <LinkButton href="/portfolio" variant="outline" size="lg">
            시공 사례 보기
          </LinkButton>
        </div>

        <a
          href={siteConfig.phoneHref}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-brand-300 underline-offset-4 sm:hidden"
        >
          지금 바로 전화 상담 {siteConfig.phone}
        </a>
      </Container>
    </section>
  );
}
