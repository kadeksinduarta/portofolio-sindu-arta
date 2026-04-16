'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../../stores';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pencapaian', href: '#achievements' },
    { name: 'Organisasi', href: '#organizations' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Sertifikat', href: '#certificates' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3 shadow-sm'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 hidden sm:block">
            Sindu Arta
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-700"></div>
          <button
            onClick={toggleTheme}
            className="p-2 -ml-4 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-white dark:hover:bg-zinc-800 transition-all focus:outline-none"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-zinc-500">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-zinc-900 dark:text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-700 dark:text-zinc-300 py-3 border-b border-zinc-100 dark:border-zinc-800/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
