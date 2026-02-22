import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import { SectionLoading } from "@/components/shared";

const StatsSection = dynamic(() => import("@/components/sections/StatsSection"), {
  loading: () => <SectionLoading />,
});
const ServiceSection = dynamic(() => import("@/components/sections/ServiceSection"), {
  loading: () => <SectionLoading />,
});
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
    <main className="flex flex-col w-full min-h-screen">
      <HeroSection />

      <Suspense fallback={<SectionLoading />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <ServiceSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <TestimonialSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <CTASection />
      </Suspense>
    </main>
  );
}

