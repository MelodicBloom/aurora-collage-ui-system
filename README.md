# AURORA Collage UI System

> Design system for quiet commerce, tactile storytelling, and editorial interfaces.

A production-ready Vite + React + TypeScript static showcase featuring lithographic texture, risograph ink, newspaper collage, watercolor washes, and cardstock paper assemblage.

## Stack

| Layer | Tool |
|-------|------|
| Framework | Vite 6 + React 18 + TypeScript 5 |
| Styling | Tailwind CSS 3 + CSS custom properties |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Routing | React Router DOM 6 |
| CI | GitHub Actions (pnpm + Node 20) |

## Quick start

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Routes

| Path | Screen |
|------|--------|
| `/` | Home / Discover |
| `/collection` | Collection |
| `/journal` | Journal + Values |
| `/product` | Product Detail |
| `/cart` | Cart + Checkout |
| `/typography` | Type Specimen |
| `/design-system` | Token Reference + Motion Poster |

## Packages

```
src/packages/
  tokens/       — colors, typography, spacing, radius, shadow, texture, motion (CSS + JSON)
  visuals/      — visual-system.json, collage-elements.ts
  animation/    — motion-presets.ts, transitions.ts
  copy/         — screen-copy.ts, narrative-copy.ts
  audio/        — audio-spec.json, optional-audio-engine.ts (opt-in, user-gesture gated)
```

## Accessibility

- All animations respect `prefers-reduced-motion`
- Focus states use visible ring
- Buttons carry accessible labels
- Optional audio requires explicit user gesture + mute toggle

## License

Private — AURORA Design System.
