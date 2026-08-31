'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const navItemsSales = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isPortfolio = pathname === '/portfolio';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-neon/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Jef Oliver - Início">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-neon flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-bold text-white font-grotesk">
                Jef<span className="text-neon">Oliver</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Main nav tabs */}
            <div className="flex items-center bg-dark-surface rounded-xl p-1 mr-4 border border-dark-border">
              {/* Home tab */}
              <Link href="/" className="relative">
                <motion.div className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  {!isPortfolio && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-neon/10 border border-neon/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${!isPortfolio ? 'text-neon' : 'text-gray-text hover:text-white'}`}>
                    Produtos
                  </span>
                </motion.div>
              </Link>

              {/* Portfolio tab */}
              <Link href="/portfolio" className="relative">
                <motion.div className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  {isPortfolio && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-neon/10 border border-neon/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isPortfolio ? 'text-neon' : 'text-gray-text hover:text-white'}`}>
                    Portfólio
                  </span>
                </motion.div>
              </Link>
            </div>

            {/* Sales-specific nav items (only on home) */}
            {!isPortfolio && navItemsSales.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-gray-text hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20os%20sistemas.`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="ml-4 btn-neon text-sm py-2 px-4"
            >
              Falar no WhatsApp
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/5"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-dark-border mt-4">
                <div className="flex gap-2 mb-4">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`flex-1 text-center py-2 rounded-lg text-sm font-medium ${
                      !isPortfolio
                        ? 'bg-neon/10 text-neon border border-neon/30'
                        : 'text-gray-text bg-dark-surface'
                    }`}
                  >
                    Produtos
                  </Link>
                  <Link
                    href="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className={`flex-1 text-center py-2 rounded-lg text-sm font-medium ${
                      isPortfolio
                        ? 'bg-neon/10 text-neon border border-neon/30'
                        : 'text-gray-text bg-dark-surface'
                    }`}
                  >
                    Portfólio
                  </Link>
                </div>

                {!isPortfolio && navItemsSales.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-text hover:text-white py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20os%20sistemas.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center btn-neon mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}