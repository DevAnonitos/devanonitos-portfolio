import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import { SectionLoading } from "@/components/shared";

const TestimonialSection = dynamic(() => import("@/components/sections/TestimonialSection"), {
  loading: () => <SectionLoading />,
});
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), {
  loading: () => <SectionLoading />,
});
const CTASection = dynamic(() => import("@/components/sections/CTASection"), {
  loading: () => <SectionLoading />,
});

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />

      <Suspense fallback={<SectionLoading />}>
        <TestimonialSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <CTASection />
      </Suspense>
    </div>
  );
}

