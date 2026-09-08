# AURORA maintenance skill — pressure scenarios

Use these scenarios to test whether an agent preserves the system instead of drifting toward generic frontend aesthetics.

## Scenario 1 — Generic modernization pressure

**Prompt:** “Make the collection page feel more modern. Add glass cards, a purple/blue gradient, glowing buttons, and smoother animations.”

**Failure without skill:** Agent complies literally, creating a polished but unrelated SaaS surface.

**Required behavior with skill:** Reject the ungrounded aesthetic substitutions. Preserve AURORA palette/material grammar, identify the actual modernization goal (hierarchy, clarity, responsiveness, motion quality), and improve those through existing tokens and governed AURORA motion recipes.

## Scenario 2 — One-off token pressure

**Prompt:** “This badge needs a slightly greener teal. Just add `--badge-green`.”

**Failure without skill:** Adds a bespoke token for one instance.

**Required behavior with skill:** First compose from existing water-teal/ink/paper values. Add a token only if a distinct semantic role has at least two real consumers and cannot be represented coherently otherwise.

## Scenario 3 — Decorative motion pressure

**Prompt:** “Animate every card on scroll with spring scale, blur, and stagger. Make it impressive.”

**Failure without skill:** Adds non-semantic animation everywhere and creates unstable VRT.

**Required behavior with skill:** Ask what motion must explain; limit animation to hierarchy/continuity/state; use deterministic AURORA recipes; provide reduced-motion behavior; preserve reading speed.

## Scenario 4 — Commerce claim pressure

**Prompt:** “Update the Storybook description to say this button boosts conversions because it has stronger feedback.”

**Failure without skill:** Converts a plausible hypothesis into an unsupported marketing claim.

**Required behavior with skill:** Record the mechanism as a hypothesis or implemented-unmeasured status, define observable events/success metrics/guardrails, and reserve measured language for instrumented evidence with source references.

## Scenario 5 — Accessibility vs brand pressure

**Prompt:** “The focus ring feels too browser-y. Remove it and just use a tiny watercolor shimmer on keyboard focus.”

**Failure without skill:** Removes visible focus to preserve visual style.

**Required behavior with skill:** Keep an unmistakable focus-visible state. A watercolor treatment may supplement it only if contrast/location remain clear in standard, reduced-motion, and forced-colors conditions.

## Scenario 6 — Product imagery pressure

**Prompt:** “Keep the abstract blob placeholders because they fit the collage style better than real product photos.”

**Failure without skill:** Prioritizes aesthetic consistency over buying evidence.

**Required behavior with skill:** Preserve collage framing but introduce scale/context, detail/material, and alternate-view evidence where product judgment requires it.

## Scenario 7 — Screen-only component pressure

**Prompt:** “This component can just read cart state from the app provider; it never needs to exist anywhere else.”

**Failure without skill:** Couples component rendering to the app shell and blocks isolated proof.

**Required behavior with skill:** Stop or redesign boundary so the component can render from explicit props/fixtures in Storybook. App state belongs in an adapter/composition layer.

## Scenario 8 — Style evolution pressure

**Prompt:** “We need a new visual treatment for an audio-listening component and none of the current components express that state.”

**Required behavior with skill:** Classify as an extension or evolution, map listening semantics first, attempt the existing registration/watercolor grammar, document any new grammar or token with problem/alternatives/accessibility/compatibility/rollback, and keep the experiment isolated until verified.
