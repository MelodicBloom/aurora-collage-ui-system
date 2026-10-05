import React from 'react';

export interface BleedMarginProps {
  visible?: boolean;
  showLabels?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const BleedMargin: React.FC<BleedMarginProps> = ({
  visible = true,
  showLabels = true,
  className = '',
  children,
}) => {
  if (!visible) {
    return <>{children}</>;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Outer Bleed & Safe Area Guide Box */}
      <div
        className="pointer-events-none absolute -inset-2 sm:-inset-4 border-2 border-dotted border-[#E84040]/55 z-20 transition-opacity duration-300"
        style={{
          boxShadow: '0 0 0 1px rgba(232, 64, 64, 0.15)',
        }}
        aria-hidden="true"
      >
        {/* Safe Area Warning Badge - Top Left */}
        {showLabels && (
          <div className="absolute -top-3 left-6 bg-[#FAF6EC] px-2 py-0.5 border border-[#E84040]/60 flex items-center gap-1.5 shadow-[1px_1px_0px_rgba(232,64,64,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E84040] animate-pulse" />
            <span className="font-mono-code text-[9px] uppercase tracking-wider text-[#E84040] font-bold">
              BLEED MARGIN (+3mm) • LIVE TYPE SAFE ZONE
            </span>
          </div>
        )}

        {/* Trim & Guillotine Cut Note - Top Right */}
        {showLabels && (
          <div className="absolute -top-3 right-6 bg-[#FAF6EC] px-2 py-0.5 border border-[#E84040]/60 hidden sm:flex items-center gap-1 shadow-[1px_1px_0px_rgba(232,64,64,0.3)]">
            <span className="font-mono-code text-[9px] uppercase tracking-wider text-[#E84040]">
              TRIM LINE (210×297mm) • KEEP ARTWORK INSIDE
            </span>
          </div>
        )}

        {/* Left Vertical Guide Marker */}
        {showLabels && (
          <div className="absolute top-1/2 -left-3.5 -translate-y-1/2 -rotate-90 origin-center bg-[#FAF6EC] px-1.5 py-0.5 border border-[#E84040]/50 hidden lg:block">
            <span className="font-mono-code text-[8px] uppercase tracking-widest text-[#E84040]">
              SAFE BOUNDARY
            </span>
          </div>
        )}

        {/* Right Vertical Guide Marker */}
        {showLabels && (
          <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 rotate-90 origin-center bg-[#FAF6EC] px-1.5 py-0.5 border border-[#E84040]/50 hidden lg:block">
            <span className="font-mono-code text-[8px] uppercase tracking-widest text-[#E84040]">
              CUT TOLERANCE ±0.5mm
            </span>
          </div>
        )}

        {/* Bottom Calibration Note */}
        {showLabels && (
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#FAF6EC] px-3 py-0.5 border border-[#E84040]/60 flex items-center gap-2 shadow-[1px_1px_0px_rgba(232,64,64,0.3)]">
            <span className="font-mono-code text-[9px] uppercase tracking-wider text-[#E84040] font-bold">
              ✁ PHYSICAL PRESS TRIM LIMIT • DANGER OF GUILLOTINE CLIPPING BEYOND THIS LINE
            </span>
          </div>
        )}

        {/* Corner Scissors Guide Ticks */}
        <div className="absolute -top-2 -left-2 text-[#E84040] font-mono-code text-xs select-none">
          ✁
        </div>
        <div className="absolute -top-2 -right-2 text-[#E84040] font-mono-code text-xs select-none scale-x-[-1]">
          ✁
        </div>
        <div className="absolute -bottom-2 -left-2 text-[#E84040] font-mono-code text-xs select-none scale-y-[-1]">
          ✁
        </div>
        <div className="absolute -bottom-2 -right-2 text-[#E84040] font-mono-code text-xs select-none scale-[-1]">
          ✁
        </div>
      </div>

      {children}
    </div>
  );
};
