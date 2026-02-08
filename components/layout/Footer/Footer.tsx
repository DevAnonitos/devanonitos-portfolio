import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { FOOTER_LINKS, NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from '@/constants'
import FooterItem from './FooterItem'

const currentYear = new Date().getFullYear()

const socialItems = [
  { label: 'GitHub', href: SOCIAL_LINKS.github, icon: Github },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { label: 'Twitter', href: SOCIAL_LINKS.twitter, icon: Twitter },
  { label: 'Email', href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail },
]

const Footer = () => {
  return (
    <footer className='border-t border-border/70 bg-card/40'>
      <div className='mx-auto grid w-full gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16 lg:px-8'>
        <div className='space-y-5'>
          <Link href='/' className='inline-flex items-center gap-2 text-sm font-semibold tracking-tight'>
            <span className='h-2 w-2 rounded-full bg-primary' />
            {SITE_CONFIG.author}
          </Link>

          <p className='max-w-md text-sm leading-relaxed text-muted-foreground'>
            Building high-quality web experiences with a balance between clean engineering,
            modern UI, and conversion-focused UX.
          </p>

          <div className='flex flex-wrap items-center gap-2'>
            {socialItems.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={label}
                className='inline-flex items-center gap-1 rounded-full border border-border/70 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground'
              >
                <Icon className='size-3.5' />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <FooterItem title='Navigation' links={NAV_LINKS.filter((link) => link.href !== '/')} />

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-1'>
          {FOOTER_LINKS.map((group) => (
            <FooterItem key={group.title} title={group.title} links={group.links} />
          ))}
        </div>
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
