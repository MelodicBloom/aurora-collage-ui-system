# AURORA Generative Design Grammar

## 1. Primitive families

AURORA is generated from six primitive families. Every composed surface should be explainable as a bounded combination of these families.

### Surface primitives
- paper field
- warm paper sheet
- clipped insert
- receipt strip
- archive tab
- specimen mount
- folded/peeled edge
- transparent wash layer

### Mark primitives
- registration ghost
- mono annotation
- edition number
- rule line
- crop mark
- hand-offset underline
- halftone field
- lithographic hatch

### Spatial operators
- stack
- overlap
- offset
- crop
- inset
- pin
- tear-gap
- register
- reveal-under
- edge-anchor
- asymmetrical-balance

### Material operators
- grain
- newsprint line
- halftone
- multiply
- soft-light
- riso misregistration
- watercolor diffusion
- paper shadow
- dry-ink density variation

### Hierarchy operators
- dominant specimen
- supporting annotation
- evidence cluster
- action rail
- quiet margin
- numbered sequence
- comparative pair
- archival metadata band

### Irregularity operators
Irregularity is parameterized, not random.
- rotation: default ±0.4°; expressive specimen max ±1.5°
- registration offset: 0–3px UI, 0–8px hero/graphic
- edge misalignment: 0–6px
- overlap intrusion: ≤12% of subordinate surface unless intentionally masked
- grain opacity: preserve WCAG legibility and never compete with text
- asymmetry: reading order must remain unambiguous

## 2. Semantic-to-material translation

Do not begin from “what effect would look nice?” Begin from the semantic job.

| Semantic job | Primary carrier | Secondary carrier | Avoid |
|---|---|---|---|
| containment | paper sheet / border | shadow, inset | glass blur |
| provenance | receipt/edition/mono metadata | crop marks | badge clutter |
| active/pressed | riso registration shift | pressure compression | generic scale-only feedback |
| selected | registration alignment + bounded bloom | ring/underline | color-only selection |
| pending | unresolved registration / repeated print pass | mono status | spinner as default |
| success | re-registration / settled sheet | stamped mark | celebratory confetti |
| error | broken registration / red proof mark | explicit text | shake-only error |
| disabled | desaturated ink + flattened material response | status annotation | opacity alone if illegible |
| comparison | collage pairing / specimen mounts | shared baseline | dashboard cards |
| evidence | mounted specimen + metadata | numbering | decorative collage unrelated to proof |
| disclosure | insert-under-paper | edge/tab affordance | generic accordion when material continuity can help |

## 3. Composition grammar

AURORA compositions should oscillate between **editorial calm** and **material interruption**.

### Base rhythm
Use a calm structural field first:
- strong outer margins
- readable column width
- predictable task order
- quiet negative space

Then introduce one or two controlled disruptions:
- an offset specimen
- a clipped annotation
- a registration ghost
- an overlapping evidence sheet
- an off-axis rule

The disruption should create memory or emphasis, not chaos.

### Density bands
Classify regions before composing them:
- **quiet**: navigation, forms, dense text, checkout facts
- **editorial**: articles, product description, case study narrative
- **specimen**: showcase components, product visual proof, motion studies
- **poster**: hero, campaign graphic, thumbnail; highest expressive range

Never use poster-level density inside checkout-critical controls.

### Shape language
Prefer rectangular paper logic, clipped corners, tabs, strips, mounts, folds, and restrained full radii for true controls. Do not allow `rounded-2xl` to become the universal component silhouette.

### Depth
Depth should read as layered paper, not floating software panels. Prefer directional paper shadows, overlap, edge reveal, and containment before blur or generic elevation.

## 4. Typography grammar

Typography has three voices:

1. **Display / interpretive** — Playfair Display: conceptual headings, editorial title, artifact name.
2. **Operational / readable** — Inter: product facts, forms, buttons, descriptive prose.
3. **Trace / evidentiary** — IBM Plex Mono: IDs, status, edition, measurements, timestamps, provenance, system annotations.

Use contrast of voices to encode function. Never use mono merely for “tech vibes,” or display type for dense transactional copy.

### Typographic transformations
Allowed emphasis methods:
- scale contrast
- italic display fragments
- mono uppercase tracking
- editorial hanging alignment
- proof-note annotations
- bounded overprint offsets for hero graphics

Avoid ubiquitous bold sans headings, all-caps everywhere, or luxury-editorial thin serif conventions detached from the system's material logic.

## 5. Color grammar

Canonical palette roles come from `tokens.css`.

Color is assigned by **ink role**, not by decoration:
- ink/charcoal = structure and primary reading
- paper/warm-paper = substrate
- riso-red = activation, proof, interruption, decisive emphasis
- riso-gold = warm secondary emphasis / edition / signal
- water-teal = complementary state, listening, emergence, balancing ink
- violet = rare interpretive tertiary ink

### Ink budget
For ordinary components: substrate + structural ink + one accent.
For complex specimens: up to two accent inks.
For poster/brand graphics: three accents only when registration interplay is the visual thesis.

## 6. Generation recipes

### Product decision module
`paper sheet + dominant product specimen + mono variant metadata + operational controls + selected registration ring + quiet action rail`

Goal: reduce decision ambiguity without making the purchase action louder than the evidence.

### Case-study proof block
`editorial narrative + mounted evidence specimen + numbered mono caption + thin rule + bounded overlap`

Goal: demonstrate process and traceability rather than merely claim capability.

### Lead/freebie module
`receipt/field-note metaphor + direct-value CTA + small provenance annotation + optional follow-up insert`

Goal: deliver value first; never gate the useful artifact behind email.

### Listening/control module
`quiet control surface + registration rings + mono live status + teal/red print interaction + deterministic state label`

Goal: make machine/system state tangible without mimicking generic audio-wave UI.

### Storybook specimen
`neutral paper stage + component + state label + token/material annotations + optional side-by-side reduced-motion state`

Goal: make the grammar inspectable and teachable.

## 7. Cross-scale coherence

AURORA should remain recognizable at four scales:
- **micro**: button, input, icon state
- **component**: card, tile, drawer, control
- **screen**: product, cart, article, system page
- **campaign**: OG image, thumbnail, poster, motion graphic

Do not copy the same motif literally across scales. Preserve relationships instead:
- micro uses registration as 1–3px state change
- component uses overlap/edge/provenance
- screen uses editorial rhythm and evidence clustering
- campaign uses enlarged registration, crops, paper fields, and typography as image

This is lineage, not repetition.
