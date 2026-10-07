import React, { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { VERIFIED_REVIEWS } from '../data/salonData.ts';

export const Experience: React.FC = () => {
  const amandaReview = VERIFIED_REVIEWS[0];
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const photoShift = useTransform(scrollYProgress, [0, 1], [-15, 20]);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Real Lavatório Photo with Motion Parallax */}
          <motion.div
            style={{ y: photoShift }}
            className="lg:col-span-6"
          >
            <div className="bg-white p-2 border border-[#E8E3DC] shadow-xs group">
              <div className="aspect-[4/3] overflow-hidden bg-[#F2EEE9]">
                <img
                  src="/sigalab_DY74pNXFGWe_02.jpg"
                  alt="Momento de cuidado e lavatório no Lab Beauty Natal"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Real Google Review with Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#8F673C] font-medium block mb-2">
              Experiência Comprovada
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal tracking-tight mb-5">
              O que diz quem já confiou em nossas mãos.
            </h2>

            <div className="bg-white border border-[#E8E3DC] p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E8E3DC]">
                <div>
                  <h4 className="text-sm font-semibold text-[#1C1917]">
                    {amandaReview.author}
                  </h4>
                  <span className="text-xs text-[#78716C] block">
                    {amandaReview.badge}
                  </span>
                </div>

                <div className="flex items-center gap-0.5 text-[#B38A56]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B38A56]" />
                  ))}
                </div>
              </div>

              <blockquote className="text-sm text-[#57534E] font-light leading-relaxed mb-4 italic">
                "{amandaReview.text}"
              </blockquote>

              <div className="text-[11px] text-[#8F673C] font-mono">
                Procedimentos realizados: Mechas · Hidratação · Escova Redutora
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
