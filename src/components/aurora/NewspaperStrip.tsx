import { motion } from 'framer-motion';

interface NewspaperStripProps {
  text: string;
  rotation?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
}

export default function NewspaperStrip({ text, rotation = -3, opacity = 0.46, className, animate = false }: NewspaperStripProps) {
  const Tag = animate ? motion.div : 'div';
  const animateProps = animate ? { animate: { x: ['0%', '-50%'] }, transition: { duration: 30, repeat: Infinity, ease: 'linear' } } : {};
  return (
    <div className={`overflow-hidden ${className ?? ''}`} style={{ transform: `rotate(${rotation}deg)`, opacity }}>
      <Tag
        className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink)]"
        {...animateProps}
      >
        {animate ? `${text} / ${text} / ` : text}
      </Tag>
    </div>
  );
}
