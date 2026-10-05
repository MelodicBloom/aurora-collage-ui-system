import React from 'react';

export interface PageGridProps {
  children: React.ReactNode;
  showBleedMarks?: boolean;
  className?: string;
}

export const PageGrid: React.FC<PageGridProps> = ({
  children,
  showBleedMarks = true,
  className = '',
}) => {
  return (
    <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Corner Registration Crosshairs */}
      {showBleedMarks && (
        <>
          <div className="absolute top-2 left-2 pointer-events-none select-none text-[#8C7A5E]/40 font-mono-code text-[10px]">
            ┌ REG-TL
          </div>
          <div className="absolute top-2 right-2 pointer-events-none select-none text-[#8C7A5E]/40 font-mono-code text-[10px]">
            REG-TR ┐
          </div>
        </>
      )}

      {children}
    </div>
  );
};
