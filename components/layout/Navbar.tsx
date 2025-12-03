// components/layout/Navbar.tsx
'use client';

import { navItems } from '@/lib/data';
import { NavItem } from '@/types';
import { Car, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer group">
          
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              SaukiCARS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
         
          </div>
        </div>
      )}
    </nav>
  );
}