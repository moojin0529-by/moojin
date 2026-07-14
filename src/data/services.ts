export type ServiceSlug = "aircon" | "interior" | "cleaning";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  summary: string;
  heroDescription: string;
  items: { title: string; description: string }[];
  spaces: string[];
  faqs: FaqItem[];
}

export const services: ServiceDetail[] = [
  {
    slug: "aircon",
    title: "시스템 에어컨",
    shortTitle: "시스템 에어컨",
    summary: "신규 설치부터 이전, 교체까지 시스템 에어컨 전문 시공",
    heroDescription:
      "아파트, 주택, 상가, 사무실 등 공간에 맞는 최적의 시스템 에어컨 설치를 제안하고, 배관 공사와 실외기 위치까지 꼼꼼하게 시공합니다.",
    items: [
      {
        title: "신규 설치 (1way / 4way 등)",
        description: "공간 구조와 평수에 맞는 냉방 방식 제안 및 설치",
      },
      {
        title: "이전 설치",
        description: "이사·인테리어 공사에 맞춘 기존 시스템 에어컨 이전 설치",
      },
      {
        title: "교체",
        description: "노후 장비를 신형으로 교체, 폐가전 처리까지 일괄 진행",
      },
      {
        title: "배관 공사",
        description: "냉매/드레인 배관을 은폐 또는 최소 노출로 깔끔하게 시공",
      },
      {
        title: "실외기 위치 시공",
        description: "소음·진동을 고려한 실외기 최적 위치 선정 및 거치대 설치",
      },
    ],
    spaces: ["아파트", "주택", "상가", "사무실"],
    faqs: [
      {
        question: "설치 비용은 어떻게 결정되나요?",
        answer:
          "평수, 설치 대수, 배관 길이와 난이도, 실외기 위치 등에 따라 달라집니다. 무료 현장 실측 후 정확한 견적을 안내해드립니다.",
      },
      {
        question: "현장 실측은 비용이 발생하나요?",
        answer: "실측은 무료로 진행됩니다. 방문 일정은 전화 또는 온라인 문의로 조율합니다.",
      },
      {
        question: "설치까지 얼마나 걸리나요?",
        answer:
          "상담과 실측 후 통상 3~7일 내 시공 일정을 잡으며, 대수에 따라 시공은 하루에서 이틀 정도 소요됩니다.",
      },
      {
        question: "기존 에어컨 철거도 함께 가능한가요?",
        answer: "네, 기존 장비 철거 및 폐기물 처리까지 함께 진행해드립니다.",
      },
      {
        question: "A/S는 어떻게 진행되나요?",
        answer:
          "시공 후 정기 점검과 함께 하자 발생 시 신속하게 방문하여 사후관리를 제공합니다.",
      },
    ],
  },
  {
    slug: "interior",
    title: "인테리어",
    shortTitle: "인테리어",
    summary: "주거부터 상업 공간까지, 에어컨 시공과 함께하는 일괄 인테리어",
    heroDescription:
      "주거 공간의 전체·부분 리모델링부터 카페, 사무실, 매장 등 상업 공간 인테리어까지 설계와 시공을 함께 진행합니다.",
    items: [
      { title: "주거 인테리어 (전체)", description: "구조 변경을 포함한 전체 리모델링" },
      { title: "주거 인테리어 (부분)", description: "주방, 욕실, 마루 등 부분 시공" },
      {
        title: "상업 공간 인테리어",
        description: "카페, 사무실, 매장 등 업종에 맞는 공간 설계 및 시공",
      },
      { title: "리모델링", description: "노후 공간의 구조·설비 개선 리모델링" },
      {
        title: "에어컨+인테리어 일괄 시공 패키지",
        description: "인테리어 공정에 맞춰 에어컨 배관·설치를 함께 진행, 공사 기간과 비용 절감",
      },
    ],
    spaces: ["아파트", "주택", "카페", "사무실", "매장"],
    faqs: [
      {
        question: "인테리어와 에어컨 시공을 함께 진행할 수 있나요?",
        answer:
          "네, 배관 매립 등 인테리어 공정과 맞물리는 부분을 고려해 에어컨 설치를 함께 진행하는 일괄 패키지를 제공합니다.",
      },
      {
        question: "견적은 어떻게 받을 수 있나요?",
        answer: "현장 방문 후 원하시는 컨셉과 예산에 맞춰 상세 견적서를 제공해드립니다.",
      },
      {
        question: "공사 기간은 보통 얼마나 걸리나요?",
        answer: "부분 시공은 3~7일, 전체 리모델링은 2~4주 정도 소요되며 현장 상황에 따라 달라질 수 있습니다.",
      },
      {
        question: "상업 공간도 영업시간 외 시공이 가능한가요?",
        answer: "네, 매장 운영에 지장이 없도록 야간·주말 시공 일정 조율이 가능합니다.",
      },
      {
        question: "디자인 시안을 미리 볼 수 있나요?",
        answer: "계약 전 3D 시안 또는 참고 사례를 통해 완성 이미지를 확인하실 수 있습니다.",
      },
    ],
  },
  {
    slug: "cleaning",
    title: "시스템 에어컨 세척",
    shortTitle: "시스템 세척",
    summary: "이미 설치된 중고 시스템 에어컨, 분해 세척으로 새것처럼",
    heroDescription:
      "새로 설치하지 않아도 괜찮습니다. 이미 사용 중인(중고) 시스템 에어컨을 분해 세척하여 냄새와 곰팡이, 냉방 효율 저하 문제를 해결해드립니다.",
    items: [
      {
        title: "분해 세척",
        description: "실내기를 완전히 분해해 열교환기·팬 내부의 오염물을 세척",
      },
      {
        title: "필터·송풍구 청소",
        description: "필터와 송풍구에 쌓인 먼지·곰팡이를 제거해 바람 냄새 개선",
      },
      {
        title: "곰팡이·냄새 제거 케어",
        description: "항균 코팅으로 세척 후 곰팡이 재발과 냄새 발생을 최소화",
      },
      {
        title: "냉방 효율 점검",
        description: "냉매량과 배관 상태를 점검해 냉방 효율 저하 원인을 진단",
      },
      {
        title: "정기 방문 관리",
        description: "연 1~2회 정기 세척 계약으로 매년 잊지 않고 관리",
      },
    ],
    spaces: ["아파트", "주택", "상가", "사무실"],
    faqs: [
      {
        question: "중고로 구매했거나 오래된 시스템 에어컨도 세척이 가능한가요?",
        answer:
          "네, 제조사나 설치 시기와 관계없이 대부분의 천장형 시스템 에어컨 분해 세척이 가능합니다. 방문 전 모델을 알려주시면 더 정확히 안내해드립니다.",
      },
      {
        question: "세척은 얼마나 자주 해야 하나요?",
        answer: "일반 가정은 1~2년에 한 번, 매장·사무실 등 사용량이 많은 공간은 연 1회 이상을 권장합니다.",
      },
      {
        question: "세척 시간은 얼마나 걸리나요?",
        answer: "실내기 1대 기준 1~2시간 내외로 완료되며, 대수에 따라 방문 당일 처리 가능합니다.",
      },
      {
        question: "물이나 세제로 인한 누수·고장 걱정은 없나요?",
        answer: "완전 분해 후 전용 장비로 세척하기 때문에 전기 부품 손상이나 누수 없이 안전하게 진행됩니다.",
      },
      {
        question: "세척 후에도 냄새가 나면 어떻게 하나요?",
        answer: "세척 후 일정 기간 내 냄새가 재발하면 무상 재방문으로 원인을 다시 점검해드립니다.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
