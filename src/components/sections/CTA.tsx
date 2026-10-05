import React, { useState } from 'react';
import { Download, Copy, Check, Terminal, Code2, Sparkles, Stamp } from 'lucide-react';
import { Button } from '../ui/Button';
import { Tag } from '../ui/Tag';
import { COLOR_TOKENS } from '../../data/tokens';

export const CTA: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tailwind' | 'css' | 'json'>('tailwind');
  const [copied, setCopied] = useState(false);
  const [stampedSeal, setStampedSeal] = useState(false);

  const tailwindSnippet = `// tailwind.config.js or CSS Theme
export default {
  theme: {
    extend: {
      colors: {
        aurora: {
          ink: '#1A1208',
          newsprint: '#F4EDD8',
          cream: '#FAF6EC',
          'riso-red': '#E84040',
          'riso-blue': '#2D6BE4',
          'riso-yellow': '#F0C620',
          'riso-green': '#3DAA6B',
          'wash-violet': '#C4A8D8',
          'wash-peach': '#F2C4A0',
          torn: '#8C7A5E',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['DM Mono', 'monospace'],
        hand: ['Caveat', 'cursive'],
      }
    }
  }
};`;

  const cssSnippet = `:root {
  --aurora-ink: #1A1208;
  --aurora-newsprint: #F4EDD8;
  --aurora-cream: #FAF6EC;
  --aurora-riso-red: #E84040;
  --aurora-riso-blue: #2D6BE4;
  --aurora-riso-yellow: #F0C620;
  --aurora-riso-green: #3DAA6B;
  --aurora-wash-violet: #C4A8D8;
  --aurora-wash-peach: #F2C4A0;
  --aurora-torn: #8C7A5E;

  /* Spacing & Surface */
  --grain: 0.45;
  --misregistration-x: 1.5px;
  --misregistration-y: -1.0px;
}`;

  const jsonSnippet = JSON.stringify(
    {
      name: 'AURORA Collage UI System',
      version: '1.0.0',
      tokens: COLOR_TOKENS.map((t) => ({
        name: t.name,
        variable: t.variable,
        value: t.hex,
        cmyk: t.cmyk,
        pantone: t.pantone,
      })),
    },
    null,
    2
  );

  const getCurrentSnippet = () => {
    switch (activeTab) {
      case 'tailwind':
        return tailwindSnippet;
      case 'css':
        return cssSnippet;
      case 'json':
        return jsonSnippet;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="export" className="py-16 border-t-2 border-[#1A1208] max-w-7xl mx-auto px-4 sm:px-6">
      {/* Papercraft Container */}
      <div className="bg-[#FAF6EC] border-2 border-[#1A1208] p-6 sm:p-12 paper-shadow-lift relative">
        <div className="absolute -top-3 left-1/4 w-32 h-6 masking-tape rotate-[-1.5deg]" />
        
        {/* Interactive Red Rubber Stamp Seal */}
        <div
          onClick={() => setStampedSeal(!stampedSeal)}
          className={`
            absolute top-6 right-6 cursor-pointer select-none transition-all duration-200 border-2 p-3 text-center
            ${
              stampedSeal
                ? 'border-[#E84040] text-[#E84040] rotate-[-8deg] scale-105 shadow-[2px_3px_0px_#1A1208]'
                : 'border-[#8C7A5E]/40 text-[#8C7A5E] rotate-6 hover:border-[#E84040] hover:text-[#E84040]'
            }
          `}
          title="Click to Stamp Proof Seal"
        >
          <div className="font-mono-code text-[10px] font-bold tracking-widest uppercase">
            {stampedSeal ? '★ OFFICIAL SEAL ★' : 'TAP TO STAMP'}
          </div>
          <div className="font-display font-black text-xs uppercase">
            CERTIFIED PRESS
          </div>
          <div className="font-mono-code text-[9px]">
            MELODICBLOOM 2026
          </div>
        </div>

        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <Tag color="red" code="EXPORT-V1">
              Production Kit
            </Tag>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#1A1208] uppercase leading-tight">
            Bring Pressed Ink & Torn Paper Into Your Next App
          </h2>
          <p className="font-body text-base text-[#1A1208]/85 mt-3 leading-relaxed">
            Copy the design tokens directly into your Tailwind configuration, CSS root variables, or design token repository. Free and open source for any project.
          </p>
        </div>

        {/* Code Tabs */}
        <div className="border border-[#1A1208] bg-[#F4EDD8] mb-6">
          <div className="flex border-b border-[#1A1208] bg-[#FAF6EC] justify-between items-center px-4 py-2">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('tailwind')}
                className={`font-mono-code text-xs px-3 py-1.5 border cursor-pointer ${
                  activeTab === 'tailwind'
                    ? 'bg-[#1A1208] text-[#FAF6EC] border-[#1A1208]'
                    : 'bg-[#FAF6EC] text-[#1A1208] border-transparent hover:border-[#1A1208]/40'
                }`}
              >
                tailwind.config.js
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`font-mono-code text-xs px-3 py-1.5 border cursor-pointer ${
                  activeTab === 'css'
                    ? 'bg-[#1A1208] text-[#FAF6EC] border-[#1A1208]'
                    : 'bg-[#FAF6EC] text-[#1A1208] border-transparent hover:border-[#1A1208]/40'
                }`}
              >
                globals.css
              </button>
              <button
                onClick={() => setActiveTab('json')}
                className={`font-mono-code text-xs px-3 py-1.5 border cursor-pointer ${
                  activeTab === 'json'
                    ? 'bg-[#1A1208] text-[#FAF6EC] border-[#1A1208]'
                    : 'bg-[#FAF6EC] text-[#1A1208] border-transparent hover:border-[#1A1208]/40'
                }`}
              >
                tokens.json
              </button>
            </div>

            <Button
              variant="riso-red"
              size="sm"
              leadIcon={copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              onClick={handleCopy}
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Code'}
            </Button>
          </div>

          <pre className="p-4 sm:p-6 font-mono-code text-xs text-[#1A1208] overflow-x-auto max-h-80 leading-relaxed bg-[#F4EDD8]">
            <code>{getCurrentSnippet()}</code>
          </pre>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1A1208]/20 font-mono-code text-xs text-[#8C7A5E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3DAA6B] inline-block" />
            <span>Compatible with Tailwind CSS v3 & v4, Next.js, Vite, and Astro</span>
          </div>
          <div>
            GitHub: <a href="https://github.com/MelodicBloom/aurora-collage-ui-system" target="_blank" rel="noreferrer" className="underline hover:text-[#E84040]">MelodicBloom/aurora-collage-ui-system</a>
          </div>
        </div>
      </div>
    </section>
  );
};
