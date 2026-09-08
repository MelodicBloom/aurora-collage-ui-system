---
name: maintaining-aurora-design-system
description: Use when creating, reviewing, refactoring, styling, animating, or extending AURORA UI components, screens, Storybook stories, marketing surfaces, storefront flows, graphics, or design-system assets in this repository.
---

# Maintaining the AURORA Design System

## Core principle

AURORA should feel like **a well-handled printed object that happens to be interactive**.

Preserve functional clarity first, then express it through paper, ink, registration, watercolor, collage, and editorial notation. Do not add aesthetic effects that obscure state, hierarchy, evidence, or task completion.

## Canonical sources

Read these before substantial visual work:

- `src/styles/tokens.css` — canonical color, type, spacing, radius, shadow values.
- `src/styles/textures.css` — approved material textures and blend treatments.
- `src/styles/motion.css` — existing reduced-motion behavior and base motion utilities.
- `src/system/component-contract.schema.json` — state/evidence contract.
- `src/system/contracts/` — component-specific behavioral truth.
- `docs/AURORA_VISUAL_AUDIT_AND_BUILD_ORDERS_V1.md` — current visual diagnosis and bounded evolution priorities.
- `public/brand/aurora-mark.svg` and `public/brand/aurora-social-card.svg` — current brand-expression references.

If code and prose disagree, prefer executable tokens/contracts and open a documentation correction.

## AURORA visual grammar

Use material metaphors for bounded jobs:

| Material | Meaning | Appropriate use |
|---|---|---|
| Paper | containment, provenance, hierarchy | cards, sheets, drawers, receipts, evidence groups |
| Risograph registration | pressure, activation, relationship | press, selected/unselected, active state, status change |
| Watercolor | gradual/emergent emphasis | selection bloom, background emphasis, progress arrival |
| Collage | relationship and editorial memory | comparisons, case-study evidence, collections, grouped proof |
| Mono/newsprint notation | traceability and status | metadata, edition labels, receipts, diagnostics |

Do not use a material metaphor merely because it looks attractive.

## Color and type discipline

Use existing CSS variables before adding any color or font. New tokens require a concrete missing semantic role, at least two expected consumers, and a review note explaining why composition from current tokens is insufficient.

Default roles:

- `--color-ink` / `--color-charcoal`: primary text and structural linework.
- `--color-paper` / `--color-warm-paper`: page and raised paper surfaces.
- `--color-riso-red`: primary active/attention accent.
- `--color-riso-gold`: warm emphasis and secondary print accent.
- `--color-water-teal`: complementary state/material accent.
- `--color-violet-ink`: rare tertiary/editorial accent.
- Display typography: `--font-display`.
- UI/body: `--font-body`.
- Metadata/status/edition language: `--font-mono`.

Never replace the palette with generic neutral SaaS grays or add arbitrary gradients as a shortcut.

## Composition rules

Prefer:

- generous negative space;
- clear paper-surface grouping;
- asymmetry with stable reading order;
- one dominant visual decision per region;
- evidence before ornament;
- editorial hierarchy rather than dashboard density;
- border/shadow restraint;
- small, bounded imperfections rather than uncontrolled randomness.

Avoid:

- excessive rounded cards that make every region equivalent;
- glassmorphism, neon glow, generic mesh gradients, or “AI purple” styling;
- decorative blobs with no semantic purpose;
- texture beneath small critical text;
- nested shadows and textures on every surface;
- large visual flourishes that delay a primary action.

## Texture hierarchy

Classify each surface before adding texture:

1. `none` — form controls, small text, dense evidence.
2. `ambient` — page-level low-frequency grain/litho atmosphere.
3. `surface` — paper/card texture that reinforces containment.
4. `evidence-emphasis` — rare higher-character treatment for a specimen, poster, or bounded feature.

Never stack multiple high-frequency textures in one reading region.

## Motion grammar

Motion must communicate cause, continuity, state, hierarchy, or completion.

Preferred governed recipes:

- **Press Register** — riso ghost layers misregister on actuation and settle.
- **Decision Bloom** — watercolor emphasis expands and resolves into a selected state.
- **Paper Peel** — removal reveals a folded/peeled transition and preserves undo.
- **Listening Registration** — registration rings respond to normalized input/status and re-align during processing.
- **Archive Reveal** — supporting content behaves like an insert drawn from beneath a parent sheet.
- **Paper Lift** — use only for low-stakes hover elevation.

Every motion must provide:

- a functional meaning;
- deterministic test mode;
- reduced-motion equivalent;
- keyboard/pointer parity;
- no artificial wait after the underlying action completes.

Do not introduce generic fade/scale motion if an AURORA state recipe expresses the same function more clearly.

## Component maintenance protocol

Before changing a component:

1. Identify its buyer/user task, not only its visual role.
2. Read or create its contract in `src/system/contracts/`.
3. Enumerate valid states and forbidden transitions.
4. Verify native semantics, keyboard behavior, focus-visible treatment, disabled/deactivated behavior, async status exposure, and responsive invariants.
5. Choose the minimum material/motion expression that makes those states clearer.
6. Add or update deterministic Storybook stories and interaction tests.
7. Check 390px and 1440px minimum; use the full viewport matrix when the component changes layout.
8. Test reduced motion and forced colors.
9. Run contract validation, lint, typecheck, build, Storybook tests, a11y, and visual regression gates available in the branch.

A component is not finished because the default state looks correct.

## Commercial and portfolio evidence

Do not claim that a styling choice “increases conversion,” “gets more leads,” or “improves engagement” without measured evidence.

Record:

`buyer need → mechanism hypothesis → observable event → success metric → guardrail → evidence status`

Use `hypothesis`, `implemented-unmeasured`, `instrumented`, `measured`, or `rejected` exactly as defined by the component contract.

Prefer proof surfaces that demonstrate capability directly: interactive Storybook states, responsive flows, source links, test receipts, visual comparisons, and reusable assets.

## Graphics and marketing assets

Brand graphics should look related to the UI without merely screenshotting it. Favor registration offsets, editorial crops, paper fields, mono metadata, and one strong typographic or geometric focal structure.

For thumbnails/social cards:

- preserve legibility at small size;
- keep one dominant message;
- use at most 2–3 accent inks at once;
- avoid embedding critical text in noisy texture;
- export deterministic source SVG where possible, then raster derivatives.

## Change classification

Classify visual changes before implementation:

- **Preservation** — fixes drift back to existing system truth.
- **Extension** — adds a new component using existing grammar.
- **Evolution** — changes grammar/tokens because a proven use case cannot be expressed well otherwise.
- **Experiment** — intentionally tests a hypothesis and must remain isolated until evaluated.

Evolution requires a short decision note with: problem, alternatives, affected tokens/components, accessibility impact, compatibility impact, and rollback path.

## Stop conditions

Stop and open a narrower issue if:

- a new token is being added for one isolated instance;
- a visual treatment requires app-global state just to render;
- animation cannot be made deterministic for testing;
- a material effect reduces contrast, target size, content legibility, or response speed;
- a component cannot be rendered independently in Storybook;
- a proposed “brand improvement” conflicts with native semantics or accessibility;
- the only justification is “looks more modern.”

## Review question

Before approving a change, ask:

> If the texture, color, and animation were removed, would the hierarchy, state, evidence, and action still be understandable? If yes, restore only the material cues that make the interaction more distinctly AURORA and more legible—not merely more decorated.
