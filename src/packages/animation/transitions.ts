export const transitions = {
  easeStandard: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.2, normal: 0.3, medium: 0.4, slow: 0.5, bloom: 1.4, drift: 8, ticker: 30,
  },
  stagger: { tight: 0.04, normal: 0.08, loose: 0.12 },
  paperLift: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
  watercolorBloom: { duration: 1.4, ease: 'easeOut' as const },
} as const;

export function springTransition(stiffness = 300, damping = 30, mass = 1) {
  return { type: 'spring' as const, stiffness, damping, mass };
}

export type DurationKey = keyof typeof transitions.duration;
export type StaggerKey = keyof typeof transitions.stagger;
