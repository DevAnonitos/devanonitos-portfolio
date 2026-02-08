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
      <h3 className='text-sm font-semibold tracking-wide text-foreground'>{title}</h3>
      <ul className='space-y-2'>
        {links.map((link) => (
          <li key={`${title}-${link.href}`}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className='text-sm text-muted-foreground transition-colors hover:text-foreground'
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
