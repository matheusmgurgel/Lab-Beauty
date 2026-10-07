import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { SalonImage } from './SalonImage.tsx';
import { SALON_INFO } from '../data/salonData.ts';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#15110F] hairline-border-t overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,114,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#181412] hairline-border p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Copy Side (7 cols) */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A072] font-medium block mb-4">
                Atendimento com Hora Marcada
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EDE4] tracking-tight leading-tight mb-6">
                Seu próximo momento de beleza começa aqui.
              </h2>

              <p className="text-base text-[#D0C7BF] font-light leading-relaxed mb-8 max-w-xl">
                Venha viver a experiência Lab Beauty. Reserve seu horário pelo WhatsApp 
                e receba um atendimento individualizado e atencioso desde o primeiro instante.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-[#120F0D] bg-[#C5A072] hover:bg-[#D7BEA8] transition-all duration-200 active:scale-95 shadow-md shadow-black/30"
                >
                  <Calendar className="w-4 h-4 text-[#120F0D]" />
                  <span>Agende seu horário</span>
                </button>

                <a
                  href={SALON_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs uppercase tracking-[0.18em] font-medium text-[#E7E2DF] hover:text-[#C5A072] border border-[#C5A072]/30 hover:border-[#C5A072] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Direto</span>
                </a>
              </div>
            </div>

            {/* Photo Side (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="max-w-sm mx-auto lg:max-w-none shadow-2xl">
                <SalonImage
                  src="/images/sigalab_Da1AniUOpB5_01.jpg"
                  alt="Transformação capilar real no Lab Beauty Natal"
                  category="Transformação"
                  aspectClassName="aspect-[4/5]"
                  editorialTitle="Viva o Momento Lab Beauty"
                  editorialSubtitle="Petrópolis · Natal/RN"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
