import React from 'react';

export interface DividerProps {
  style?: 'torn' | 'broadsheet' | 'dashed' | 'lead-line' | 'deckle';
  ornament?: string;
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  style = 'broadsheet',
  ornament,
  label,
  className = '',
}) => {
  if (style === 'torn') {
    return (
      <div className={`relative w-full py-4 my-6 overflow-hidden ${className}`}>
        <div className="h-4 w-full bg-[#8C7A5E]/30 torn-edge-bottom" />
        <div className="h-3 w-full bg-[#1A1208]/15 torn-edge-top -mt-2" />
        {label && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F4EDD8] px-3 font-mono-code text-[11px] uppercase tracking-widest text-[#8C7A5E] border border-[#8C7A5E]/40">
            {label}
          </div>
        )}
      </div>
    );
  }

  if (style === 'dashed') {
    return (
      <div className={`relative flex items-center justify-center my-6 ${className}`}>
        <div className="w-full border-t-2 border-dashed border-[#1A1208]/30" />
        {(label || ornament) && (
          <span className="absolute bg-[#F4EDD8] px-4 font-mono-code text-xs text-[#8C7A5E] tracking-widest">
            {label || ornament}
          </span>
        )}
      </div>
    );
  }

  // Default Broadsheet Double Rule
  return (
    <div className={`relative my-8 ${className}`}>
      <div className="border-t-[3px] border-[#1A1208] mb-1" />
      <div className="border-t border-[#1A1208]" />
      {(label || ornament) && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F4EDD8] px-4 font-display font-bold text-xs tracking-widest uppercase text-[#1A1208]">
          {ornament && <span className="text-[#E84040] mr-2">{ornament}</span>}
          {label}
        </div>
      )}
    </div>
  );
};
