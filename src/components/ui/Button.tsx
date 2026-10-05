import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'riso-red' | 'riso-blue' | 'riso-green' | 'riso-yellow' | 'ink' | 'outline' | 'ghost' | 'ticket';
  size?: 'sm' | 'md' | 'lg';
  stampBorder?: boolean;
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'riso-red',
  size = 'md',
  stampBorder = true,
  leadIcon,
  tailIcon,
  children,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 uppercase tracking-wider',
    md: 'text-sm px-5 py-2.5 gap-2 tracking-wide font-medium',
    lg: 'text-base px-7 py-3.5 gap-3 tracking-wide font-medium',
  };

  const variantStyles = {
    'riso-red': 'bg-[#E84040] text-[#FAF6EC] hover:bg-[#d43333] shadow-[2px_3px_0px_#1A1208]',
    'riso-blue': 'bg-[#2D6BE4] text-[#FAF6EC] hover:bg-[#2058c4] shadow-[2px_3px_0px_#1A1208]',
    'riso-green': 'bg-[#3DAA6B] text-[#FAF6EC] hover:bg-[#328e57] shadow-[2px_3px_0px_#1A1208]',
    'riso-yellow': 'bg-[#F0C620] text-[#1A1208] hover:bg-[#deaf10] shadow-[2px_3px_0px_#1A1208] font-semibold',
    'ink': 'bg-[#1A1208] text-[#F4EDD8] hover:bg-[#2e2112] shadow-[2px_3px_0px_#8C7A5E]',
    'outline': 'bg-transparent text-[#1A1208] border-2 border-[#1A1208] hover:bg-[#1A1208]/5 shadow-[2px_3px_0px_#1A1208]',
    'ghost': 'bg-transparent text-[#1A1208] hover:bg-[#F2C4A0]/40 border border-dashed border-[#8C7A5E]/40',
    'ticket': 'bg-[#FAF6EC] text-[#1A1208] border-2 border-dashed border-[#1A1208] hover:bg-[#F4EDD8] shadow-[2px_3px_0px_#1A1208]',
  };

  return (
    <button
      className={`
        relative inline-flex items-center justify-center select-none font-mono-code transition-all duration-150 cursor-pointer
        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
        ${stampBorder ? 'border border-[#1A1208]' : ''}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {/* Registration corner crosshairs if stampBorder */}
      {stampBorder && (
        <span className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border-t border-l border-[#1A1208] opacity-60" />
      )}
      {stampBorder && (
        <span className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border-b border-r border-[#1A1208] opacity-60" />
      )}

      {leadIcon && <span className="inline-flex shrink-0">{leadIcon}</span>}
      <span>{children}</span>
      {tailIcon && <span className="inline-flex shrink-0">{tailIcon}</span>}
    </button>
  );
};
