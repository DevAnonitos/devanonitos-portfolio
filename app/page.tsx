import React from "react";
import { HeroSection, FAQSection, CTASection } from "@/components/sections";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
