import NavbarItem from './NavbarItem'
import { NAV_CTA } from '@/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ThemeToggle } from '@/components/shared'
import { BrandingLogo } from '@/components/shared'

const Navbar = () => {
  return (
    <header className='border-border/50 bg-background/70 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b backdrop-blur-xl'>
      <nav
        aria-label='Main navigation'
        className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'
      >
        <BrandingLogo />
        <NavbarItem />
        <div className='flex items-center justify-between gap-4'>
          <ThemeToggle />
          <Button asChild className='rounded-full'>
            <Link href={NAV_CTA.href}>{NAV_CTA.label}</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
