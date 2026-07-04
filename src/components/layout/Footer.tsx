import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-brand-900 text-brand-100 pb-20 md:pb-0">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.companyName}</p>
          <p className="mt-2 text-sm leading-relaxed text-brand-200">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="text-sm leading-relaxed text-brand-200">
          <p>대표자 {siteConfig.business.representative}</p>
          <p>사업자등록번호 {siteConfig.business.registrationNumber}</p>
          <p>주소 {siteConfig.business.address}</p>
          <p>
            시공 지역 {siteConfig.serviceAreas.join(", ")}
          </p>
          <p className="mt-2">
            대표전화{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-white">
              {siteConfig.phone}
            </a>
          </p>
        </div>

        <div className="text-sm text-brand-200">
          <Link href="/privacy" className="hover:text-white">
            개인정보처리방침
          </Link>
        </div>
      </Container>

      <div className="border-t border-white/10 py-4">
        <Container>
          <p className="text-xs text-brand-300">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
