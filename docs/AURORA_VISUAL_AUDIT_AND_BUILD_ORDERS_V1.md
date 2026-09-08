# AURORA visual audit + build orders v1

Status date: 2026-09-08

## Evidence boundary

The current Vercel feature deployment is verified `READY` and serves the compiled application. This audit combines the live deployment response with the exact rendered component/layout/style sources. A pixel screenshot capture was attempted through the available design capture path but could not be completed with the current external-preview capture tooling, so findings below are **render-structure grounded, not pixel-measured**. Any spacing/color claim that requires pixel measurement remains a visual-QA item rather than a measured finding.

## What already reads as AURORA

- The cream paper ground + fixed lithographic line texture creates a continuous physical surface instead of a generic white SaaS canvas.
- Playfair display hierarchy, mono edition labels, limited riso color accents, and warm paper cards form a coherent editorial/material register.
- The hero/product/cart/system routes now share a recognizable vocabulary: rounded paper objects, washed color fields, border ink, generous negative space, and low-pressure CTAs.
- Sticky navigation preserves orientation without visually dominating the page.
- Product and cart routes now demonstrate actual state changes instead of being static aesthetic specimens.

## Visual/interaction weaknesses to resolve next

### 1. Product evidence is still too abstract
`ProductTile` and the product hero use repeated abstract vase/blob silhouettes. This is attractive as a system specimen but weak as a storefront proof because users cannot judge scale, finish, included features, or real variation. Replace one bounded product family with four evidence images: hero, in-scale/context, detail/material, and alternate angle. Preserve collage framing around the evidence rather than replacing evidence with collage.

### 2. Motion is coherent but not yet ownable
Current motion primarily uses lift, scale, slight rotation, opacity and drifting circular fields. Those gestures are competent but broadly generic. Promote AURORA-specific state motions—Press Register, Decision Bloom, Paper Peel, Listening Registration Rings, Archive Reveal—into governed recipes with deterministic test modes.

### 3. The mobile navigation is visibly incomplete as a behavior
The mobile menu button renders but has no open/close state or menu surface. It must become a real disclosure/drawer with focus management, Escape close, outside-click behavior, route-close behavior, scroll containment, and reduced-motion variant.

### 4. Large expressive type must be tested as content changes
The current hero scale is memorable, but line wrapping and translation/longer labels can easily destabilize it. Storybook viewport/content-stress stories should test long titles, long CTA labels, missing optional metadata, 200% zoom, and 320–390px widths.

### 5. Texture needs a hierarchy
The global litho treatment plus card-level texture can become visual noise if every future component adds another material layer. Define texture intensity tiers: `none`, `ambient`, `surface`, `evidence-emphasis`. Functional content and small text should never sit under high-frequency texture.

## Function and aesthetic principle

AURORA is strongest when it behaves like **a well-handled printed object that happens to be interactive**. It should not imitate paper literally at every moment. The material metaphors have bounded jobs:

- **Paper** = containment, provenance, hierarchy, revisitable information.
- **Risograph registration** = pressure, activation, selected/unselected relationship, human imperfection.
- **Watercolor** = gradual emphasis, attention arriving rather than flashing.
- **Collage** = relationship, comparison, editorial memory, evidence assembled without pretending it came from one source.
- **Newsprint/mono notation** = traceability, status, metadata, edition/receipt language.

When a material effect conflicts with clarity, speed, accessibility, or confidence, clarity wins.

## Build orders

### 0 — Default-branch reconciliation
Resolve PR #4 without force rewriting `main`. Preserve verified application code and the canonical README. This is prerequisite to reliable base-branch PR checks.

### 1 — Reproducibility
Commit `pnpm-lock.yaml`; run two clean installs; restore frozen lockfile + cache; attach receipt.

### 2 — Storybook evidence surface
Install Storybook 9 React/Vite + a11y + browser/Vitest testing. Add global tokens/decorators, responsive fixtures, reduced motion, forced colors, deterministic animation flag.

### 3 — Contract-driven component generator
Contract → generated story skeleton → interaction test skeleton → evidence receipt. First six components: RisoButton, Input, ProductTile, CartLineItem, ListeningStatusControl, Drawer/Dialog.

### 4 — Commercial proof flows
Build deterministic stories for product decision, cart adjustment, lead/freebie, service inquiry, and listening/processing. Instrument only privacy-safe event names/IDs; no PII in analytics payloads.

### 5 — AURORA motion grammar
Implement the five governed recipes from Issue #5. Each recipe needs: semantic purpose, valid states, timing envelope, reduced-motion equivalent, deterministic snapshot mode, accessibility notes.

### 6 — Product confidence imagery
One real or high-quality specimen family before expanding catalog breadth. Required evidence: scale/context, material/detail, alternate view, purchase-critical text next to CTA.

### 7 — Free value + lead acquisition
Ship the Quiet Commerce Field Kit without a gate. After download begins, offer an optional Field Notes signup. Measure `fieldkit.download_start`, `fieldkit.download_complete`, `fieldnotes.opt_in_open`, `fieldnotes.opt_in_submit` without embedding email values in analytics.

### 8 — Discoverability
Route metadata registry; canonical domain after production is known; social card rasterization; OpenGraph/Twitter; WebSite/SoftwareSourceCode structured data as appropriate; sitemap/robots only after canonical production URL; semantic heading and link-name audit.

### 9 — QA and audit receipt
Lint → strict typecheck → app build → Storybook build → component tests → a11y → viewport matrix → reduced-motion/forced-colors → visual regression → Lighthouse budgets → event-schema/no-PII check → evidence receipt.

## Buyer needs and metrics: evidence discipline

Do not convert published usability research into a claim that AURORA itself increases conversion. Treat external research as justification for what to test.

| Need | Component/flow | Hypothesized mechanism | Observable metrics | Guardrail |
|---|---|---|---|---|
| Understand product before deciding | Product gallery + detail disclosure | Better scale/material/shipping evidence reduces uncertainty | gallery engagement, option completion, add-to-cart initiation | page performance, return/error signals |
| Know action succeeded | RisoButton + async state | Immediate state acknowledgment reduces repeat clicks | activation→success, duplicate-blocked | keyboard parity, error recovery |
| Change mind safely | CartLineItem | Undo/edit reduces fear of experimentation | quantity edits, remove→undo, checkout continuation | accidental removal |
| Find a reason to return/share | Field Kit | Utility before capture creates earned reciprocity | download completion, copied/shared link, referred visits | no forced signup |
| Evaluate maker capability | Storybook + proof flows | Direct runnable evidence is stronger than capability claims | Storybook opens, source opens, case-study depth, qualified inquiry | no inflated outcomes |

Research context: Baymard's 2026 product-page benchmark reports that many leading ecommerce sites remain mediocre or worse and identifies shipping, returns, product imagery, and decision clarity as recurring user needs. These are inputs for experiments, not AURORA outcome claims.

## Immediate next acceptance test

A reviewer should be able to open Storybook, choose `RisoButton / Pending`, switch to 390px + reduced motion, activate it with keyboard, see the same semantic outcome as pointer input, inspect the associated contract and business hypothesis, and reproduce the test in CI from the same commit.
