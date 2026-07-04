import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Strengths } from "@/components/home/Strengths";
import { ServicesSummary } from "@/components/home/ServicesSummary";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Testimonials } from "@/components/home/Testimonials";
import { Brands } from "@/components/home/Brands";
import { CtaBanner } from "@/components/home/CtaBanner";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.serviceAreas[0]} 시스템에어컨 설치 · 인테리어 전문`,
  description: siteConfig.description,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.companyName,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.business.address,
    addressCountry: "KR",
  },
  areaServed: siteConfig.serviceAreas,
  url: siteConfig.domain,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Hero />
      <Strengths />
      <ServicesSummary />
      <FeaturedPortfolio />
      <ProcessSteps />
      <Testimonials />
      <Brands />
      <CtaBanner />
    </>
  );
}
