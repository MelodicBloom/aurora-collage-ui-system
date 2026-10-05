import React from 'react';

// Round Postal Stamp
export const PostalStampRound: React.FC<{
  label?: string;
  sub?: string;
  color?: string;
  className?: string;
}> = ({ label = 'AURORA', sub = 'ARCHIVE', color = '#131313', className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 60 60" className={className} stroke={color} fill="none">
    <circle cx="30" cy="30" r="27" strokeWidth="1.5" />
    <circle cx="30" cy="30" r="22" strokeWidth="0.8" strokeDasharray="2,2" />
    <text
      x="30"
      y="28"
      textAnchor="middle"
      fill={color}
      stroke="none"
      fontFamily="DM Mono, monospace"
      fontSize="7"
      letterSpacing="1"
      fontWeight="bold"
    >
      {label}
    </text>
    <text
      x="30"
      y="38"
      textAnchor="middle"
      fill={color}
      stroke="none"
      fontFamily="DM Mono, monospace"
      fontSize="5"
      letterSpacing="1.5"
    >
      {sub}
    </text>
  </svg>
);

// Post Office 3-Wave Lines
export const WavePostmark: React.FC<{ color?: string; className?: string }> = ({
  color = '#131313',
  className = 'w-16 h-6',
}) => (
  <svg viewBox="0 0 80 24" className={className} stroke={color} fill="none" strokeWidth="1.2">
    <path d="M 0 6 Q 10 0 20 6 T 40 6 T 60 6 T 80 6" />
    <path d="M 0 12 Q 10 6 20 12 T 40 12 T 60 12 T 80 12" />
    <path d="M 0 18 Q 10 12 20 18 T 40 18 T 60 18 T 80 18" />
  </svg>
);

// Boxed Date Stamp
export const DateStamp: React.FC<{ date?: string; color?: string; className?: string }> = ({
  date = '04 - 21 - 24',
  color = '#131313',
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center border-2 border-current px-2.5 py-0.5 font-mono-code text-[11px] font-bold tracking-widest uppercase select-none ${className}`}
    style={{ color }}
  >
    {date}
  </div>
);

// Boxed Collective Stamp
export const AuroraCollectiveStamp: React.FC<{ color?: string; className?: string }> = ({
  color = '#131313',
  className = '',
}) => (
  <div
    className={`inline-block border-2 border-current px-3 py-1 font-mono-code text-[10px] font-bold tracking-[0.2em] uppercase select-none text-center ${className}`}
    style={{ color }}
  >
    AURORA<br />
    <span className="text-[8px] tracking-normal font-normal opacity-75">COLLECTIVE</span>
  </div>
);

// Flower Outline Stamp (from Image 1)
export const FlowerEmblemStamp: React.FC<{ color?: string; className?: string }> = ({
  color = '#E04F4F',
  className = 'w-8 h-8',
}) => (
  <svg viewBox="0 0 40 40" className={className} stroke={color} fill="none" strokeWidth="1.2">
    <circle cx="20" cy="20" r="18" />
    <circle cx="20" cy="20" r="3" fill={color} />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <ellipse
        key={i}
        cx="20"
        cy="12"
        rx="2.5"
        ry="6"
        transform={`rotate(${angle} 20 20)`}
      />
    ))}
  </svg>
);

// Cross Marks Bar (+ + + + +)
export const CrossMarkBar: React.FC<{ count?: number; color?: string; className?: string }> = ({
  count = 5,
  color = '#131313',
  className = '',
}) => (
  <div className={`flex items-center gap-2.5 font-mono-code text-sm font-semibold select-none ${className}`} style={{ color }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>+</span>
    ))}
  </div>
);
