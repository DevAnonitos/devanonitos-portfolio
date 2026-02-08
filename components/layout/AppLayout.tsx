import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='relative flex w-full min-h-screen flex-col'>
      <Navbar />
      <main className='grow mt-16 mx-auto w-full'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
