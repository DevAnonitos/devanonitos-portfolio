import NavbarItem from './NavbarItem'
import { BrandingLogo } from '@/components/shared'

const Navbar = () => {
  return (
    <header className='fixed top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60'>
      <nav aria-label='Main navigation' className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <BrandingLogo />
        <NavbarItem />
      </nav>
    </header>
  )
}

export default Navbar
