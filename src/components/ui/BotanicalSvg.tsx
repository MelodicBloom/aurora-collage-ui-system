import React from 'react';

// Silhouette Cameo (Woman with hair bun - from Image 1 & 2)
export const SilhouetteCameo: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-24 h-32',
  color = '#131313',
}) => (
  <svg viewBox="0 0 100 130" className={className} fill={color}>
    {/* Stipple texture filter applied */}
    <path d="M 45 15 C 38 15 32 20 30 28 C 26 27 20 30 20 35 C 20 40 24 43 27 44 C 27 48 29 55 33 60 C 31 63 28 66 25 70 C 23 72 20 76 22 80 C 23 83 27 84 30 84 C 31 87 34 94 38 98 C 42 102 46 105 48 112 C 49 116 47 122 45 128 L 85 128 C 85 125 84 118 82 112 C 78 98 75 88 74 80 C 73 70 70 65 67 60 C 64 56 61 50 61 44 C 61 38 65 34 65 28 C 65 20 58 15 45 15 Z" />
    <circle cx="28" cy="34" r="8" />
  </svg>
);

// Silhouette Bob Haircut
export const SilhouetteBob: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-24 h-32',
  color = '#131313',
}) => (
  <svg viewBox="0 0 100 130" className={className} fill={color}>
    <path d="M 50 15 C 38 15 32 22 30 32 C 28 42 28 56 34 68 C 30 72 26 78 26 84 C 26 90 32 94 36 98 C 40 102 44 108 46 116 C 47 122 46 128 46 128 L 82 128 C 82 124 81 116 78 110 C 74 98 72 88 70 80 C 68 70 68 62 66 52 C 64 40 68 32 66 24 C 64 18 58 15 50 15 Z" />
  </svg>
);

// Silhouette Hat
export const SilhouetteHat: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-24 h-32',
  color = '#131313',
}) => (
  <svg viewBox="0 0 100 130" className={className} fill={color}>
    <ellipse cx="50" cy="38" rx="38" ry="12" />
    <path d="M 38 38 C 38 24 42 16 50 16 C 58 16 62 24 62 38 Z" />
    <path d="M 40 45 C 36 50 34 60 38 72 C 34 76 30 82 28 90 C 26 96 32 102 36 108 C 40 114 44 122 45 128 L 82 128 C 82 122 80 112 76 104 C 72 94 68 82 66 72 C 64 62 62 52 60 45 Z" />
  </svg>
);

// Botanical Branch with delicate leaves (from Image 1 & 2)
export const BotanicalBranch: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-16 h-40',
  color = '#131313',
}) => (
  <svg viewBox="0 0 60 140" className={className} fill={color} stroke={color}>
    {/* Main Stem */}
    <path d="M 30 135 Q 28 90 32 50 T 30 10" fill="none" strokeWidth="2" strokeLinecap="round" />
    {/* Top leaf */}
    <path d="M 30 10 C 26 5 28 0 30 0 C 32 0 34 5 30 10 Z" />
    {/* Leaves left & right alternating */}
    <path d="M 31 28 Q 18 20 12 24 Q 18 32 31 30 Z" />
    <path d="M 31 38 Q 44 30 48 35 Q 42 43 31 40 Z" />
    <path d="M 30 52 Q 16 45 10 50 Q 17 58 30 54 Z" />
    <path d="M 31 66 Q 46 58 50 64 Q 43 72 31 68 Z" />
    <path d="M 29 80 Q 14 74 8 80 Q 16 88 29 83 Z" />
    <path d="M 30 96 Q 46 88 52 95 Q 44 103 30 98 Z" />
    <path d="M 28 112 Q 15 106 10 112 Q 18 120 28 115 Z" />
  </svg>
);

// Wildflower Stem with daisies (from Image 1 & 2)
export const WildflowerStem: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-20 h-44',
  color = '#131313',
}) => (
  <svg viewBox="0 0 80 150" className={className} fill={color} stroke={color}>
    {/* Stems */}
    <path d="M 40 145 Q 38 100 42 60 Q 44 40 40 25" fill="none" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M 40 90 Q 25 70 20 50" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 41 75 Q 58 55 62 40" fill="none" strokeWidth="1.5" strokeLinecap="round" />

    {/* Center Flower */}
    <g transform="translate(40, 24)">
      <circle cx="0" cy="0" r="4" fill="#FAF6EC" stroke={color} strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-9"
          rx="3"
          ry="6"
          transform={`rotate(${angle})`}
        />
      ))}
    </g>

    {/* Left Flower */}
    <g transform="translate(20, 48) scale(0.8)">
      <circle cx="0" cy="0" r="4" fill="#FAF6EC" stroke={color} strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-8"
          rx="3"
          ry="5.5"
          transform={`rotate(${angle})`}
        />
      ))}
    </g>

    {/* Right Flower */}
    <g transform="translate(62, 38) scale(0.75)">
      <circle cx="0" cy="0" r="4" fill="#FAF6EC" stroke={color} strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-8"
          rx="3"
          ry="5.5"
          transform={`rotate(${angle})`}
        />
      ))}
    </g>

    {/* Little leaves on stem */}
    <path d="M 40 105 Q 30 98 26 102 Q 32 108 40 107 Z" />
    <path d="M 40 120 Q 52 114 56 118 Q 48 124 40 122 Z" />
  </svg>
);

// Palm Frond Silhouette (from Image 1 & 3 Summer)
export const PalmFrond: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-32 h-36',
  color = '#131313',
}) => (
  <svg viewBox="0 0 120 120" className={className} fill={color}>
    <path d="M 20 115 Q 40 85 60 60 L 62 62 Q 42 88 22 118 Z" />
    {/* Fan blades radiating */}
    <path d="M 60 60 Q 55 30 45 10 Q 56 28 62 60 Z" />
    <path d="M 60 60 Q 70 30 75 8 Q 72 32 62 60 Z" />
    <path d="M 60 60 Q 85 36 98 18 Q 85 42 62 60 Z" />
    <path d="M 60 60 Q 98 50 115 38 Q 98 60 62 60 Z" />
    <path d="M 60 60 Q 105 68 118 64 Q 100 75 62 60 Z" />
    <path d="M 60 60 Q 98 85 110 88 Q 90 90 62 60 Z" />
    <path d="M 60 60 Q 38 40 22 22 Q 42 45 60 60 Z" />
    <path d="M 60 60 Q 28 55 10 46 Q 32 64 60 60 Z" />
    <path d="M 60 60 Q 25 72 8 75 Q 32 82 60 60 Z" />
  </svg>
);

// Risograph Sun Circle with distressed stipple texture
export const RisoSunCircle: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 80, color = '#E04F4F', className = '' }) => (
  <div
    className={`rounded-full relative overflow-hidden select-none shrink-0 ${className}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      mixBlendMode: 'multiply',
    }}
  >
    {/* Inner halftone grain stipple */}
    <div className="absolute inset-0 halftone-dots opacity-40 mix-blend-multiply" />
    <div className="absolute inset-0 riso-noise-stipple opacity-60 mix-blend-multiply" />
  </div>
);
