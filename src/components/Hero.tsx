import React from 'react';
import { Calendar, ArrowDown, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { scrollY } = useScroll();
  const photoParallax = useTransform(scrollY, [0, 600], [0, 50]);
  const textParallax = useTransform(scrollY, [0, 600], [0, -20]);

  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 relative bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <motion.div
            style={{ y: textParallax }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Location Tag */}
            <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.2em] text-[#8F673C] font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Petrópolis · Natal/RN</span>
              <span className="text-[#8F673C]/40">·</span>
              <span>Galeria Solar Cidade Alta</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal tracking-tight leading-[1.1] mb-5">
              Beleza, cuidado <br className="hidden sm:inline" />
              <span className="italic font-light text-[#8F673C]">e transformação.</span>
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-base text-[#57534E] font-light leading-relaxed max-w-xl mb-8">
              Especialistas em mechas, loiros, morena iluminada, cortes femininos e tratamentos capilares intensivos. 
              Um atendimento exclusivo e personalizado para realçar a sua melhor versão.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-white bg-[#1C1917] hover:bg-[#8F673C] transition-colors cursor-pointer shadow-xs active:scale-98"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Agende seu horário</span>
              </button>

              <a
                href="#resultados"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-[#1C1917] hover:text-[#8F673C] border border-[#E8E3DC] hover:border-[#8F673C] bg-white transition-colors"
              >
                <span>Ver resultados reais</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Clean Key Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8E3DC] max-w-md">
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#1C1917]">
                  Personalizado
                </span>
                <span className="text-[11px] text-[#78716C] uppercase tracking-wider block mt-0.5">
                  Diagnóstico atento
                </span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#1C1917]">
                  Saúde do fio
                </span>
                <span className="text-[11px] text-[#78716C] uppercase tracking-wider block mt-0.5">
                  Preservação da fibra
                </span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#1C1917]">
                  Hora marcada
                </span>
                <span className="text-[11px] text-[#78716C] uppercase tracking-wider block mt-0.5">
                  Sem espera
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Photo with Scroll Parallax */}
          <motion.div
            style={{ y: photoParallax }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none bg-white p-2 border border-[#E8E3DC] shadow-sm group">
              <div className="aspect-[4/5] overflow-hidden bg-[#F2EEE9]">
                <img
                  src="/sigalab_Ddr9DjHO474_01.jpg"
                  alt="Morena iluminada com ondas impecáveis realizada no Lab Beauty Natal"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
