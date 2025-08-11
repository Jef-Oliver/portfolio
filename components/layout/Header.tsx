'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
          { href: '/CV-JEFERSON-DE-OLIVEIRA-SANTOS.pdf', label: 'Currículo', external: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, external?: boolean) => {
    if (!external) {
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-purple-primary/20' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl font-bold text-light hover:text-purple-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark rounded-lg px-2 py-1"
            aria-label="Jeferson Olivera - Voltar ao início"
          >
            Jeferson Olivera
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href, item.external)}
                className="text-light hover:text-purple-light font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark rounded-lg px-3 py-2"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer', download: true })}
                aria-label={item.external ? `${item.label} (abre em nova aba)` : item.label}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-light hover:text-purple-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark rounded-lg p-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100 visibility-visible' 
              : 'max-h-0 opacity-0 visibility-hidden'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href, item.external)}
                className="block text-light hover:text-purple-light font-medium transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple-primary/10 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer', download: true })}
                aria-label={item.external ? `${item.label} (abre em nova aba)` : item.label}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}