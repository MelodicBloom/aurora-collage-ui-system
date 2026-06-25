export type CollageElementType =
  | 'watercolor-wash'
  | 'riso-circle'
  | 'torn-newspaper'
  | 'cardstock-layer'
  | 'silhouette-person'
  | 'silhouette-flower'
  | 'silhouette-landscape'
  | 'halftone-field'
  | 'litho-texture'

export interface CollageElement {
  type: CollageElementType
  color: string
  opacity: number
  rotation?: number
  blur?: number
  blendMode?: 'multiply' | 'screen' | 'overlay' | 'soft-light' | 'normal'
  depth?: 1 | 2 | 3 | 4
}

export const collagePresets: Record<string, CollageElement[]> = {
  home: [
    { type: 'watercolor-wash',   color: '#4CABA2', opacity: 0.28, blur: 8, blendMode: 'multiply', depth: 1 },
    { type: 'silhouette-flower', color: '#131313', opacity: 0.90, depth: 3 },
    { type: 'torn-newspaper',    color: '#B8A891', opacity: 0.38, rotation: 2, depth: 2 },
    { type: 'riso-circle',       color: '#F7B74D', opacity: 0.55, depth: 2 },
  ],
  collection: [
    { type: 'riso-circle',        color: '#E94F4F', opacity: 0.48, depth: 2 },
    { type: 'silhouette-person',  color: '#131313', opacity: 0.85, depth: 3 },
    { type: 'litho-texture',      color: '#131313', opacity: 0.12, depth: 1 },
    { type: 'torn-newspaper',     color: '#B8A891', opacity: 0.35, rotation: -4, depth: 2 },
  ],
  journal: [
    { type: 'watercolor-wash',    color: '#5E4B88', opacity: 0.24, blur: 10, blendMode: 'multiply', depth: 1 },
    { type: 'silhouette-flower',  color: '#131313', opacity: 0.80, depth: 3 },
    { type: 'halftone-field',     color: '#131313', opacity: 0.10, depth: 2 },
    { type: 'cardstock-layer',    color: '#F7B74D', opacity: 0.55, rotation: 3, depth: 2 },
  ],
  product: [
    { type: 'watercolor-wash',    color: '#F7B74D', opacity: 0.22, blur: 6, blendMode: 'multiply', depth: 1 },
    { type: 'cardstock-layer',    color: '#EFE1D0', opacity: 0.80, depth: 2 },
  ],
}
