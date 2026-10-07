import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SalonImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  category?: string;
  priority?: boolean;
  editorialTitle?: string;
  editorialSubtitle?: string;
}

export const SalonImage: React.FC<SalonImageProps> = ({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[3/4]',
  category,
  priority = false,
  editorialTitle,
  editorialSubtitle,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Gradient themes based on image color palette
  const getEditorialGradient = () => {
    if (src.includes('Ddr9DjHO474') || src.includes('DZvfByhuLdR')) {
      // Warm chocolate brunette
      return 'from-[#2B1B15] via-[#1E1410] to-[#120F0D] text-[#EAD7C2]';
    }
    if (src.includes('Da8s437OR1w') || src.includes('DZNpBtEuLpk')) {
      // Golden blonde / sand
      return 'from-[#332415] via-[#241A12] to-[#120F0D] text-[#F3ECE4]';
    }
    if (src.includes('Da1AniUOpB5')) {
      // Caramel curly
      return 'from-[#2F1D14] via-[#20150F] to-[#120F0D] text-[#EAD7C2]';
    }
    if (src.includes('DY74pNXFGWe') || src.includes('DcLsVeIjtxH')) {
      // Warm wash basin sanctuary
      return 'from-[#352015] via-[#221610] to-[#120F0D] text-[#F0DFCE]';
    }
    return 'from-[#281A14] via-[#1C130E] to-[#120F0D] text-[#E7E2DF]';
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#181412] hairline-border group ${aspectClassName} ${className}`}
    >
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Editorial Fallback Container if file not yet on local disk */}
      {hasError && (
        <div
          className={`absolute inset-0 bg-gradient-to-b ${getEditorialGradient()} p-6 flex flex-col justify-between select-none transition-transform duration-500`}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,114,0.18),transparent_70%)] pointer-events-none" />

          {/* Top Row: Category tag and monogram */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] tracking-[0.25em] text-[#C5A072] uppercase font-medium">
              {category || 'Lab Beauty'}
            </span>
            <div className="w-6 h-6 rounded-full border border-[#C5A072]/30 flex items-center justify-center text-[#C5A072]">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          {/* Center: Monogram Watermark */}
          <div className="relative z-10 my-auto text-center py-4">
            <div className="w-10 h-10 mx-auto mb-3 opacity-40">
              <svg viewBox="0 0 50 50" className="w-full h-full" fill="none">
                <path d="M 12 8 L 7 8 L 7 16" stroke="#C5A072" strokeWidth="2" />
                <path d="M 38 8 L 43 8 L 43 16" stroke="#C5A072" strokeWidth="2" />
                <path d="M 7 34 L 7 42 L 12 42" stroke="#C5A072" strokeWidth="2" />
                <path d="M 43 34 L 43 42 L 38 42" stroke="#C5A072" strokeWidth="2" />
                <circle cx="25" cy="25" r="5" stroke="#C5A072" strokeWidth="1.5" />
              </svg>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#F5EDE4] font-normal leading-tight px-2">
              {editorialTitle || alt}
            </h4>
            {editorialSubtitle && (
              <p className="text-xs text-[#C5A072]/90 mt-2 tracking-wide font-light">
                {editorialSubtitle}
              </p>
            )}
          </div>

          {/* Bottom Row: Official Signature */}
          <div className="relative z-10 pt-3 border-t border-[#C5A072]/20 flex items-center justify-between text-[10px] tracking-[0.2em] text-[#C5A072]/80 uppercase">
            <span>Petrópolis · Natal</span>
            <span>@sigalab_</span>
          </div>
        </div>
      )}

      {/* Subtle bottom gradient vignette for depth */}
      {!hasError && isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
};
