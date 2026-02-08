import React from 'react'
import NavbarItem from './NavbarItem'
import { ThemeToggle } from '../../shared'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container mx-auto flex items-center justify-between'>
        <div>
          DevAnonitos
        </div>
        <NavbarItem />
      </div>
    </nav>
  )
}

export default Navbar
