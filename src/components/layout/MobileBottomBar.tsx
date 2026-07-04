import { siteConfig } from "@/config/site";

export function MobileBottomBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-black/10 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.06)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-brand-600"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5.5c0-1.1.9-2 2-2h2.153a1 1 0 0 1 .986.836l.556 3.34a1 1 0 0 1-.54 1.06l-1.548.774a11.05 11.05 0 0 0 5.383 5.383l.774-1.548a1 1 0 0 1 1.06-.54l3.34.556a1 1 0 0 1 .836.986V18.5c0 1.1-.9 2-2 2h-1C9.716 20.5 3.5 14.284 3.5 6.5v-1Z"
          />
        </svg>
        전화하기
      </a>
      <a
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-brand-600 py-3.5 text-sm font-semibold text-white"
      >
        견적 문의
      </a>
    </div>
  );
}
