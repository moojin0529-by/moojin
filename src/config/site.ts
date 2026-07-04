/**
 * 사이트 전역 설정.
 * 실제 오픈 전 아래 값들을 반드시 실제 회사 정보로 교체하세요. (PRD 9. 체크리스트 참고)
 */
export const siteConfig = {
  companyName: "회사명",
  companyNameEn: "Company Name",
  tagline: "시스템 에어컨 · 인테리어 전문 시공",
  description:
    "신축·이사·상가 오픈을 위한 시스템 에어컨 설치와 인테리어를 한 번에. 무료 현장 실측부터 A/S까지 책임지는 직영 시공팀입니다.",

  phone: "010-0000-0000",
  phoneHref: "tel:010-0000-0000",
  email: "contact@example.com",
  kakaoChannelUrl: "https://pf.kakao.com/_xxxxxx",

  business: {
    representative: "홍길동",
    registrationNumber: "000-00-00000",
    address: "서울특별시 ○○구 ○○로 00, 0층",
    addressShort: "서울 ○○구",
  },

  serviceAreas: ["서울 전 지역", "경기 일부 지역"],
  yearsInBusiness: 10,

  domain: "https://example.com",
  naverMapUrl: "",

  sns: {
    instagram: "",
    blog: "",
  },

  verification: {
    google: "",
    naver: "",
  },
} as const;

export const navItems = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "시공사례", href: "/portfolio" },
  { label: "문의", href: "/contact" },
] as const;
