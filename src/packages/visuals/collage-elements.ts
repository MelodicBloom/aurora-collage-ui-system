export interface CollageElement {
  id: string;
  type: 'circle' | 'tornRect' | 'organicBlob' | 'silhouette' | 'botanical';
  variant: string;
  color?: string;
  opacity?: number;
  rotation?: number;
  scale?: number;
  position?: { x: number; y: number };
  blendMode?: 'multiply' | 'normal' | 'screen' | 'overlay';
  blur?: number;
}

export const risoCircles: CollageElement[] = [
  { id: 'riso-red', type: 'circle', variant: 'riso', color: '#E94F4F', opacity: 0.42 },
  { id: 'riso-gold', type: 'circle', variant: 'riso', color: '#F7B74D', opacity: 0.38 },
  { id: 'riso-teal', type: 'circle', variant: 'riso', color: '#4CABA2', opacity: 0.36 },
];

export const tornRects: CollageElement[] = [
  { id: 'newspaper-strip-1', type: 'tornRect', variant: 'newspaper', rotation: -4, opacity: 0.45 },
  { id: 'newspaper-strip-2', type: 'tornRect', variant: 'newspaper', rotation: 6, opacity: 0.32 },
  { id: 'cardstock-rect-1', type: 'tornRect', variant: 'cardstock', rotation: -2, opacity: 1 },
  { id: 'cardstock-rect-2', type: 'tornRect', variant: 'cardstock', rotation: 3, opacity: 1 },
];

export const organicBlobs: CollageElement[] = [
  { id: 'watercolor-teal-1', type: 'organicBlob', variant: 'watercolor', color: '#4CABA2', opacity: 0.28, blur: 8 },
  { id: 'watercolor-violet-1', type: 'organicBlob', variant: 'watercolor', color: '#5E4B88', opacity: 0.24, blur: 6 },
];

export const silhouettes: CollageElement[] = [
  { id: 'silhouette-person-walking', type: 'silhouette', variant: 'person', color: '#131313', opacity: 1 },
  { id: 'silhouette-flower', type: 'silhouette', variant: 'flower', color: '#131313', opacity: 1 },
];

export const allCollageElements: CollageElement[] = [...risoCircles, ...tornRects, ...organicBlobs, ...silhouettes];

export const screenElements: Record<string, string[]> = {
  home: ['watercolor-teal-1', 'silhouette-flower', 'newspaper-strip-1', 'riso-gold'],
  collection: ['riso-red', 'silhouette-person-walking', 'cardstock-rect-1', 'newspaper-strip-2'],
  product: ['cardstock-rect-1', 'cardstock-rect-2', 'watercolor-teal-1', 'riso-gold'],
  cart: ['cardstock-rect-1', 'newspaper-strip-2'],
};

export function getElementsForScreen(screen: string): CollageElement[] {
  const ids = screenElements[screen] ?? [];
  return allCollageElements.filter((el) => ids.includes(el.id));
}
