import React, { useState } from 'react';
import {
  Layers,
  Heart,
  Bookmark,
  ShoppingBag,
  Minus,
  Plus,
  X,
  Sliders,
  Search,
  Share2,
  Copy,
  Check,
  Play,
  Scissors
} from 'lucide-react';
import { Tag } from '../ui/Tag';
import {
  SilhouetteCameo,
  SilhouetteBob,
  SilhouetteHat,
  BotanicalBranch,
  WildflowerStem,
  PalmFrond,
  RisoSunCircle
} from '../ui/BotanicalSvg';
import {
  PostalStampRound,
  WavePostmark,
  DateStamp,
  AuroraCollectiveStamp,
  FlowerEmblemStamp,
  CrossMarkBar
} from '../ui/StampSvg';
import { NewspaperFragment, WoodcutDropCap, CeramicVaseArt } from '../ui/NewspaperFragment';

export const CollageAssetLibrary: React.FC = () => {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [liked, setLiked] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(1);

  const handleCopyCode = (label: string, snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 1800);
  };

  return (
    <section id="asset-library" className="py-16 border-t-2 border-[#131313] max-w-7xl mx-auto px-4 sm:px-6">
      {/* Broadsheet Masthead */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-double border-[#131313]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-4 h-4 text-[#FFB74D]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
              Section 09 — Material Asset Library & Mark Makers
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#131313] uppercase">
            Collage & Print Asset Kit
          </h2>
          <p className="font-body text-sm text-[#131313]/80 mt-1">
            Physical specimens, woodcut silhouettes, botanical stems, rubber stamps, papercraft folds, and UI badges.
          </p>
        </div>

        <div className="font-mono-code text-xs text-[#8C7A5E] bg-[#FAF6EC] border border-[#131313]/30 px-3 py-1.5">
          ASSET CATALOG: VOL. 7 SPEC SHEET
        </div>
      </div>

      {/* Asset Kit Master Board (Matching Image 1) */}
      <div className="space-y-12">
        {/* ROW 1: 4 CATEGORIES (Paper, Watercolor, Collage Shapes, Silhouettes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Paper & Texture Elements */}
          <div className="bg-[#FAF6EC] border-2 border-[#131313] p-5 paper-shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-mono-code text-xs uppercase font-bold text-[#8C7A5E] tracking-widest border-b border-[#131313]/20 pb-2 mb-4">
                Paper & Texture Elements
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {/* Deckle Rag Paper */}
                <div className="h-16 bg-[#ede2c8] border border-[#131313]/30 p-1 torn-edge-bottom flex items-center justify-center font-mono-code text-[8px] text-[#8C7A5E]">
                  RAG FIBER
                </div>
                {/* Newsprint text */}
                <div className="h-16 bg-[#ede2c8] border border-[#131313]/30 p-1 overflow-hidden font-body text-[6px] leading-tight text-[#131313]/70">
                  <p>Aus dem Register der Werkstatt...</p>
                </div>
                {/* Black Stone Ink */}
                <div className="h-16 bg-[#131313] border border-[#131313] paper-shadow-sm flex items-center justify-center text-[#FAF6EC] font-mono-code text-[8px]">
                  INK STONE
                </div>
                {/* Halftone dots */}
                <div className="h-16 bg-[#FAF6EC] border border-[#131313]/30 halftone-dots" />
                {/* Sage paper */}
                <div className="h-16 bg-[#4CA9A2]/30 border border-[#131313]/30 torn-edge-bottom" />
                {/* Grid ledger */}
                <div
                  className="h-16 bg-[#FAF6EC] border border-[#131313]/30"
                  style={{
                    backgroundImage: 'linear-gradient(#131313 1px, transparent 1px), linear-gradient(90deg, #131313 1px, transparent 1px)',
                    backgroundSize: '10px 10px',
                    opacity: 0.25,
                  }}
                />
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-[#131313]/15 font-mono-code text-[10px] text-[#8C7A5E]">
              6 Material Surfaces
            </div>
          </div>

          {/* 2. Watercolor Washes */}
          <div className="bg-[#FAF6EC] border-2 border-[#131313] p-5 paper-shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-mono-code text-xs uppercase font-bold text-[#8C7A5E] tracking-widest border-b border-[#131313]/20 pb-2 mb-4">
                Watercolor Washes
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {/* Sage wash */}
                <div
                  className="h-16 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border border-[#131313]/20"
                  style={{
                    background: 'radial-gradient(circle, #4CA9A2 0%, rgba(76, 169, 162, 0.2) 75%)',
                    mixBlendMode: 'multiply',
                  }}
                />
                {/* Ochre wash */}
                <div
                  className="h-16 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border border-[#131313]/20"
                  style={{
                    background: 'radial-gradient(circle, #FFB74D 0%, rgba(255, 183, 77, 0.2) 75%)',
                    mixBlendMode: 'multiply',
                  }}
                />
                {/* Violet wash */}
                <div
                  className="h-16 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] border border-[#131313]/20"
                  style={{
                    background: 'radial-gradient(circle, #5E4B8B 0%, rgba(94, 75, 139, 0.2) 75%)',
                    mixBlendMode: 'multiply',
                  }}
                />
                {/* Coral wash */}
                <div
                  className="h-16 rounded-[45%_55%_65%_35%/50%_45%_55%_50%] border border-[#131313]/20"
                  style={{
                    background: 'radial-gradient(circle, #E04F4F 0%, rgba(224, 79, 79, 0.2) 75%)',
                    mixBlendMode: 'multiply',
                  }}
                />
                {/* Soot ink splatter */}
                <div
                  className="h-16 rounded-full border border-[#131313]/20 relative flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle, #131313 0%, rgba(19, 19, 19, 0.1) 75%)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313] absolute -top-1 right-2" />
                  <span className="w-1 h-1 rounded-full bg-[#131313] absolute bottom-1 left-2" />
                </div>
                {/* Dual wash */}
                <div
                  className="h-16 rounded-[60%_40%_50%_50%/50%_50%_60%_40%] border border-[#131313]/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(224,79,79,0.5), rgba(76,169,162,0.5))',
                    mixBlendMode: 'multiply',
                  }}
                />
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-[#131313]/15 font-mono-code text-[10px] text-[#8C7A5E]">
              Capillary Pigment Blobs
            </div>
          </div>

          {/* 3. Collage Shapes & Abstractions */}
          <div className="bg-[#FAF6EC] border-2 border-[#131313] p-5 paper-shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-mono-code text-xs uppercase font-bold text-[#8C7A5E] tracking-widest border-b border-[#131313]/20 pb-2 mb-4">
                Collage Shapes
              </h3>
              <div className="grid grid-cols-3 gap-3 items-center">
                {/* Red Sun Circle */}
                <div className="w-14 h-14 rounded-full bg-[#E04F4F] relative mx-auto overflow-hidden">
                  <div className="absolute inset-0 halftone-dots opacity-30" />
                </div>
                {/* Ochre Semicircle */}
                <div className="w-14 h-7 rounded-t-full bg-[#FFB74D] border border-[#131313]/30 mx-auto" />
                {/* Sage Arch */}
                <div className="w-12 h-14 rounded-t-full bg-[#4CA9A2] border border-[#131313]/30 mx-auto" />
                {/* Purple Polygon */}
                <div
                  className="w-14 h-14 bg-[#5E4B8B] mx-auto"
                  style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 70%, 50% 100%, 0% 70%)' }}
                />
                {/* Half stipple moon */}
                <div className="w-14 h-14 rounded-full bg-[#131313] halftone-dots border border-[#131313]/30 mx-auto" />
                {/* Terracotta Arch */}
                <div className="w-12 h-14 border-4 border-[#E04F4F] rounded-t-full mx-auto" />
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-[#131313]/15 font-mono-code text-[10px] text-[#8C7A5E]">
              Geometric Cutouts
            </div>
          </div>

          {/* 4. Silhouettes & Botanicals */}
          <div className="bg-[#FAF6EC] border-2 border-[#131313] p-5 paper-shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-mono-code text-xs uppercase font-bold text-[#8C7A5E] tracking-widest border-b border-[#131313]/20 pb-2 mb-4">
                Silhouettes & Botanicals
              </h3>
              <div className="grid grid-cols-3 gap-2 items-center justify-items-center">
                <SilhouetteCameo className="w-12 h-16" />
                <SilhouetteBob className="w-12 h-16" />
                <SilhouetteHat className="w-12 h-16" />
                <BotanicalBranch className="w-10 h-20" />
                <WildflowerStem className="w-12 h-20" />
                <PalmFrond className="w-14 h-16" />
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-[#131313]/15 font-mono-code text-[10px] text-[#8C7A5E]">
              Cameos & Woodcut Flora
            </div>
          </div>
        </div>

        {/* ROW 2: RISOGRAPH INKS & NEWSPAPER TYPOGRAPHIC FRAGMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Risograph Ink Textures */}
          <div className="bg-[#FAF6EC] border-2 border-[#131313] p-5 paper-shadow-sm">
            <h3 className="font-mono-code text-xs uppercase font-bold text-[#8C7A5E] tracking-widest border-b border-[#131313]/20 pb-2 mb-4">
              Risograph Ink Rollers
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {[
                { name: 'Riso Red', color: '#E04F4F', role: 'Scarlet Soy' },
                { name: 'Riso Teal', color: '#4CA9A2', role: 'Marine Soy' },
                { name: 'Riso Violet', color: '#5E4B8B', role: 'Indigo Soy' },
                { name: 'Riso Ochre', color: '#FFB74D', role: 'Yellow Soy' },
              ].map((roller) => (
                <div key={roller.name} className="space-y-2">
                  <div
                    className="h-28 border border-[#131313]/40 relative overflow-hidden flex flex-col justify-between p-2 text-[#FAF6EC]"
                    style={{
                      backgroundColor: roller.color,
                      mixBlendMode: 'multiply',
                    }}
                  >
                    <div className="absolute inset-0 riso-noise-stipple opacity-50" />
                    <span className="relative z-10 font-mono-code text-[9px] uppercase font-bold">
                      {roller.name}
                    </span>
                    <span className="relative z-10 font-mono-code text-[8px] opacity-80">
                      {roller.role}
                    </span>
                  </div>
                  <div className="font-mono-code text-[9px] text-[#8C7A5E] text-center">
                    {roller.color}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newspaper & Typographic Fragments */}
          <div className="bg-[#FAF6EC] border-2 border-[#131313] p-5 paper-shadow-sm">
            <h3 className="font-mono-code text-xs uppercase font-bold text-[#8C7A5E] tracking-widest border-b border-[#131313]/20 pb-2 mb-4">
              Newspaper & Typographic Fragments
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <WoodcutDropCap letter="A" size="lg" />
              <WoodcutDropCap letter="&" size="lg" />
              <NewspaperFragment width="w-44" headline="BERICHT 1926" deckle />
              <div className="p-3 bg-[#ede2c8] border border-[#131313]/30 font-display font-black text-xl text-[#131313]">
                DAILY GAZETTE
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: STAMPS, MARK MAKERS & PAPERCRAFT ELEMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stamps & Mark Makers */}
          <div className="bg-[#FAF6EC] border-2 border-[#131313] p-5 paper-shadow-sm">
            <h3 className="font-mono-code text-xs uppercase font-bold text-[#8C7A5E] tracking-widest border-b border-[#131313]/20 pb-2 mb-4">
              Stamps & Mark Makers
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              <PostalStampRound label="AURORA" sub="PRESS" color="#131313" />
              <WavePostmark color="#131313" />
              <DateStamp date="04 - 21 - 24" color="#131313" />
              <AuroraCollectiveStamp color="#131313" />
              <FlowerEmblemStamp color="#E04F4F" />
              <CrossMarkBar count={6} color="#131313" />
            </div>
          </div>

          {/* Papercraft Elements */}
          <div className="bg-[#FAF6EC] border-2 border-[#131313] p-5 paper-shadow-sm">
            <h3 className="font-mono-code text-xs uppercase font-bold text-[#8C7A5E] tracking-widest border-b border-[#131313]/20 pb-2 mb-4">
              Papercraft Elements
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              {/* Dog-eared Folded Note */}
              <div className="w-16 h-20 bg-[#F4EDD8] border border-[#131313]/40 p-2 relative paper-shadow-sm">
                <div className="absolute top-0 right-0 border-t-[14px] border-r-[14px] border-t-[#8C7A5E] border-r-[#FAF6EC]" />
                <span className="font-mono-code text-[8px] text-[#8C7A5E]">FOLD</span>
              </div>

              {/* Luggage Tag with Eyelet */}
              <div className="w-16 h-24 bg-[#E04F4F] text-[#FAF6EC] border border-[#131313]/40 p-2 relative flex flex-col justify-between paper-shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FAF6EC] border border-[#131313] mx-auto shadow-inner" />
                <span className="font-mono-code text-[8px] tracking-wider uppercase text-center font-bold">
                  TAG 01
                </span>
              </div>

              {/* Violet Card */}
              <div className="w-16 h-24 bg-[#5E4B8B] text-[#FAF6EC] border border-[#131313]/40 p-2 relative flex flex-col justify-between paper-shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FAF6EC] border border-[#131313] mx-auto shadow-inner" />
                <span className="font-mono-code text-[8px] tracking-wider uppercase text-center font-bold">
                  TAG 02
                </span>
              </div>

              {/* Torn Kraft Strip */}
              <div className="w-28 h-10 bg-[#FFB74D] border border-[#131313]/40 torn-edge-bottom flex items-center justify-center font-mono-code text-[9px] font-bold">
                KRAFT TAPE
              </div>

              {/* Envelope Fold */}
              <div className="w-20 h-16 bg-[#ede2c8] border border-[#131313]/40 relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full border-t-[20px] border-l-[35px] border-r-[35px] border-t-[#8C7A5E]/30 border-l-transparent border-r-transparent" />
                <span className="font-mono-code text-[8px] text-[#8C7A5E] relative z-10">MAIL</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 4: UI COMPONENTS, BADGES, DIVIDERS & NAVIGATION (Bottom of Image 1) */}
        <div className="bg-[#FAF6EC] border-2 border-[#131313] p-6 paper-shadow-md space-y-8">
          <div className="border-b border-[#131313]/20 pb-3 flex items-center justify-between">
            <div>
              <span className="font-mono-code text-xs uppercase font-bold text-[#8C7A5E] tracking-widest">
                Interactive UI Specs
              </span>
              <h3 className="font-display font-bold text-2xl text-[#131313]">
                Buttons, Badges, Dividers & Product Assets
              </h3>
            </div>
            <Tag color="red" code="PROD-KIT">
              Live Components
            </Tag>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Buttons & Icon Buttons */}
            <div className="space-y-4">
              <h4 className="font-mono-code text-xs uppercase text-[#8C7A5E] font-bold">
                Buttons & Icons
              </h4>
              <div className="space-y-2">
                <button className="w-full bg-[#131313] text-[#FAF6EC] py-2 px-4 font-mono-code text-xs uppercase font-bold tracking-wider hover:bg-[#383838] transition-colors shadow-[2px_2px_0px_#8C7A5E]">
                  PRIMARY BUTTON
                </button>
                <button className="w-full bg-[#FAF6EC] text-[#131313] border border-[#131313] py-2 px-4 font-mono-code text-xs uppercase font-semibold tracking-wider hover:bg-[#F4EDD8] transition-colors shadow-[2px_2px_0px_#131313]">
                  SECONDARY BUTTON
                </button>
                <button className="w-full bg-[#ede2c8] text-[#131313] py-2 px-4 font-mono-code text-xs uppercase tracking-wider hover:bg-[#ded1b6] transition-colors">
                  TERTIARY BUTTON
                </button>
              </div>

              {/* Icon Buttons Matrix */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`h-10 border border-[#131313] flex items-center justify-center transition-colors cursor-pointer ${
                    liked ? 'bg-[#E04F4F] text-[#FAF6EC]' : 'bg-[#FAF6EC] text-[#131313] hover:bg-[#F4EDD8]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`h-10 border border-[#131313] flex items-center justify-center transition-colors cursor-pointer ${
                    bookmarked ? 'bg-[#2D6BE4] text-[#FAF6EC]' : 'bg-[#FAF6EC] text-[#131313] hover:bg-[#F4EDD8]'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                </button>
                <button className="h-10 border border-[#131313] flex items-center justify-center bg-[#FAF6EC] text-[#131313] hover:bg-[#F4EDD8] cursor-pointer">
                  <ShoppingBag className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="h-10 border border-[#131313] flex items-center justify-center bg-[#FAF6EC] text-[#131313] hover:bg-[#F4EDD8] cursor-pointer font-bold"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <div className="h-10 border border-[#131313] flex items-center justify-center bg-[#FAF6EC] text-[#131313] font-mono-code text-xs font-bold">
                  {qty}
                </div>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="h-10 border border-[#131313] flex items-center justify-center bg-[#FAF6EC] text-[#131313] hover:bg-[#F4EDD8] cursor-pointer font-bold"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 2. Badges & Labels (Matching Image 1) */}
            <div className="space-y-4">
              <h4 className="font-mono-code text-xs uppercase text-[#8C7A5E] font-bold">
                Badges & Labels
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#131313] text-[#FAF6EC] font-mono-code text-[10px] px-2.5 py-1 uppercase font-bold tracking-wider">
                  NEW
                </span>
                <span className="bg-[#ede2c8] text-[#131313] border border-[#131313]/40 font-mono-code text-[10px] px-2.5 py-1 uppercase font-bold tracking-wider">
                  BEST SELLER
                </span>
                <span className="bg-[#5E4B8B] text-[#FAF6EC] font-mono-code text-[10px] px-2.5 py-1 uppercase font-bold tracking-wider">
                  LIMITED
                </span>
                <span className="bg-[#4CA9A2]/20 text-[#21615d] border border-[#4CA9A2] font-mono-code text-[10px] px-2.5 py-1 uppercase font-bold tracking-wider flex items-center gap-1">
                  ✓ SUSTAINABLE
                </span>
                <span className="bg-[#FFB74D]/25 text-[#73530e] border border-[#FFB74D] font-mono-code text-[10px] px-2.5 py-1 uppercase font-bold tracking-wider flex items-center gap-1">
                  ◎ ETHICAL
                </span>
                <span className="bg-[#E04F4F] text-[#FAF6EC] font-mono-code text-[10px] px-2.5 py-1 uppercase font-bold tracking-wider">
                  -20%
                </span>
                <span className="bg-[#FAF6EC] text-[#E04F4F] border border-[#E04F4F] font-mono-code text-[10px] px-2.5 py-1 uppercase font-bold tracking-wider">
                  ⚠ LOW STOCK
                </span>
              </div>
            </div>

            {/* 3. Dividers & Navigation Elements */}
            <div className="space-y-4">
              <h4 className="font-mono-code text-xs uppercase text-[#8C7A5E] font-bold">
                Dividers & Navigation
              </h4>
              <div className="space-y-4">
                {/* Solid rule */}
                <div className="border-t border-[#131313]" />
                {/* Dotted rule */}
                <div className="border-t border-dotted border-[#131313]" />
                {/* Wavy stroke */}
                <WavePostmark className="w-full h-4" />
                {/* Torn newspaper divider */}
                <div className="h-4 bg-[#ede2c8] border border-[#131313]/30 torn-edge-bottom" />
                {/* Pagination */}
                <div className="flex items-center gap-1.5 font-mono-code text-xs pt-1">
                  <span className="w-6 h-6 border border-[#131313] flex items-center justify-center cursor-pointer">1</span>
                  <span className="w-6 h-6 bg-[#131313] text-[#FAF6EC] flex items-center justify-center font-bold">2</span>
                  <span className="w-6 h-6 border border-[#131313] flex items-center justify-center cursor-pointer">3</span>
                  <span className="px-1 text-[#8C7A5E]">...</span>
                  <span className="w-6 h-6 border border-[#131313] flex items-center justify-center cursor-pointer">8</span>
                </div>
              </div>
            </div>

            {/* 4. Product & Media Assets */}
            <div className="space-y-4">
              <h4 className="font-mono-code text-xs uppercase text-[#8C7A5E] font-bold">
                Product & Media Assets
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F4EDD8] border border-[#131313]/20 p-2 flex flex-col items-center justify-center">
                  <CeramicVaseArt className="w-16 h-20" />
                  <span className="font-mono-code text-[8px] text-[#8C7A5E] mt-1">CERAMIC VASE</span>
                </div>
                <div className="bg-[#F4EDD8] border border-[#131313]/20 p-2 flex flex-col items-center justify-center relative">
                  <div className="w-10 h-10 rounded-full bg-[#131313] text-[#FAF6EC] flex items-center justify-center shadow-md">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <span className="font-mono-code text-[8px] text-[#8C7A5E] mt-2">MEDIA PLAYER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
