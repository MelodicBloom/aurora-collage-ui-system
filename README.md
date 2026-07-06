# AURORA Collage UI System

> *What if the interface itself was made from torn paper, pressed ink, and morning light?*

**AURORA** is a production-ready design system built around five analog printing and collage aesthetics — lithographic texture, risograph ink, newspaper collage, watercolor washes, and papercraft assemblage — unified into a single coherent visual language for the digital surface.

This is not a theme. It is a material philosophy. Every token, every component, every motion curve is derived from asking: *what would this feel like if you could touch it?*

**Live:** Vercel · **Stack:** Vite · React · TypeScript · Tailwind CSS v3 · **Org:** [MelodicBloom](https://github.com/MelodicBloom)

---

## The Five Aesthetic Layers

AURORA is built from five distinct material aesthetics that layer rather than compete:

**Lithographic Texture** — the foundation. Stone-ground grain, ink-on-paper surface quality, slight registration misalignment. Every surface has tooth. Nothing is perfectly flat.

**Risograph Ink** — the color logic. Limited ink palette with deliberate bleed, overprint behavior, and misregistration as a design feature. Colors feel physically deposited, not painted on screen.

**Newspaper Collage** — the layout language. Cut-and-paste editorial logic, headline-as-headline, column grids that echo broadsheet layout, torn-edge dividers, archival yellowing.

**Watercolor Washes** — the softness layer. Gradient fields that bleed and bloom rather than transition linearly. Used for backgrounds, hover states, and emotional emphasis zones.

**Papercraft Assemblage** — the dimensionality. Folded-paper shadows, layered card depth, the impression that components are physically stacked rather than rendered.

---

## Design Tokens

### Color Palette

| Token | Value | Role |
|-------|-------|------|
| `--aurora-ink` | `#1A1208` | Primary text, deep shadow |
| `--aurora-newsprint` | `#F4EDD8` | Base surface, aged paper |
| `--aurora-cream` | `#FAF6EC` | Light surface, unprinted zone |
| `--aurora-riso-red` | `#E84040` | Risograph accent, overprint |
| `--aurora-riso-blue` | `#2D6BE4` | Second ink, headline emphasis |
| `--aurora-riso-yellow` | `#F0C620` | Third ink, highlight band |
| `--aurora-riso-green` | `#3DAA6B` | Fourth ink, nature / growth |
| `--aurora-wash-violet` | `#C4A8D8` | Watercolor field, soft emphasis |
| `--aurora-wash-peach` | `#F2C4A0` | Warmth wash, hover state |
| `--aurora-torn` | `#8C7A5E` | Torn edge, fold shadow |

### Typography

| Role | Family | Weight | Notes |
|------|--------|--------|-------|
| Display | Playfair Display | 700–900 | Headlines, editorial authority |
| Body | Source Serif 4 | 400–600 | Long-form reading, newsprint register |
| Label | DM Mono | 400 | Captions, metadata, print codes |
| Accent | Caveat | 700 | Handwritten annotation, collage labels |

### Spacing & Texture Scale

Spacing follows an 8pt base grid with a `--grain` overlay CSS variable that controls texture intensity (0 = flat, 1 = heavy grain). Components consume `--grain` to modulate their surface quality contextually.

---

## Component Architecture

```
src/
  components/
    layout/
      Header.tsx           ← Broadsheet masthead header
      Footer.tsx           ← Print colophon footer
      PageGrid.tsx         ← Column grid with bleed zones
    sections/
      Hero.tsx             ← Torn-paper collage hero
      ColorSystem.tsx      ← Ink palette specimen
      Typography.tsx       ← Type specimen with lead lines
      ComponentShowcase.tsx ← Interactive component gallery
      TextureDemo.tsx      ← Live grain + wash demo
      Journal.tsx          ← Editorial blog layout
      CTA.tsx              ← Papercraft CTA panel
    ui/
      Button.tsx           ← Stamp-press button variants
      Card.tsx             ← Layered paper card with fold shadow
      Tag.tsx              ← Risograph label tag
      Divider.tsx          ← Torn-edge divider
      WatercolorField.tsx  ← Procedural wash background
      GrainOverlay.tsx     ← SVG turbulence grain layer
    motion/
      Reveal.tsx           ← Fold-in scroll reveal
      Smear.tsx            ← Ink smear transition
  data/
    tokens.ts              ← Design token registry
    components.ts          ← Component metadata
  styles/
    globals.css            ← CSS custom properties + grain filter
```

---

## Motion Principles

AURORA motion is governed by physical material behavior, not easing curves chosen for elegance:

- **Fold-in reveal** — elements enter as if unfolding from a crease. `transform-origin` at fold line, slight perspective tilt on entry.
- **Ink smear transition** — page transitions use an SVG displacement filter that simulates wet ink drag across the surface.
- **Watercolor bloom** — hover states expand outward from center like watercolor bleeding into wet paper. No sharp boundaries.
- **Grain breathe** — `--grain` intensity pulses slowly on idle states, giving the surface a living, material quality.

All motion respects `prefers-reduced-motion`.

---

## Why These Five Aesthetics Together

Lithography, risography, newspaper collage, watercolor, and papercraft are not arbitrary. They are five different relationships between the maker’s hand and the printed surface:

- Lithography: the stone remembers.
- Risograph: the ink decides where it lands.
- Collage: the archive is reorganized, not erased.
- Watercolor: the water does half the work.
- Papercraft: depth without mass.

Together they form a material language that is simultaneously archival and alive, structured and accidental, precise and generous. That is the tonal target for every interface that uses AURORA.

---

## Getting Started

```bash
git clone https://github.com/MelodicBloom/aurora-collage-ui-system
cd aurora-collage-ui-system
npm install
npm run dev
# http://localhost:5173
```

Build:
```bash
npm run build
npm run preview
```

Type check:
```bash
npm run typecheck
```

---

## Part of the Morphica Family

AURORA is one system in a broader ecosystem of material-first design languages:

| System | Aesthetic |
|--------|-----------|
| [FLORÉ](https://github.com/MelodicBloom/flore-orthography-memphis-ui) | Orthography × Memphis × Illustrated Floral × Impasto |
| [Mochi UI](https://github.com/MelodicBloom/mochi-ui) | Claymorphism · Spring physics · Haptics |
| [Jewelmorphism](https://github.com/MelodicBloom/neumorphism-soft-ui-design-system) | Gems · Crystal · Chromatic depth |
| [Tactile Textile](https://github.com/MelodicBloom/tactile-textile-system) | Beaded · Quilted · Material-maximalist |
| [MÄG-RISO](https://github.com/MelodicBloom/magical-risograph) | Risograph print studio · Matter.js physics |

Each system in the family asks the same question from a different material starting point. AURORA asks it from paper.

---

*Part of [MelodicBloom](https://github.com/MelodicBloom) — Philadelphia, 2026*
