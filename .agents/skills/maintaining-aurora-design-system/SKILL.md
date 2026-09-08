---
name: maintaining-aurora-design-system
description: Use when creating, reviewing, refactoring, styling, animating, or extending AURORA components, flows, Storybook stories, graphics, storefront surfaces, or design-system assets, especially when a change could alter the system's visual grammar, interaction language, material metaphors, or cross-scale coherence.
---

# Maintaining the AURORA Design System

AURORA is not a palette or a collage aesthetic. It is a **material-semantic interface grammar**: interaction state, hierarchy, evidence, provenance, and commercial clarity are expressed through a controlled translation of paper, ink, registration, watercolor, editorial composition, and bounded imperfection.

The design target is: **a well-handled printed object that happens to be interactive**. The deeper behavioral target is: **quiet commerce — decision support without pressure**.

## Load the right layer

Do not improvise from memory.

- For visual generation, composition, hierarchy, material choice, or new component families: read `references/design-grammar.md`.
- For interaction states, microinteractions, animation, listening/processing states, or transitions: read `references/state-motion-grammar.md`.
- For evaluating whether work is recognizably AURORA, diagnosing drift, or reviewing screenshots/Storybook: read `references/diagnostic-scorecard.md`.
- For creating a genuinely new visual treatment while preserving lineage: read `references/synthesis-protocol.md`.
- For programmatic generation or structured reasoning: use `references/aurora-style-ontology.yaml`.

Also inspect the live repository truth before substantial changes:
`src/styles/tokens.css`, `src/styles/textures.css`, `src/styles/motion.css`, `src/system/component-contract.schema.json`, `src/system/contracts/`, `docs/AURORA_VISUAL_AUDIT_AND_BUILD_ORDERS_V1.md`, and current rendered evidence.

If executable tokens/contracts and prose disagree, executable truth wins and documentation must be corrected.

## Non-negotiable invariants

1. **Semantics precede material.** Determine task, state, hierarchy, evidence, and consequence before choosing texture, ink, motion, or irregularity.
2. **Material has meaning.** Paper = containment/provenance; riso registration = activation/relationship; watercolor = emergence/soft emphasis; collage = association/evidence; mono/newsprint = traceability/status.
3. **Imperfection is bounded.** Misregistration, rotation, overlap, grain, clipping, and asymmetry must operate inside declared ranges and cannot degrade reading order, hit targets, contrast, or deterministic testing.
4. **One visual thesis per region.** Do not stack every AURORA mechanism on every component.
5. **The interface remains useful without styling.** Remove color/texture/motion mentally: hierarchy, state, action, and evidence must still work.
6. **Quiet commerce is not passive commerce.** CTAs may be strong, but never use fake urgency, manipulative scarcity, motion pressure, obscured pricing, or information withholding.
7. **Variation must preserve lineage.** New work should be recognizably related without becoming template repetition.
8. **No evidence laundering.** Hypotheses remain hypotheses until instrumented and measured.

## Required design reasoning output

For any non-trivial visual or interaction change, internally resolve:

`task → semantic state → information hierarchy → material carrier → spatial operation → motion operator → accessibility equivalent → evidence/measurement → compatibility → rollback`

When reviewing or handing off substantial work, expose the consequential parts of that chain in the artifact or decision note.

## Change classes

- **Preservation**: restore drift to canonical grammar.
- **Extension**: new instance/family generated from existing grammar.
- **Evolution**: alter grammar because a recurring use case cannot be expressed adequately.
- **Experiment**: isolated hypothesis with explicit comparison and rollback.

Evolution requires evidence of a repeated gap, comparison against at least two existing mechanisms, compatibility analysis, and a migration/rollback path. Never promote an experiment into canon because it merely looks good once.

## Component completion rule

A component is incomplete until its meaningful states are isolated, visually differentiated, keyboard/pointer equivalent, reduced-motion compatible, responsive, and reproducible outside the app shell. Its contract must distinguish valid and forbidden transitions and must map presentation mechanisms to semantic function.

## Anti-collapse rule

Reject changes that collapse AURORA into any easier generic category: SaaS minimalism, glassmorphism, neon cyberpunk, rounded-card dashboard language, generic editorial luxury, arbitrary scrapbook collage, or decorative “organic” blobs. Borrowing an external technique is allowed only after translating it into AURORA's semantic/material grammar.

## Verification

Before approval, apply the diagnostic scorecard. A high-fidelity result must pass **functional clarity**, **semantic-material fit**, **composition**, **interaction lineage**, **bounded imperfection**, **responsive integrity**, and **evidence discipline**. A visually attractive result that fails semantic-material fit is not AURORA.
