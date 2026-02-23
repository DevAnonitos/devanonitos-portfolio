import { AccessibilitySection } from "@/components/sections"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility | DevAnonitos",
  description: "DevAnonitos's commitment to creating an inclusive and accessible digital experience for all users following WCAG standards.",
}

const AccessibilityPage = () => {
  return (
    <main className="flex flex-col w-full min-h-screen pt-20">
      <AccessibilitySection />
    </main>
  )
}

export default AccessibilityPage
