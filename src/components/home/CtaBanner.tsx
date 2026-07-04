import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function CtaBanner() {
  return (
    <section className="bg-brand-600 py-16 text-white">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          지금 무료 견적 받아보세요
        </h2>
        <p className="text-brand-100">
          현장 실측부터 시공, A/S까지 {siteConfig.companyName}이(가) 책임집니다.
        </p>
        <a href={siteConfig.phoneHref} className="text-2xl font-extrabold sm:text-3xl">
          {siteConfig.phone}
        </a>
        <LinkButton href="/contact" variant="secondary" size="lg" className="mt-2 bg-white">
          무료 견적 문의하기
        </LinkButton>
      </Container>
    </section>
  );
}
