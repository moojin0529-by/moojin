"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { contactFormSchema, inquiryTypes, spaceTypes } from "@/lib/validation/contact";
import { isRateLimited } from "@/lib/rate-limit";
import { siteConfig } from "@/config/site";

export interface ContactActionState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}

const label = (list: readonly { value: string; label: string }[], value: string) =>
  list.find((item) => item.value === value)?.label ?? value;

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  // honeypot: 봇은 보통 숨겨진 필드까지 채운다.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success" };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "잠시 후 다시 시도해주세요. 문의가 급하시면 전화로 연락 부탁드립니다.",
    };
  }

  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    inquiryType: formData.get("inquiryType"),
    region: formData.get("region"),
    spaceType: formData.get("spaceType") || undefined,
    message: formData.get("message") || undefined,
    agree: formData.get("agree") === "on",
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return { status: "error", fieldErrors, message: "입력 내용을 다시 확인해주세요." };
  }

  const data = parsed.data;

  const summaryLines = [
    `이름: ${data.name}`,
    `연락처: ${data.phone}`,
    `문의 유형: ${label(inquiryTypes, data.inquiryType)}`,
    `시공 지역: ${data.region}`,
    data.spaceType ? `공간 유형: ${label(spaceTypes, data.spaceType)}` : null,
    data.message ? `상세 내용: ${data.message}` : null,
  ].filter(Boolean);

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY가 설정되지 않았습니다.");
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const { error } = await resend.emails.send({
      from: `${siteConfig.companyName} 홈페이지 <${fromEmail}>`,
      to: toEmail,
      replyTo: undefined,
      subject: `[견적문의] ${data.name} / ${label(inquiryTypes, data.inquiryType)} / ${data.region}`,
      text: summaryLines.join("\n"),
    });

    if (error) throw new Error(error.message);

    return { status: "success" };
  } catch (err) {
    console.error("[contact] 이메일 발송 실패, 접수 내용:\n" + summaryLines.join("\n"), err);
    return {
      status: "error",
      message: `문의 접수 중 오류가 발생했습니다. 문의 내용이 유실되지 않도록 전화로 연락 부탁드립니다: ${siteConfig.phone}`,
    };
  }
}
