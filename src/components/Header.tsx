// src/components/Header.tsx
import React from 'react';
import { Building, Menu, X } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <Building className="header-logo" />
          <h1 className="header-title">Muscat Corp</h1>
        </div>
        <nav className="header-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button onClick={toggleMenu} className="header-menu-button">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu open">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={toggleMenu}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
export {};