import React from 'react';

interface GrainOverlayProps {
  intensity?: number;
  className?: string;
}

export const GrainOverlay: React.FC<GrainOverlayProps> = ({
  intensity = 0.45,
  className = '',
}) => {
  return (
    <>
      {/* Hidden SVG Filter Definition */}
      <svg className="pointer-events-none fixed -top-[1000px] -left-[1000px] h-0 w-0 opacity-0" aria-hidden="true">
        <defs>
          <filter id="aurora-litho-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.1   0 0 0 0 0.08   0 0 0 0 0.05   0 0 0 0.7 0"
              result="coloredNoise"
            />
            <feBlend mode="multiply" in="SourceGraphic" in2="coloredNoise" />
          </filter>

          {/* Torn Edge Displacement Filter */}
          <filter id="aurora-torn-edge">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Fullscreen Grain Layer */}
      <div
        className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${className}`}
        style={{
          opacity: intensity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.42'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />
    </>
  );
};
