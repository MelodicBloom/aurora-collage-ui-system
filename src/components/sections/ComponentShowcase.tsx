import React, { useState } from 'react';
import { Scissors, Copy, Check, Sparkles, Sliders, ExternalLink, Bookmark, CheckSquare, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { Divider } from '../ui/Divider';
import { InkBlot } from '../ui/InkBlot';
import { COMPONENTS_CATALOG } from '../../data/components';

export const ComponentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Actions' | 'Surfaces' | 'Editorial'>('All');
  const [stampCount, setStampCount] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form Controls Demo State
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [inputValue, setInputValue] = useState('Archival Proof Edition #042');
  const [selectedTagColor, setSelectedTagColor] = useState<'red' | 'blue' | 'yellow' | 'green'>('red');

  // Interactive InkBlot Playground State
  const [blotVariant, setBlotVariant] = useState<'droplet' | 'splatter' | 'smear' | 'pooling' | 'bleed'>('splatter');
  const [blotColor, setBlotColor] = useState<'ink' | 'riso-red' | 'riso-blue' | 'riso-violet' | 'riso-sage' | 'riso-ochre'>('riso-red');
  const [blotSize, setBlotSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');
  const [blotAnimKey, setBlotAnimKey] = useState<number>(0);
  const [blotAnimated, setBlotAnimated] = useState<boolean>(true);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const filteredCatalog = activeCategory === 'All'
    ? COMPONENTS_CATALOG
    : COMPONENTS_CATALOG.filter((c) => c.category === activeCategory);

  return (
    <section id="showcase" className="py-16 border-t-2 border-[#1A1208] max-w-7xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Organic Stamp Ink Over-Inking Splatter */}
      <div className="absolute top-10 right-10 pointer-events-none -z-10 opacity-70">
        <InkBlot variant="splatter" color="riso-red" size="md" opacity={0.4} rotation={-15} seed={44} />
      </div>
      <div className="absolute bottom-24 -left-8 pointer-events-none -z-10 opacity-70">
        <InkBlot variant="droplet" color="riso-ochre" size="lg" opacity={0.35} rotation={60} seed={101} />
      </div>

      {/* Broadsheet Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#1A1208]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Scissors className="w-4 h-4 text-[#E84040]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
              Section 04 — Component Laboratory
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1208] uppercase">
            Tactile Component Catalog
          </h2>
        </div>
        <p className="font-body text-sm text-[#1A1208]/80 max-w-md">
          Every component reacts like physical printed matter: buttons depress with rubber stamp displacement, cards stack like layered rag paper, and tags carry perforated edges.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#1A1208]/20">
        {(['All', 'Actions', 'Surfaces', 'Editorial'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              font-mono-code text-xs px-4 py-2 border transition-all cursor-pointer
              ${
                activeCategory === cat
                  ? 'bg-[#1A1208] text-[#FAF6EC] border-[#1A1208] shadow-[2px_2px_0px_#8C7A5E]'
                  : 'bg-[#FAF6EC] text-[#1A1208] border-[#1A1208]/30 hover:border-[#1A1208]'
              }
            `}
          >
            {cat.toUpperCase()} SPECIMENS
          </button>
        ))}
      </div>

      {/* Interactive Live Playground: Buttons & Stamp Press */}
      {(activeCategory === 'All' || activeCategory === 'Actions') && (
        <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-6 sm:p-8 mb-12 paper-shadow-md">
          <div className="flex items-center justify-between border-b border-[#1A1208]/20 pb-3 mb-6">
            <div>
              <span className="font-mono-code text-xs text-[#E84040] uppercase font-bold">
                Interactive Specimen
              </span>
              <h3 className="font-display font-bold text-2xl text-[#1A1208]">
                StampPress Button Variants & Feedback
              </h3>
            </div>
            <div className="font-mono-code text-xs bg-[#F4EDD8] border border-[#1A1208] px-3 py-1">
              Press Impressions: <span className="font-bold text-[#E84040]">{stampCount}</span>
            </div>
          </div>

          <p className="font-body text-sm text-[#1A1208]/80 mb-6">
            Click on buttons below to observe the physical wooden rubber-stamp depression physics.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Button
              variant="riso-red"
              onClick={() => setStampCount((c) => c + 1)}
            >
              Riso Red Stamp
            </Button>
            <Button
              variant="riso-blue"
              onClick={() => setStampCount((c) => c + 1)}
            >
              Riso Marine Blue
            </Button>
            <Button
              variant="riso-green"
              onClick={() => setStampCount((c) => c + 1)}
            >
              Pine Green
            </Button>
            <Button
              variant="riso-yellow"
              onClick={() => setStampCount((c) => c + 1)}
            >
              Sunflower Yellow
            </Button>
            <Button
              variant="ink"
              onClick={() => setStampCount((c) => c + 1)}
            >
              Deep Ink Black
            </Button>
            <Button
              variant="ticket"
              onClick={() => setStampCount((c) => c + 1)}
            >
              Perforated Ticket
            </Button>
            <Button
              variant="outline"
              onClick={() => setStampCount((c) => c + 1)}
            >
              Double Outline
            </Button>
          </div>

          {/* Code snippet */}
          <div className="bg-[#1A1208] text-[#F4EDD8] p-4 font-mono-code text-xs rounded-none border border-[#1A1208] relative">
            <span className="text-[#8C7A5E] select-none block mb-1">{'// JSX StampPress Usage'}</span>
            <code>{`<Button variant="riso-red" size="md" stampBorder>
  Pull Proof No. 1
</Button>`}</code>
            <button
              onClick={() => handleCopyCode('<Button variant="riso-red" size="md" stampBorder>Pull Proof No. 1</Button>', 'btn-sample')}
              className="absolute top-3 right-3 text-[#8C7A5E] hover:text-[#FAF6EC]"
            >
              {copiedId === 'btn-sample' ? <Check className="w-4 h-4 text-[#3DAA6B]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}

      {/* Interactive Live Playground: Cards, Tape & Torn Edges */}
      {(activeCategory === 'All' || activeCategory === 'Surfaces') && (
        <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-6 sm:p-8 mb-12 paper-shadow-md">
          <div className="border-b border-[#1A1208]/20 pb-3 mb-6">
            <span className="font-mono-code text-xs text-[#2D6BE4] uppercase font-bold">
              Surfaces & Layering
            </span>
            <h3 className="font-display font-bold text-2xl text-[#1A1208]">
              Layered Papercraft Cards & Washi Tape
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Card 1: Raised with Washi Tape */}
            <Card elevation="raised" tapeAccent="top" stampCode="PLATE-01">
              <h4 className="font-display font-bold text-lg text-[#1A1208] mt-2 mb-2">
                Archival Ledger Card
              </h4>
              <p className="font-body text-xs text-[#1A1208]/80 leading-relaxed mb-4">
                Anchored with a simulated translucent masking tape strip at a slight -1.5° manual desk angle.
              </p>
              <Tag color="blue" code="M-102">
                Field Note
              </Tag>
            </Card>

            {/* Card 2: Stacked Multi-ply */}
            <Card elevation="stacked" tapeAccent="corner" stampCode="PROOF-08">
              <h4 className="font-display font-bold text-lg text-[#1A1208] mt-2 mb-2">
                Multi-Ply Board Stack
              </h4>
              <p className="font-body text-xs text-[#1A1208]/80 leading-relaxed mb-4">
                Features pseudo-element underlay simulating stacked sheets of 300gsm cotton rag printing stock.
              </p>
              <Tag color="red" code="DOCKET">
                Overprint
              </Tag>
            </Card>

            {/* Card 3: Torn Deckle Edge */}
            <Card elevation="lift" tornEdge="bottom" paperTint="newsprint" stampCode="TORN-03">
              <h4 className="font-display font-bold text-lg text-[#1A1208] mb-2">
                Torn Deckle Bottom
              </h4>
              <p className="font-body text-xs text-[#1A1208]/80 leading-relaxed mb-4">
                SVG polygon clip path creates authentic torn fiber paper edges along the bottom margin.
              </p>
              <Tag color="green" code="DECKLE">
                Fiber Rag
              </Tag>
            </Card>
          </div>

          {/* Dedicated Wet-on-Dry InkBlot Laboratory Card */}
          <div className="mt-8 pt-6 border-t border-[#1A1208]/20 bg-[#FAF6EC] p-6 border border-[#1A1208]/30 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="font-mono-code text-[11px] uppercase font-bold text-[#E84040]">
                  SVG CAPILLARY DISPLACEMENT FILTER
                </span>
                <h4 className="font-display font-bold text-xl text-[#1A1208]">
                  Wet-on-Dry InkBlot Playground
                </h4>
              </div>
              <Tag color="violet" code="SVG-FILTER">
                FeTurbulence + FeDisplacement
              </Tag>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Controls */}
              <div className="md:col-span-6 space-y-4 font-mono-code text-xs">
                {/* Variant Selector */}
                <div>
                  <label className="text-[#8C7A5E] uppercase block mb-1.5 font-bold">
                    Ink Profile Variant:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {(['droplet', 'splatter', 'smear', 'pooling', 'bleed'] as const).map((v) => (
                      <button
                        key={v}
                        onClick={() => setBlotVariant(v)}
                        className={`px-2.5 py-1 border uppercase text-[11px] cursor-pointer transition-colors ${
                          blotVariant === v
                            ? 'bg-[#1A1208] text-[#FAF6EC] border-[#1A1208] font-bold'
                            : 'bg-[#F4EDD8] text-[#1A1208] border-[#1A1208]/30 hover:border-[#1A1208]'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selector */}
                <div>
                  <label className="text-[#8C7A5E] uppercase block mb-1.5 font-bold">
                    Soy Pigment Color:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: 'riso-red', name: 'Scarlet', hex: '#E04F4F' },
                      { key: 'riso-blue', name: 'Marine', hex: '#2D6BE4' },
                      { key: 'riso-violet', name: 'Indigo', hex: '#5E4B8B' },
                      { key: 'riso-sage', name: 'Sage', hex: '#4CA9A2' },
                      { key: 'riso-ochre', name: 'Ochre', hex: '#FFB74D' },
                      { key: 'ink', name: 'Deep Ink', hex: '#131313' },
                    ].map((c) => (
                      <button
                        key={c.key}
                        onClick={() => setBlotColor(c.key as any)}
                        className={`px-2.5 py-1 border flex items-center gap-1.5 uppercase text-[10px] cursor-pointer transition-transform ${
                          blotColor === c.key
                            ? 'border-[#1A1208] bg-[#1A1208] text-[#FAF6EC] font-bold shadow-[1px_1px_0px_#1A1208]'
                            : 'border-[#1A1208]/30 bg-[#F4EDD8] text-[#1A1208]'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full border border-black/30" style={{ backgroundColor: c.hex }} />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size & Animation Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <div>
                    <label className="text-[#8C7A5E] uppercase block mb-1.5 font-bold">
                      Capillary Spread Size:
                    </label>
                    <div className="flex gap-2">
                      {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setBlotSize(s);
                            setBlotAnimKey((k) => k + 1);
                          }}
                          className={`px-3 py-1 border uppercase text-[10px] cursor-pointer transition-colors ${
                            blotSize === s
                              ? 'bg-[#1A1208] text-[#FAF6EC] border-[#1A1208] font-bold'
                              : 'bg-[#F4EDD8] text-[#1A1208] border-[#1A1208]/30'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Replay Wet Ink Drying Button */}
                  <div className="pt-4 sm:pt-0">
                    <button
                      type="button"
                      onClick={() => setBlotAnimKey((k) => k + 1)}
                      className="px-3 py-1.5 bg-[#FAF6EC] border-2 border-[#1A1208] font-mono-code text-[11px] font-bold text-[#1A1208] hover:bg-[#F4EDD8] flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_#1A1208] active:translate-y-0.5 active:shadow-none"
                      title="Trigger fresh wet ink droplet and observe the capillary absorption drying process"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#E04F4F]" />
                      <span>Replay Ink Drying</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Bleed Canvas Frame */}
              <div className="md:col-span-6 bg-[#F4EDD8] border border-[#1A1208]/40 h-56 relative flex items-center justify-center overflow-hidden paper-shadow-inner p-4">
                {/* Background tooth grain */}
                <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />

                {/* Simulated deckle paper patch */}
                <div className="absolute w-48 h-40 bg-[#FAF6EC] border border-[#8C7A5E]/30 rotate-[-2deg] shadow-xs" />

                {/* The Live InkBlot Component with keyframe drying */}
                <div className="relative z-10" key={blotAnimKey}>
                  <InkBlot
                    variant={blotVariant}
                    color={blotColor}
                    size={blotSize}
                    opacity={0.88}
                    rotation={-5}
                    seed={88}
                    animated={blotAnimated}
                    duration={2.5}
                  />
                </div>

                {/* Microstatus badge */}
                <div className="absolute top-2 left-2 font-mono-code text-[9px] text-[#E04F4F] bg-[#FAF6EC] px-2 py-0.5 border border-[#E04F4F]/40 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E04F4F] animate-pulse" />
                  <span>@keyframes ink-dry: 2.5s absorption curve</span>
                </div>

                <div className="absolute bottom-2 right-2 font-mono-code text-[9px] text-[#8C7A5E] bg-[#FAF6EC]/80 px-2 py-0.5 border border-[#1A1208]/20">
                  SVG Filter: feDisplacementMap + feGaussianBlur
                </div>
              </div>
            </div>

            {/* Code Copy Bar */}
            <div className="mt-4 pt-3 border-t border-[#1A1208]/20 flex items-center justify-between font-mono-code text-xs">
              <code className="text-[#1A1208] truncate mr-2">
                {`<InkBlot variant="${blotVariant}" color="${blotColor}" size="${blotSize}" animated duration={2.5} />`}
              </code>
              <button
                onClick={() => handleCopyCode(`<InkBlot variant="${blotVariant}" color="${blotColor}" size="${blotSize}" animated duration={2.5} />`, 'inkblot-sample')}
                className="px-3 py-1 bg-[#1A1208] text-[#FAF6EC] hover:bg-[#383838] flex items-center gap-1.5 cursor-pointer shrink-0 text-[11px]"
              >
                {copiedId === 'inkblot-sample' ? <Check className="w-3.5 h-3.5 text-[#3DAA6B]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === 'inkblot-sample' ? 'Copied' : 'Copy JSX'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Live Playground: Tags & Editorial Dividers */}
      {(activeCategory === 'All' || activeCategory === 'Editorial') && (
        <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-6 sm:p-8 mb-12 paper-shadow-md">
          <div className="border-b border-[#1A1208]/20 pb-3 mb-6">
            <span className="font-mono-code text-xs text-[#3DAA6B] uppercase font-bold">
              Editorial Accents
            </span>
            <h3 className="font-display font-bold text-2xl text-[#1A1208]">
              Perforated Tags, Dividers & Ledger Inputs
            </h3>
          </div>

          {/* Tag specimens */}
          <div className="mb-8">
            <label className="font-mono-code text-xs text-[#8C7A5E] block mb-3 font-bold">
              RISOGRAPH DOCKET TAGS (PERFORATED / PUNCHED):
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <Tag color="red" code="LOT-01" perforated hasHole>
                First Proof
              </Tag>
              <Tag color="blue" code="REG-0.12" perforated hasHole>
                Blue Soy Drum
              </Tag>
              <Tag color="yellow" code="PAGE-14" perforated>
                Archival Folio
              </Tag>
              <Tag color="green" code="ECO-RAG" perforated hasHole>
                Recycled Cotton
              </Tag>
              <Tag color="violet" code="WASH-02">
                Watercolor Bloom
              </Tag>
              <Tag color="ink" code="PRESS-9350" perforated>
                Master Cylinder
              </Tag>
            </div>
          </div>

          {/* Divider Specimens */}
          <div className="space-y-6">
            <div>
              <span className="font-mono-code text-xs text-[#8C7A5E] block mb-1">
                Broadsheet Double-Rule with Ornament:
              </span>
              <Divider style="broadsheet" ornament="❦" label="BROADSHEET REGISTER SECTION" />
            </div>

            <div>
              <span className="font-mono-code text-xs text-[#8C7A5E] block mb-1">
                Organic Fiber Torn-Edge Rule:
              </span>
              <Divider style="torn" label="TORN FIBER MARGIN" />
            </div>

            <div>
              <span className="font-mono-code text-xs text-[#8C7A5E] block mb-1">
                Perforated Ticket Coupon Divider:
              </span>
              <Divider style="dashed" ornament="✂ CUT ALONG IMPRINT LINE" />
            </div>
          </div>

          {/* Ledger Form Inputs Preview */}
          <div className="mt-8 pt-6 border-t border-[#1A1208]/20">
            <h4 className="font-mono-code text-xs text-[#8C7A5E] uppercase font-bold mb-4">
              Ledger Form Controls (Typewriter & Stamp Checkbox):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-mono-code text-xs text-[#1A1208] block mb-1">
                  ARCHIVAL ENTRY / CATALOG NO.:
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full bg-[#F4EDD8] border-b-2 border-[#1A1208] px-3 py-2 font-mono-code text-sm text-[#1A1208] focus:outline-none focus:border-[#E84040]"
                />
              </div>

              <div className="flex items-center gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => setCheckboxChecked(!checkboxChecked)}
                  className={`w-6 h-6 border-2 border-[#1A1208] flex items-center justify-center cursor-pointer transition-colors ${
                    checkboxChecked ? 'bg-[#E84040] text-[#FAF6EC]' : 'bg-[#FAF6EC]'
                  }`}
                >
                  {checkboxChecked && <Check className="w-4 h-4 stroke-[3]" />}
                </button>
                <label
                  onClick={() => setCheckboxChecked(!checkboxChecked)}
                  className="font-body text-sm text-[#1A1208] cursor-pointer select-none"
                >
                  Verify soybean oil viscosity before printing run
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
