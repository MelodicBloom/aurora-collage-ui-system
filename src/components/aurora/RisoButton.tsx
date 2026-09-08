import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface RisoButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function RisoButton({ children, onClick, variant = 'primary', showArrow = false, className, disabled, type = 'button' }: RisoButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -3, boxShadow: '0 12px 28px rgba(19,19,19,.18)' }}
      whileTap={{ x: [-1, 1, 0], y: [1, -1, 0], scale: 0.987 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors disabled:opacity-50',
        variant === 'primary' && 'bg-[var(--color-ink)] text-[var(--color-paper)]',
        variant === 'outline' && 'border border-[var(--color-ink)] bg-transparent text-[var(--color-ink)]',
        variant === 'ghost' && 'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-warm-paper)]',
        className
      )}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </motion.button>
  );
}
