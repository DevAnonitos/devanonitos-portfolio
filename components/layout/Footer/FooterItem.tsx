import Link from 'next/link'
import { cn } from '@/lib/utils'

type FooterLink = {
  label: string
  href: string
}

interface FooterItemProps {
  title: string
  links: FooterLink[]
  className?: string
  onNavigate?: () => void
}

const FooterItem = ({ title, links, className, onNavigate }: FooterItemProps) => {
  return (
    <div className={cn('space-y-3', className)}>
      <h3 className='text-foreground text-sm font-semibold tracking-wide'>{title}</h3>
      <ul className='space-y-2'>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              prefetch={true}
              scroll={true}
              onClick={onNavigate}
              className='text-muted-foreground hover:text-foreground text-sm transition-colors'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterItem
