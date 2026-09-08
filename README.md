# AURORA Collage UI System

> *What if the interface itself was made from torn paper, pressed ink, and morning light?*

**AURORA** is a working Vite + React + TypeScript interface system exploring lithographic texture, risograph ink, newspaper collage, watercolor washes, and papercraft assemblage as a coherent digital material language.

The repository currently includes routed storefront screens, reusable AURORA components, lower-level UI primitives, motion presets, visual/copy/audio packages, and CSS design tokens. Storybook and component-level interaction/visual-regression coverage are planned next-stage infrastructure rather than current capabilities.

**Deployment:** Vercel (not currently public) · **Stack:** Vite · React · TypeScript · Tailwind CSS v3 · Framer Motion · **Org:** [MelodicBloom](https://github.com/MelodicBloom)

---

## Material language

AURORA layers five related aesthetics:

- **Lithographic texture** — ink-on-paper grain and imperfect surface character.
- **Risograph ink** — limited, high-character color with print-inspired overlap and emphasis.
- **Newspaper collage** — editorial hierarchy, archival composition, cut-and-paste logic.
- **Watercolor washes** — soft atmospheric fields and emotional emphasis.
- **Papercraft assemblage** — layered cards, fold-like depth, and physical surface cues.

These are design constraints, not separate themes. Components should remain legible and usable first, then express the material system through tokens, surface, motion, and composition.

---

## Implemented design tokens

The canonical CSS tokens live in `src/styles/tokens.css`.

### Color

| Token | Value | Role |
|---|---:|---|
| `--color-ink` | `#131313` | Primary ink / text |
| `--color-charcoal` | `#383938` | Secondary dark tone |
| `--color-paper` | `#F6EDE3` | Primary paper surface |
| `--color-warm-paper` | `#EFE1D0` | Warm secondary surface |
| `--color-riso-red` | `#E94F4F` | Risograph red accent |
| `--color-riso-gold` | `#F7B74D` | Risograph gold accent |
| `--color-water-teal` | `#4CABA2` | Water / wash accent |
| `--color-violet-ink` | `#5E4B88` | Violet ink accent |
| `--color-newsprint` | `#B8A891` | Newsprint / archival neutral |
| `--color-soft-black` | `#1B1A18` | Soft-black surface / text |

### Typography

| Token | Current family |
|---|---|
| `--font-display` | Playfair Display, Georgia, serif |
| `--font-body` | Inter, system-ui, sans-serif |
| `--font-mono` | IBM Plex Mono, Courier New, monospace |

The token file also defines the current type scale (`--text-xs` through `--text-5xl`), line-height tokens, spacing tokens (`--space-*`), radius tokens (`--radius-*`), and paper/lift shadow tokens (`--shadow-*`).

Texture effects are currently implemented by components/styles rather than by the previously documented `--grain` scalar; consumers should not depend on a `--grain` token until one is explicitly added to the canonical token contract.

---

## Current component architecture

```text
src/
  app/
    App.tsx
    routes.tsx
  components/
    aurora/
      AuroraFrame.tsx
      CartLineItem.tsx
      CollageCard.tsx
      MotionPoster.tsx
      NewspaperStrip.tsx
      PaperLayer.tsx
      ProductTile.tsx
      RisoButton.tsx
      SilhouetteFigure.tsx
      TextureSwatch.tsx
      WatercolorPanel.tsx
    ui/
      button.tsx
      card.tsx
      input.tsx
  packages/
    animation/
    audio/
    copy/
    tokens/
    visuals/
  styles/
    tokens.css
    ...
```

The current split is intentional but not yet a complete public component API:

- `components/ui/` contains lower-level interface primitives.
- `components/aurora/` contains brand/material-aware components and storefront-oriented compositions.
- `packages/` contains reusable system data and behavior contracts.
- `styles/tokens.css` is the canonical CSS token source.

The next architecture pass should make component boundaries, state contracts, accessibility behavior, responsive rules, and export surfaces explicit before the system is treated as a distributable component library.

---

## Current interaction behavior

AURORA already uses Framer Motion for tactile interaction. For example, `RisoButton` exposes `primary`, `outline`, and `ghost` variants plus `disabled`, and implements hover/tap motion. `ProductTile` provides a routed storefront card with a lifted hover treatment.

These behaviors are currently component-local. They are **not yet** governed by a shared interaction-state model or demonstrated in Storybook.

The target state vocabulary for the next phase is:

`rest` · `hover` · `focus-visible` · `active/pressed` · `selected` · `loading/listening` · `success` · `error` · `disabled/deactivated`

Not every component should implement every state. Each component should declare which states are valid, what user/system event enters and exits them, the visual/motion response, ARIA semantics, reduced-motion fallback, and whether the state is controlled or internal.

---

## Storybook transition target

The next bounded implementation should add Storybook as an executable component contract rather than only a gallery.

Minimum target:

1. Storybook configured for Vite/React/TypeScript and the real AURORA global styles/tokens.
2. Stories for the first business-critical primitives: Button, Input, Card, ProductTile, CartLineItem, and one feedback/status control.
3. Explicit stories for valid states and variants, including keyboard focus and disabled behavior.
4. Interaction stories that demonstrate realistic flows such as add-to-cart, quantity update, form validation, submit/loading/success, and listening/processing state transitions.
5. Responsive viewport coverage for compact mobile, mobile, tablet, desktop, and wide desktop.
6. Accessibility checks and keyboard-path assertions.
7. Component-level interaction tests plus visual-regression snapshots for stable states.
8. `prefers-reduced-motion` coverage for all animated controls.
9. A documented export/API boundary so stories import components the same way consumers will.

### Definition of done for that phase

The Storybook transition is complete only when:

- each selected component renders in isolation without app-router dependencies unless explicitly wrapped;
- state/variant props are typed and documented;
- pointer and keyboard behavior produce equivalent business outcomes;
- disabled/deactivated controls cannot trigger actions;
- loading/listening states expose programmatic status and do not create duplicate actions;
- responsive stories show no horizontal overflow or clipped controls;
- interactive stories execute the intended flow rather than merely showing static mock states;
- accessibility checks have no serious/critical violations in the covered stories;
- visual snapshots are deterministic enough for CI;
- lint, typecheck, app build, Storybook build, interaction tests, and visual checks are represented as CI gates.

---

## Motion principles

Motion should model material behavior while preserving interaction clarity:

- **Press / stamp** — short compression, registration-shift, or ink-transfer response for activation.
- **Lift / peel** — restrained z-axis/lift behavior for hover or movable surface affordance.
- **Wash / bloom** — soft expansion for emphasis, progress, or receptive/listening states.
- **Fold / reveal** — directional entry for disclosed content.
- **Smear / transition** — reserved for larger transitions, not controls requiring immediate legibility.

All motion must preserve a meaningful reduced-motion representation. Motion is feedback, not the only carrier of state.

---

## Storefront capability target

The component system should be able to demonstrate common business/storefront tasks without abandoning the AURORA aesthetic:

- browse/search/filter a collection;
- inspect a product and choose options;
- add/remove/update cart items;
- show price, stock, discount, validation, loading, success, and error states;
- complete an accessible form/checkout-like sequence using deterministic demo data;
- expose navigation, dialog/drawer, toast/status, tabs/segmented choice, quantity controls, and empty states;
- demonstrate responsive behavior and keyboard operation for each flow.

These demonstration flows should use local fixtures/adapters. They should prove component wiring without coupling Storybook to a live commerce backend.

---

## Getting started

```bash
git clone https://github.com/MelodicBloom/aurora-collage-ui-system
cd aurora-collage-ui-system
pnpm install
pnpm dev
# http://localhost:5173
```

Quality/build commands currently available:

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm preview
```

---

## Accessibility and QA direction

The current CI runs lint, typecheck, and build. The Storybook phase should extend that baseline with component interaction, accessibility, responsive, reduced-motion, and deterministic visual-regression checks.

A component is not considered complete because it looks correct in the full-page demo. It must also be independently renderable, semantically correct, keyboard-operable, responsive, state-complete for its declared contract, and testable in isolation.

---

## Part of the Morphica family

AURORA is one system in a broader ecosystem of material-first design languages:

| System | Aesthetic |
|---|---|
| [FLORÉ](https://github.com/MelodicBloom/flore-orthography-memphis-ui) | Orthography × Memphis × Illustrated Floral × Impasto |
| [Mochi UI](https://github.com/MelodicBloom/mochi-ui) | Claymorphism · Spring physics · Haptics |
| [Jewelmorphism](https://github.com/MelodicBloom/neumorphism-soft-ui-design-system) | Gems · Crystal · Chromatic depth |
| [Tactile Textile](https://github.com/MelodicBloom/tactile-textile-system) | Beaded · Quilted · Material-maximalist |
| [MÄG-RISO](https://github.com/MelodicBloom/magical-risograph) | Risograph print studio · Matter.js physics |

Each system starts from a different material language while aiming for the same outcome: expressive interfaces whose behavior remains understandable, testable, and reusable.

---

*Part of [MelodicBloom](https://github.com/MelodicBloom) — Philadelphia, 2026*
