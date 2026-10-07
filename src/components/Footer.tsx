import React from 'react';
import { Instagram, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { SALON_INFO } from '../data/salonData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#57534E] pt-14 pb-10 border-t border-[#E8E3DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E8E3DC]">
          {/* Logo & Bio (6 cols) */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="mb-4">
              <Logo orientation="horizontal" theme="dark" size="md" />
            </div>
            <p className="text-sm font-light leading-relaxed max-w-sm text-[#78716C] mb-4">
              Salão de beleza especializado em mechas, loiros, morena iluminada, corte e tratamentos capilares em Petrópolis, Natal/RN.
            </p>
            <p className="font-serif italic text-sm text-[#8F673C]">
              "{SALON_INFO.manifesto}"
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1917] mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-medium text-[#78716C]">
              <li>
                <a href="#inicio" className="hover:text-[#1C1917] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#1C1917] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#1C1917] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-[#1C1917] transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#1C1917] transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1917] mb-3">
              Contato & Redes
            </h4>
            <a
              href={SALON_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#1C1917] hover:text-[#8F673C] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#8F673C]" />
              <span className="font-mono text-xs">{SALON_INFO.instagram.handle}</span>
            </a>
            <a
              href={SALON_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#1C1917] hover:text-[#8F673C] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#8F673C]" />
              <span>{SALON_INFO.whatsapp.formatted}</span>
            </a>
            <div className="flex items-start gap-2 text-[#78716C] pt-1">
              <MapPin className="w-4 h-4 text-[#8F673C] shrink-0 mt-0.5" />
              <span>Av. Deodoro da Fonseca, 454 - Petrópolis, Natal/RN</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A29E] gap-3">
          <span>
            © {new Date().getFullYear()} {SALON_INFO.name}. Todos os direitos reservados.
          </span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
