import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "견적 문의",
  description: `${siteConfig.companyName} 무료 견적 문의. 전화 또는 온라인 문의로 24시간 내 답변드립니다.`,
};

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">견적 문의</h1>
        <p className="mt-3 text-gray-500">
          아래 폼을 작성해 주시면 영업일 기준 24시간 내 담당자가 연락드립니다.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-[1fr_260px]">
        <div className="rounded-2xl border border-gray-200 p-6 sm:p-8">
          <ContactForm />
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-brand-50 p-5">
            <p className="text-sm font-semibold text-brand-700">빠른 상담이 필요하신가요?</p>
            <a
              href={siteConfig.phoneHref}
              className="mt-2 block text-xl font-extrabold text-brand-700"
            >
              {siteConfig.phone}
            </a>
            <p className="mt-1 text-xs text-brand-600">평일 09:00 - 18:00</p>
          </div>

          {siteConfig.kakaoChannelUrl && (
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-gray-200 p-5 text-sm font-semibold text-gray-700 hover:border-brand-300"
            >
              카카오톡 채널 상담 →
            </a>
          )}
        </aside>
      </div>
    </Container>
  );
}
