import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SALON_INFO } from '../data/salonData.ts';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const photoTranslate = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      id="sobre"
      ref={containerRef}
      className="py-16 md:py-24 bg-white border-y border-[#E8E3DC] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Real Salon Experience Photo with Gentle Scroll Float */}
          <motion.div
            style={{ y: photoTranslate }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none bg-white p-2 border border-[#E8E3DC] shadow-xs group">
              <div className="aspect-[4/5] overflow-hidden bg-[#F2EEE9]">
                <img
                  src="/sigalab_DbRmKgnDiYn_02.jpg"
                  alt="Atendimento personalizado no Lab Beauty Cabeleireiros"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Short, Objective Text with Fade In */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#8F673C] font-medium block mb-3">
              Sobre o Lab Beauty
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal tracking-tight mb-5 leading-tight">
              Um refúgio de cuidado e bem-estar em Petrópolis.
            </h2>

            <div className="space-y-4 text-base text-[#57534E] font-light leading-relaxed mb-6">
              <p>
                Localizado na Galeria Solar Cidade Alta, na Av. Deodoro da Fonseca, o <strong className="text-[#1C1917] font-medium">Lab Beauty Cabeleireiros</strong> oferece um ambiente reservado e tranquilo, pensado para quem valoriza pontualidade, atendimento atencioso e excelência técnica.
              </p>
              <p>
                Acreditamos que cada cabelo é único. Por isso, aliamos diagnóstico cuidadoso, produtos de alta qualidade e respeito à textura natural dos fios em todos os procedimentos.
              </p>
            </div>

            {/* Official Manifesto */}
            <div className="p-5 bg-[#FAF8F5] border-l-2 border-[#8F673C] mt-2">
              <p className="font-serif italic text-lg text-[#1C1917] leading-snug">
                "{SALON_INFO.manifesto}"
              </p>
              <span className="text-xs uppercase tracking-wider text-[#8F673C] font-medium block mt-2">
                Lab Beauty Cabeleireiros · Natal/RN
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
