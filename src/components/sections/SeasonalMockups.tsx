import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, Heart, Bookmark, Search, ShoppingBag, Eye } from 'lucide-react';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';
import { BotanicalBranch, PalmFrond, RisoSunCircle, SilhouetteCameo, WildflowerStem } from '../ui/BotanicalSvg';
import { NewspaperFragment, WoodcutDropCap } from '../ui/NewspaperFragment';
import { PostalStampRound, DateStamp, FlowerEmblemStamp } from '../ui/StampSvg';
import { InkBlot } from '../ui/InkBlot';

export type Season = 'spring' | 'summer' | 'fall' | 'winter';

export const SeasonalMockups: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<Season>('spring');
  const [viewMode, setViewMode] = useState<'quad' | 'single'>('quad');

  const seasonsData = {
    spring: {
      title: 'Spring',
      tagline: 'SEASON 01 • RENEWAL',
      headline: 'New beginnings bloom softly.',
      subhead: 'Fresh florals, thoughtful objects, and the beauty of light greens.',
      cta: 'SHOP SPRING COLLECTION',
      palette: ['#98B4A6', '#E5B6B4', '#E8C872', '#EAE2D6', '#1F2E2B'],
      paletteNames: ['Sage Mist', 'Petal Pink', 'Primrose Ochre', 'Unbleached Linen', 'Deep Pine'],
      accentColor: '#4CA9A2',
      sunColor: '#FFB74D',
      washGradient: 'radial-gradient(circle at 30% 40%, rgba(76, 169, 162, 0.45) 0%, rgba(229, 182, 180, 0.35) 45%, transparent 75%)',
      badges: ['Sustainable Materials', 'Ethical Production', 'Timeless Design', 'Mindful Living'],
    },
    summer: {
      title: 'Summer',
      tagline: 'SEASON 02 • RADIANCE',
      headline: 'Made for sunny days.',
      subhead: 'Light textures, warm air, and aesthetics that last through long golden afternoons.',
      cta: 'SHOP SUMMER COLLECTION',
      palette: ['#2C858D', '#EAA844', '#F6F0E7', '#507D87', '#13262F'],
      paletteNames: ['Cyan Ocean', 'Solar Gold', 'Sea Salt White', 'Driftwood Teal', 'Midnight Wave'],
      accentColor: '#2C858D',
      sunColor: '#EAA844',
      washGradient: 'radial-gradient(circle at 40% 30%, rgba(44, 133, 141, 0.45) 0%, rgba(234, 168, 68, 0.35) 50%, transparent 80%)',
      badges: ['Organic Fabrics', 'Breathable Weaves', 'Clean Modern Lines', 'Conscious Living'],
    },
    fall: {
      title: 'Fall',
      tagline: 'SEASON 03 • HARVEST',
      headline: 'Grounded in golden moments.',
      subhead: 'Warm in texture, gathered with intention, slow down into rich earthen craft.',
      cta: 'SHOP FALL COLLECTION',
      palette: ['#C85A32', '#E09F3E', '#F2E3C6', '#4F3B2B', '#231B15'],
      paletteNames: ['Terracotta Riso', 'Amber Ochre', 'Warm Parchment', 'Roasted Umber', 'Burnt Espresso'],
      accentColor: '#C85A32',
      sunColor: '#C85A32',
      washGradient: 'radial-gradient(circle at 35% 45%, rgba(200, 90, 50, 0.45) 0%, rgba(224, 159, 62, 0.35) 50%, transparent 80%)',
      badges: ['Heritage Quality', 'Artisan Made', 'Slow Living', 'Earthy Tones'],
    },
    winter: {
      title: 'Winter',
      tagline: 'SEASON 04 • SOLITUDE',
      headline: 'Quiet season, deep beauty.',
      subhead: 'Simplicity, warmth, and the tactile art of stillness in an unhurried home.',
      cta: 'SHOP WINTER COLLECTION',
      palette: ['#546A7B', '#8C9EA3', '#CBD4C2', '#EAEBED', '#1B242A'],
      paletteNames: ['Frost Indigo', 'Slate Mist', 'Winter Sage', 'Pure Cotton', 'Deep Shadow'],
      accentColor: '#546A7B',
      sunColor: '#8C9EA3',
      washGradient: 'radial-gradient(circle at 35% 35%, rgba(84, 106, 123, 0.45) 0%, rgba(140, 158, 163, 0.3) 50%, transparent 80%)',
      badges: ['Natural Fibers', 'Tailored Silhouettes', 'Reflective Style', 'Mindful Home'],
    },
  };

  return (
    <section id="seasonal" className="py-16 border-t-2 border-[#131313] max-w-7xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Organic Capillary Bleed Background Blots */}
      <div className="absolute top-12 right-2 pointer-events-none -z-10 opacity-70 hidden sm:block">
        <InkBlot variant="pooling" color="riso-ochre" size="lg" opacity={0.3} rotation={35} seed={62} />
      </div>
      <div className="absolute bottom-20 left-4 pointer-events-none -z-10 opacity-60">
        <InkBlot variant="splatter" color="riso-sage" size="md" opacity={0.4} rotation={-18} seed={17} />
      </div>

      {/* Broadsheet Section Masthead */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-double border-[#131313]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 text-[#E04F4F]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
              Section 07 — Editorial Mockups & Seasonal Expressions
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#131313] uppercase">
            AURORA Seasonal Layouts
          </h2>
          <p className="font-body text-sm text-[#131313]/80 mt-1">
            Four seasonal expressions using the Aurora collage visual system: Lithography, Risograph, Watercolor, Newspaper, Cardstock, and Silhouette.
          </p>
        </div>

        {/* View Mode & Season Tabs */}
        <div className="flex items-center gap-3">
          <div className="flex border border-[#131313] bg-[#FAF6EC] p-0.5 font-mono-code text-xs">
            <button
              onClick={() => setViewMode('quad')}
              className={`px-3 py-1 cursor-pointer transition-colors ${
                viewMode === 'quad' ? 'bg-[#131313] text-[#FAF6EC]' : 'text-[#131313] hover:bg-[#F4EDD8]'
              }`}
            >
              Four-Grid
            </button>
            <button
              onClick={() => setViewMode('single')}
              className={`px-3 py-1 cursor-pointer transition-colors ${
                viewMode === 'single' ? 'bg-[#131313] text-[#FAF6EC]' : 'text-[#131313] hover:bg-[#F4EDD8]'
              }`}
            >
              Focus View
            </button>
          </div>
        </div>
      </div>

      {/* Season Selection Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-[#131313]/20">
        <span className="font-mono-code text-xs text-[#8C7A5E] uppercase font-bold mr-2">
          SELECT SEASON:
        </span>
        {(['spring', 'summer', 'fall', 'winter'] as Season[]).map((season) => (
          <button
            key={season}
            onClick={() => setActiveSeason(season)}
            className={`
              font-mono-code text-xs px-4 py-1.5 border transition-all cursor-pointer flex items-center gap-2
              ${
                activeSeason === season
                  ? 'bg-[#131313] text-[#FAF6EC] border-[#131313] shadow-[2px_2px_0px_#8C7A5E] font-bold'
                  : 'bg-[#FAF6EC] text-[#131313] border-[#131313]/30 hover:border-[#131313]'
              }
            `}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: seasonsData[season].palette[0] }}
            />
            <span className="uppercase">{season}</span>
          </button>
        ))}
      </div>

      {/* Main Seasonal Mockup Artboards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Artboards Container */}
        <div className="lg:col-span-8 space-y-8">
          {viewMode === 'quad' ? (
            /* Quad Grid Display - 4 Seasonal Cards */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(['spring', 'summer', 'fall', 'winter'] as Season[]).map((seasonKey) => {
                const s = seasonsData[seasonKey];
                const isSelected = activeSeason === seasonKey;

                return (
                  <div
                    key={seasonKey}
                    onClick={() => setActiveSeason(seasonKey)}
                    className={`
                      relative bg-[#FAF6EC] border-2 transition-all duration-200 cursor-pointer overflow-hidden paper-shadow-md
                      ${isSelected ? 'border-[#131313] ring-2 ring-[#E04F4F]' : 'border-[#131313]/40 hover:border-[#131313]'}
                    `}
                  >
                    {/* Top Browser Header Bar */}
                    <div className="bg-[#FAF6EC] border-b border-[#131313]/20 px-3 py-1.5 flex items-center justify-between font-mono-code text-[10px] text-[#8C7A5E]">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#131313] uppercase tracking-wider">AURORA</span>
                        <span>•</span>
                        <span className="uppercase">{s.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30" />
                      </div>
                    </div>

                    {/* Canvas Collage Body */}
                    <div className="relative p-6 min-h-[280px] flex flex-col justify-between overflow-hidden">
                      {/* Generative Watercolor Wash Background */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-85"
                        style={{ background: s.washGradient }}
                      />

                      {/* Collage Artwork Elements in Background */}
                      {seasonKey === 'spring' && (
                        <>
                          <div className="absolute top-4 right-4 z-10">
                            <WildflowerStem className="w-20 h-36" color="#1F2E2B" />
                          </div>
                          <div className="absolute top-10 right-14">
                            <RisoSunCircle size={65} color="#E8C872" />
                          </div>
                          <div className="absolute bottom-2 right-2 rotate-[-4deg]">
                            <NewspaperFragment width="w-24" deckle />
                          </div>
                        </>
                      )}

                      {seasonKey === 'summer' && (
                        <>
                          <div className="absolute top-2 right-2 z-10">
                            <PalmFrond className="w-24 h-28" color="#13262F" />
                          </div>
                          <div className="absolute top-14 right-14">
                            <RisoSunCircle size={60} color="#EAA844" />
                          </div>
                          <div className="absolute bottom-4 right-0 w-28 h-6 bg-[#2C858D]/30 torn-edge-bottom" />
                        </>
                      )}

                      {seasonKey === 'fall' && (
                        <>
                          <div className="absolute top-4 right-4 z-10">
                            <BotanicalBranch className="w-18 h-36" color="#231B15" />
                          </div>
                          <div className="absolute top-4 right-16">
                            <RisoSunCircle size={70} color="#C85A32" />
                          </div>
                          <div className="absolute bottom-2 right-2 rotate-[3deg]">
                            <NewspaperFragment width="w-28" headline="CHRONIK" deckle />
                          </div>
                        </>
                      )}

                      {seasonKey === 'winter' && (
                        <>
                          <div className="absolute top-4 right-4 z-10">
                            <SilhouetteCameo className="w-20 h-28" color="#1B242A" />
                          </div>
                          <div className="absolute top-10 right-16">
                            <RisoSunCircle size={55} color="#8C9EA3" />
                          </div>
                          <div className="absolute bottom-1 right-2">
                            <NewspaperFragment width="w-24" deckle />
                          </div>
                        </>
                      )}

                      {/* Content Layer (Over artwork) */}
                      <div className="relative z-20 max-w-[65%] space-y-2">
                        <span className="font-mono-code text-[9px] uppercase tracking-widest text-[#8C7A5E] font-bold block">
                          {s.tagline}
                        </span>
                        <h3 className="font-display font-black text-xl text-[#131313] leading-tight">
                          {s.headline}
                        </h3>
                        <p className="font-body text-xs text-[#131313]/80 line-clamp-2">
                          {s.subhead}
                        </p>
                        <div className="pt-2">
                          <button className="bg-[#131313] text-[#FAF6EC] font-mono-code text-[10px] px-3 py-1.5 uppercase font-bold tracking-wider hover:bg-[#383838] transition-colors cursor-pointer shadow-[2px_2px_0px_#8C7A5E]">
                            {s.cta}
                          </button>
                        </div>
                      </div>

                      {/* Bottom Micro Badges */}
                      <div className="relative z-20 pt-4 mt-6 border-t border-[#131313]/20 flex flex-wrap gap-1 text-[9px] font-mono-code text-[#8C7A5E]">
                        {s.badges.slice(0, 3).map((b, i) => (
                          <span key={i} className="bg-[#FAF6EC]/80 px-1.5 py-0.5 border border-[#131313]/10">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Single Large Focused Artboard */
            <div className="bg-[#FAF6EC] border-2 border-[#131313] paper-shadow-lg relative overflow-hidden">
              {/* Browser bar */}
              <div className="bg-[#FAF6EC] border-b border-[#131313] px-4 py-2 flex items-center justify-between font-mono-code text-xs text-[#8C7A5E]">
                <div className="flex items-center gap-3">
                  <span className="font-display font-black text-sm text-[#131313]">AURORA</span>
                  <span>/</span>
                  <span className="uppercase text-[#131313] font-bold">
                    {seasonsData[activeSeason].title} Collection
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-[#E04F4F] font-bold">300 DPI OFFSET PROOF</span>
                </div>
              </div>

              {/* Large Screen Banner */}
              <div className="relative p-8 sm:p-14 min-h-[420px] flex flex-col justify-between overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none opacity-90"
                  style={{ background: seasonsData[activeSeason].washGradient }}
                />

                {/* Stipple & halftone dots */}
                <div className="absolute inset-0 riso-noise-stipple opacity-30 pointer-events-none" />

                {/* Season-specific artwork assemblage */}
                {activeSeason === 'spring' && (
                  <>
                    <div className="absolute top-8 right-8 z-10">
                      <WildflowerStem className="w-36 h-64" color="#1F2E2B" />
                    </div>
                    <div className="absolute top-16 right-28">
                      <RisoSunCircle size={120} color="#E8C872" />
                    </div>
                    <div className="absolute bottom-6 right-8 rotate-[-3deg] z-20">
                      <NewspaperFragment width="w-44" headline="BERICHT 1926" deckle />
                    </div>
                  </>
                )}

                {activeSeason === 'summer' && (
                  <>
                    <div className="absolute top-6 right-8 z-10">
                      <PalmFrond className="w-48 h-56" color="#13262F" />
                    </div>
                    <div className="absolute top-24 right-32">
                      <RisoSunCircle size={110} color="#EAA844" />
                    </div>
                    <div className="absolute bottom-8 right-4 w-52 h-10 bg-[#2C858D]/30 torn-edge-bottom" />
                  </>
                )}

                {activeSeason === 'fall' && (
                  <>
                    <div className="absolute top-8 right-8 z-10">
                      <BotanicalBranch className="w-32 h-64" color="#231B15" />
                    </div>
                    <div className="absolute top-10 right-28">
                      <RisoSunCircle size={130} color="#C85A32" />
                    </div>
                    <div className="absolute bottom-6 right-10 rotate-[2deg] z-20">
                      <NewspaperFragment width="w-48" headline="HERBST ARCHIV" deckle />
                    </div>
                  </>
                )}

                {activeSeason === 'winter' && (
                  <>
                    <div className="absolute top-8 right-10 z-10">
                      <SilhouetteCameo className="w-32 h-44" color="#1B242A" />
                    </div>
                    <div className="absolute top-16 right-28">
                      <RisoSunCircle size={100} color="#8C9EA3" />
                    </div>
                    <div className="absolute bottom-6 right-6 rotate-[-1deg] z-20">
                      <NewspaperFragment width="w-40" headline="FOLIO NO. 12" deckle />
                    </div>
                  </>
                )}

                {/* Big Editorial Content */}
                <div className="relative z-20 max-w-md space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <Tag color="red" code={seasonsData[activeSeason].tagline} perforated>
                      {seasonsData[activeSeason].title} Edition
                    </Tag>
                  </div>
                  <h3 className="font-display font-black text-3xl sm:text-5xl text-[#131313] leading-tight">
                    {seasonsData[activeSeason].headline}
                  </h3>
                  <p className="font-body text-base text-[#131313]/85 leading-relaxed">
                    {seasonsData[activeSeason].subhead}
                  </p>
                  <div className="pt-2">
                    <button className="bg-[#131313] text-[#FAF6EC] font-mono-code text-xs px-6 py-3 uppercase font-bold tracking-widest hover:bg-[#383838] transition-colors cursor-pointer shadow-[3px_4px_0px_#8C7A5E]">
                      {seasonsData[activeSeason].cta} →
                    </button>
                  </div>
                </div>

                {/* Bottom Value Badges Bar */}
                <div className="relative z-20 pt-6 mt-12 border-t border-[#131313]/30 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-code">
                  {seasonsData[activeSeason].badges.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#131313]">
                      <span className="w-2 h-2 rounded-full bg-[#E04F4F]" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: Seasonal Palettes, Banners & Texture chips (From Image 3) */}
        <div className="lg:col-span-4 bg-[#FAF6EC] border-2 border-[#131313] p-6 paper-shadow-md space-y-6">
          <div className="border-b border-[#131313]/20 pb-3">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E] font-bold">
              Design System Specimen
            </span>
            <h3 className="font-display font-bold text-xl text-[#131313]">
              Seasonal Palettes
            </h3>
          </div>

          {/* Palette Swatches List */}
          <div className="space-y-4">
            {(['spring', 'summer', 'fall', 'winter'] as Season[]).map((sKey) => {
              const item = seasonsData[sKey];
              const isCurrent = activeSeason === sKey;

              return (
                <div
                  key={sKey}
                  onClick={() => setActiveSeason(sKey)}
                  className={`p-3 border transition-all cursor-pointer ${
                    isCurrent ? 'bg-[#F4EDD8] border-[#131313] shadow-[2px_2px_0px_#131313]' : 'border-[#131313]/20 hover:border-[#131313]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-code text-xs uppercase font-bold text-[#131313]">
                      {item.title}
                    </span>
                    <span className="font-mono-code text-[10px] text-[#8C7A5E]">
                      5 Spot Tints
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 h-7">
                    {item.palette.map((color, idx) => (
                      <div
                        key={idx}
                        className="h-full border border-[#131313]/30 relative group"
                        style={{ backgroundColor: color }}
                        title={`${item.paletteNames[idx]} (${color})`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Component Examples (Buttons & Search from Image 3) */}
          <div className="pt-4 border-t border-[#131313]/20 space-y-3">
            <h4 className="font-mono-code text-xs uppercase text-[#8C7A5E] font-bold">
              Component Examples
            </h4>
            <div className="flex gap-2">
              <button className="flex-1 bg-[#131313] text-[#FAF6EC] py-2 px-3 font-mono-code text-xs uppercase font-semibold">
                Primary Button
              </button>
              <button className="flex-1 bg-transparent text-[#131313] border border-[#131313] py-2 px-3 font-mono-code text-xs uppercase">
                Secondary
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search collection..."
                className="w-full bg-[#F4EDD8] border border-[#131313] px-3 py-1.5 font-mono-code text-xs text-[#131313] pr-8 focus:outline-none"
                readOnly
              />
              <Search className="w-3.5 h-3.5 absolute right-2.5 top-2.5 text-[#8C7A5E]" />
            </div>
          </div>

          {/* Seasonal Banners Quick Jump */}
          <div className="pt-4 border-t border-[#131313]/20 space-y-2">
            <h4 className="font-mono-code text-xs uppercase text-[#8C7A5E] font-bold mb-2">
              Seasonal Banners
            </h4>
            {(['spring', 'summer', 'fall', 'winter'] as Season[]).map((sk) => (
              <div
                key={sk}
                onClick={() => setActiveSeason(sk)}
                className={`p-2 border flex items-center justify-between cursor-pointer transition-colors ${
                  activeSeason === sk ? 'bg-[#131313] text-[#FAF6EC] border-[#131313]' : 'bg-[#FAF6EC] text-[#131313] border-[#131313]/30 hover:border-[#131313]'
                }`}
              >
                <span className="font-mono-code text-xs uppercase font-bold">
                  {sk} Collection
                </span>
                <span className="font-mono-code text-[10px] text-[#8C7A5E]">
                  Shop Now →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
