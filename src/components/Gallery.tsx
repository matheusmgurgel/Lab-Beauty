import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

interface GalleryPhoto {
  src: string;
  alt: string;
  category: string;
}

export const Gallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photos: GalleryPhoto[] = [
    {
      src: '/sigalab_Ddr9DjHO474_01.jpg',
      alt: 'Morena iluminada em tons quentes e ondas volumosas no Lab Beauty',
      category: 'Morena Iluminada',
    },
    {
      src: '/sigalab_Da8s437OR1w_04.jpg',
      alt: 'Loiro dourado com movimento e acabamento de alto padrão no Lab Beauty',
      category: 'Loiros & Mechas',
    },
    {
      src: '/sigalab_Da1AniUOpB5_01.jpg',
      alt: 'Cachos definidos com mechas e luminosidade natural no Lab Beauty',
      category: 'Cachos & Mechas',
    },
    {
      src: '/sigalab_DZNpBtEuLpk_01.jpg',
      alt: 'Loiro areia em luz natural realizado no Lab Beauty',
      category: 'Loiros',
    },
    {
      src: '/sigalab_DZvfByhuLdR_01.jpg',
      alt: 'Corte em camadas com franja e morena canela no Lab Beauty',
      category: 'Cortes & Camadas',
    },
    {
      src: '/sigalab_DcLsVeBDjVj_02.jpg',
      alt: 'Alinhamento e dimensão das mechas preservando a saúde do fio no Lab Beauty',
      category: 'Mechas & Dimensão',
    },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  return (
    <section id="resultados" className="py-16 md:py-24 bg-white border-y border-[#E8E3DC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#8F673C] font-medium block mb-2">
            Galeria de Resultados
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal tracking-tight mb-3">
            Trabalhos reais realizados no Lab Beauty.
          </h2>
          <p className="text-sm text-[#57534E] font-light">
            Cabelos com movimento, saúde e brilho. Clique em qualquer foto para ampliar.
          </p>
        </motion.div>

        {/* Real Photos Grid with Staggered Entrance */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative aspect-[3/4] bg-[#F2EEE9] overflow-hidden border border-[#E8E3DC] cursor-pointer shadow-2xs hover:shadow-lg transition-all duration-500"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                loading="lazy"
                decoding="async"
              />

              {/* Minimalist Hover Overlay */}
              <div className="absolute inset-0 bg-[#1C1917]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/95 text-[#1C1917] flex items-center justify-center shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
        <div
          onClick={() => setSelectedPhotoIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          {/* Close */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev/Next */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full cursor-pointer"
            aria-label="Próxima"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={photos[selectedPhotoIndex].src}
              alt={photos[selectedPhotoIndex].alt}
              className="max-h-[80vh] max-w-full object-contain shadow-2xl"
            />
            <span className="text-xs text-white/80 mt-3 uppercase tracking-wider font-mono">
              {photos[selectedPhotoIndex].category} · {selectedPhotoIndex + 1} de {photos.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
