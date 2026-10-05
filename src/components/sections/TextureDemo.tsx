import React, { useState, useEffect } from 'react';
import { Sliders, RotateCcw, Copy, Check, Eye, Layers } from 'lucide-react';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';

interface TextureDemoProps {
  grainIntensity: number;
  setGrainIntensity: (val: number) => void;
}

export const TextureDemo: React.FC<TextureDemoProps> = ({
  grainIntensity,
  setGrainIntensity,
}) => {
  const [misregX, setMisregX] = useState<number>(1.8);
  const [misregY, setMisregY] = useState<number>(-1.2);
  const [halftoneScale, setHalftoneScale] = useState<number>(8);
  const [paperAging, setPaperAging] = useState<number>(5); // 0 to 15%
  const [copiedCSS, setCopiedCSS] = useState(false);

  // Sync to root CSS custom properties
  useEffect(() => {
    document.documentElement.style.setProperty('--grain', grainIntensity.toString());
    document.documentElement.style.setProperty('--misregistration-x', `${misregX}px`);
    document.documentElement.style.setProperty('--misregistration-y', `${misregY}px`);
  }, [grainIntensity, misregX, misregY]);

  const handleReset = () => {
    setGrainIntensity(0.45);
    setMisregX(1.5);
    setMisregY(-1.0);
    setHalftoneScale(8);
    setPaperAging(5);
  };

  const handleCopyVariables = () => {
    const cssCode = `:root {
  --grain: ${grainIntensity.toFixed(2)};
  --misregistration-x: ${misregX.toFixed(1)}px;
  --misregistration-y: ${misregY.toFixed(1)}px;
  --halftone-size: ${halftoneScale}px;
}`;
    navigator.clipboard.writeText(cssCode);
    setCopiedCSS(true);
    setTimeout(() => setCopiedCSS(false), 2000);
  };

  return (
    <section id="studio" className="py-16 border-t-2 border-[#1A1208] max-w-7xl mx-auto px-4 sm:px-6">
      {/* Broadsheet Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#1A1208]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sliders className="w-4 h-4 text-[#F0C620]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
              Section 05 — Analog Press Calibration
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1208] uppercase">
            Live Grain & Misregistration Studio
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            leadIcon={<RotateCcw className="w-3.5 h-3.5" />}
            onClick={handleReset}
          >
            Reset Defaults
          </Button>
          <Button
            variant="riso-red"
            size="sm"
            leadIcon={copiedCSS ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            onClick={handleCopyVariables}
          >
            {copiedCSS ? 'Copied CSS!' : 'Copy CSS Variables'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-5 bg-[#FAF6EC] border-2 border-[#1A1208] p-6 paper-shadow-md space-y-6">
          <div className="border-b border-[#1A1208]/20 pb-3">
            <span className="font-mono-code text-xs text-[#8C7A5E] uppercase font-bold">
              Press Mechanical Tolerances
            </span>
            <h3 className="font-display font-bold text-xl text-[#1A1208]">
              Surface & Ink Parameters
            </h3>
          </div>

          {/* Slider 1: Grain Intensity */}
          <div>
            <div className="flex justify-between font-mono-code text-xs mb-1.5">
              <span className="text-[#1A1208] font-bold">--grain Intensity (Stone Tooth):</span>
              <span className="text-[#E84040] font-mono-code">{grainIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={grainIntensity}
              onChange={(e) => setGrainIntensity(parseFloat(e.target.value))}
              className="w-full accent-[#E84040] cursor-pointer"
            />
            <span className="font-mono-code text-[10px] text-[#8C7A5E] block mt-1">
              0.0 = Glass / Sterile digital · 0.45 = Authentic rag · 1.0 = Heavy stone litho
            </span>
          </div>

          {/* Slider 2: Misregistration Offset X */}
          <div>
            <div className="flex justify-between font-mono-code text-xs mb-1.5">
              <span className="text-[#1A1208] font-bold">Misregistration X-Axis (Drum Drift):</span>
              <span className="text-[#2D6BE4] font-mono-code">{misregX > 0 ? `+${misregX}` : misregX}px</span>
            </div>
            <input
              type="range"
              min="-6"
              max="6"
              step="0.5"
              value={misregX}
              onChange={(e) => setMisregX(parseFloat(e.target.value))}
              className="w-full accent-[#2D6BE4] cursor-pointer"
            />
            <span className="font-mono-code text-[10px] text-[#8C7A5E] block mt-1">
              Simulates paper feeder belt skew on high-speed drum passes
            </span>
          </div>

          {/* Slider 3: Misregistration Offset Y */}
          <div>
            <div className="flex justify-between font-mono-code text-xs mb-1.5">
              <span className="text-[#1A1208] font-bold">Misregistration Y-Axis:</span>
              <span className="text-[#2D6BE4] font-mono-code">{misregY > 0 ? `+${misregY}` : misregY}px</span>
            </div>
            <input
              type="range"
              min="-6"
              max="6"
              step="0.5"
              value={misregY}
              onChange={(e) => setMisregY(parseFloat(e.target.value))}
              className="w-full accent-[#2D6BE4] cursor-pointer"
            />
          </div>

          {/* Slider 4: Halftone Screen Pitch */}
          <div>
            <div className="flex justify-between font-mono-code text-xs mb-1.5">
              <span className="text-[#1A1208] font-bold">Halftone Screen Pitch:</span>
              <span className="text-[#3DAA6B] font-mono-code">{halftoneScale}px</span>
            </div>
            <input
              type="range"
              min="4"
              max="16"
              step="1"
              value={halftoneScale}
              onChange={(e) => setHalftoneScale(parseInt(e.target.value))}
              className="w-full accent-[#3DAA6B] cursor-pointer"
            />
          </div>
        </div>

        {/* Live Visual Specimen Proof Sheet */}
        <div className="lg:col-span-7 bg-[#FAF6EC] border-2 border-[#1A1208] p-6 sm:p-8 paper-shadow-lg relative overflow-hidden">
          <div className="absolute top-2 right-3 font-mono-code text-[10px] text-[#8C7A5E] uppercase border border-[#8C7A5E]/40 px-2 py-0.5">
            CALIBRATION TARGET #77
          </div>

          <div className="mb-6">
            <span className="font-mono-code text-xs text-[#8C7A5E] uppercase tracking-wider block">
              Live Printing Cylinder Proof
            </span>
            <h3 className="font-display font-black text-2xl text-[#1A1208]">
              Visual Response to Current Tolerances
            </h3>
          </div>

          {/* Misregistration Sample Card */}
          <div className="bg-[#F4EDD8] border border-[#1A1208] p-6 mb-6 relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(rgba(26, 18, 8, 0.15) 1px, transparent 1px)`,
                backgroundSize: `${halftoneScale}px ${halftoneScale}px`,
              }}
            />

            {/* Simulated Two-Drum Offset Headline */}
            <div className="relative select-none py-4 text-center">
              {/* Cyan/Blue Drum Ghost */}
              <div
                className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider absolute inset-0 flex items-center justify-center pointer-events-none text-[#2D6BE4] opacity-85"
                style={{
                  transform: `translate(${misregX}px, ${misregY}px)`,
                  mixBlendMode: 'multiply',
                }}
              >
                LITHOGRAPHIC TOOTH
              </div>

              {/* Red Drum Ghost */}
              <div
                className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider absolute inset-0 flex items-center justify-center pointer-events-none text-[#E84040] opacity-85"
                style={{
                  transform: `translate(${-misregX * 0.7}px, ${-misregY * 0.7}px)`,
                  mixBlendMode: 'multiply',
                }}
              >
                LITHOGRAPHIC TOOTH
              </div>

              {/* Base Ink Primary */}
              <div
                className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-[#1A1208] relative z-10 opacity-90"
                style={{ mixBlendMode: 'multiply' }}
              >
                LITHOGRAPHIC TOOTH
              </div>
            </div>

            <p className="font-body text-xs text-center text-[#1A1208]/80 mt-2 italic">
              Notice the chromatic fringing along letterforms when misregistration is dialed away from zero.
            </p>
          </div>

          {/* Microscopic Fiber Inspection Frame */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FAF6EC] border border-[#1A1208]/40 p-4">
              <span className="font-mono-code text-[11px] text-[#8C7A5E] uppercase block mb-1">
                FIBER RESISTANCE:
              </span>
              <div className="font-mono-code text-sm font-bold text-[#1A1208]">
                {grainIntensity > 0.6 ? 'HEAVY COLD-PRESS' : 'SMOOTH LINEN RAG'}
              </div>
              <div className="mt-2 h-2 bg-[#8C7A5E]/20 overflow-hidden">
                <div
                  className="h-full bg-[#E84040] transition-all"
                  style={{ width: `${grainIntensity * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-[#FAF6EC] border border-[#1A1208]/40 p-4">
              <span className="font-mono-code text-[11px] text-[#8C7A5E] uppercase block mb-1">
                REGISTRATION QUALITY:
              </span>
              <div className="font-mono-code text-sm font-bold text-[#1A1208]">
                {Math.abs(misregX) < 1.0 && Math.abs(misregY) < 1.0 ? 'PRECISION ALIGNED' : 'ACCIDENTAL CHARM'}
              </div>
              <div className="mt-2 font-mono-code text-xs text-[#8C7A5E]">
                Δ {(Math.sqrt(misregX * misregX + misregY * misregY)).toFixed(2)} mm
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
