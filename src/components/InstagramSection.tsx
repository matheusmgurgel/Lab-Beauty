import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { SalonImage } from './SalonImage.tsx';
import { SALON_INFO } from '../data/salonData.ts';

export const InstagramSection: React.FC = () => {
  const instagramPhotos = [
    {
      src: '/images/sigalab_Da1AniUOpB5_01.jpg',
      alt: 'Cachos iluminados e corte perfeito no Instagram @sigalab_',
      title: 'Cachos & Mechas',
    },
    {
      src: '/images/sigalab_DZvfByhuLdR_01.jpg',
      alt: 'Corte e morena canela no Instagram @sigalab_',
      title: 'Corte em Camadas',
    },
    {
      src: '/images/sigalab_DZNpBtEuLpk_01.jpg',
      alt: 'Loiro areia e movimento no Instagram @sigalab_',
      title: 'Loiros Contemporâneos',
    },
    {
      src: '/images/sigalab_DbRmKgnDiYn_02.jpg',
      alt: 'Atendimento e confiança no Instagram @sigalab_',
      title: 'Dia a Dia no Salão',
    },
  ];

  return (
    <section id="instagram" className="py-20 lg:py-28 relative bg-[#15110F] hairline-border-t hairline-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-[#C5A072]">
              <Instagram className="w-4 h-4" />
              <span>Acompanhe Nossas Redes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EDE4] tracking-tight mb-2">
              Siga o Lab Beauty no Instagram.
            </h2>
            <p className="text-base text-[#C5A072] font-mono tracking-wide">
              {SALON_INFO.instagram.handle}
            </p>
          </div>

          <a
            href={SALON_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#120F0D] bg-[#C5A072] hover:bg-[#D7BEA8] transition-colors self-start md:self-end active:scale-95 shadow-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>Ver no Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4-Photo Showcase Feed */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPhotos.map((photo, index) => (
            <a
              key={index}
              href={SALON_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden block"
            >
              <SalonImage
                src={photo.src}
                alt={photo.alt}
                aspectClassName="aspect-square"
                category="Instagram"
                editorialTitle={photo.title}
                editorialSubtitle="@sigalab_"
              />

              {/* Instagram Hover Badge */}
              <div className="absolute inset-0 bg-[#120F0D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <Instagram className="w-6 h-6 text-[#C5A072] mb-2" />
                <span className="text-xs uppercase tracking-widest text-[#F3ECE4] font-medium">
                  {SALON_INFO.instagram.handle}
                </span>
                <span className="text-[10px] text-[#C5A072] mt-1 tracking-wider">
                  Ver publicação
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Encouragement note */}
        <div className="mt-8 text-center text-xs text-[#A89E95] tracking-wide">
          Postamos resultados diários, dicas de manutenção e bastidores do salão. Conecte-se conosco!
        </div>
      </div>
    </section>
  );
};
