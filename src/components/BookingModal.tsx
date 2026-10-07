import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageSquare } from 'lucide-react';
import { SERVICES, SALON_INFO, ServiceItem } from '../data/salonData.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  const [serviceId, setServiceId] = useState<string>(
    selectedService?.id || SERVICES[0]?.id || ''
  );
  const [preferredPeriod, setPreferredPeriod] = useState<string>('Tarde');
  const [clientName, setClientName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `Olá, Lab Beauty!`;
    if (clientName.trim()) {
      message += ` Meu nome é ${clientName.trim()}.`;
    }
    message += ` Gostaria de agendar um horário para: *${currentService.title}*.`;
    if (preferredPeriod) {
      message += ` Preferência: *${preferredPeriod}*.`;
    }
    if (notes.trim()) {
      message += ` Observação: ${notes.trim()}.`;
    }
    message += ` Como está a disponibilidade?`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${SALON_INFO.whatsapp.raw}&text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-md bg-white border border-[#E8E3DC] shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E8E3DC] bg-[#FAF8F5]">
          <div>
            <h3 className="font-serif text-xl text-[#1C1917] font-normal leading-tight">
              Agendamento de Horário
            </h3>
            <p className="text-xs text-[#78716C] mt-0.5">
              Lab Beauty Cabeleireiros · Petrópolis, Natal
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#1C1917] transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSendToWhatsApp} className="p-6 space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1.5">
              Serviço Desejado
            </label>
            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#E8E3DC] text-sm text-[#1C1917] p-2.5 focus:outline-none focus:border-[#8F673C]"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title} ({s.category})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1.5">
              Seu Nome (opcional)
            </label>
            <input
              type="text"
              placeholder="Ex: Amanda"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#E8E3DC] text-sm text-[#1C1917] p-2.5 focus:outline-none focus:border-[#8F673C]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1.5">
              Preferência de Turno
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Manhã', 'Tarde', 'Qualquer'].map((period) => (
                <button
                  type="button"
                  key={period}
                  onClick={() => setPreferredPeriod(period)}
                  className={`py-2 text-xs uppercase tracking-wider border transition-colors ${
                    preferredPeriod === period
                      ? 'bg-[#1C1917] text-white border-[#1C1917]'
                      : 'bg-[#FAF8F5] text-[#57534E] border-[#E8E3DC] hover:border-[#8F673C]'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1.5">
              Mensagem ou dúvida (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Gostaria de tirar dúvidas sobre mechas..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#E8E3DC] text-sm text-[#1C1917] p-2.5 focus:outline-none focus:border-[#8F673C] resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs uppercase tracking-[0.16em] font-medium text-white bg-[#1C1917] hover:bg-[#8F673C] transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Continuar no WhatsApp</span>
            </button>
            <p className="text-[11px] text-[#78716C] text-center mt-2">
              Você será atendida diretamente pela equipe do Lab Beauty.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
