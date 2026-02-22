import { SocialLinks } from '@/components/shared'
import { FOOTER_LINKS, NAV_LINKS, SITE_CONFIG } from '@/constants'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import FooterItem from './FooterItem'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className='border-t border-border/70 bg-card/40 backdrop-blur-md w-full'>
      <div className='mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-12 lg:px-8 justify-between'>
        <div className='space-y-5 lg:col-span-1'>
          <Link href='/' className='inline-flex items-center gap-2 text-sm font-semibold tracking-tight'>
            <span className='h-2 w-2 rounded-full bg-primary' />
            {SITE_CONFIG.author}
          </Link>

          <p className='max-w-xs text-sm leading-relaxed text-muted-foreground'>
            Building high-quality web experiences with a balance between clean engineering,
            modern UI, and conversion-focused UX.
          </p>

          <SocialLinks variant="ghost" iconSize={18} className="gap-2" />
        </div>

        <FooterItem title='Navigation' links={NAV_LINKS.filter((link) => link.href !== '/')} />

        {FOOTER_LINKS.map((group) => (
          <FooterItem key={group.title} title={group.title} links={group.links} />
        ))}
      </div>

      <div className='border-t border-border/60'>
        <div className='mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
          <p>© {currentYear} {SITE_CONFIG.author}. All rights reserved.</p>
          <Link href='/#contact' className='inline-flex items-center gap-1 hover:text-foreground'>
            Start a project
            <ArrowUpRight className='size-3.5' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
