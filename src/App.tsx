import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PageGrid } from './components/layout/PageGrid';
import { GrainOverlay } from './components/ui/GrainOverlay';
import { Hero } from './components/sections/Hero';
import { ColorSystem } from './components/sections/ColorSystem';
import { Typography } from './components/sections/Typography';
import { ComponentShowcase } from './components/sections/ComponentShowcase';
import { TextureDemo } from './components/sections/TextureDemo';
import { Journal } from './components/sections/Journal';
import { CTA } from './components/sections/CTA';

export const App: React.FC = () => {
  const [grainIntensity, setGrainIntensity] = useState<number>(0.45);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for broadsheet nav bar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'layers', 'colors', 'typography', 'showcase', 'studio', 'journal', 'export'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F4EDD8] text-[#1A1208] flex flex-col font-body selection:bg-[#E84040]/20 selection:text-[#1A1208]">
      {/* Lithographic Grain Overlay reacting to --grain */}
      <GrainOverlay intensity={grainIntensity} />

      {/* Broadsheet Masthead Header */}
      <Header
        activeSection={activeSection}
        onOpenStudio={() => scrollToSection('studio')}
        onOpenExport={() => scrollToSection('export')}
      />

      {/* Main Page Layout Grid with Bleed Marks */}
      <main className="flex-1">
        <PageGrid showBleedMarks>
          <Hero
            onExploreClick={() => scrollToSection('showcase')}
            onOpenStudio={() => scrollToSection('studio')}
          />
          <ColorSystem />
          <Typography />
          <ComponentShowcase />
          <TextureDemo
            grainIntensity={grainIntensity}
            setGrainIntensity={setGrainIntensity}
          />
          <Journal />
          <CTA />
        </PageGrid>
      </main>

      {/* Print Colophon Footer */}
      <Footer />
    </div>
  );
};

export default App;
