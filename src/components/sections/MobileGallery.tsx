import React, { useState } from 'react';
import {
  Smartphone,
  ShoppingBag,
  ArrowLeft,
  Menu,
  Search,
  Check,
  Heart,
  Bookmark,
  ChevronRight,
  Share2,
  Trash2,
  Plus,
  Minus
} from 'lucide-react';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';
import {
  BotanicalBranch,
  WildflowerStem,
  PalmFrond,
  RisoSunCircle,
  SilhouetteCameo,
  SilhouetteHat
} from '../ui/BotanicalSvg';
import { NewspaperFragment, CeramicVaseArt, WoodcutDropCap } from '../ui/NewspaperFragment';
import { DateStamp, FlowerEmblemStamp } from '../ui/StampSvg';

export const MobileGallery: React.FC = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(2);
  const [vaseAdded, setVaseAdded] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('#cfb99e');

  const handleAddToCart = () => {
    setVaseAdded(true);
    setCartCount((c) => c + 1);
    setTimeout(() => setVaseAdded(false), 2000);
  };

  return (
    <section id="mobile-showcase" className="py-16 border-t-2 border-[#131313] max-w-7xl mx-auto px-4 sm:px-6">
      {/* Broadsheet Masthead */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-double border-[#131313]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Smartphone className="w-4 h-4 text-[#2D6BE4]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8C7A5E]">
              Section 08 — Mobile Design System & App Screens
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#131313] uppercase">
            AURORA Mobile Experience
          </h2>
          <p className="font-body text-sm text-[#131313]/80 mt-1">
            Tactile analog materials translating flawlessly to intimate mobile touch surfaces.
          </p>
        </div>

        {/* Quick Screen Selector for Mobile */}
        <div className="flex flex-wrap items-center gap-2">
          {['Discover', 'Modern', 'Journal', 'Mindful', 'Product', 'Cart'].map((label, idx) => (
            <button
              key={label}
              onClick={() => setActiveScreenIndex(idx)}
              className={`font-mono-code text-xs px-2.5 py-1 border transition-all cursor-pointer ${
                activeScreenIndex === idx
                  ? 'bg-[#131313] text-[#FAF6EC] border-[#131313] font-bold'
                  : 'bg-[#FAF6EC] text-[#131313] border-[#131313]/30 hover:border-[#131313]'
              }`}
            >
              {idx + 1}. {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Showcase Layout: Left Specs + 6 Mobile Screens Grid */}
      <div className="space-y-8">
        {/* Top Info Banner from Image 2 */}
        <div className="bg-[#FAF6EC] border border-[#131313]/30 p-4 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#8C7A5E]">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[#131313]">PALETTE TOKENS:</span>
            <div className="flex items-center gap-1.5">
              {[
                { hex: '#131313', name: 'Ink' },
                { hex: '#383838', name: 'Slate' },
                { hex: '#F6EDE3', name: 'Cream' },
                { hex: '#E04F4F', name: 'Coral' },
                { hex: '#FFB74D', name: 'Ochre' },
                { hex: '#4CA9A2', name: 'Sage' },
                { hex: '#5E4B8B', name: 'Violet' },
              ].map((c) => (
                <div
                  key={c.hex}
                  className="w-5 h-5 rounded-full border border-[#131313]/20 shadow-xs"
                  style={{ backgroundColor: c.hex }}
                  title={`${c.name} (${c.hex})`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span>TYPOGRAPHY: PLAYFAIR DISPLAY + SOURCE SERIF + DM MONO</span>
            <span className="text-[#E04F4F] font-bold">● 6 ARTBOARDS LOADED</span>
          </div>
        </div>

        {/* 6 Mobile Device Screens Horizontal Scrollable / Grid Artboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {/* SCREEN 1: DISCOVER */}
          <div
            onClick={() => setActiveScreenIndex(0)}
            className={`
              bg-[#FAF6EC] border-2 rounded-[28px] overflow-hidden paper-shadow-md transition-all flex flex-col justify-between cursor-pointer select-none
              ${activeScreenIndex === 0 ? 'border-[#131313] ring-2 ring-[#E04F4F] scale-[1.02]' : 'border-[#131313]/40 hover:border-[#131313]'}
            `}
            style={{ height: '480px' }}
          >
            {/* Phone Header */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-[#131313]/10">
              <Menu className="w-4 h-4 text-[#131313]" />
              <span className="font-display font-black text-xs tracking-wider uppercase text-[#131313]">AURORA</span>
              <ShoppingBag className="w-4 h-4 text-[#131313]" />
            </div>

            {/* Collage Visual Body */}
            <div className="relative flex-1 p-4 flex flex-col justify-between overflow-hidden">
              {/* Sage watercolor wash */}
              <div
                className="absolute inset-0 pointer-events-none opacity-80"
                style={{
                  background: 'radial-gradient(circle at 40% 30%, rgba(76, 169, 162, 0.4) 0%, rgba(246, 237, 227, 0.8) 70%)',
                }}
              />

              {/* Artwork elements */}
              <div className="absolute top-2 right-2">
                <WildflowerStem className="w-16 h-28" color="#131313" />
              </div>
              <div className="absolute top-12 left-2">
                <RisoSunCircle size={55} color="#FFB74D" />
              </div>
              <div className="absolute bottom-24 right-2 rotate-[-3deg]">
                <NewspaperFragment width="w-24" deckle />
              </div>

              {/* Content text */}
              <div className="relative z-10 mt-auto pt-24 space-y-2">
                <h4 className="font-display font-black text-lg text-[#131313] leading-tight uppercase">
                  Discover Beauty in Simplicity
                </h4>
                <p className="font-body text-[11px] text-[#131313]/80">
                  Curated pieces for a mindful, textured life.
                </p>
                <div className="pt-2">
                  <button className="w-full bg-[#131313] text-[#FAF6EC] font-mono-code text-[10px] py-2 uppercase font-bold tracking-wider hover:bg-[#383838]">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>

            {/* Screen indicator dot */}
            <div className="py-2 flex justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#131313]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30" />
            </div>
          </div>

          {/* SCREEN 2: MODERN ESSENTIALS */}
          <div
            onClick={() => setActiveScreenIndex(1)}
            className={`
              bg-[#FAF6EC] border-2 rounded-[28px] overflow-hidden paper-shadow-md transition-all flex flex-col justify-between cursor-pointer select-none
              ${activeScreenIndex === 1 ? 'border-[#131313] ring-2 ring-[#E04F4F] scale-[1.02]' : 'border-[#131313]/40 hover:border-[#131313]'}
            `}
            style={{ height: '480px' }}
          >
            <div className="px-4 py-3 flex items-center justify-between border-b border-[#131313]/10">
              <ArrowLeft className="w-4 h-4 text-[#131313]" />
              <span className="font-mono-code text-[10px] tracking-widest uppercase text-[#8C7A5E]">COLLECTION</span>
              <ShoppingBag className="w-4 h-4 text-[#131313]" />
            </div>

            <div className="relative flex-1 p-4 flex flex-col justify-between overflow-hidden">
              {/* Crimson Riso Sun & Silhouette */}
              <div className="absolute top-4 right-4">
                <RisoSunCircle size={65} color="#E04F4F" />
              </div>
              <div className="absolute top-10 right-8 z-10">
                <SilhouetteHat className="w-16 h-28" color="#131313" />
              </div>
              <div className="absolute bottom-24 left-2 rotate-[-2deg]">
                <NewspaperFragment width="w-24" deckle />
              </div>
              <div className="absolute bottom-16 right-0 w-24 h-6 bg-[#131313]/80 torn-edge-top" />

              <div className="relative z-10 mt-auto pt-28 space-y-2">
                <h4 className="font-display font-black text-lg text-[#131313] leading-tight uppercase">
                  Modern Essentials
                </h4>
                <p className="font-body text-[11px] text-[#131313]/80">
                  Timeless pieces, thoughtfully made.
                </p>
                <div className="pt-2">
                  <span className="font-mono-code text-[10px] text-[#131313] font-bold uppercase underline">
                    Shop Collection →
                  </span>
                </div>
              </div>
            </div>

            <div className="py-2 text-center font-mono-code text-[8px] text-[#8C7A5E]">
              FOLIO 02 • RUN 2026
            </div>
          </div>

          {/* SCREEN 3: JOURNAL */}
          <div
            onClick={() => setActiveScreenIndex(2)}
            className={`
              bg-[#FAF6EC] border-2 rounded-[28px] overflow-hidden paper-shadow-md transition-all flex flex-col justify-between cursor-pointer select-none
              ${activeScreenIndex === 2 ? 'border-[#131313] ring-2 ring-[#E04F4F] scale-[1.02]' : 'border-[#131313]/40 hover:border-[#131313]'}
            `}
            style={{ height: '480px' }}
          >
            <div className="px-4 py-3 flex items-center justify-between border-b border-[#131313]/10">
              <Menu className="w-4 h-4 text-[#131313]" />
              <span className="font-display font-black text-xs tracking-wider uppercase text-[#131313]">AURORA</span>
              <ShoppingBag className="w-4 h-4 text-[#131313]" />
            </div>

            <div className="relative flex-1 p-4 flex flex-col justify-between overflow-hidden">
              {/* Violet Watercolor Wash */}
              <div
                className="absolute inset-0 pointer-events-none opacity-70"
                style={{
                  background: 'radial-gradient(circle at 60% 30%, rgba(94, 75, 139, 0.45) 0%, transparent 70%)',
                }}
              />

              <div className="absolute top-4 right-4 z-10">
                <WildflowerStem className="w-16 h-28" color="#131313" />
              </div>
              <div className="absolute top-16 left-3 rotate-[8deg]">
                <div className="w-14 h-12 bg-[#FFB74D] border border-[#131313]/30 torn-edge-bottom" />
              </div>

              <div className="relative z-10 mt-auto pt-24 space-y-2">
                <span className="font-mono-code text-[9px] uppercase tracking-widest text-[#E04F4F] font-bold block">
                  DISPATCH
                </span>
                <h4 className="font-display font-black text-xl text-[#131313] leading-tight uppercase">
                  Journal
                </h4>
                <p className="font-body text-[11px] text-[#131313]/80">
                  Stories, ideas, and inspiration from the print room.
                </p>
                <div className="pt-2">
                  <span className="font-mono-code text-[10px] text-[#131313] font-bold uppercase underline">
                    Explore Articles →
                  </span>
                </div>
              </div>
            </div>

            <div className="py-2 text-center font-mono-code text-[8px] text-[#8C7A5E]">
              ISSUE NO. 142
            </div>
          </div>

          {/* SCREEN 4: MINDFUL CHOICES */}
          <div
            onClick={() => setActiveScreenIndex(3)}
            className={`
              bg-[#FAF6EC] border-2 rounded-[28px] overflow-hidden paper-shadow-md transition-all flex flex-col justify-between cursor-pointer select-none
              ${activeScreenIndex === 3 ? 'border-[#131313] ring-2 ring-[#E04F4F] scale-[1.02]' : 'border-[#131313]/40 hover:border-[#131313]'}
            `}
            style={{ height: '480px' }}
          >
            <div className="px-4 py-3 flex items-center justify-between border-b border-[#131313]/10">
              <Menu className="w-4 h-4 text-[#131313]" />
              <span className="font-display font-black text-xs tracking-wider uppercase text-[#131313]">AURORA</span>
              <ShoppingBag className="w-4 h-4 text-[#131313]" />
            </div>

            <div className="relative flex-1 p-4 flex flex-col justify-between overflow-hidden">
              {/* Botanical iris stem & newspaper */}
              <div className="absolute top-2 right-2">
                <div className="w-12 h-12 bg-[#4CA9A2] rounded-full border border-[#131313]/20" />
              </div>
              <div className="absolute top-8 right-6 z-10">
                <BotanicalBranch className="w-14 h-28" color="#131313" />
              </div>
              <div className="absolute bottom-28 left-2 rotate-[4deg]">
                <NewspaperFragment width="w-24" deckle />
              </div>

              <div className="relative z-10 mt-auto pt-24 space-y-2">
                <h4 className="font-display font-black text-lg text-[#131313] leading-tight uppercase">
                  Mindful Choices
                </h4>
                <p className="font-body text-[11px] text-[#131313]/80 leading-relaxed">
                  Sustainable materials. Ethical production. Beautiful results.
                </p>
                <div className="pt-2 flex items-center gap-1.5">
                  <Tag color="green" code="ECO">
                    Certified
                  </Tag>
                </div>
              </div>
            </div>

            <div className="py-2 text-center font-mono-code text-[8px] text-[#8C7A5E]">
              100% RECYCLED COTTON
            </div>
          </div>

          {/* SCREEN 5: CERAMIC VASE (INTERACTIVE PRODUCT DETAIL) */}
          <div
            onClick={() => setActiveScreenIndex(4)}
            className={`
              bg-[#FAF6EC] border-2 rounded-[28px] overflow-hidden paper-shadow-md transition-all flex flex-col justify-between cursor-pointer select-none
              ${activeScreenIndex === 4 ? 'border-[#131313] ring-2 ring-[#E04F4F] scale-[1.02]' : 'border-[#131313]/40 hover:border-[#131313]'}
            `}
            style={{ height: '480px' }}
          >
            <div className="px-4 py-3 flex items-center justify-between border-b border-[#131313]/10">
              <ArrowLeft className="w-4 h-4 text-[#131313]" />
              <span className="font-mono-code text-[10px] tracking-widest uppercase text-[#8C7A5E]">OBJECT</span>
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#131313]" />
                <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-[#E04F4F] text-[#FAF6EC] rounded-full text-[8px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </div>
            </div>

            {/* Product Image & Info */}
            <div className="p-4 space-y-3">
              {/* Ceramic Vase Illustration */}
              <div className="relative h-36 bg-[#F6EDE3] border border-[#131313]/20 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-2 rounded-full filter blur-xl"
                  style={{ backgroundColor: `${selectedColor}40` }}
                />
                <CeramicVaseArt className="w-24 h-32" />
              </div>

              <div>
                <h4 className="font-display font-black text-base text-[#131313] uppercase">
                  Ceramic Vase
                </h4>
                <div className="font-mono-code text-xs text-[#E04F4F] font-bold">
                  $48.00
                </div>
                <p className="font-body text-[10px] text-[#131313]/80 mt-1 line-clamp-2">
                  Handcrafted ceramic vase, textured with stone tooth grain, perfect for any space.
                </p>
              </div>

              {/* Color Swatch selector */}
              <div>
                <span className="font-mono-code text-[9px] uppercase text-[#8C7A5E] block mb-1">
                  Glaze Finish:
                </span>
                <div className="flex gap-2">
                  {[
                    { color: '#cfb99e', name: 'Raw Sand' },
                    { color: '#383838', name: 'Charcoal' },
                    { color: '#4CA9A2', name: 'Sage' },
                    { color: '#FFB74D', name: 'Ochre' },
                  ].map((swatch) => (
                    <button
                      key={swatch.color}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedColor(swatch.color);
                      }}
                      className={`w-4 h-4 rounded-full border transition-transform ${
                        selectedColor === swatch.color ? 'border-[#131313] scale-125 ring-1 ring-[#131313]' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: swatch.color }}
                      title={swatch.name}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart();
                  }}
                  className={`w-full font-mono-code text-[10px] py-2 uppercase font-bold tracking-wider transition-colors shadow-[2px_2px_0px_#8C7A5E] flex items-center justify-center gap-1 ${
                    vaseAdded ? 'bg-[#4CA9A2] text-[#FAF6EC]' : 'bg-[#131313] text-[#FAF6EC] hover:bg-[#383838]'
                  }`}
                >
                  {vaseAdded ? <Check className="w-3 h-3" /> : null}
                  <span>{vaseAdded ? 'Added to Cart!' : 'Add to Cart'}</span>
                </button>
              </div>
            </div>

            <div className="py-1 text-center font-mono-code text-[8px] text-[#8C7A5E]">
              OBJECT REF: CV-408
            </div>
          </div>

          {/* SCREEN 6: CART (2) */}
          <div
            onClick={() => setActiveScreenIndex(5)}
            className={`
              bg-[#FAF6EC] border-2 rounded-[28px] overflow-hidden paper-shadow-md transition-all flex flex-col justify-between cursor-pointer select-none
              ${activeScreenIndex === 5 ? 'border-[#131313] ring-2 ring-[#E04F4F] scale-[1.02]' : 'border-[#131313]/40 hover:border-[#131313]'}
            `}
            style={{ height: '480px' }}
          >
            <div className="px-4 py-3 flex items-center justify-between border-b border-[#131313]/10">
              <span className="font-mono-code text-[11px] font-bold tracking-wider uppercase text-[#131313]">
                Cart ({cartCount})
              </span>
              <ShoppingBag className="w-4 h-4 text-[#131313]" />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              {/* Cart Item 1: Ceramic Vase */}
              <div className="flex gap-2.5 items-center border-b border-[#131313]/15 pb-2.5">
                <div className="w-12 h-14 bg-[#F4EDD8] border border-[#131313]/20 flex items-center justify-center shrink-0">
                  <CeramicVaseArt className="w-8 h-10" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-xs text-[#131313] uppercase truncate">
                    Ceramic Vase
                  </div>
                  <div className="font-mono-code text-[10px] text-[#8C7A5E]">
                    $48.00 • Qty: 1
                  </div>
                </div>
              </div>

              {/* Cart Item 2: Linen Tote Bag */}
              <div className="flex gap-2.5 items-center border-b border-[#131313]/15 pb-2.5">
                <div className="w-12 h-14 bg-[#F4EDD8] border border-[#131313]/20 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-6 h-6 text-[#8C7A5E]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-xs text-[#131313] uppercase truncate">
                    Linen Tote Bag
                  </div>
                  <div className="font-mono-code text-[10px] text-[#8C7A5E]">
                    $36.00 • Qty: 1
                  </div>
                </div>
              </div>

              {/* Financial Tally */}
              <div className="space-y-1 font-mono-code text-[10px] bg-[#F4EDD8] p-2 border border-[#131313]/20">
                <div className="flex justify-between text-[#8C7A5E]">
                  <span>SUBTOTAL:</span>
                  <span className="font-bold text-[#131313]">$84.00</span>
                </div>
                <div className="flex justify-between text-[#8C7A5E]">
                  <span>SHIPPING:</span>
                  <span className="font-bold text-[#131313]">$6.00</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#131313]/20 font-bold text-[#131313]">
                  <span>TOTAL:</span>
                  <span className="text-[#E04F4F]">$90.00</span>
                </div>
              </div>

              <div className="pt-1">
                <button className="w-full bg-[#131313] text-[#FAF6EC] font-mono-code text-[10px] py-2 uppercase font-bold tracking-wider hover:bg-[#383838] shadow-[2px_2px_0px_#8C7A5E]">
                  Checkout →
                </button>
              </div>
            </div>

            <div className="py-1 text-center font-mono-code text-[8px] text-[#8C7A5E]">
              SECURE CHECKOUT • AURORA PRESS
            </div>
          </div>
        </div>

        {/* Bottom Material Philosophy Bar (From Image 2 footer) */}
        <div className="p-3 bg-[#FAF6EC] border-2 border-[#131313] paper-shadow-sm flex flex-wrap items-center justify-around gap-2 font-mono-code text-[10px] sm:text-xs text-[#8C7A5E] uppercase tracking-wider">
          <span className="hover:text-[#131313] font-bold">LITHOGRAPHIC TEXTURE</span>
          <span>•</span>
          <span className="hover:text-[#131313] font-bold">RISOGRAPH INK</span>
          <span>•</span>
          <span className="hover:text-[#131313] font-bold">NEWSPAPER COLLAGE</span>
          <span>•</span>
          <span className="hover:text-[#131313] font-bold">WATERCOLOR WASHES</span>
          <span>•</span>
          <span className="hover:text-[#131313] font-bold">CARDSTOCK PAPERCRAFT</span>
          <span>•</span>
          <span className="hover:text-[#131313] font-bold">ABSTRACT SHAPES & SILHOUETTES</span>
        </div>
      </div>
    </section>
  );
};
