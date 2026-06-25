export { default as colors } from './colors.json'
export { default as typography } from './typography.json'
export { default as spacing } from './spacing.json'
export { default as radius } from './radius.json'
export { default as shadow } from './shadow.json'
export { default as texture } from './texture.json'
export { default as motion } from './motion.json'

export const cssTokens = {
  colors: {
    ink: '#131313',
    charcoal: '#383938',
    paper: '#F6EDE3',
    warmPaper: '#EFE1D0',
    risoRed: '#E94F4F',
    risoGold: '#F7B74D',
    waterTeal: '#4CABA2',
    violetInk: '#5E4B88',
    newsprint: '#B8A891',
    softBlack: '#1B1A18',
  },
} as const

export type ColorToken = keyof typeof cssTokens.colors
