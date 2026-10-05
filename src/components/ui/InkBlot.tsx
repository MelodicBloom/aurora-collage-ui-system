import React from 'react';

export type InkBlotVariant = 'droplet' | 'splatter' | 'smear' | 'pooling' | 'bleed';
export type InkBlotColor = 'ink' | 'riso-red' | 'riso-blue' | 'riso-violet' | 'riso-sage' | 'riso-ochre';

export interface InkBlotProps {
  variant?: InkBlotVariant;
  color?: InkBlotColor | string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  opacity?: number;
  rotation?: number;
  seed?: number;
  animated?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const colorMap: Record<InkBlotColor, string> = {
  ink: '#131313',
  'riso-red': '#E04F4F',
  'riso-blue': '#2D6BE4',
  'riso-violet': '#5E4B8B',
  'riso-sage': '#4CA9A2',
  'riso-ochre': '#FFB74D',
};

export const InkBlot: React.FC<InkBlotProps> = ({
  variant = 'droplet',
  color = 'ink',
  size = 'md',
  opacity = 0.85,
  rotation = 0,
  seed = 42,
  animated = true,
  duration = 2.4,
  delay = 0,
  className = '',
  style = {},
}) => {
  const resolvedColor = colorMap[color as InkBlotColor] || color;

  // Size dimensions
  const dimension = typeof size === 'number' ? size : {
    sm: 48,
    md: 84,
    lg: 140,
    xl: 220,
  }[size];

  // Unique filter ID based on seed & variant so multiple blots have distinct capillary turbulence
  const filterId = `ink-bleed-filter-${variant}-${seed}`;

  return (
    <div
      className={`pointer-events-none select-none inline-block ${animated ? 'animate-ink-dry' : ''} ${className}`}
      style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        transform: `rotate(${rotation}deg)`,
        mixBlendMode: 'multiply',
        ...({
          '--blot-target-opacity': opacity,
          '--blot-duration': `${duration}s`,
          '--blot-delay': `${delay}s`,
        } as React.CSSProperties),
        ...(!animated ? { opacity } : {}),
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Wet-on-dry capillary paper bleed filter */}
          <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
            {/* Fine turbulence simulating jagged paper fiber wicking */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.045"
              numOctaves="4"
              seed={seed}
              result="fiberNoise"
            />
            {/* Displacement map creates organic dendritic jagged boundary */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="fiberNoise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedInk"
            />
            {/* Capillary wet ink diffusion blur */}
            <feGaussianBlur
              in="displacedInk"
              stdDeviation="1.8"
              result="softBleed"
            />
            {/* High-frequency stipple noise for ink pigment tooth */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              result="stippleNoise"
            />
            <feComposite
              in="softBleed"
              in2="stippleNoise"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="-0.15"
              k4="0"
              result="texturedInk"
            />
            {/* Layer wet core over feathered capillary rim */}
            <feMerge>
              <feMergeNode in="softBleed" />
              <feMergeNode in="texturedInk" />
              <feMergeNode in="displacedInk" />
            </feMerge>
          </filter>
        </defs>

        {/* ================= VARIANT 1: DROPLET (Classic pooled droplet with feathered rim) ================= */}
        {variant === 'droplet' && (
          <g filter={`url(#${filterId})`}>
            {/* Dark dense pigment core */}
            <circle cx="50" cy="50" r="26" fill={resolvedColor} />
            {/* Irregular outer wicking lobe */}
            <path
              d="M 50 18 C 66 18 78 30 76 52 C 74 68 62 78 48 76 C 32 74 24 64 26 46 C 28 32 38 18 50 18 Z"
              fill={resolvedColor}
              opacity="0.8"
            />
            {/* Coffee-ring darker perimeter fringe */}
            <circle cx="50" cy="50" r="28" fill="none" stroke={resolvedColor} strokeWidth="2.5" opacity="0.9" />
          </g>
        )}

        {/* ================= VARIANT 2: SPLATTER (Core pool with satellite impact dots) ================= */}
        {variant === 'splatter' && (
          <g filter={`url(#${filterId})`}>
            {/* Central impact blot */}
            <path
              d="M 50 24 C 64 20 76 34 72 50 C 78 62 66 74 52 72 C 36 78 28 66 32 52 C 24 38 36 26 50 24 Z"
              fill={resolvedColor}
            />
            {/* Radial satellite droplets (unfiltered for sharp splatter contrast) */}
            <circle cx="82" cy="32" r="4.5" fill={resolvedColor} />
            <circle cx="88" cy="46" r="2.5" fill={resolvedColor} />
            <circle cx="20" cy="28" r="3.5" fill={resolvedColor} />
            <circle cx="16" cy="42" r="2" fill={resolvedColor} />
            <circle cx="28" cy="80" r="3.5" fill={resolvedColor} />
            <circle cx="42" cy="88" r="2.5" fill={resolvedColor} />
            <circle cx="74" cy="78" r="4" fill={resolvedColor} />
            <circle cx="82" cy="86" r="1.8" fill={resolvedColor} />
            <circle cx="52" cy="12" r="3" fill={resolvedColor} />
          </g>
        )}

        {/* ================= VARIANT 3: SMEAR (Wet ink drag / finger or roller smear) ================= */}
        {variant === 'smear' && (
          <g filter={`url(#${filterId})`}>
            {/* Elongated dragged streak */}
            <path
              d="M 15 48 C 28 38 52 42 78 44 C 90 45 92 56 82 58 C 58 62 34 58 18 56 C 12 54 10 50 15 48 Z"
              fill={resolvedColor}
            />
            {/* Secondary trail bleed */}
            <path
              d="M 22 42 C 40 38 65 40 85 45 C 75 52 48 54 28 50 Z"
              fill={resolvedColor}
              opacity="0.65"
            />
            {/* Trail micro streaks */}
            <path d="M 82 46 L 96 48" stroke={resolvedColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M 78 54 L 92 56" stroke={resolvedColor} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          </g>
        )}

        {/* ================= VARIANT 4: POOLING (Expansive, uneven watercolor wash pool) ================= */}
        {variant === 'pooling' && (
          <g filter={`url(#${filterId})`}>
            {/* Expansive amorphous wash pool */}
            <path
              d="M 45 10 C 75 8 95 28 92 55 C 90 80 75 92 48 94 C 20 96 8 78 12 48 C 15 22 28 12 45 10 Z"
              fill={resolvedColor}
              opacity="0.65"
            />
            {/* Uneven interior settling pool */}
            <path
              d="M 52 24 C 70 26 80 40 76 60 C 72 74 58 80 42 76 C 28 72 26 55 30 38 C 34 26 42 22 52 24 Z"
              fill={resolvedColor}
              opacity="0.85"
            />
            {/* Dense core droplet */}
            <circle cx="44" cy="46" r="14" fill={resolvedColor} opacity="0.95" />
          </g>
        )}

        {/* ================= VARIANT 5: BLEED (Edge bleed along card borders) ================= */}
        {variant === 'bleed' && (
          <g filter={`url(#${filterId})`}>
            <path
              d="M 0 50 Q 25 35 50 48 T 100 46 L 100 70 Q 75 60 50 68 T 0 66 Z"
              fill={resolvedColor}
              opacity="0.75"
            />
            <ellipse cx="50" cy="52" rx="28" ry="12" fill={resolvedColor} opacity="0.9" />
          </g>
        )}
      </svg>
    </div>
  );
};
