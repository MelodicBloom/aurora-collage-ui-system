import type { Variants } from 'framer-motion'

export const motionPresets = {
  paperLift: {
    whileHover: {
      y: -6,
      rotate: -0.6,
      boxShadow: '0 18px 40px rgba(19,19,19,.16)',
    },
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  risoPress: {
    whileTap: {
      x: [0, -1, 1, 0] as number[],
      y: [0, 1, -1, 0] as number[],
      scale: 0.985,
    },
    transition: {
      duration: 0.18,
    },
  },
  newspaperEnter: {
    initial: { x: -18, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.55, ease: 'easeOut' },
  },
  watercolorBloom: {
    initial: { scale: 0.96, opacity: 0.16 },
    animate: { scale: 1, opacity: 0.28 },
    transition: { duration: 1.4, ease: 'easeOut' },
  },
  cardstockReveal: {
    initial: { opacity: 0, y: 12, rotate: 2 },
    animate: { opacity: 1, y: 0, rotate: 0 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  risoRegistrationDrift: {
    animate: {
      x: [0, 2, -1, 3, 0],
      y: [0, -1, 2, -2, 0],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'linear',
    },
  },
} as const

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}
