import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  orientation?: 'stacked' | 'horizontal';
  theme?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  orientation = 'horizontal',
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#1C1917' : '#FAF8F5';
  const strokeColor = isDark ? '#8F673C' : '#C5A072';
  const subtitleColor = isDark ? '#8F673C' : '#D4AF37';

  if (orientation === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Emblem */}
        <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
            {/* Brackets */}
            <path d="M 10 6 L 6 6 L 6 12" stroke={strokeColor} strokeWidth="1.8" />
            <path d="M 30 6 L 34 6 L 34 12" stroke={strokeColor} strokeWidth="1.8" />
            <path d="M 6 28 L 6 34 L 10 34" stroke={strokeColor} strokeWidth="1.8" />
            <path d="M 34 28 L 34 34 L 30 34" stroke={strokeColor} strokeWidth="1.8" />
            
            {/* Knot Loops */}
            <path d="M 15 14 C 11 14 11 20 16 20 C 11 20 11 26 15 26" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 25 14 C 29 14 29 20 24 20 C 29 20 29 26 25 26" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
            <polygon points="20,17 21.5,20 24,20 22,21.5 23,24 20,22.2 17,24 18,21.5 16,20 18.5,20" fill={strokeColor} />
          </svg>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col">
          <span
            className="font-sans font-semibold tracking-[0.22em] text-base leading-tight"
            style={{ color: textColor }}
          >
            LAB BEAUTY
          </span>
          {showSubtitle && (
            <span
              className="font-sans text-[9px] tracking-[0.35em] uppercase leading-tight mt-0.5 font-medium"
              style={{ color: subtitleColor }}
            >
              CABELEIREIROS
            </span>
          )}
        </div>
      </div>
    );
  }

  // Stacked variant
  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`}>
      <div className="w-10 h-10 mb-2 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
          <path d="M 10 6 L 6 6 L 6 12" stroke={strokeColor} strokeWidth="1.8" />
          <path d="M 30 6 L 34 6 L 34 12" stroke={strokeColor} strokeWidth="1.8" />
          <path d="M 6 28 L 6 34 L 10 34" stroke={strokeColor} strokeWidth="1.8" />
          <path d="M 34 28 L 34 34 L 30 34" stroke={strokeColor} strokeWidth="1.8" />
          <path d="M 15 14 C 11 14 11 20 16 20 C 11 20 11 26 15 26" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M 25 14 C 29 14 29 20 24 20 C 29 20 29 26 25 26" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
          <polygon points="20,17 21.5,20 24,20 22,21.5 23,24 20,22.2 17,24 18,21.5 16,20 18.5,20" fill={strokeColor} />
        </svg>
      </div>

      <span
        className="font-sans font-light tracking-[0.26em] text-lg leading-none"
        style={{ color: textColor }}
      >
        LAB BEAUTY
      </span>

      {showSubtitle && (
        <span
          className="font-sans text-[10px] tracking-[0.35em] uppercase mt-1 font-medium"
          style={{ color: subtitleColor }}
        >
          CABELEIREIROS
        </span>
      )}
    </div>
  );
};
