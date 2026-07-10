'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [navHeight, setNavHeight] = useState('py-4');

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shrink after 50px scroll
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setNavHeight('py-2');
      } else if (currentScrollY <= 50) {
        setNavHeight('py-4');
      }

      // Hide after 300px scroll
      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${navHeight} transition-all duration-300`}>
          <Link
            href="#home"
            className="font-['Orbitron'] text-lg font-bold tracking-wider transition-all duration-300"
          >
            GB
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="flex flex-col gap-4 pb-4 md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
