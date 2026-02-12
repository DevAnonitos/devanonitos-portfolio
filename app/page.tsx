import React from "react";
import { HeroSection, TestimonialSection, FAQSection, CTASection } from "@/components/sections";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
