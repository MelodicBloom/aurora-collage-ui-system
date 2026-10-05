import React from 'react';
import { Layers, Sparkles, Feather, Printer, Scissors, ArrowDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { InkBlot } from '../ui/InkBlot';
import { Smear } from '../motion/Smear';
import { Reveal } from '../motion/Reveal';

interface HeroProps {
  onExploreClick?: () => void;
  onOpenStudio?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenStudio }) => {
  return (
    <section id="hero" className="py-12 md:py-20 relative overflow-hidden">
      {/* Organic Wet-on-Dry Ink Bleed Accents Breaking the Grid */}
      <div className="absolute top-6 -left-8 pointer-events-none -z-10 hidden sm:block">
        <InkBlot variant="pooling" color="riso-sage" size="xl" opacity={0.35} rotation={-15} seed={12} />
      </div>
      <div className="absolute top-16 right-4 sm:right-12 pointer-events-none -z-10">
        <InkBlot variant="splatter" color="riso-red" size="lg" opacity={0.45} rotation={22} seed={88} />
      </div>
      <div className="absolute bottom-12 -right-10 pointer-events-none -z-10 hidden md:block">
        <InkBlot variant="droplet" color="ink" size="lg" opacity={0.3} rotation={45} seed={5} />
      </div>

      {/* Newspaper Broadsheet Headline Frame */}
      <Reveal creaseOrigin="top">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          <div className="inline-flex items-center gap-2">
            <Tag color="red" code="SPEC-01" perforated hasHole>
              Analog Material System
            </Tag>
            <Tag color="blue" code="P-2026">
              Vite + React + Tailwind
            </Tag>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-[#1A1208] leading-[1.08] tracking-tight">
            What if the interface itself was made from{' '}
            <span className="relative inline-block text-[#E84040]">
              <Smear activeColor="#2D6BE4">torn paper,</Smear>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F0C620]" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,7 T100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{' '}
            pressed ink, and morning light?
          </h2>

          <p className="font-body text-lg sm:text-xl text-[#1A1208]/85 max-w-2xl mx-auto leading-relaxed pt-2">
            <strong className="text-[#1A1208] font-semibold">AURORA</strong> is a production-ready design system built around five analog printing and collage aesthetics — lithographic texture, risograph ink, newspaper collage, watercolor washes, and papercraft assemblage — unified into a single coherent visual language for the digital surface.
          </p>

          {/* Quick Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="riso-red"
              size="lg"
              leadIcon={<Scissors className="w-4 h-4" />}
              onClick={onExploreClick}
            >
              Examine Components
            </Button>
            <Button
              variant="ticket"
              size="lg"
              leadIcon={<Printer className="w-4 h-4" />}
              onClick={onOpenStudio}
            >
              Interactive Press Lab
            </Button>
          </div>
        </div>
      </Reveal>

      {/* Layered Papercraft Collage Showcase */}
      <div className="mt-16 max-w-6xl mx-auto px-4">
        <Reveal delayMs={150} creaseOrigin="bottom">
          <div className="relative bg-[#FAF6EC] border-2 border-[#1A1208] p-6 sm:p-10 paper-shadow-lg">
            {/* Top Washi Tape */}
            <div className="absolute -top-4 left-1/4 w-32 h-7 masking-tape rotate-[-2deg] z-20 pointer-events-none" />
            <div className="absolute -top-4 right-1/4 w-28 h-7 masking-tape rotate-[3deg] z-20 pointer-events-none" />

            {/* Vintage Stamp Impression */}
            <div className="absolute top-4 right-4 border-2 border-[#E84040] text-[#E84040] p-2 rotate-12 select-none pointer-events-none font-mono-code text-[11px] font-bold text-center leading-tight uppercase opacity-85">
              AURORA PRESS<br />
              <span className="text-xs">FIRST PROOF</span><br />
              OCT 2026
            </div>

            <div className="border-b border-[#1A1208]/30 pb-4 mb-8">
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
                PLATE NO. 01 — THE FIVE MATERIAL AESTHETICS
              </span>
              <h3 className="font-display font-bold text-2xl text-[#1A1208] mt-1">
                Five tactile layers engineered to compound, not compete
              </h3>
            </div>

            {/* 5 Material Cards Grid */}
            <div id="layers" className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Layer 1: Lithography */}
              <div className="bg-[#FAF6EC] border border-[#1A1208] p-4 relative paper-shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-8 h-8 rounded-full bg-[#1A1208] text-[#FAF6EC] font-mono-code font-bold flex items-center justify-center text-xs mb-3">
                  01
                </div>
                <h4 className="font-display font-bold text-base text-[#1A1208]">Lithography</h4>
                <div className="text-[11px] font-mono-code text-[#E84040] mb-2 uppercase">The Foundation</div>
                <p className="font-body text-xs text-[#1A1208]/80 leading-normal">
                  Stone-ground tooth, microscopic ink voids, and organic grain. Every digital card feels physically textured.
                </p>
                <div className="mt-3 pt-2 border-t border-[#1A1208]/15 font-mono-code text-[10px] text-[#8C7A5E]">
                  CSS: --grain: 0.45
                </div>
              </div>

              {/* Layer 2: Risograph */}
              <div className="bg-[#FAF6EC] border border-[#1A1208] p-4 relative paper-shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-8 h-8 rounded-full bg-[#E84040] text-[#FAF6EC] font-mono-code font-bold flex items-center justify-center text-xs mb-3">
                  02
                </div>
                <h4 className="font-display font-bold text-base text-[#1A1208]">Risograph</h4>
                <div className="text-[11px] font-mono-code text-[#2D6BE4] mb-2 uppercase">The Color Logic</div>
                <p className="font-body text-xs text-[#1A1208]/80 leading-normal">
                  Vibrant soy inks, deliberate overprint multiplier blending, and slight physical misregistration on interaction.
                </p>
                <div className="mt-3 pt-2 border-t border-[#1A1208]/15 font-mono-code text-[10px] text-[#8C7A5E]">
                  blend-mode: multiply
                </div>
              </div>

              {/* Layer 3: Newspaper */}
              <div className="bg-[#FAF6EC] border border-[#1A1208] p-4 relative paper-shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-8 h-8 rounded-full bg-[#8C7A5E] text-[#FAF6EC] font-mono-code font-bold flex items-center justify-center text-xs mb-3">
                  03
                </div>
                <h4 className="font-display font-bold text-base text-[#1A1208]">Newspaper</h4>
                <div className="text-[11px] font-mono-code text-[#8C7A5E] mb-2 uppercase">The Layout Grid</div>
                <p className="font-body text-xs text-[#1A1208]/80 leading-normal">
                  Cut-and-paste editorial logic, double-rule broadsheet dividers, archival yellowing, and authoritative headlines.
                </p>
                <div className="mt-3 pt-2 border-t border-[#1A1208]/15 font-mono-code text-[10px] text-[#8C7A5E]">
                  Playfair + Source Serif
                </div>
              </div>

              {/* Layer 4: Watercolor */}
              <div className="bg-[#FAF6EC] border border-[#1A1208] p-4 relative paper-shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-8 h-8 rounded-full bg-[#C4A8D8] text-[#1A1208] font-mono-code font-bold flex items-center justify-center text-xs mb-3">
                  04
                </div>
                <h4 className="font-display font-bold text-base text-[#1A1208]">Watercolor</h4>
                <div className="text-[11px] font-mono-code text-[#936cb0] mb-2 uppercase">The Softness</div>
                <p className="font-body text-xs text-[#1A1208]/80 leading-normal">
                  Pigment fields that bleed and bloom organically into paper fibers rather than hard artificial digital vectors.
                </p>
                <div className="mt-3 pt-2 border-t border-[#1A1208]/15 font-mono-code text-[10px] text-[#8C7A5E]">
                  radial wash diffusion
                </div>
              </div>

              {/* Layer 5: Papercraft */}
              <div className="bg-[#FAF6EC] border border-[#1A1208] p-4 relative paper-shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-8 h-8 rounded-full bg-[#F0C620] text-[#1A1208] font-mono-code font-bold flex items-center justify-center text-xs mb-3">
                  05
                </div>
                <h4 className="font-display font-bold text-base text-[#1A1208]">Papercraft</h4>
                <div className="text-[11px] font-mono-code text-[#705602] mb-2 uppercase">The Depth</div>
                <p className="font-body text-xs text-[#1A1208]/80 leading-normal">
                  Folded crease shadows, deckle-edge torn borders, washi tape anchors, and tactile stamp depression.
                </p>
                <div className="mt-3 pt-2 border-t border-[#1A1208]/15 font-mono-code text-[10px] text-[#8C7A5E]">
                  torn edges + tape
                </div>
              </div>
            </div>

            {/* Handwritten Note Margin */}
            <div className="mt-8 pt-4 border-t border-dashed border-[#1A1208]/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-[#8C7A5E]">
              <span className="font-hand text-lg text-[#1A1208] font-bold">
                ✎ Note: "This is not a theme. It is a material philosophy of touch."
              </span>
              <span>MELODICBLOOM PRESS SPEC NO. 42</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
