import React from 'react';
import { ExternalLink, Printer, Compass, Stamp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-4 border-[#1A1208] bg-[#FAF6EC] pt-12 pb-16 mt-20 relative overflow-hidden">
      {/* Top Registration Crosshair Markers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 flex justify-between items-center text-[#8C7A5E] font-mono-code text-[10px]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 border border-[#8C7A5E] relative">
            <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#8C7A5E]" />
            <span className="absolute top-0 left-1/2 h-full w-[1px] bg-[#8C7A5E]" />
          </span>
          <span>TRIM: 210 × 297mm (A4)</span>
        </div>
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-3 h-3 bg-[#E84040] inline-block" title="Riso Red" />
          <span className="w-3 h-3 bg-[#2D6BE4] inline-block" title="Riso Blue" />
          <span className="w-3 h-3 bg-[#F0C620] inline-block" title="Riso Yellow" />
          <span className="w-3 h-3 bg-[#3DAA6B] inline-block" title="Riso Green" />
          <span className="w-3 h-3 bg-[#C4A8D8] inline-block" title="Wash Violet" />
          <span className="w-3 h-3 bg-[#1A1208] inline-block" title="Ink Primary" />
        </div>
        <div className="flex items-center gap-2">
          <span>COLOR REGISTRATION 100% OK</span>
          <span className="inline-block w-4 h-4 border border-[#8C7A5E] relative">
            <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#8C7A5E]" />
            <span className="absolute top-0 left-1/2 h-full w-[1px] bg-[#8C7A5E]" />
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Colophon Press Specs */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2 text-[#1A1208]">
            <Printer className="w-5 h-5 text-[#E84040]" />
            <h3 className="font-display font-bold text-lg tracking-wide uppercase">
              Colophon & Press Registry
            </h3>
          </div>
          <p className="font-body text-sm leading-relaxed text-[#1A1208]/80">
            AURORA was composed with Vite, React, and TypeScript. Typography is set in Playfair Display for authoritative broadsheet headlines, Source Serif 4 for physical reading density, DM Mono for catalog plates, and Caveat for marginal annotations.
          </p>
          <div className="pt-2 font-mono-code text-xs text-[#8C7A5E] space-y-1">
            <p>• Stock: 120gsm Unbleached Munken Print with recycled linen fibers</p>
            <p>• Screen Angles: Riso Red 75° · Blue 15° · Yellow 0° · Green 45°</p>
            <p>• Ink Formulation: Cold-set vegetable soybean emulsion</p>
          </div>
        </div>

        {/* Morphica Family Systems */}
        <div>
          <h4 className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E] font-bold mb-3 border-b border-[#1A1208]/20 pb-1">
            The Morphica Family
          </h4>
          <ul className="space-y-2 font-mono-code text-xs">
            <li>
              <a
                href="https://github.com/MelodicBloom/flore-orthography-memphis-ui"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E84040] flex items-center justify-between group"
              >
                <span>FLORÉ</span>
                <span className="text-[10px] text-[#8C7A5E] group-hover:text-[#E84040]">Memphis × Impasto ↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MelodicBloom/mochi-ui"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E84040] flex items-center justify-between group"
              >
                <span>Mochi UI</span>
                <span className="text-[10px] text-[#8C7A5E] group-hover:text-[#E84040]">Claymorphism ↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MelodicBloom/neumorphism-soft-ui-design-system"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E84040] flex items-center justify-between group"
              >
                <span>Jewelmorphism</span>
                <span className="text-[10px] text-[#8C7A5E] group-hover:text-[#E84040]">Crystal Depth ↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MelodicBloom/tactile-textile-system"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E84040] flex items-center justify-between group"
              >
                <span>Tactile Textile</span>
                <span className="text-[10px] text-[#8C7A5E] group-hover:text-[#E84040]">Quilted Material ↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MelodicBloom/magical-risograph"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E84040] flex items-center justify-between group"
              >
                <span>MÄG-RISO</span>
                <span className="text-[10px] text-[#8C7A5E] group-hover:text-[#E84040]">Matter.js Physics ↗</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Studio Stamp & Credit */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E] font-bold mb-3 border-b border-[#1A1208]/20 pb-1">
              Publisher
            </h4>
            <div className="border-2 border-[#1A1208] p-4 bg-[#F4EDD8] paper-shadow-sm text-center relative rotate-[-1deg]">
              <div className="font-display font-black text-sm tracking-wider uppercase text-[#1A1208]">
                MelodicBloom
              </div>
              <div className="font-mono-code text-[10px] text-[#8C7A5E] mt-1">
                PHILADELPHIA, PA • MMXXVI
              </div>
              <div className="font-hand text-base text-[#E84040] mt-1 font-bold">
                Printed by Hand & Code
              </div>
            </div>
          </div>
          <div className="font-mono-code text-[11px] text-[#8C7A5E] mt-4">
            Free & Open Source Design System. MIT License.
          </div>
        </div>
      </div>
    </footer>
  );
};
