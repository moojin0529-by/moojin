"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, inquiryTypes, spaceTypes, type ContactFormValues } from "@/lib/validation/contact";
import { submitContact, type ContactActionState } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";
const errorClass = "mt-1 text-xs text-red-600";

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<ContactActionState | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  if (result?.status === "success") {
    return (
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center">
        <h3 className="text-xl font-bold text-brand-700">문의가 접수되었습니다.</h3>
        <p className="mt-2 text-sm text-gray-600">
          영업일 기준 24시간 내 담당자가 연락드립니다.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          급하신 경우 바로 전화 주세요.{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-brand-600">
            {siteConfig.phone}
          </a>
        </p>
      </div>
    );
  }

  const onSubmit = handleSubmit((_values, event) => {
    const form = event?.target as HTMLFormElement;
    const fd = new FormData(form);

    startTransition(async () => {
      const res = await submitContact({ status: "idle" }, fd);
      setResult(res);
      if (res.status === "success") reset();
    });
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          이름 <span className="text-red-500">*</span>
        </label>
        <input id="name" className={inputClass} {...register("name")} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
          연락처 <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="010-1234-5678"
          className={inputClass}
          {...register("phone")}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <span className="mb-2 block text-sm font-medium text-gray-700">
          문의 유형 <span className="text-red-500">*</span>
        </span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {inquiryTypes.map((type) => (
            <label
              key={type.value}
              className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50 has-[:checked]:text-brand-700"
            >
              <input
                type="radio"
                value={type.value}
                className="sr-only"
                {...register("inquiryType")}
              />
              {type.label}
            </label>
          ))}
        </div>
        {errors.inquiryType && <p className={errorClass}>{errors.inquiryType.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="region" className="mb-1 block text-sm font-medium text-gray-700">
            시공 지역 <span className="text-red-500">*</span>
          </label>
          <input
            id="region"
            placeholder="예) 서울 강남구"
            className={inputClass}
            {...register("region")}
          />
          {errors.region && <p className={errorClass}>{errors.region.message}</p>}
        </div>

        <div>
          <label htmlFor="spaceType" className="mb-1 block text-sm font-medium text-gray-700">
            공간 유형
          </label>
          <select id="spaceType" className={inputClass} defaultValue="" {...register("spaceType")}>
            <option value="">선택 안 함</option>
            {spaceTypes.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          상세 내용
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="평수, 원하시는 시공 일정 등을 자유롭게 남겨주세요."
          className={inputClass}
          {...register("message")}
        />
      </div>

      <div className="rounded-lg border border-gray-200 p-4">
        <label className="flex items-start gap-2 text-sm text-gray-700">
          <input type="checkbox" className="mt-0.5" {...register("agree")} />
          <span>
            개인정보 수집·이용에 동의합니다. <span className="text-red-500">*</span>
          </span>
        </label>
        <details className="mt-2 text-xs text-gray-500">
          <summary className="cursor-pointer select-none text-gray-400">
            수집 항목 및 이용 목적 펼쳐보기
          </summary>
          <div className="mt-2 space-y-1 leading-relaxed">
            <p>수집 항목: 이름, 연락처, 문의 내용</p>
            <p>이용 목적: 견적 상담 및 시공 문의 응대</p>
            <p>보유 기간: 문의 처리 완료 후 6개월 이내 파기</p>
            <p>
              동의를 거부할 수 있으며, 다만 동의하지 않으실 경우 견적 문의 접수가 제한될 수
              있습니다. 자세한 내용은{" "}
              <a href="/privacy" className="underline">
                개인정보처리방침
              </a>
              을 참고해주세요.
            </p>
          </div>
        </details>
        {errors.agree && <p className={errorClass}>{errors.agree.message}</p>}
      </div>

      {result?.status === "error" && result.message && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">{result.message}</div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "접수 중..." : "무료 견적 문의하기"}
      </Button>
    </form>
  );
}
