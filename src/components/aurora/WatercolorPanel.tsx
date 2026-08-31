import { motion } from 'framer-motion';

interface WatercolorPanelProps {
  color?: string;
  opacity?: number;
  blur?: number;
  className?: string;
  animate?: boolean;
}

export default function WatercolorPanel({ color = '#4CABA2', opacity = 0.28, blur = 8, className, animate = true }: WatercolorPanelProps) {
  const baseStyle = {
    background: color,
    opacity,
    filter: `blur(${blur}px)`,
    borderRadius: '48% 52% 46% 54% / 50% 42% 58% 50%',
  };
  if (!animate) return <div className={className} style={baseStyle} />;
  return (
    <motion.div
      className={className}
      style={baseStyle}
      animate={{ scale: [1, 1.04, 1], opacity: [opacity * 0.9, opacity * 1.3, opacity] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
