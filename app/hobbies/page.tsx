import { HobbiesSection } from '@/components/sections'

export const metadata = {
  title: 'Hobbies | DevAnonitos',
  description:
    'Exploring the life and passions of DevAnonitos outside of coding and system architecture.',
}

const HobbiesPage = () => {
  return (
    <main className='flex min-h-screen w-full flex-col pt-20'>
      <HobbiesSection />
    </main>
  )
}

export default HobbiesPage
