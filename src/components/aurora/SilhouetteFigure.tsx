import { motion } from 'framer-motion';

interface SilhouetteFigureProps {
  variant?: 'person' | 'flower' | 'landscape' | 'profile';
  color?: string;
  opacity?: number;
  size?: number;
  drift?: boolean;
  className?: string;
}

const paths: Record<string, string> = {
  person: 'M50 10 C60 10 68 18 68 28 C68 38 60 46 50 46 C40 46 32 38 32 28 C32 18 40 10 50 10 Z M20 90 C20 68 34 54 50 54 C66 54 80 68 80 90 L20 90 Z',
  flower: 'M50 20 C55 30 65 32 60 42 C70 37 80 42 75 52 C80 62 70 67 60 62 C65 72 55 75 50 65 C45 75 35 72 40 62 C30 67 20 62 25 52 C20 42 30 37 40 42 C35 32 45 30 50 20 Z M50 40 C55 40 59 44 59 49 C59 54 55 58 50 58 C45 58 41 54 41 49 C41 44 45 40 50 40 Z',
  landscape: 'M0 80 L20 50 L35 65 L55 30 L75 60 L90 45 L100 70 L100 100 L0 100 Z',
  profile: 'M50 15 C62 15 72 25 72 37 C72 45 68 52 62 57 C68 60 74 66 76 74 L76 85 L24 85 L24 74 C26 66 32 60 38 57 C32 52 28 45 28 37 C28 25 38 15 50 15 Z',
};

export default function SilhouetteFigure({ variant = 'person', color = '#131313', opacity = 1, size = 80, drift = false, className }: SilhouetteFigureProps) {
  const Tag = drift ? motion.svg : 'svg';
  const driftProps = drift ? { animate: { x: [0, 8, 0], y: [0, -4, 0], rotate: [0, 1, 0] }, transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' } } : {};
  return (
    <Tag viewBox="0 0 100 100" width={size} height={size} fill={color} style={{ opacity }} className={className} {...driftProps}>
      <path d={paths[variant] ?? paths.person} />
    </Tag>
  );
}
