import React from 'react';
import { BookOpen, Feather, Bookmark, Quote } from 'lucide-react';
import { Tag } from '../ui/Tag';
import { Card } from '../ui/Card';
import { InkBlot } from '../ui/InkBlot';

export const Journal: React.FC = () => {
  return (
    <section id="journal" className="py-16 border-t-2 border-[#1A1208] max-w-7xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Editorial Ink Blot Spill in Margin */}
      <div className="absolute top-16 right-4 sm:right-16 pointer-events-none -z-10 opacity-70">
        <InkBlot variant="droplet" color="ink" size="lg" opacity={0.4} rotation={-25} seed={56} />
      </div>
      <div className="absolute bottom-10 left-6 pointer-events-none -z-10 opacity-60">
        <InkBlot variant="splatter" color="riso-red" size="sm" opacity={0.35} rotation={15} seed={78} />
      </div>

      {/* Broadsheet Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#1A1208]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-4 h-4 text-[#8C7A5E]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
              Section 06 — The Editorial Dispatch
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1208] uppercase">
            The Theory of the Imperfect Print
          </h2>
        </div>
        <div className="font-mono-code text-xs text-[#8C7A5E]">
          ESSAY BY MELODICBLOOM • FOLIO VII
        </div>
      </div>

      {/* Broadsheet Multi-Column Layout */}
      <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-6 sm:p-10 paper-shadow-lg relative">
        <div className="absolute -top-3 left-1/3 w-28 h-6 masking-tape rotate-[-1deg]" />

        {/* Article Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 pb-8 border-b-2 border-double border-[#1A1208]">
          <div className="inline-block mb-3">
            <Tag color="red" code="MANIFESTO" perforated>
              Material Philosophy
            </Tag>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-5xl text-[#1A1208] leading-tight mb-4">
            Why Every Flat Screen Desperately Craves Physical Friction
          </h3>
          <p className="font-display italic text-lg sm:text-xl text-[#8C7A5E]">
            "When software stripped away paper grain, fold lines, and pigment bleed, it also stripped away the human memory of physical work."
          </p>
        </div>

        {/* 3-Column Broadsheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#1A1208] leading-relaxed text-sm">
          {/* Column 1 */}
          <div className="space-y-4">
            <p className="font-body text-base first-letter:text-5xl first-letter:font-display first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-[#E84040]">
              Digital interfaces spent twenty years pursuing an asymptote of absolute optical sterility. Vectors became infinitely crisp, surfaces became glass-smooth, and gradients blended along sterile floating-point linear math without a trace of ink drag or capillary absorption.
            </p>
            <p className="font-body">
              Yet when we hold an archival broadsheet or a Risograph zine pulled by hand on an ink-stained drum, our fingers register tooth. The eye lingers on the slight misregistration where scarlet red overlaps navy blue, revealing the speed of the mechanical cylinder.
            </p>
            <div className="p-3 bg-[#F4EDD8] border-l-2 border-[#E84040] font-mono-code text-xs text-[#8C7A5E]">
              "Lithography: the stone remembers. Risograph: the ink decides where it lands."
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <p className="font-body">
              Collage is not merely decoration; it is an epistemological stance. In newspaper collage, the archive is reorganized, not erased. Past editions, lead weights, and halftone screens persist underneath the fresh layer of morning headlines.
            </p>
            
            {/* Pull Quote Box */}
            <div className="border-2 border-[#1A1208] p-4 bg-[#FAF6EC] paper-shadow-sm my-6 rotate-[0.5deg]">
              <Quote className="w-5 h-5 text-[#2D6BE4] mb-2" />
              <p className="font-display font-bold text-base text-[#1A1208] italic">
                "AURORA asks: what would this interface feel like if you could pick it up off the desk, crease it down the center, and slip it into your coat pocket?"
              </p>
            </div>

            <p className="font-body">
              Watercolor adds the softness layer. Gradient fields bloom outward with capillary irregularity rather than robotic CSS linear-gradient easing curves. Hover states feel like wet pigment spreading through cotton rag.
            </p>
          </div>

          {/* Column 3: Marginalia and Assemblage */}
          <div className="space-y-4">
            <p className="font-body">
              Papercraft assemblage gives the digital surface dimensionality without resorting to sterile corporate drop-shadows. Shadows are folded, diagonal, and tactile—mimicking the subtle lift of a card corner taped to a drawing board.
            </p>

            {/* Hand-annotated Sticky Note */}
            <div className="bg-[#FAF6EC] border border-[#1A1208] p-4 paper-shadow-md rotate-[-2deg] relative my-6">
              <span className="font-mono-code text-[10px] text-[#8C7A5E] uppercase block mb-1">
                EDITOR'S MARGINAL NOTE:
              </span>
              <p className="font-hand text-xl text-[#1A1208] leading-tight font-bold">
                "Make sure every button feels stamped with hot metal. No pills. No sterile gloss. Only physical impression."
              </p>
              <div className="text-right font-hand text-sm text-[#E84040] mt-1">
                — M.B., Lead Typesetter
              </div>
            </div>

            <p className="font-body text-xs text-[#8C7A5E]">
              By unifying all five layers under a coherent set of tokens, AURORA provides a foundation that is archival, tactile, and thoroughly contemporary.
            </p>
          </div>
        </div>

        {/* Article Footer Colophon */}
        <div className="mt-10 pt-6 border-t border-[#1A1208]/30 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#8C7A5E]">
          <div className="flex items-center gap-2">
            <span>PRINT CODE: ART-702</span>
            <span>•</span>
            <span>COLUMN REGISTER: BALANCED</span>
          </div>
          <div className="text-[#1A1208] font-bold">
            END OF DISPATCH ❦
          </div>
        </div>
      </div>
    </section>
  );
};
