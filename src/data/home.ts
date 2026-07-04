export const strengths = [
  {
    title: "경력 10년+",
    description: "수백 건의 시공 경험을 바탕으로 한 정확한 진단과 시공",
    icon: "award",
  },
  {
    title: "직영 시공팀",
    description: "하도급 없이 자체 기술팀이 처음부터 끝까지 책임 시공",
    icon: "hard-hat",
  },
  {
    title: "A/S 보장",
    description: "시공 후에도 정기 점검과 신속한 사후관리 제공",
    icon: "shield-check",
  },
  {
    title: "무료 현장 실측",
    description: "정확한 견적을 위한 방문 실측을 무료로 진행",
    icon: "ruler",
  },
] as const;

export const processSteps = [
  { step: 1, title: "상담", description: "전화/온라인으로 요청사항 접수" },
  { step: 2, title: "현장 실측", description: "전문 기사가 방문하여 공간 실측" },
  { step: 3, title: "견적 안내", description: "실측 기반 정확한 견적서 제공" },
  { step: 4, title: "시공", description: "일정 협의 후 전문 인력이 시공" },
  { step: 5, title: "A/S", description: "시공 후 점검 및 사후관리" },
] as const;

export const testimonials = [
  {
    name: "김○○ 고객님",
    location: "서울 강남구 · 아파트",
    rating: 5,
    content:
      "이사 전에 시스템 에어컨 4대를 설치했는데 일정도 정확하고 마감이 깔끔했습니다. 실외기 배관도 눈에 안 띄게 잘 정리해주셔서 만족합니다.",
  },
  {
    name: "박○○ 사장님",
    location: "경기 분당 · 카페",
    rating: 5,
    content:
      "카페 오픈 준비하면서 인테리어와 에어컨 설치를 동시에 진행했는데, 일정 조율부터 마감까지 한 번에 해결돼서 훨씬 수월했어요.",
  },
  {
    name: "이○○ 고객님",
    location: "서울 마포구 · 주택",
    rating: 5,
    content:
      "기존 벽걸이에서 시스템 에어컨으로 교체했습니다. 견적 설명도 자세히 해주시고 시공 후 청소까지 깔끔하게 마무리해주셨습니다.",
  },
  {
    name: "최○○ 고객님",
    location: "서울 송파구 · 사무실",
    rating: 4,
    content:
      "사무실 확장 이전하면서 실측부터 설치까지 맡겼는데, 예상 일정보다 빠르게 마무리해주셔서 업무 공백 없이 이전할 수 있었습니다.",
  },
] as const;

export const brands = [
  "LG전자",
  "삼성전자",
  "캐리어에어컨",
  "귀뚜라미",
  "경동나비엔",
] as const;
