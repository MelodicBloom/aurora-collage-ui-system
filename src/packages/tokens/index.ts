import colorsJson from './colors.json';
import typographyJson from './typography.json';

export const colors = colorsJson;
export const typography = typographyJson;
export const colorTokens = colorsJson.color;
export const typographyTokens = typographyJson.typography;

export type ColorKey = keyof typeof colorsJson.color;
export type TypographyKey = keyof typeof typographyJson.typography;
