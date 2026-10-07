import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Experience } from './components/Experience.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { ServiceItem } from './data/salonData.ts';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Subtle scroll progress bar at top of window
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenBooking = (service?: ServiceItem) => {
    setSelectedService(service || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] selection:bg-[#8F673C] selection:text-white relative">
      {/* Subtle Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#8F673C] origin-left z-60"
        style={{ scaleX }}
      />

      {/* Light Luxury Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Flow: Compact, Objective, Real Photos with Editorial Scroll Motion */}
      <main>
        {/* 1. Hero with Parallax Photograph */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Sobre o Salão com Foto do Ambiente em Paralaxe Suave */}
        <About />

        {/* 3. Serviços com Revelação Suave */}
        <Services onSelectService={(service) => handleOpenBooking(service)} />

        {/* 4. Galeria de Resultados com Fotos Reais e Lightbox */}
        <Gallery />

        {/* 5. Experiência de Lavatório & Avaliação Google */}
        <Experience />

        {/* 6. Localização & Contato Oficial em Petrópolis */}
        <LocationSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Modal de Agendamento Direto */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
}
