import React from "react";
import { HeroSection, FAQSection } from "@/components/sections";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroSection />
      <FAQSection />
    </div>
  );
}
