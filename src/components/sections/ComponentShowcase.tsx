import React, { useState } from 'react';
import { Scissors, Copy, Check, Sparkles, Sliders, ExternalLink, Bookmark, CheckSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { Divider } from '../ui/Divider';
import { COMPONENTS_CATALOG } from '../../data/components';

export const ComponentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Actions' | 'Surfaces' | 'Editorial'>('All');
  const [stampCount, setStampCount] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form Controls Demo State
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [inputValue, setInputValue] = useState('Archival Proof Edition #042');
  const [selectedTagColor, setSelectedTagColor] = useState<'red' | 'blue' | 'yellow' | 'green'>('red');

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const filteredCatalog = activeCategory === 'All'
    ? COMPONENTS_CATALOG
    : COMPONENTS_CATALOG.filter((c) => c.category === activeCategory);

  return (
    <section id="showcase" className="py-16 border-t-2 border-[#1A1208] max-w-7xl mx-auto px-4 sm:px-6">
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
