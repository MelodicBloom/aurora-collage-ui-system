import React from 'react';
import { RegistrationMarks } from '../ui/RegistrationMarks';
import { BleedMargin } from '../ui/BleedMargin';
import { InkBlot } from '../ui/InkBlot';

export interface PageGridProps {
  children: React.ReactNode;
  showRegistrationMarks?: boolean;
  showBleedMargin?: boolean;
  onToggleRegistrationMarks?: () => void;
  onToggleBleedMargin?: () => void;
  className?: string;
}

export const PageGrid: React.FC<PageGridProps> = ({
  children,
  showRegistrationMarks = true,
  showBleedMargin = true,
  onToggleRegistrationMarks,
  onToggleBleedMargin,
  className = '',
}) => {
  return (
    <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ${className}`}>
      {/* Offset Printing Registration Mark Overlay (Crosshairs & Crop Markers) */}
      <RegistrationMarks visible={showRegistrationMarks} />

      {/* Floating Canvas Toggle Dockets */}
      <div className="absolute top-3 right-4 sm:right-6 z-30 flex items-center gap-2">
        {onToggleBleedMargin && (
          <button
            onClick={onToggleBleedMargin}
            className={`
              font-mono-code text-[10px] tracking-wider uppercase px-2.5 py-1 border transition-all duration-150 cursor-pointer select-none flex items-center gap-1.5
              ${
                showBleedMargin
                  ? 'bg-[#FAF6EC] text-[#E84040] border-[#E84040] shadow-[1px_1px_0px_#1A1208] font-bold'
                  : 'bg-[#F4EDD8]/80 text-[#8C7A5E] border-[#8C7A5E]/40 hover:border-[#1A1208] hover:text-[#1A1208]'
              }
            `}
            title="Toggle Faded Red Dotted Bleed Margin & Safe Area"
          >
            <span>✁</span>
            <span>Bleed Margin: {showBleedMargin ? 'Active' : 'Hidden'}</span>
          </button>
        )}

        {onToggleRegistrationMarks && (
          <button
            onClick={onToggleRegistrationMarks}
            className={`
              font-mono-code text-[10px] tracking-wider uppercase px-2.5 py-1 border transition-all duration-150 cursor-pointer select-none flex items-center gap-1.5
              ${
                showRegistrationMarks
                  ? 'bg-[#FAF6EC] text-[#E84040] border-[#E84040] shadow-[1px_1px_0px_#1A1208] font-bold'
                  : 'bg-[#F4EDD8]/80 text-[#8C7A5E] border-[#8C7A5E]/40 hover:border-[#1A1208] hover:text-[#1A1208]'
              }
            `}
            title="Toggle Offset Printing Crop Marks & Crosshairs"
          >
            <span className="text-xs">✛</span>
            <span>Marks: {showRegistrationMarks ? 'Visible' : 'Hidden'}</span>
          </button>
        )}
      </div>

      {/* Bleed Margin wrapping the Page Content */}
      <BleedMargin visible={showBleedMargin}>
        {/* Subtle Organic Press Gutter Ink Blots */}
        <div className="absolute top-72 -left-6 pointer-events-none -z-10 hidden xl:block">
          <InkBlot variant="droplet" color="ink" size="sm" opacity={0.25} rotation={18} seed={20} />
        </div>
        <div className="absolute top-1/2 -right-8 pointer-events-none -z-10 hidden xl:block">
          <InkBlot variant="splatter" color="riso-red" size="sm" opacity={0.3} rotation={-45} seed={45} />
        </div>
        <div className="absolute bottom-96 -left-7 pointer-events-none -z-10 hidden xl:block">
          <InkBlot variant="smear" color="riso-blue" size="md" opacity={0.25} rotation={12} seed={82} />
        </div>

        {children}
      </BleedMargin>
    </div>
  );
};
