import React, { useState } from 'react';
import { Copy, Check, Palette, Sparkles, Layers } from 'lucide-react';
import { COLOR_TOKENS, AuroraColorToken } from '../../data/tokens';
import { Tag } from '../ui/Tag';
import { Card } from '../ui/Card';
import { InkBlot } from '../ui/InkBlot';

export const ColorSystem: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<AuroraColorToken>(COLOR_TOKENS[3]); // Riso Red default
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Overprint Mixer State
  const [inkA, setInkA] = useState<string>('#E84040'); // Red
  const [inkB, setInkB] = useState<string>('#2D6BE4'); // Blue
  const [overlapPosition, setOverlapPosition] = useState<number>(50);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  return (
    <section id="colors" className="py-16 border-t-2 border-[#1A1208] max-w-7xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Organic Ink Bleed Spatters */}
      <div className="absolute top-8 right-6 pointer-events-none -z-10 opacity-70">
        <InkBlot variant="smear" color="riso-blue" size="lg" opacity={0.4} rotation={-8} seed={19} />
      </div>
      <div className="absolute bottom-16 -left-6 pointer-events-none -z-10 opacity-70">
        <InkBlot variant="droplet" color="riso-red" size="md" opacity={0.5} rotation={30} seed={71} />
      </div>

      {/* Broadsheet Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#1A1208]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Palette className="w-4 h-4 text-[#E84040]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
              Section 02 — Chromatographic Registry
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1208] uppercase">
            Ink Palette & Overprint Behavior
          </h2>
        </div>
        <p className="font-body text-sm text-[#1A1208]/80 max-w-md">
          Unlike RGB monitors that emit light, AURORA inks simulate physical vegetable soy pigments deposited onto unbleached fibers with organic overprint multiplication.
        </p>
      </div>

      {/* Swatches Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {COLOR_TOKENS.map((token) => {
          const isSelected = selectedToken.variable === token.variable;
          return (
            <div
              key={token.variable}
              onClick={() => setSelectedToken(token)}
              className={`
                cursor-pointer p-3 bg-[#FAF6EC] border-2 transition-all duration-150 relative paper-shadow-sm
                ${isSelected ? 'border-[#1A1208] scale-[1.02] shadow-[3px_4px_0px_#1A1208]' : 'border-[#1A1208]/30 hover:border-[#1A1208]'}
              `}
            >
              {/* Color Swatch Chip */}
              <div
                className="h-20 w-full mb-3 border border-[#1A1208]/40 relative overflow-hidden"
                style={{ backgroundColor: token.hex }}
              >
                {/* Halftone dot pattern on swatch */}
                <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />
                <span className="absolute bottom-1 right-1 font-mono-code text-[10px] bg-[#FAF6EC]/90 px-1 text-[#1A1208] border border-[#1A1208]/20">
                  {token.hex}
                </span>
              </div>

              {/* Swatch Metadata */}
              <div className="space-y-1">
                <div className="font-display font-bold text-sm text-[#1A1208] truncate">
                  {token.name}
                </div>
                <div className="font-mono-code text-[11px] text-[#8C7A5E] truncate">
                  {token.variable}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#1A1208]/15 text-[10px] font-mono-code">
                  <span className="capitalize text-[#8C7A5E]">{token.layer}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(token.hex, token.variable);
                    }}
                    className="p-1 hover:text-[#E84040]"
                    title="Copy Hex"
                  >
                    {copiedToken === token.variable ? (
                      <Check className="w-3 h-3 text-[#3DAA6B]" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Specimen & Overprint Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Selected Swatch Specimen Card */}
        <div className="lg:col-span-5 bg-[#FAF6EC] border-2 border-[#1A1208] p-6 paper-shadow-md relative">
          <div className="absolute -top-3 left-6 w-20 h-5 masking-tape rotate-[-2deg]" />
          
          <div className="flex items-center justify-between border-b border-[#1A1208]/20 pb-3 mb-4">
            <span className="font-mono-code text-xs uppercase text-[#8C7A5E]">
              Pigment Analysis Sheet
            </span>
            <Tag color="red" code="DOCK-04">
              Verified
            </Tag>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 border-2 border-[#1A1208] shadow-[2px_2px_0px_#1A1208] shrink-0"
              style={{ backgroundColor: selectedToken.hex }}
            />
            <div>
              <h3 className="font-display font-bold text-xl text-[#1A1208]">
                {selectedToken.name}
              </h3>
              <p className="font-mono-code text-xs text-[#8C7A5E]">
                {selectedToken.variable}
              </p>
            </div>
          </div>

          <p className="font-body text-sm text-[#1A1208]/85 mb-6 italic leading-relaxed">
            "{selectedToken.role}"
          </p>

          <div className="space-y-2 font-mono-code text-xs bg-[#F4EDD8] p-4 border border-[#1A1208]/30">
            <div className="flex justify-between">
              <span className="text-[#8C7A5E]">HEX VALUE:</span>
              <span className="font-bold text-[#1A1208]">{selectedToken.hex}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8C7A5E]">CMYK SPEC:</span>
              <span className="font-bold text-[#1A1208]">{selectedToken.cmyk}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8C7A5E]">PANTONE SPOT:</span>
              <span className="font-bold text-[#1A1208]">{selectedToken.pantone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8C7A5E]">LAYER CLASS:</span>
              <span className="font-bold text-[#E84040] uppercase">{selectedToken.layer}</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => handleCopy(`var(${selectedToken.variable})`, 'css-var')}
              className="flex-1 py-2 px-3 border border-[#1A1208] font-mono-code text-xs bg-[#FAF6EC] hover:bg-[#F4EDD8] flex items-center justify-center gap-1.5 cursor-pointer active:translate-y-0.5"
            >
              {copiedToken === 'css-var' ? <Check className="w-3.5 h-3.5 text-[#3DAA6B]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy CSS Var</span>
            </button>
            <button
              onClick={() => handleCopy(selectedToken.hex, 'hex-val')}
              className="flex-1 py-2 px-3 border border-[#1A1208] font-mono-code text-xs bg-[#1A1208] text-[#FAF6EC] hover:bg-[#2c1f0f] flex items-center justify-center gap-1.5 cursor-pointer active:translate-y-0.5"
            >
              {copiedToken === 'hex-val' ? <Check className="w-3.5 h-3.5 text-[#3DAA6B]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy Hex</span>
            </button>
          </div>
        </div>

        {/* Right: Interactive Overprint Multiplication Laboratory */}
        <div className="lg:col-span-7 bg-[#FAF6EC] border-2 border-[#1A1208] p-6 paper-shadow-md">
          <div className="flex items-center justify-between border-b border-[#1A1208]/20 pb-3 mb-4">
            <div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
                Laboratory Experiment
              </span>
              <h3 className="font-display font-bold text-xl text-[#1A1208]">
                Optical Risograph Overprint Simulator
              </h3>
            </div>
            <Tag color="blue" code="PHYSICS">
              Multiply Blend
            </Tag>
          </div>

          <p className="font-body text-xs text-[#1A1208]/80 mb-6">
            In physical Risograph printing, drums do not lay opaque colors over one another. Transparent soy ink layers optically multiply on the newsprint fibers to yield a third compound tint.
          </p>

          {/* Drum Selector Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="font-mono-code text-xs text-[#8C7A5E] block mb-1.5">
                DRUM 01 (BASE INK):
              </label>
              <div className="flex gap-1.5">
                {[
                  { name: 'Red', hex: '#E84040' },
                  { name: 'Blue', hex: '#2D6BE4' },
                  { name: 'Yellow', hex: '#F0C620' },
                  { name: 'Green', hex: '#3DAA6B' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setInkA(item.hex)}
                    className={`w-7 h-7 border-2 transition-transform cursor-pointer ${
                      inkA === item.hex ? 'border-[#1A1208] scale-110 shadow-[1px_1px_0px_#1A1208]' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: item.hex }}
                    title={item.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="font-mono-code text-xs text-[#8C7A5E] block mb-1.5">
                DRUM 02 (OVERPRINT INK):
              </label>
              <div className="flex gap-1.5">
                {[
                  { name: 'Blue', hex: '#2D6BE4' },
                  { name: 'Red', hex: '#E84040' },
                  { name: 'Yellow', hex: '#F0C620' },
                  { name: 'Green', hex: '#3DAA6B' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setInkB(item.hex)}
                    className={`w-7 h-7 border-2 transition-transform cursor-pointer ${
                      inkB === item.hex ? 'border-[#1A1208] scale-110 shadow-[1px_1px_0px_#1A1208]' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: item.hex }}
                    title={item.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Visual Canvas of Overlap */}
          <div className="relative h-44 bg-[#F4EDD8] border border-[#1A1208]/30 overflow-hidden flex items-center justify-center p-4">
            {/* Halftone paper texture */}
            <div className="absolute inset-0 halftone-dots opacity-25 pointer-events-none" />

            {/* Circle Drum A */}
            <div
              className="absolute w-32 h-32 rounded-full transition-all duration-300"
              style={{
                backgroundColor: inkA,
                left: `calc(50% - 70px + ${(overlapPosition - 50) * -0.8}px)`,
                mixBlendMode: 'multiply',
                opacity: 0.88,
              }}
            />

            {/* Circle Drum B */}
            <div
              className="absolute w-32 h-32 rounded-full transition-all duration-300"
              style={{
                backgroundColor: inkB,
                left: `calc(50% - 20px + ${(overlapPosition - 50) * 0.8}px)`,
                mixBlendMode: 'multiply',
                opacity: 0.88,
              }}
            />

            {/* Center Overlap Callout Tag */}
            <div className="absolute bottom-2 font-mono-code text-[10px] bg-[#FAF6EC]/90 px-2 py-0.5 border border-[#1A1208]/30 z-20">
              Compound Overprint Zone (mix-blend-mode: multiply)
            </div>
          </div>

          {/* Slider for Registration Offset */}
          <div className="mt-4">
            <div className="flex justify-between text-xs font-mono-code text-[#8C7A5E] mb-1">
              <span>DRUM DISPLACEMENT / OVERLAP:</span>
              <span className="font-bold text-[#1A1208]">{overlapPosition}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={overlapPosition}
              onChange={(e) => setOverlapPosition(Number(e.target.value))}
              className="w-full accent-[#E84040] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
