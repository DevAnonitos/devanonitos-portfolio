import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ThemeToggle } from '../shared';
import { NAV_LINKS } from '@/constants/navigation';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        Navbar
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
