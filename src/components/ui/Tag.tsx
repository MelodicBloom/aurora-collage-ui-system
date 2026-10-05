import React from 'react';

export interface TagProps {
  color?: 'red' | 'blue' | 'yellow' | 'green' | 'violet' | 'ink';
  perforated?: boolean;
  code?: string;
  hasHole?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Tag: React.FC<TagProps> = ({
  color = 'red',
  perforated = false,
  code,
  hasHole = false,
  children,
  className = '',
  onClick,
}) => {
  const colorStyles = {
    red: 'bg-[#E84040]/15 text-[#E84040] border-[#E84040]',
    blue: 'bg-[#2D6BE4]/15 text-[#2D6BE4] border-[#2D6BE4]',
    yellow: 'bg-[#F0C620]/25 text-[#735a02] border-[#F0C620]',
    green: 'bg-[#3DAA6B]/15 text-[#20693f] border-[#3DAA6B]',
    violet: 'bg-[#C4A8D8]/25 text-[#5e3c79] border-[#C4A8D8]',
    ink: 'bg-[#1A1208]/10 text-[#1A1208] border-[#1A1208]',
  };

  return (
    <span
      onClick={onClick}
      className={`
        inline-flex items-center gap-1.5 font-mono-code text-xs px-2.5 py-1 border select-none transition-colors
        ${colorStyles[color]}
        ${perforated ? 'border-dashed' : 'border-solid'}
        ${onClick ? 'cursor-pointer hover:opacity-80 active:translate-y-0.5' : ''}
        ${className}
      `}
    >
      {hasHole && (
        <span className="w-2 h-2 rounded-full border border-current bg-[#FAF6EC] shrink-0 shadow-inner" />
      )}
      <span className="font-semibold tracking-wider uppercase">{children}</span>
      {code && (
        <span className="opacity-70 text-[10px] pl-1 border-l border-current/30">
          {code}
        </span>
      )}
    </span>
  );
};
