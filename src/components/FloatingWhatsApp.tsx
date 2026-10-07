import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { SALON_INFO } from '../data/salonData.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={SALON_INFO.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 bg-[#1C1917] hover:bg-[#8F673C] text-white shadow-lg transition-all duration-300 rounded-full text-xs uppercase tracking-wider font-medium animate-in fade-in slide-in-from-bottom-4 group cursor-pointer"
      aria-label="Agendar horário no WhatsApp"
    >
      <div className="w-2 h-2 rounded-full bg-[#B38A56] group-hover:bg-white animate-pulse" />
      <MessageSquare className="w-4 h-4 text-white" />
      <span className="hidden sm:inline">Agendar no WhatsApp</span>
      <span className="sm:hidden">Agendar</span>
    </a>
  );
};
