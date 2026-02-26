import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='relative flex min-h-screen w-full flex-col'>
      <Navbar />
      <main className='mx-auto mt-16 w-full grow'>{children}</main>
      <Footer />
    </div>
  )
}

export default AppLayout
