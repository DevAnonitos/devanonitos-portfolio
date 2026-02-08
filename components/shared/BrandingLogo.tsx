import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BrandingLogo = () => {
  return (
    <Link
      href='/'
      className='group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-sm font-semibold tracking-tight transition hover:border-primary/40 hover:bg-card'
    >
      <span className='h-2 w-2 rounded-full bg-primary transition group-hover:scale-110' />
      DevAnonitos
    </Link>
  )
}

export default BrandingLogo