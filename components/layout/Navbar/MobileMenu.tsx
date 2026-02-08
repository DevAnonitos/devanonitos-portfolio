'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type NavLink = {
  label: string
  href: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
  activeHref: string
  ctaHref: string
  ctaLabel: string
}

const MobileMenu = ({
  isOpen,
  onClose,
  links,
  activeHref,
  ctaHref,
  ctaLabel,
}: MobileMenuProps) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm md:hidden'>
      <button
        className='absolute inset-0 h-full w-full cursor-default'
        onClick={onClose}
        aria-label='Close mobile menu overlay'
      />

      <div className='fixed inset-y-0 right-0 z-10 w-full max-w-sm border-l border-border/50 bg-background p-6 shadow-2xl'>
        <div className='mb-8 flex items-center justify-between'>
          <p className='text-sm font-semibold tracking-wide text-muted-foreground'>Menu</p>
          <Button variant='ghost' size='icon-sm' onClick={onClose} aria-label='Close menu'>
            <X className='size-4' />
          </Button>
        </div>

        <ul className='space-y-2'>
          {links.map((link) => {
            const isActive = activeHref === link.href

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'block rounded-xl border px-4 py-3 text-base font-medium transition',
                    isActive
                      ? 'border-primary/30 bg-primary/10 text-foreground'
                      : 'border-transparent text-muted-foreground hover:border-border/60 hover:bg-muted/60 hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <Button asChild className='mt-8 w-full rounded-xl'>
          <Link href={ctaHref} onClick={onClose}>
            {ctaLabel}
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default MobileMenu
