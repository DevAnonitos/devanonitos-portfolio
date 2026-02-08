import React from "react";
import { HeroSection, FAQSection } from "@/components/sections";

export default function Home() {
  return (
    <div className="py-16 w-full h-screen">
      <HeroSection />
      <FAQSection />
    </div>
  );
}
