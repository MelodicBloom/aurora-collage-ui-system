import type { Variants } from 'framer-motion';

export const motionPresets = {
  paperLift: {
    whileHover: { y: -6, rotate: -0.6, boxShadow: '0 18px 40px rgba(19,19,19,.16)' },
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as number[] },
  },
  risoPress: {
    whileTap: { x: [-1, 1, 0], y: [1, -1, 0], scale: 0.985 },
    transition: { duration: 0.18 },
  },
} as const;

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const staggerItem: Variants = {
  hidden: { y: 20, opacity: 0, rotate: -2 },
  show: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeInUp: Variants = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };
export const fadeIn: Variants = { initial: { opacity: 0 }, animate: { opacity: 1 } };
export const slideInLeft: Variants = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } };
export const scaleIn: Variants = { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } };
