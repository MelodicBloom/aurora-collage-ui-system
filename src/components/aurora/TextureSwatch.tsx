interface TextureSwatchProps {
  name: string;
  description?: string;
  color?: string;
  pattern?: 'solid' | 'newsprint' | 'grain' | 'halftone';
  className?: string;
}

export default function TextureSwatch({ name, description, color = '#EFE1D0', pattern = 'solid', className }: TextureSwatchProps) {
  const patternStyle = {
    solid: { background: color },
    newsprint: { background: `repeating-linear-gradient(90deg, ${color} 0px, ${color} 2px, transparent 2px, transparent 6px)` },
    grain: { background: color, filter: 'contrast(1.1) brightness(0.98)' },
    halftone: { background: `radial-gradient(circle, #131313 1px, transparent 1px) 0 0 / 6px 6px ${color}` },
  };
  return (
    <div className={`rounded-2xl overflow-hidden border border-black/10 ${className ?? ''}`}>
      <div className="h-28" style={patternStyle[pattern]} />
      <div className="p-4 bg-[var(--color-paper)]">
        <div className="text-sm font-medium">{name}</div>
        {description && <div className="mt-1 text-xs text-black/55">{description}</div>}
      </div>
    </div>
  );
}
