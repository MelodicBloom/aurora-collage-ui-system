# CODEX HANDOFF — AURORA Storybook / Component Evidence Foundation v1

## Mission
Advance Issue #5 from a runnable AURORA application into an isolated, state-complete, testable component system without flattening the brand into generic SaaS UI.

Primary outcome:
1. deterministic package/install foundation;
2. Storybook evidence surface;
3. six contract-driven proof components;
4. governed AURORA state/motion primitives;
5. responsive/accessibility/interaction QA;
6. bounded commercial proof flows with hypotheses kept distinct from measured outcomes.

Do not redesign the entire site in this order.

## Repository / branch
Repository: MelodicBloom/aurora-collage-ui-system
Working branch: codex/aurora-storybook-foundation-v1
Parent: feature/aurora-collage-design-system
Primary issue: #5
Related default-branch reconciliation: PR #4

## Current state
- PR #7 is merged into the feature branch. The repository-scoped AURORA design-maintenance skill is available.
- Existing CI validates component contracts, lint, typecheck, and app build.
- CI temporarily installs with --no-frozen-lockfile because pnpm-lock.yaml is absent.
- packageManager is pnpm@9.15.4.
- Runtime app: React 18.3.1 + Vite 6 + TypeScript 5.7 + Framer Motion 11.
- Storybook is not installed yet.
- PR #4 remains conflicted; do not force-update main in this order.

## Environment contract
Preferred Codex container:
- Ubuntu 24.04 x86_64
- Node 22.23.2 (minimum for Storybook 10: Node 22.12+)
- corepack enabled
- pnpm 9.15.4
- Git
- Chromium + Playwright dependencies
- no production secrets required

Do not add an application secret just to run Storybook.

Use .env.codex.example as the only environment template for this order.

## Source-of-truth read order
Read before editing:
1. .agents/skills/maintaining-aurora-design-system/SKILL.md
2. .agents/skills/maintaining-aurora-design-system/references/design-grammar.md
3. .agents/skills/maintaining-aurora-design-system/references/state-motion-grammar.md
4. .agents/skills/maintaining-aurora-design-system/references/diagnostic-scorecard.md
5. .agents/skills/maintaining-aurora-design-system/references/synthesis-protocol.md
6. .agents/skills/maintaining-aurora-design-system/references/aurora-style-ontology.yaml
7. src/styles/tokens.css
8. src/styles/textures.css
9. src/styles/motion.css
10. src/system/component-contract.schema.json
11. src/system/contracts/
12. docs/AURORA_VISUAL_AUDIT_AND_BUILD_ORDERS_V1.md
13. src/components/aurora/
14. src/components/ui/
15. src/app/routes.tsx
16. package.json
17. .github/workflows/ci.yml

If prose and executable tokens/contracts disagree, preserve executable truth and open/document the discrepancy.

## Dependency decision
Attempt Storybook 10.6.0 first because it is the current stable line and the repo can use Node 22.23.2.
Required initial dev dependencies:
- storybook@10.6.0
- @storybook/react-vite@10.6.0
- @storybook/addon-a11y@10.6.0
- vitest@5.0.1
- @vitest/browser-playwright@5.0.1
- @playwright/test@1.63.0

IF Storybook 10 produces a reproducible compatibility blocker with this repo after one bounded remediation attempt,
THEN document the failure and use the v9 line consistently; do not mix Storybook majors.

## Execution order

### FL-0 — Baseline and receipts
Run:
- ./scripts/bootstrap-codex.sh current
- pnpm contracts:validate
- pnpm lint
- pnpm typecheck
- pnpm build

Create docs/receipts/storybook-foundation-baseline.md containing:
- commit SHA
- node/pnpm versions
- commands
- pass/fail
- any inherited warnings
- current route inventory

STOP if baseline does not pass. Fix only the minimum inherited blocker before continuing.

### FL-1 — Deterministic dependency foundation
Goal: remove the temporary nondeterministic install contract.

Actions:
1. generate pnpm-lock.yaml from the declared package graph;
2. run a clean install twice from separate deleted node_modules states;
3. change CI to pnpm install --frozen-lockfile;
4. restore setup-node cache: pnpm;
5. retain SHA-pinned GitHub Actions.

Acceptance:
- two clean installs resolve the same lockfile;
- git diff is empty after second install;
- contracts/lint/typecheck/build pass.

STOP if lockfile churn occurs between clean installs.

### FL-2 — Storybook shell
Create:
- .storybook/main.ts
- .storybook/preview.ts
- .storybook/manager.ts only if needed for AURORA chrome
- storybook scripts in package.json

Requirements:
- import canonical app styles/tokens; no duplicate Storybook palette;
- ESM config only;
- viewport presets: 360, 390, 768, 1024, 1440;
- global reduced-motion control;
- forced-colors/high-contrast test surface;
- a11y addon active;
- deterministic animation mode available to stories;
- static build command.

Acceptance:
- pnpm storybook launches;
- pnpm build-storybook succeeds;
- baseline Button/Input stories render at all required viewports.

### FL-3 — Component contracts become executable
For each proof component, verify/create contract before story implementation:
1. RisoButton
2. Input
3. ProductTile
4. CartLineItem
5. ListeningStatusControl
6. Drawer/Dialog composition

Each contract must specify:
- task/use case;
- valid states;
- forbidden transitions;
- controlled/uncontrolled ownership;
- keyboard semantics;
- async semantics;
- responsive invariants;
- motion/material mechanism;
- reduced-motion equivalent;
- business mechanism hypothesis;
- observable event;
- success metric;
- guardrail metric;
- evidence_status.

Do not mark any business claim measured unless source references exist.

### FL-4 — Story matrix
Minimum states:
rest, hover, focus-visible, pressed, selected where applicable, pending/listening, success, error, disabled/deactivated.

For every component:
- Default
- State gallery
- Keyboard path
- Reduced motion
- Forced colors
- Mobile constrained width
- Long-content stress
- Interaction play story

Acceptance:
- component renders without Router/App global state unless its documented adapter is supplied;
- keyboard and pointer outcomes match;
- disabled/deactivated states are inert;
- async states suppress duplicate action.

### FL-5 — AURORA motion primitives
Implement mechanisms as reusable primitives/tokens, not one-off Framer Motion props:
- Press Register
- Decision Bloom
- Paper Peel Remove
- Listening Registration Rings
- Archive Reveal

IF an effect cannot be deterministic in screenshots/tests,
THEN simplify the effect or isolate it behind a test-mode clock/seed.
Do not exempt it from VRT.

### FL-6 — Business/storefront proof flows
Build deterministic fixture flows:
A. browse -> product -> option -> quantity -> add to cart
B. cart quantity -> threshold -> remove -> undo -> checkout-ready
C. service/case study -> proof -> inquiry CTA
D. free Quiet Commerce Field Kit -> download -> optional follow-up
E. listening -> processing -> result/error -> deactivate

Do not use a live commerce backend. Use adapters/fixtures.

Instrumentation names must be semantic, e.g.:
product_option_selected
cart_item_added
cart_quantity_changed
field_kit_download_started
inquiry_cta_activated

No PII inside analytics event payloads.

### FL-7 — QA chain
Required:
- pnpm contracts:validate
- pnpm lint
- pnpm typecheck
- pnpm build
- Storybook static build
- Storybook/Vitest interaction tests
- accessibility serious/critical = 0
- Playwright Chromium proof flow
- reduced-motion stories
- forced-colors stories
- deterministic visual snapshots
- responsive viewport matrix
- no console errors
- no unexpected horizontal overflow at 360/390

Produce docs/receipts/storybook-foundation-final.md mapping:
commit -> component contract -> story -> test -> screenshot/visual receipt -> result.

## Subagent operating model
The orchestrator owns scope, merges findings, and protects the stop gates.

Run subagents in parallel only when write sets do not overlap.

### Subagent A — system archaeologist
Read-only.
Map tokens, textures, motion utilities, component dependencies, route coupling, and current contract coverage.
Deliver: docs/receipts/system-map.md.
Must not edit components.

### Subagent B — Storybook platform
Own:
.storybook/
vitest config
storybook package scripts
browser-test infrastructure.
Must not change visual component implementations except required decorators/adapters.

### Subagent C — contract/state engineer
Own:
src/system/component-contract.schema.json
src/system/contracts/
scripts/validate-component-contracts.mjs
contract fixtures.
Must not alter canonical palette or typography.

### Subagent D — interaction/motion engineer
Own:
reusable motion primitives + motion tests.
Must read AURORA state-motion grammar.
Must not invent ungoverned animations.

### Subagent E — component proof engineer
Own the six proof components and their stories/tests.
May consume but not redefine canonical tokens/motion primitives.

### Subagent F — QA/evidence
Read-only until defects are identified.
Run responsive/a11y/keyboard/VRT audits.
Open bounded defect patches one at a time; do not perform broad cleanup.

## Explicit if/then routing
IF two subagents need the same file, THEN serialize those tasks; do not allow competing edits.
IF a change requires a new token, THEN first prove two consumers and record the semantic gap.
IF a component needs Router/global app context, THEN create a thin adapter or fixture rather than coupling the primitive.
IF a motion treatment hides state or delays task completion, THEN remove/simplify it.
IF visual treatment is attractive but fails the AURORA diagnostic scorecard, THEN classify it as experiment, not canon.
IF an accessibility fix conflicts with the visual treatment, THEN accessibility wins and the material treatment is redesigned.
IF Storybook 10 compatibility fails, THEN capture the exact error and one attempted fix before choosing v9.
IF CI differs from local results, THEN treat CI as the release authority and reconcile environment versions.
IF PR #4 reconciliation becomes necessary for this work, THEN stop; do not force main. Keep this PR based on the verified feature branch.

## Out of scope
- production payment processing
- real inventory
- CRM/email provider integration
- production analytics vendor
- wholesale site redesign
- force-updating main
- unsupported conversion claims
- replacing the AURORA design language with Pinterest/Grok references

Visual references supplied later are inputs to compare/translate, not automatic canon.

## Definition of done
The order is complete when:
- frozen deterministic installs are restored;
- Storybook is static-buildable;
- six proof components are isolated and state-complete;
- AURORA motion semantics are reusable and deterministic;
- five bounded proof flows execute on fixtures;
- accessibility/responsive/reduced-motion gates pass;
- evidence receipts exist;
- no measured-growth claim exists without evidence;
- the PR remains reviewable and does not absorb unrelated site work.
