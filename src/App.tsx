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
import { SeasonalMockups } from './components/sections/SeasonalMockups';
import { MobileGallery } from './components/sections/MobileGallery';
import { CollageAssetLibrary } from './components/sections/CollageAssetLibrary';
import { Journal } from './components/sections/Journal';
import { CTA } from './components/sections/CTA';

export const App: React.FC = () => {
  const [grainIntensity, setGrainIntensity] = useState<number>(0.45);
  const [risoNoiseIntensity, setRisoNoiseIntensity] = useState<number>(0.35);
  const [showRisoNoise, setShowRisoNoise] = useState<boolean>(true);
  const [showRegistrationMarks, setShowRegistrationMarks] = useState<boolean>(true);
  const [showBleedMargin, setShowBleedMargin] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const toggleRegistrationMarks = () => {
    setShowRegistrationMarks((prev) => !prev);
  };

  const toggleBleedMargin = () => {
    setShowBleedMargin((prev) => !prev);
  };

  // Track active section for broadsheet nav bar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'layers',
        'colors',
        'typography',
        'showcase',
        'studio',
        'seasonal',
        'mobile-showcase',
        'asset-library',
        'journal',
        'export'
      ];
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
      {/* Lithographic Grain & Riso Stipple Noise Overlay */}
      <GrainOverlay
        intensity={grainIntensity}
        risoNoiseIntensity={risoNoiseIntensity}
        showRisoNoise={showRisoNoise}
      />

      {/* Broadsheet Masthead Header */}
      <Header
        activeSection={activeSection}
        showRegistrationMarks={showRegistrationMarks}
        onToggleRegistrationMarks={toggleRegistrationMarks}
        showBleedMargin={showBleedMargin}
        onToggleBleedMargin={toggleBleedMargin}
        onOpenStudio={() => scrollToSection('studio')}
        onOpenExport={() => scrollToSection('export')}
      />

      {/* Main Page Layout Grid with Bleed Marks & Bleed Margin */}
      <main className="flex-1">
        <PageGrid
          showRegistrationMarks={showRegistrationMarks}
          onToggleRegistrationMarks={toggleRegistrationMarks}
          showBleedMargin={showBleedMargin}
          onToggleBleedMargin={toggleBleedMargin}
        >
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
            risoNoiseIntensity={risoNoiseIntensity}
            setRisoNoiseIntensity={setRisoNoiseIntensity}
            showRisoNoise={showRisoNoise}
            setShowRisoNoise={setShowRisoNoise}
            showRegistrationMarks={showRegistrationMarks}
            onToggleRegistrationMarks={toggleRegistrationMarks}
            showBleedMargin={showBleedMargin}
            onToggleBleedMargin={toggleBleedMargin}
          />
          {/* Newly Added Sections from User's Visual Design System Images */}
          <SeasonalMockups />
          <MobileGallery />
          <CollageAssetLibrary />
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
