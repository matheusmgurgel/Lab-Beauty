import React from 'react';
import { MapPin, Navigation, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_INFO } from '../data/salonData.ts';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-white border-y border-[#E8E3DC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#8F673C] font-medium block mb-2">
            Localização & Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal tracking-tight mb-3">
            Onde estamos em Natal.
          </h2>
          <p className="text-sm text-[#57534E] font-light">
            Galeria Solar Cidade Alta, no bairro nobre de Petrópolis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#FAF8F5] border border-[#E8E3DC] p-7 sm:p-8 flex flex-col justify-between shadow-xs"
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-[#8F673C] font-medium block mb-2">
                Lab Beauty Cabeleireiros
              </span>
              <h3 className="font-serif text-2xl text-[#1C1917] font-normal mb-4">
                {SALON_INFO.address.venue}
              </h3>

              <div className="space-y-4 text-sm text-[#57534E] font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8F673C] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#1C1917] font-medium">
                      {SALON_INFO.address.street}
                    </span>
                    <span className="block text-xs text-[#78716C] mt-0.5">
                      {SALON_INFO.address.neighborhood} · {SALON_INFO.address.city}/{SALON_INFO.address.state}
                    </span>
                    <span className="block text-xs text-[#78716C] font-mono mt-0.5">
                      CEP: {SALON_INFO.address.cep}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="w-4 h-4 text-[#8F673C] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#1C1917] font-medium">
                      Atendimento com Hora Marcada
                    </span>
                    <span className="text-xs text-[#78716C] mt-0.5 block">
                      Agende previamente para garantir tranquilidade.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-6 border-t border-[#E8E3DC] mt-6">
              <a
                href={SALON_INFO.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs uppercase tracking-[0.16em] font-medium text-white bg-[#1C1917] hover:bg-[#8F673C] transition-colors cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Como Chegar (Google Maps)</span>
              </a>

              <a
                href={SALON_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] bg-white hover:bg-[#FAF8F5] border border-[#E8E3DC] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#8F673C]" />
                <span>WhatsApp: {SALON_INFO.whatsapp.formatted}</span>
              </a>
            </div>
          </motion.div>

          {/* Clean Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#FAF8F5] border border-[#E8E3DC] overflow-hidden min-h-[320px] shadow-xs"
          >
            <iframe
              title="Localização do Lab Beauty Cabeleireiros no mapa de Natal"
              src={SALON_INFO.maps.embedUrl}
              className="w-full h-full min-h-[340px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
