import { HobbiesSection } from "@/components/sections"

export const metadata = {
  title: "Hobbies | DevAnonitos",
  description: "Exploring the life and passions of DevAnonitos outside of coding and system architecture.",
}

const HobbiesPage = () => {
  return (
    <main className="flex flex-col w-full min-h-screen pt-20">
      <HobbiesSection />
    </main>
  )
}

export default HobbiesPage
