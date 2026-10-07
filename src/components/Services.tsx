import React from 'react';
import { Calendar, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, ServiceItem } from '../data/salonData.ts';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#8F673C] font-medium block mb-2">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal tracking-tight mb-3">
            Procedimentos com foco na saúde e beleza dos fios.
          </h2>
          <p className="text-sm text-[#57534E] font-light">
            Técnicas contemporâneas com produtos profissionais e atendimento individualizado.
          </p>
        </motion.div>

        {/* Services Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#E8E3DC] p-6 sm:p-7 flex flex-col justify-between hover:border-[#8F673C] hover:-translate-y-1 transition-all duration-300 shadow-2xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono text-[#8F673C] font-medium">0{index + 1}</span>
                  <span className="uppercase tracking-wider text-[#78716C]">{service.category}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#1C1917] font-normal mb-1 group-hover:text-[#8F673C] transition-colors">
                  {service.title}
                </h3>
                <h4 className="text-xs uppercase tracking-wider text-[#8F673C] font-medium mb-4">
                  {service.subtitle}
                </h4>

                <p className="text-sm text-[#57534E] font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 pt-4 border-t border-[#E8E3DC]">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#44403C]">
                      <Check className="w-3.5 h-3.5 text-[#8F673C] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectService(service)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] bg-[#FAF8F5] group-hover:bg-[#1C1917] group-hover:text-white border border-[#E8E3DC] group-hover:border-[#1C1917] transition-all cursor-pointer active:scale-98"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar este serviço</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
