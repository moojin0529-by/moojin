import { z } from "zod";

export const inquiryTypes = [
  { value: "aircon", label: "시스템 에어컨" },
  { value: "interior", label: "인테리어" },
  { value: "both", label: "둘 다" },
  { value: "other", label: "기타" },
] as const;

export const spaceTypes = [
  { value: "apartment", label: "아파트" },
  { value: "house", label: "주택" },
  { value: "store", label: "상가" },
  { value: "office", label: "사무실" },
] as const;

const phoneRegex = /^01[0-9]-?\d{3,4}-?\d{4}$/;

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "이름을 입력해주세요.").max(50),
  phone: z
    .string()
    .trim()
    .min(1, "연락처를 입력해주세요.")
    .regex(phoneRegex, "올바른 휴대폰 번호 형식이 아닙니다. (예: 010-1234-5678)"),
  inquiryType: z.enum(["aircon", "interior", "both", "other"], {
    message: "문의 유형을 선택해주세요.",
  }),
  region: z.string().trim().min(1, "시공 지역을 입력해주세요.").max(100),
  spaceType: z.enum(["apartment", "house", "store", "office"]).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  agree: z.literal(true, {
    message: "개인정보 수집·이용에 동의해주세요.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
