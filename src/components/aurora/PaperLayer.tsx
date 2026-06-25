import { cn } from '../../lib/utils';

interface PaperLayerProps {
  variant?: 'newsprint' | 'cardstock' | 'vellum' | 'kraft';
  rotation?: number;
  opacity?: number;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const variantClasses: Record<string, string> = {
  newsprint: 'bg-[#D6C9B2]',
  cardstock: 'bg-[var(--color-warm-paper)]',
  vellum: 'bg-white/60',
  kraft: 'bg-[#C4A97A]',
};

export default function PaperLayer({ variant = 'cardstock', rotation = 0, opacity = 1, className, children, style }: PaperLayerProps) {
  return (
    <div
      className={cn('absolute', variantClasses[variant], className)}
      style={{ rotate: `${rotation}deg`, opacity, ...style }}
    >
      {children}
    </div>
  );
}
