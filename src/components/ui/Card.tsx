import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'flat' | 'raised' | 'stacked' | 'lift';
  tapeAccent?: boolean | 'top' | 'corner' | 'both';
  tornEdge?: 'none' | 'bottom' | 'top';
  paperTint?: 'cream' | 'newsprint' | 'aged' | 'kraft';
  stampCode?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  elevation = 'raised',
  tapeAccent = false,
  tornEdge = 'none',
  paperTint = 'cream',
  stampCode,
  children,
  className = '',
  ...props
}) => {
  const elevationStyles = {
    flat: 'border border-[#1A1208]/20',
    raised: 'border border-[#1A1208]/60 paper-shadow-md',
    stacked: 'border-2 border-[#1A1208] paper-shadow-lg relative before:absolute before:-inset-1 before:bg-[#8C7A5E]/20 before:-z-10 before:rotate-[-0.8deg]',
    lift: 'border-2 border-[#1A1208] paper-shadow-lift transform hover:-translate-y-1 transition-transform duration-200',
  };

  const tintStyles = {
    cream: 'bg-[#FAF6EC] text-[#1A1208]',
    newsprint: 'bg-[#F4EDD8] text-[#1A1208]',
    aged: 'bg-[#ede3c4] text-[#1A1208]',
    kraft: 'bg-[#ddcca8] text-[#1A1208]',
  };

  const tornStyles = {
    none: '',
    bottom: 'torn-edge-bottom pb-8',
    top: 'torn-edge-top pt-8',
  };

  return (
    <div
      className={`
        relative p-6 transition-all duration-200
        ${tintStyles[paperTint]}
        ${elevationStyles[elevation]}
        ${tornStyles[tornEdge]}
        ${className}
      `}
      {...props}
    >
      {/* Tape Accents */}
      {(tapeAccent === true || tapeAccent === 'top' || tapeAccent === 'both') && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 masking-tape rotate-[-1.5deg] z-20 pointer-events-none"
          title="Archival Masking Tape"
        />
      )}
      {(tapeAccent === 'corner' || tapeAccent === 'both') && (
        <div
          className="absolute -top-3 -right-3 w-16 h-5 masking-tape rotate-[38deg] z-20 pointer-events-none"
          title="Corner Tape"
        />
      )}

      {/* Archival Lot or Plate Stamp */}
      {stampCode && (
        <div className="absolute top-3 right-4 font-mono-code text-[10px] tracking-widest text-[#8C7A5E] uppercase border border-[#8C7A5E]/40 px-1.5 py-0.5 select-none">
          {stampCode}
        </div>
      )}

      {children}
    </div>
  );
};
