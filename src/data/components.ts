export interface ComponentDoc {
  id: string;
  name: string;
  category: 'Actions' | 'Surfaces' | 'Editorial' | 'Overlays' | 'Feedback';
  aesthetic: 'Lithography' | 'Risograph' | 'Newspaper' | 'Watercolor' | 'Papercraft';
  description: string;
  props: { name: string; type: string; default: string; desc: string }[];
  usageSnippet: string;
}

export const COMPONENTS_CATALOG: ComponentDoc[] = [
  {
    id: 'button-stamp',
    name: 'StampPress Button',
    category: 'Actions',
    aesthetic: 'Lithography',
    description: 'A tactile press button styled like a vintage wooden rubber stamp or hot-metal printing block with physical depression feedback.',
    props: [
      { name: 'variant', type: "'riso-red' | 'riso-blue' | 'ink' | 'outline' | 'ghost'", default: "'riso-red'", desc: 'Inking style and blend mode' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: 'Plate dimensions' },
      { name: 'stampBorder', type: 'boolean', default: 'true', desc: 'Dotted or double-rule stamp edge' },
    ],
    usageSnippet: `<Button variant="riso-red" stampBorder>
  Pull Proof No. 1
</Button>`,
  },
  {
    id: 'paper-card',
    name: 'Layered Deckle Card',
    category: 'Surfaces',
    aesthetic: 'Papercraft',
    description: 'Multi-ply archival board card with layered deckle edge, folded corner shadow, and optional washi tape anchoring strip.',
    props: [
      { name: 'elevation', type: "'flat' | 'raised' | 'stacked'", default: "'raised'", desc: 'Shadow weight and fold offset' },
      { name: 'tapeAccent', type: "boolean | 'top' | 'corner'", default: "'top'", desc: 'Washi tape strip placement' },
      { name: 'tornEdge', type: "'none' | 'bottom' | 'deckle'", default: "'none'", desc: 'Procedural fiber tear profile' },
    ],
    usageSnippet: `<Card elevation="stacked" tapeAccent="top">
  <h3>Plate Proof</h3>
  <p>Hand-cut typography specimen.</p>
</Card>`,
  },
  {
    id: 'riso-tag',
    name: 'Perforated Riso Tag',
    category: 'Surfaces',
    aesthetic: 'Risograph',
    description: 'Printed baggage and library docket tag featuring punch holes, misregistration chromatic edge, and edition numbering.',
    props: [
      { name: 'color', type: "'red' | 'blue' | 'yellow' | 'green' | 'violet'", default: "'red'", desc: 'Single drum spot ink color' },
      { name: 'perforated', type: 'boolean', default: 'true', desc: 'Scalloped ticket perforation edges' },
      { name: 'code', type: 'string', default: '""', desc: 'Monospace lot number or serial stamp' },
    ],
    usageSnippet: `<Tag color="blue" code="LOT-401" perforated>
  Vol. 12 Specimen
</Tag>`,
  },
  {
    id: 'torn-divider',
    name: 'Torn-Edge Fiber Rule',
    category: 'Editorial',
    aesthetic: 'Newspaper',
    description: 'An organic torn-paper divider with fibrous paper fringes, archival tone decay, and optional broadsheet lead lines.',
    props: [
      { name: 'style', type: "'torn' | 'deckle' | 'broadsheet' | 'perforated'", default: "'torn'", desc: 'Dividing material edge geometry' },
      { name: 'ornament', type: 'string', default: '""', desc: 'Center glyph (e.g. ❦ or ❖ or star)' },
    ],
    usageSnippet: `<Divider style="broadsheet" ornament="❖" />`,
  },
  {
    id: 'watercolor-field',
    name: 'Procedural Wash Field',
    category: 'Surfaces',
    aesthetic: 'Watercolor',
    description: 'Generative pigment diffusion canvas that blooms along paper grain with gentle radial chromatic dissipation.',
    props: [
      { name: 'tint', type: "'violet' | 'peach' | 'amber' | 'sage' | 'multi'", default: "'violet'", desc: 'Pigment palette wash' },
      { name: 'intensity', type: "'subtle' | 'vibrant' | 'heavy'", default: "'subtle'", desc: 'Color bleed density' },
      { name: 'interactive', type: 'boolean', default: 'true', desc: 'Blooms on cursor hover' },
    ],
    usageSnippet: `<WatercolorField tint="violet" intensity="subtle">
  <div className="p-8">Content cradled in pigment</div>
</WatercolorField>`,
  },
  {
    id: 'grain-overlay',
    name: 'Litho Grain Canvas',
    category: 'Overlays',
    aesthetic: 'Lithography',
    description: 'SVG turbulence filter generating authentic stone-ground paper tooth and microscopic ink voids.',
    props: [
      { name: 'intensity', type: 'number', default: '0.45', desc: 'Noise density (0.0 to 1.0)' },
      { name: 'animated', type: 'boolean', default: 'false', desc: 'Subtle atmospheric respiration' },
    ],
    usageSnippet: `<GrainOverlay intensity={0.45} />`,
  },
  {
    id: 'ink-blot',
    name: 'Wet-on-Dry InkBlot',
    category: 'Surfaces',
    aesthetic: 'Lithography',
    description: 'Capillary SVG displacement filter simulating vegetable soy ink bleeding into unbleached rag paper fibers with uneven opacity pooling.',
    props: [
      { name: 'variant', type: "'droplet' | 'splatter' | 'smear' | 'pooling' | 'bleed'", default: "'droplet'", desc: 'Physical ink pooling profile' },
      { name: 'color', type: "'ink' | 'riso-red' | 'riso-blue' | 'riso-violet' | 'riso-sage' | 'riso-ochre'", default: "'ink'", desc: 'Vegetable soy spot pigment' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl' | number", default: "'md'", desc: 'Capillary spread diameter' },
      { name: 'opacity', type: 'number', default: '0.85', desc: 'Capillary absorption density' },
    ],
    usageSnippet: `<InkBlot variant="splatter" color="riso-red" size="lg" opacity={0.45} />`,
  },
];
