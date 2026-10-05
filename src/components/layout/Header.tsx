import React from 'react';
import { Sliders, Download, BookOpen, Layers } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  onOpenStudio?: () => void;
  onOpenExport?: () => void;
  showRegistrationMarks?: boolean;
  onToggleRegistrationMarks?: () => void;
  showBleedMargin?: boolean;
  onToggleBleedMargin?: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenStudio,
  onOpenExport,
  showRegistrationMarks = true,
  onToggleRegistrationMarks,
  showBleedMargin = true,
  onToggleBleedMargin,
  activeSection = 'hero',
}) => {
  return (
    <header className="border-b-2 border-[#1A1208] bg-[#FAF6EC]/90 backdrop-blur-xs sticky top-0 z-40">
      {/* Broadsheet Top Wire / Datebar */}
      <div className="border-b border-[#1A1208]/30 px-4 py-1.5 font-mono-code text-[11px] text-[#8C7A5E] flex flex-wrap justify-between items-center gap-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#1A1208]">VOL. VII — NO. 142</span>
          <span>•</span>
          <span>EST. MMXXVI</span>
          <span>•</span>
          <span className="hidden sm:inline">MELODICBLOOM PRESS</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {onToggleBleedMargin && (
            <button
              onClick={onToggleBleedMargin}
              className={`px-2 py-0.5 border text-[10px] uppercase font-mono-code flex items-center gap-1 cursor-pointer transition-colors ${
                showBleedMargin
                  ? 'border-[#E84040] text-[#E84040] bg-[#E84040]/10 font-bold'
                  : 'border-[#1A1208]/30 text-[#8C7A5E] hover:border-[#1A1208]'
              }`}
              title="Toggle Faded Red Dotted Bleed Margin & Safe Area"
            >
              <span>✁</span>
              <span>Bleed Margin: {showBleedMargin ? 'ON' : 'OFF'}</span>
            </button>
          )}

          {onToggleRegistrationMarks && (
            <button
              onClick={onToggleRegistrationMarks}
              className={`px-2 py-0.5 border text-[10px] uppercase font-mono-code flex items-center gap-1 cursor-pointer transition-colors ${
                showRegistrationMarks
                  ? 'border-[#E84040] text-[#E84040] bg-[#E84040]/10 font-bold'
                  : 'border-[#1A1208]/30 text-[#8C7A5E] hover:border-[#1A1208]'
              }`}
              title="Toggle Traditional Offset Crop Marks & Crosshairs"
            >
              <span>✛</span>
              <span>Registration Marks: {showRegistrationMarks ? 'ON' : 'OFF'}</span>
            </button>
          )}
          <span className="hidden lg:inline">•</span>
          <span className="hidden md:inline">WEATHER: 64°F · SLOW SOY DRYING</span>
          <span className="text-[#E84040] font-semibold">● LIVE PROOF</span>
        </div>
      </div>

      {/* Main Masthead Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Masthead Left Vignette */}
          <div className="hidden lg:flex items-center gap-3 text-xs font-mono-code text-[#8C7A5E] border-r border-[#1A1208]/20 pr-6">
            <div className="w-10 h-10 border border-[#1A1208] flex items-center justify-center bg-[#FAF6EC] shadow-[1px_1px_0px_#1A1208]">
              <span className="font-display font-black text-xl text-[#E84040]">A</span>
            </div>
            <div>
              <div className="font-semibold text-[#1A1208] uppercase">Litho-Riso</div>
              <div>Rag Paper 120gsm</div>
            </div>
          </div>

          {/* Central Newspaper Masthead Title */}
          <div className="text-center">
            <h1 className="font-display font-black tracking-tight text-4xl sm:text-5xl md:text-6xl text-[#1A1208] uppercase">
              AURORA
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="h-[1px] w-8 sm:w-16 bg-[#1A1208]/40" />
              <p className="font-mono-code text-xs sm:text-sm tracking-widest text-[#8C7A5E] uppercase">
                Collage UI System & Material Philosophy
              </p>
              <span className="h-[1px] w-8 sm:w-16 bg-[#1A1208]/40" />
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              leadIcon={<Sliders className="w-3.5 h-3.5" />}
              onClick={onOpenStudio}
              title="Tune Grain, Inks, and Misregistration"
            >
              Press Controls
            </Button>
            <Button
              variant="riso-red"
              size="sm"
              leadIcon={<Download className="w-3.5 h-3.5" />}
              onClick={onOpenExport}
              title="Export Design Tokens & CSS"
            >
              Export Tokens
            </Button>
          </div>
        </div>

        {/* Broadsheet Section Navigation Rules */}
        <nav className="mt-4 pt-3 border-t border-b border-[#1A1208] flex items-center justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-1 font-mono-code text-xs uppercase tracking-wider text-[#1A1208]">
            <li>
              <a
                href="#hero"
                className={`hover:text-[#E84040] transition-colors py-1 ${
                  activeSection === 'hero' ? 'font-bold text-[#E84040] border-b-2 border-[#E84040]' : ''
                }`}
              >
                Philosophy
              </a>
            </li>
            <li>•</li>
            <li>
              <a
                href="#layers"
                className={`hover:text-[#E84040] transition-colors py-1 ${
                  activeSection === 'layers' ? 'font-bold text-[#E84040] border-b-2 border-[#E84040]' : ''
                }`}
              >
                The 5 Layers
              </a>
            </li>
            <li>•</li>
            <li>
              <a
                href="#colors"
                className={`hover:text-[#E84040] transition-colors py-1 ${
                  activeSection === 'colors' ? 'font-bold text-[#E84040] border-b-2 border-[#E84040]' : ''
                }`}
              >
                Ink Palette
              </a>
            </li>
            <li>•</li>
            <li>
              <a
                href="#typography"
                className={`hover:text-[#E84040] transition-colors py-1 ${
                  activeSection === 'typography' ? 'font-bold text-[#E84040] border-b-2 border-[#E84040]' : ''
                }`}
              >
                Typography
              </a>
            </li>
            <li>•</li>
            <li>
              <a
                href="#showcase"
                className={`hover:text-[#E84040] transition-colors py-1 ${
                  activeSection === 'showcase' ? 'font-bold text-[#E84040] border-b-2 border-[#E84040]' : ''
                }`}
              >
                Component Gallery
              </a>
            </li>
            <li>•</li>
            <li>
              <a
                href="#seasonal"
                className={`hover:text-[#E84040] transition-colors py-1 ${
                  activeSection === 'seasonal' ? 'font-bold text-[#E84040] border-b-2 border-[#E84040]' : ''
                }`}
              >
                Seasonal Layouts
              </a>
            </li>
            <li>•</li>
            <li>
              <a
                href="#mobile-showcase"
                className={`hover:text-[#E84040] transition-colors py-1 ${
                  activeSection === 'mobile-showcase' ? 'font-bold text-[#E84040] border-b-2 border-[#E84040]' : ''
                }`}
              >
                Mobile System
              </a>
            </li>
            <li>•</li>
            <li>
              <a
                href="#asset-library"
                className={`hover:text-[#E84040] transition-colors py-1 ${
                  activeSection === 'asset-library' ? 'font-bold text-[#E84040] border-b-2 border-[#E84040]' : ''
                }`}
              >
                Asset Kit
              </a>
            </li>
            <li>•</li>
            <li>
              <a
                href="#journal"
                className={`hover:text-[#E84040] transition-colors py-1 ${
                  activeSection === 'journal' ? 'font-bold text-[#E84040] border-b-2 border-[#E84040]' : ''
                }`}
              >
                Journal
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
