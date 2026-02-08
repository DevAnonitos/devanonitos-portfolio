'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { NAV_CTA, NAV_LINKS } from '@/constants'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/shared'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'

const NavbarItem = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash)

    syncHash()
    window.addEventListener('hashchange', syncHash)

    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  const activeHref = useMemo(() => {
    if (pathname !== '/') return pathname

    if (activeHash) {
      return `/${activeHash}`
    }

    return '/'
  }, [activeHash, pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div className='hidden items-center gap-2 md:flex'>
        <ul className='mr-2 flex items-center rounded-full border border-border/60 bg-card/60 p-1'>
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activeHref

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'inline-flex rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/15 text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <ThemeToggle />

        <Button asChild className='rounded-full'>
          <Link href={NAV_CTA.href}>{NAV_CTA.label}</Link>
        </Button>
      </div>

      <div className='flex items-center gap-1 md:hidden'>
        <ThemeToggle />
        <Button
          variant='outline'
          size='icon-sm'
          className='rounded-full'
          onClick={() => setIsOpen(true)}
          aria-label='Open menu'
          aria-expanded={isOpen}
          aria-controls='mobile-navbar-menu'
        >
          <Menu className='size-4' />
        </Button>
      </div>

      <div id='mobile-navbar-menu'>
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          links={NAV_LINKS}
          activeHref={activeHref}
          ctaHref={NAV_CTA.href}
          ctaLabel={NAV_CTA.label}
        />
      </div>
    </>
  )
}

export default NavbarItem
