import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CollageCardProps {
  children: React.ReactNode;
  rotation?: number;
  elevation?: 1 | 2 | 3 | 4;
  className?: string;
}

const shadowMap = {
  1: '0 2px 4px rgba(19,19,19,.08)',
  2: '0 4px 8px rgba(19,19,19,.10)',
  3: '0 8px 16px rgba(19,19,19,.12)',
  4: '0 12px 24px rgba(19,19,19,.14)',
};

export default function CollageCard({ children, rotation = 0, elevation = 2, className }: CollageCardProps) {
  return (
    <motion.div
      initial={{ rotate: rotation, boxShadow: shadowMap[elevation] }}
      whileHover={{ y: -6, rotate: rotation - 0.6, boxShadow: '0 18px 40px rgba(19,19,19,.16)' }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative overflow-hidden rounded-[1.75rem] bg-[var(--color-paper)]', className)}
      style={{ boxShadow: shadowMap[elevation] }}
    >
      {children}
    </motion.div>
  );
}
