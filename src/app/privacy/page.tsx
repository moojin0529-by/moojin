import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${siteConfig.companyName} 개인정보처리방침`,
};

const sections = [
  {
    title: "1. 수집하는 개인정보 항목",
    body: [
      `${siteConfig.companyName}(이하 '회사')는 견적 문의 접수를 위해 아래와 같은 개인정보를 수집합니다.`,
      "- 필수 항목: 이름, 연락처",
      "- 선택 항목: 문의 내용, 시공 지역, 공간 유형",
    ],
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    body: [
      "회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다.",
      "- 견적 상담 및 시공 문의에 대한 응대",
      "- 상담 이력 관리 및 서비스 안내",
    ],
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: [
      "회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.",
      "단, 문의 응대 완료 후에도 관련 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.",
      "- 견적 문의 기록: 문의 처리 완료 후 6개월 이내 파기",
    ],
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: [
      "회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자가 사전에 동의한 경우나 법령의 규정에 의거한 경우는 예외로 합니다.",
    ],
  },
  {
    title: "5. 개인정보 처리 위탁",
    body: [
      "회사는 원활한 견적 문의 처리를 위해 이메일 발송 등 일부 업무를 외부 서비스에 위탁할 수 있으며, 위탁 시 관련 법령에 따라 필요한 사항을 규정합니다.",
    ],
  },
  {
    title: "6. 이용자의 권리와 행사 방법",
    body: [
      "이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회, 수정, 삭제, 처리정지를 요청할 수 있으며, 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다.",
      "다만, 동의를 거부할 경우 견적 문의 접수 및 상담이 제한될 수 있습니다.",
    ],
  },
  {
    title: "7. 개인정보 보호책임자",
    body: [
      `성명: ${siteConfig.business.representative}`,
      `연락처: ${siteConfig.phone}`,
      `이메일: ${siteConfig.email}`,
    ],
  },
  {
    title: "8. 고지의 의무",
    body: [
      "이 개인정보처리방침은 법령 및 방침에 따라 변경될 수 있으며, 변경 시 홈페이지를 통해 공지합니다.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <Container className="py-14 sm:py-20">
      <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">개인정보처리방침</h1>
      <p className="mt-3 text-sm text-gray-500">
        {siteConfig.companyName}은(는) 이용자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.
      </p>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
            <div className="mt-2 space-y-1 text-sm leading-relaxed text-gray-600">
              {section.body.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 text-xs text-gray-400">시행일자: 2026년 1월 1일</p>
    </Container>
  );
}
