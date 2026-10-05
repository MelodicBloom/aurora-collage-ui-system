import React from 'react';

export interface RegistrationMarksProps {
  visible?: boolean;
  className?: string;
  jobName?: string;
  sheetSize?: string;
  resolution?: string;
}

export const RegistrationMarks: React.FC<RegistrationMarksProps> = ({
  visible = true,
  className = '',
  jobName = 'AURORA-COLLAGE-SYSTEM-VOL7',
  sheetSize = 'A4 (210×297mm) + 3mm BLEED',
  resolution = '300 DPI / 175 LPI',
}) => {
  if (!visible) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 select-none overflow-hidden z-30 transition-opacity duration-300 ${className}`}
      aria-hidden="true"
    >
      {/* ================= TOP-LEFT CORNER ================= */}
      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 flex flex-col items-start gap-1">
        <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#1A1208] opacity-75">
          {/* Crop Markers */}
          <line x1="14" y1="0" x2="14" y2="10" stroke="currentColor" strokeWidth="0.75" />
          <line x1="0" y1="14" x2="10" y2="14" stroke="currentColor" strokeWidth="0.75" />
          
          {/* Bleed line indicators */}
          <line x1="18" y1="0" x2="18" y2="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
          <line x1="0" y1="18" x2="8" y2="18" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />

          {/* Registration Crosshair Target */}
          <g transform="translate(26, 26)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.75" />
            <line x1="0" y1="-14" x2="0" y2="14" stroke="currentColor" strokeWidth="0.75" />
            {/* Alternating Quadrants */}
            <path d="M 0 0 L 0 -10 A 10 10 0 0 1 10 0 Z" fill="currentColor" />
            <path d="M 0 0 L 0 10 A 10 10 0 0 1 -10 0 Z" fill="currentColor" />
            <circle cx="0" cy="0" r="1" fill="#FAF6EC" />
          </g>
        </svg>
        <span className="font-mono-code text-[9px] text-[#8C7A5E] tracking-wider pl-1 uppercase font-bold">
          REG-TL • 0,0
        </span>
      </div>

      {/* ================= TOP-RIGHT CORNER ================= */}
      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 flex flex-col items-end gap-1">
        <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#1A1208] opacity-75">
          {/* Crop Markers */}
          <line x1="30" y1="0" x2="30" y2="10" stroke="currentColor" strokeWidth="0.75" />
          <line x1="34" y1="14" x2="44" y2="14" stroke="currentColor" strokeWidth="0.75" />
          
          {/* Bleed line indicators */}
          <line x1="26" y1="0" x2="26" y2="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
          <line x1="36" y1="18" x2="44" y2="18" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />

          {/* Registration Crosshair Target */}
          <g transform="translate(18, 26)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.75" />
            <line x1="0" y1="-14" x2="0" y2="14" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 0 0 L 0 -10 A 10 10 0 0 0 -10 0 Z" fill="currentColor" />
            <path d="M 0 0 L 0 10 A 10 10 0 0 0 10 0 Z" fill="currentColor" />
            <circle cx="0" cy="0" r="1" fill="#FAF6EC" />
          </g>
        </svg>
        <span className="font-mono-code text-[9px] text-[#8C7A5E] tracking-wider pr-1 uppercase font-bold">
          REG-TR • X:MAX,0
        </span>
      </div>

      {/* ================= TOP CENTER MARGIN SPECS & CALIBRATION ================= */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#1A1208] opacity-75">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="0.75" />
            <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="0.75" />
          </svg>
          <div className="flex items-center border border-[#1A1208]/40 bg-[#FAF6EC]/90 px-2 py-0.5">
            <div className="flex items-center gap-0.5 pr-2 border-r border-[#1A1208]/20">
              <span className="w-2.5 h-2.5 bg-[#E84040] inline-block" title="Riso Red" />
              <span className="w-2.5 h-2.5 bg-[#2D6BE4] inline-block" title="Riso Blue" />
              <span className="w-2.5 h-2.5 bg-[#F0C620] inline-block" title="Riso Yellow" />
              <span className="w-2.5 h-2.5 bg-[#3DAA6B] inline-block" title="Riso Green" />
              <span className="w-2.5 h-2.5 bg-[#1A1208] inline-block" title="Master Ink" />
            </div>
            <div className="pl-2 font-mono-code text-[8px] text-[#8C7A5E] tracking-wider uppercase">
              {jobName} • {resolution}
            </div>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#1A1208] opacity-75">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="0.75" />
            <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="0.75" />
          </svg>
        </div>
      </div>

      {/* ================= BOTTOM-LEFT CORNER ================= */}
      <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 flex flex-col items-start gap-1">
        <span className="font-mono-code text-[9px] text-[#8C7A5E] tracking-wider pl-1 uppercase font-bold">
          REG-BL • 0,Y:MAX
        </span>
        <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#1A1208] opacity-75">
          {/* Crop Markers */}
          <line x1="14" y1="34" x2="14" y2="44" stroke="currentColor" strokeWidth="0.75" />
          <line x1="0" y1="30" x2="10" y2="30" stroke="currentColor" strokeWidth="0.75" />
          
          {/* Bleed line indicators */}
          <line x1="18" y1="36" x2="18" y2="44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
          <line x1="0" y1="26" x2="8" y2="26" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />

          {/* Registration Crosshair Target */}
          <g transform="translate(26, 18)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.75" />
            <line x1="0" y1="-14" x2="0" y2="14" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 0 0 L 0 -10 A 10 10 0 0 1 10 0 Z" fill="currentColor" />
            <path d="M 0 0 L 0 10 A 10 10 0 0 1 -10 0 Z" fill="currentColor" />
            <circle cx="0" cy="0" r="1" fill="#FAF6EC" />
          </g>
        </svg>
      </div>

      {/* ================= BOTTOM-RIGHT CORNER ================= */}
      <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex flex-col items-end gap-1">
        <span className="font-mono-code text-[9px] text-[#8C7A5E] tracking-wider pr-1 uppercase font-bold">
          REG-BR • OFFSET CALIBRATED
        </span>
        <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#1A1208] opacity-75">
          {/* Crop Markers */}
          <line x1="30" y1="34" x2="30" y2="44" stroke="currentColor" strokeWidth="0.75" />
          <line x1="34" y1="30" x2="44" y2="30" stroke="currentColor" strokeWidth="0.75" />
          
          {/* Bleed line indicators */}
          <line x1="26" y1="36" x2="26" y2="44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
          <line x1="36" y1="26" x2="44" y2="26" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />

          {/* Registration Crosshair Target */}
          <g transform="translate(18, 18)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.75" />
            <line x1="0" y1="-14" x2="0" y2="14" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 0 0 L 0 -10 A 10 10 0 0 0 -10 0 Z" fill="currentColor" />
            <path d="M 0 0 L 0 10 A 10 10 0 0 0 10 0 Z" fill="currentColor" />
            <circle cx="0" cy="0" r="1" fill="#FAF6EC" />
          </g>
        </svg>
      </div>

      {/* ================= BOTTOM CENTER METADATA BAR ================= */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3">
        <div className="flex items-center gap-2 border border-[#1A1208]/40 bg-[#FAF6EC]/90 px-3 py-0.5 font-mono-code text-[8px] text-[#8C7A5E] tracking-widest uppercase">
          <span>SHEET: {sheetSize}</span>
          <span>•</span>
          <span>CYLINDER SPEED: 6,800 SPH</span>
          <span>•</span>
          <span className="text-[#E84040] font-bold">CROP & CROSSHAIRS ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
