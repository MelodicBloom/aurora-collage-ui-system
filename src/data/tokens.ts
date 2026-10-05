export interface AuroraColorToken {
  name: string;
  variable: string;
  hex: string;
  cmyk: string;
  pantone: string;
  role: string;
  layer: 'lithography' | 'risograph' | 'newspaper' | 'watercolor' | 'papercraft';
  opacityNote?: string;
}

export const COLOR_TOKENS: AuroraColorToken[] = [
  {
    name: 'Ink Primary',
    variable: '--aurora-ink',
    hex: '#1A1208',
    cmyk: '60, 55, 65, 80',
    pantone: 'Black 7 C',
    role: 'Primary text, broadsheet borders, deep shadow register',
    layer: 'lithography',
  },
  {
    name: 'Aged Newsprint',
    variable: '--aurora-newsprint',
    hex: '#F4EDD8',
    cmyk: '4, 5, 18, 0',
    pantone: 'Warm Gray 1 C',
    role: 'Base tactile paper surface, archive background tooth',
    layer: 'newspaper',
  },
  {
    name: 'Raw Cream',
    variable: '--aurora-cream',
    hex: '#FAF6EC',
    cmyk: '1, 1, 6, 0',
    pantone: '7527 C (90%)',
    role: 'Light paper surface, unprinted highlight card layer',
    layer: 'papercraft',
  },
  {
    name: 'Riso Scarlet Red',
    variable: '--aurora-riso-red',
    hex: '#E84040',
    cmyk: '0, 85, 75, 0',
    pantone: 'Bright Red U',
    role: 'Risograph accent, stamp seals, registration marks, overprint punch',
    layer: 'risograph',
  },
  {
    name: 'Riso Marine Blue',
    variable: '--aurora-riso-blue',
    hex: '#2D6BE4',
    cmyk: '80, 55, 0, 0',
    pantone: 'Blue 072 U',
    role: 'Secondary soy ink, lead headline emphasis, edition badges',
    layer: 'risograph',
  },
  {
    name: 'Riso Sunflower Yellow',
    variable: '--aurora-riso-yellow',
    hex: '#F0C620',
    cmyk: '5, 20, 90, 0',
    pantone: 'Yellow 012 U',
    role: 'Third soy ink, highlighter wash band, archival bookmark ribbons',
    layer: 'risograph',
  },
  {
    name: 'Riso Pine Green',
    variable: '--aurora-riso-green',
    hex: '#3DAA6B',
    cmyk: '75, 10, 70, 0',
    pantone: 'Green U',
    role: 'Fourth soy ink, botanical vignettes, status & growth markers',
    layer: 'risograph',
  },
  {
    name: 'Wash Violet Bloom',
    variable: '--aurora-wash-violet',
    hex: '#C4A8D8',
    cmyk: '25, 35, 2, 0',
    pantone: 'Violet 0631 U',
    role: 'Watercolor field, soft atmosphere bleed, contemplative zones',
    layer: 'watercolor',
  },
  {
    name: 'Wash Warm Peach',
    variable: '--aurora-wash-peach',
    hex: '#F2C4A0',
    cmyk: '2, 25, 35, 0',
    pantone: 'Peach 719 U',
    role: 'Warmth wash, tactile hover bloom, morning light warmth',
    layer: 'watercolor',
  },
  {
    name: 'Torn Edge Shadow',
    variable: '--aurora-torn',
    hex: '#8C7A5E',
    cmyk: '40, 45, 65, 15',
    pantone: 'Warm Gray 9 C',
    role: 'Torn fiber border, folded crease lines, deckle-edge shadow',
    layer: 'papercraft',
  },
];

export interface AuroraTypeToken {
  role: string;
  name: string;
  family: string;
  weights: string;
  usage: string;
  sample: string;
}

export const TYPE_TOKENS: AuroraTypeToken[] = [
  {
    role: 'Display',
    name: 'Playfair Display',
    family: "'Playfair Display', Georgia, serif",
    weights: '700, 900',
    usage: 'Headlines, broadsheet mastheads, editorial authority, numeral stamps',
    sample: 'THE MORNING REGISTER & PRESS',
  },
  {
    role: 'Body',
    name: 'Source Serif 4',
    family: "'Source Serif 4', Georgia, serif",
    weights: '400, 600',
    usage: 'Long-form editorial, newspaper columns, physical imprint register',
    sample: 'Ink deposited upon 120gsm unbleached rag paper creates subtle capillary bleeding along fiber directions.',
  },
  {
    role: 'Label / Code',
    name: 'DM Mono',
    family: "'DM Mono', monospace",
    weights: '400, 500',
    usage: 'Captions, plate coordinates, print run tallies, catalog codes',
    sample: 'EDITION 084/500 • DRUM: DR04-BLUE • REG: 0.15mm',
  },
  {
    role: 'Accent / Annotation',
    name: 'Caveat',
    family: "'Caveat', cursive",
    weights: '600, 700',
    usage: 'Handwritten editor notes, collage labels, marginalia, tape captions',
    sample: 'Check registration before final press pull — ink is running sweet today!',
  },
];

export const MOTION_PRINCIPLES = [
  {
    name: 'Fold-in Scroll Reveal',
    description: 'Elements enter as if unfolding from a paper crease, with a 3D perspective tilt and origin at the crease line.',
    physics: 'Perspective 1000px, rotateX(-6deg) to 0deg, cubic-bezier(0.16, 1, 0.3, 1)',
  },
  {
    name: 'Ink Smear & Overprint Bleed',
    description: 'Transitions simulate wet ink drag across physical tooth using SVG displacement & multiply blending.',
    physics: 'SVG feTurbulence baseFrequency 0.04, scale 12, blend-mode multiply',
  },
  {
    name: 'Watercolor Bloom Expansion',
    description: 'Active and hover states bleed outward organically from the touch point rather than mechanical bounds.',
    physics: 'Radial gradient blur spread with organic jitter, easing out-expo',
  },
  {
    name: 'Litho Grain Respiration',
    description: '--grain intensity dynamically modulates based on user interaction or ambient idle breath.',
    physics: 'CSS variable --grain oscillating between 0.35 and 0.52',
  },
];
