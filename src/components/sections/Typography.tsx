import React, { useState } from 'react';
import { Type, Sparkles, Feather, FileText } from 'lucide-react';
import { TYPE_TOKENS } from '../../data/tokens';
import { Tag } from '../ui/Tag';
import { InkBlot } from '../ui/InkBlot';

export const Typography: React.FC = () => {
  const [customText, setCustomText] = useState<string>(
    'The physical impression of metal and woodblock letters into wet rag paper.'
  );

  return (
    <section id="typography" className="py-16 border-t-2 border-[#1A1208] max-w-7xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Organic Ink Bleed Spatter */}
      <div className="absolute top-12 left-1/3 pointer-events-none -z-10 opacity-60">
        <InkBlot variant="smear" color="riso-violet" size="md" opacity={0.35} rotation={12} seed={33} />
      </div>
      <div className="absolute bottom-20 right-6 pointer-events-none -z-10 opacity-70">
        <InkBlot variant="splatter" color="ink" size="sm" opacity={0.4} rotation={-40} seed={99} />
      </div>

      {/* Broadsheet Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#1A1208]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Type className="w-4 h-4 text-[#2D6BE4]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
              Section 03 — Typographic Matrix
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1208] uppercase">
            Four Font Voices & Hierarchy
          </h2>
        </div>
        <p className="font-body text-sm text-[#1A1208]/80 max-w-md">
          Typography in AURORA mirrors the dual nature of analog publishing: high-authority lead headlines paired with raw monospace printer instructions and personal marginal notes.
        </p>
      </div>

      {/* Live Custom Text Tester */}
      <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-4 sm:p-6 mb-12 paper-shadow-md relative">
        <div className="absolute -top-3 right-6 w-24 h-5 masking-tape rotate-[1deg]" />
        
        <label className="font-mono-code text-xs uppercase text-[#8C7A5E] block mb-2 font-bold">
          ⌨ Live Type Specimen Input — Test Your Copy:
        </label>
        <input
          type="text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          className="w-full bg-[#F4EDD8] border border-[#1A1208] px-4 py-2.5 font-body text-base text-[#1A1208] focus:outline-none focus:ring-2 focus:ring-[#E84040]"
          placeholder="Enter text to preview across all AURORA typefaces..."
        />
      </div>

      {/* 4 Type Families Specimen Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* 1. Display: Playfair Display */}
        <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-6 paper-shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-[#1A1208]/20 pb-3">
            <div>
              <span className="font-mono-code text-[11px] text-[#E84040] uppercase font-bold">
                01. Display & Headline
              </span>
              <h3 className="font-display font-black text-xl text-[#1A1208]">
                Playfair Display
              </h3>
            </div>
            <Tag color="red" code="700/900">
              Broadsheet
            </Tag>
          </div>
          <div className="bg-[#F4EDD8] p-4 border border-[#1A1208]/20 min-h-[110px] flex items-center">
            <p className="font-display font-black text-2xl sm:text-3xl text-[#1A1208] leading-tight">
              {customText || 'THE BROADSHEET REGISTER'}
            </p>
          </div>
          <div className="font-mono-code text-xs text-[#8C7A5E] space-y-1">
            <p>• Usage: Broadsheet mastheads, authoritative titles, poster hero copy</p>
            <p>• CSS: font-display / 'Playfair Display', Georgia, serif</p>
          </div>
        </div>

        {/* 2. Body: Source Serif 4 */}
        <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-6 paper-shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-[#1A1208]/20 pb-3">
            <div>
              <span className="font-mono-code text-[11px] text-[#2D6BE4] uppercase font-bold">
                02. Editorial Body
              </span>
              <h3 className="font-display font-black text-xl text-[#1A1208]">
                Source Serif 4
              </h3>
            </div>
            <Tag color="blue" code="400/600">
              Newsprint
            </Tag>
          </div>
          <div className="bg-[#F4EDD8] p-4 border border-[#1A1208]/20 min-h-[110px] flex items-center">
            <p className="font-body text-base text-[#1A1208] leading-relaxed">
              {customText || 'Ink deposited upon 120gsm unbleached rag paper creates subtle capillary bleeding along fiber directions.'}
            </p>
          </div>
          <div className="font-mono-code text-xs text-[#8C7A5E] space-y-1">
            <p>• Usage: Long-form reading, multi-column editorial essays, article prose</p>
            <p>• CSS: font-body / 'Source Serif 4', Georgia, serif</p>
          </div>
        </div>

        {/* 3. Label: DM Mono */}
        <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-6 paper-shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-[#1A1208]/20 pb-3">
            <div>
              <span className="font-mono-code text-[11px] text-[#3DAA6B] uppercase font-bold">
                03. Technical Label & Code
              </span>
              <h3 className="font-display font-black text-xl text-[#1A1208]">
                DM Mono
              </h3>
            </div>
            <Tag color="green" code="400/500">
              Plate Mark
            </Tag>
          </div>
          <div className="bg-[#F4EDD8] p-4 border border-[#1A1208]/20 min-h-[110px] flex items-center">
            <p className="font-mono-code text-sm text-[#1A1208] tracking-wider uppercase">
              {customText || 'EDITION 084/500 • DRUM: DR04-BLUE • REG: 0.15mm'}
            </p>
          </div>
          <div className="font-mono-code text-xs text-[#8C7A5E] space-y-1">
            <p>• Usage: Captions, printer specs, registration coordinates, buttons</p>
            <p>• CSS: font-mono-code / 'DM Mono', monospace</p>
          </div>
        </div>

        {/* 4. Accent: Caveat */}
        <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-6 paper-shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-[#1A1208]/20 pb-3">
            <div>
              <span className="font-mono-code text-[11px] text-[#F0C620] uppercase font-bold">
                04. Handwritten Annotation
              </span>
              <h3 className="font-display font-black text-xl text-[#1A1208]">
                Caveat
              </h3>
            </div>
            <Tag color="yellow" code="700">
              Hand-Lettered
            </Tag>
          </div>
          <div className="bg-[#F4EDD8] p-4 border border-[#1A1208]/20 min-h-[110px] flex items-center">
            <p className="font-hand text-2xl sm:text-3xl text-[#1A1208] font-bold">
              {customText || 'Check registration before final press pull — ink is running sweet today!'}
            </p>
          </div>
          <div className="font-mono-code text-xs text-[#8C7A5E] space-y-1">
            <p>• Usage: Editor marginalia, tape captions, stamps, spontaneous notes</p>
            <p>• CSS: font-hand / 'Caveat', cursive</p>
          </div>
        </div>
      </div>

      {/* Broadsheet Type Scale Sample */}
      <div className="border-t border-[#1A1208] pt-8">
        <h3 className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E] mb-6">
          Scalable Broadsheet Hierarchy Ladder
        </h3>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#1A1208]/20 pb-3 gap-2">
            <span className="font-mono-code text-xs text-[#8C7A5E] w-32 shrink-0">DISPLAY 4XL</span>
            <span className="font-display font-black text-4xl text-[#1A1208]">The Morning Gazette & Press</span>
            <span className="font-mono-code text-xs text-[#8C7A5E]">36px / 2.25rem</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#1A1208]/20 pb-3 gap-2">
            <span className="font-mono-code text-xs text-[#8C7A5E] w-32 shrink-0">HEADLINE 2XL</span>
            <span className="font-display font-bold text-2xl text-[#1A1208]">Five Material Aesthetics for the Digital Surface</span>
            <span className="font-mono-code text-xs text-[#8C7A5E]">24px / 1.5rem</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#1A1208]/20 pb-3 gap-2">
            <span className="font-mono-code text-xs text-[#8C7A5E] w-32 shrink-0">BODY SERIF LG</span>
            <span className="font-body text-lg text-[#1A1208]/90">Every token is derived from asking: what would this feel like to touch?</span>
            <span className="font-mono-code text-xs text-[#8C7A5E]">18px / 1.125rem</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#1A1208]/20 pb-3 gap-2">
            <span className="font-mono-code text-xs text-[#8C7A5E] w-32 shrink-0">MONO LABEL SM</span>
            <span className="font-mono-code text-xs text-[#1A1208] uppercase tracking-wider">PLATE-401 • MUNKEN 120GSM • DRUM RISO-RED</span>
            <span className="font-mono-code text-xs text-[#8C7A5E]">12px / 0.75rem</span>
          </div>
        </div>
      </div>
    </section>
  );
};
