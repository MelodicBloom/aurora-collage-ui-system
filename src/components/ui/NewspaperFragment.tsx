import React from 'react';

// Newspaper column clipping with authentic aged paper background and German/Latin fraktur or antique serif font
export const NewspaperFragment: React.FC<{
  lines?: number;
  width?: string;
  className?: string;
  headline?: string;
  deckle?: boolean;
}> = ({ lines = 5, width = 'w-32', className = '', headline, deckle = true }) => {
  return (
    <div
      className={`relative p-3 bg-[#ede2c8] border border-[#8C7A5E]/40 text-[#131313] select-none overflow-hidden ${
        deckle ? 'torn-edge-bottom' : ''
      } ${width} ${className}`}
      style={{
        boxShadow: '1px 2px 4px rgba(26,18,8,0.15)',
      }}
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />

      {headline && (
        <div className="font-display font-black text-xs uppercase tracking-tight border-b border-[#131313]/40 pb-1 mb-1.5">
          {headline}
        </div>
      )}

      <div className="space-y-1 font-body text-[9px] leading-tight text-[#131313]/75 italic">
        <p>
          § 14. Die Typographie der Druckpresse erfordert eine genaue Abstimmung des Farbauftrags auf das Faservolumen.
        </p>
        <p className="line-clamp-3">
          Aus dem Register der Werkstatt: Vor dem Andruck sind Zylinder und Farbwalzen zu reinigen. Papierfeuchtigkeit 55% bei 18°C Raumtemperatur.
        </p>
      </div>

      <div className="mt-2 pt-1 border-t border-[#131313]/20 flex justify-between font-mono-code text-[7px] text-[#8C7A5E]">
        <span>COL. IV</span>
        <span>NO. 842</span>
      </div>
    </div>
  );
};

// Woodcut Drop Cap Fragment ("A" or "&" on aged torn paper badge - from Image 1)
export const WoodcutDropCap: React.FC<{
  letter?: 'A' | '&' | 'B' | 'O';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ letter = 'A', size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-10 h-12 text-2xl',
    md: 'w-14 h-16 text-4xl',
    lg: 'w-20 h-24 text-6xl',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center bg-[#f0e4cc] border border-[#8C7A5E]/60 text-[#131313] font-display font-black select-none paper-shadow-sm ${sizeMap[size]} ${className}`}
      style={{ transform: 'rotate(-1.5deg)' }}
    >
      {/* Torn corner tape */}
      <div className="absolute -top-1.5 -left-1.5 w-6 h-3 masking-tape rotate-[-25deg] pointer-events-none" />
      <span className="relative z-10 leading-none">{letter}</span>
      <div className="absolute inset-0 halftone-dots opacity-25 pointer-events-none" />
    </div>
  );
};

// Handcrafted Ceramic Vase Illustration Component (from Image 1 & 2)
export const CeramicVaseArt: React.FC<{ className?: string }> = ({ className = 'w-36 h-44' }) => (
  <div className={`relative flex items-center justify-center bg-[#F4EDD8] border border-[#131313]/20 p-4 paper-shadow-sm ${className}`}>
    {/* Background warm watercolor bloom */}
    <div className="absolute inset-2 rounded-full bg-[#FFB74D]/25 filter blur-xl pointer-events-none" />
    
    <svg viewBox="0 0 100 130" className="w-full h-full relative z-10" fill="#b89c7c">
      {/* Vase Shadow */}
      <ellipse cx="50" cy="120" rx="30" ry="6" fill="#131313" opacity="0.15" />
      {/* Vase Body */}
      <path
        d="M 42 18 L 58 18 C 58 22 55 26 55 32 C 55 38 78 58 78 85 C 78 108 65 118 50 118 C 35 118 22 108 22 85 C 22 58 45 38 45 32 C 45 26 42 22 42 18 Z"
        fill="#cfb99e"
        stroke="#8C7A5E"
        strokeWidth="1.2"
      />
      {/* Vase Neck Rim */}
      <ellipse cx="50" cy="18" rx="8" ry="2.5" fill="#8C7A5E" />
      <ellipse cx="50" cy="18" rx="6" ry="1.8" fill="#5c4c3b" />
      {/* Vase Shading */}
      <path
        d="M 50 18 C 50 26 76 56 76 85 C 76 106 64 116 50 118 C 60 114 70 102 70 85 C 70 60 48 40 48 30 Z"
        fill="#a88c6e"
        opacity="0.4"
      />
    </svg>
  </div>
);
