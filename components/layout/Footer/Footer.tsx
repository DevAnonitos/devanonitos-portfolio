import { SocialLinks } from '@/components/shared'
import { FOOTER_LINKS, NAV_LINKS, SITE_CONFIG } from '@/constants'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import FooterItem from './FooterItem'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className='border-border/70 bg-card/40 w-full border-t backdrop-blur-md'>
      <div className='mx-auto grid w-full max-w-7xl justify-between gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-12 lg:px-8'>
        <div className='space-y-5 lg:col-span-1'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm font-semibold tracking-tight'
          >
            <span className='bg-primary h-2 w-2 rounded-full' />
            {SITE_CONFIG.author}
          </Link>

          <p className='text-muted-foreground max-w-xs text-sm leading-relaxed'>
            Building high-quality web experiences with a balance between clean engineering, modern
            UI, and conversion-focused UX.
          </p>

          <SocialLinks variant='ghost' iconSize={18} className='gap-2' />
        </div>

        <FooterItem title='Navigation' links={NAV_LINKS.filter((link) => link.href !== '/')} />

        {FOOTER_LINKS.map((group) => (
          <FooterItem key={group.title} title={group.title} links={group.links} />
        ))}
      </div>

      <div className='border-border/60 border-t'>
        <div className='text-muted-foreground mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
          <p>
            © {currentYear} {SITE_CONFIG.author}. All rights reserved.
          </p>
          <Link href='/#contact' className='hover:text-foreground inline-flex items-center gap-1'>
            Start a project
            <ArrowUpRight className='size-3.5' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
