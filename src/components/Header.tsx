import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { SALON_INFO } from '../data/salonData.ts';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3.5 shadow-xs border-b border-[#E8E3DC]'
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm py-4 border-b border-[#E8E3DC]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center" aria-label="Lab Beauty Cabeleireiros">
            <Logo orientation="horizontal" theme="dark" showSubtitle={true} />
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-medium text-[#57534E] hover:text-[#1C1917] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium text-white bg-[#1C1917] hover:bg-[#8F673C] transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Agendar Horário</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1C1917] hover:text-[#8F673C] transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E8E3DC] px-6 py-6 shadow-md">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.18em] font-medium text-[#1C1917] hover:text-[#8F673C] py-2 border-b border-[#E8E3DC]/40"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-[0.16em] font-medium text-white bg-[#1C1917]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Agendar Horário no WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
