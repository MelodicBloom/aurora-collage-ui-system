import { cn } from '../../lib/utils';

export type PaperLayerProps = {
  variant: 'newspaper' | 'watercolor' | 'riso' | 'cardstock' | 'litho';
  rotation?: number;
  opacity?: number;
  depth?: 1 | 2 | 3 | 4;
  blend?: 'multiply' | 'normal' | 'screen';
  className?: string;
  style?: React.CSSProperties;
};

export default function PaperLayer({
  variant,
  rotation = 0,
  opacity = 1,
  depth = 1,
  blend = 'normal',
  className,
  style,
}: PaperLayerProps) {
  const backgrounds: Record<string, string> = {
    newspaper: 'bg-[var(--color-newsprint)] texture-newspaper torn-top torn-bottom',
    watercolor: 'bg-[var(--color-water-teal)] rounded-full',
    riso: 'bg-[var(--color-riso-red)] rounded-full',
    cardstock: 'bg-[var(--color-warm-paper)] rounded-2xl',
    litho: 'bg-[var(--color-soft-black)] rounded-2xl',
  };

  const shadows: Record<number, string> = {
    1: 'shadow-[var(--shadow-cardstock1)]',
    2: 'shadow-[var(--shadow-cardstock2)]',
    3: 'shadow-[var(--shadow-cardstock3)]',
    4: 'shadow-[var(--shadow-cardstock4)]',
  };

  return (
    <div
      className={cn('absolute', backgrounds[variant], variant === 'cardstock' && shadows[depth], className)}
      style={{ transform: `rotate(${rotation}deg)`, opacity, mixBlendMode: blend, ...style }}
    />
  );
}
