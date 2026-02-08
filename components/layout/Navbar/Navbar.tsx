import Link from 'next/link'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <header className='fixed top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60'>
      <nav aria-label='Main navigation' className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-sm font-semibold tracking-tight transition hover:border-primary/40 hover:bg-card'
        >
          <span className='h-2 w-2 rounded-full bg-primary transition group-hover:scale-110' />
          DevAnonitos
        </Link>

        <NavbarItem />
      </nav>
    </header>
  )
}

export default Navbar
