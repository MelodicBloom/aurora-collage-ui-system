import React from 'react';

export interface WatercolorFieldProps {
  tint?: 'violet' | 'peach' | 'amber' | 'sage' | 'aurora';
  intensity?: 'subtle' | 'vibrant' | 'deep';
  className?: string;
  children?: React.ReactNode;
}

export const WatercolorField: React.FC<WatercolorFieldProps> = ({
  tint = 'violet',
  intensity = 'subtle',
  className = '',
  children,
}) => {
  const intensityMap = {
    subtle: 'opacity-40 filter blur-2xl',
    vibrant: 'opacity-65 filter blur-3xl',
    deep: 'opacity-85 filter blur-3xl',
  };

  const tintGradients = {
    violet: 'radial-gradient(circle at 35% 45%, #C4A8D8 0%, #FAF6EC 65%)',
    peach: 'radial-gradient(circle at 60% 40%, #F2C4A0 0%, #FAF6EC 70%)',
    amber: 'radial-gradient(circle at 45% 55%, #F0C620 0%, #FAF6EC 75%)',
    sage: 'radial-gradient(circle at 50% 50%, #3DAA6B 0%, #FAF6EC 70%)',
    aurora: 'linear-gradient(135deg, rgba(232, 64, 64, 0.35) 0%, rgba(196, 168, 216, 0.45) 35%, rgba(45, 107, 228, 0.3) 70%, rgba(240, 198, 32, 0.25) 100%)',
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Organic Wash Bleed Layers */}
      <div
        className={`absolute -inset-10 -z-10 pointer-events-none transition-all duration-700 ${intensityMap[intensity]}`}
        style={{
          background: tintGradients[tint],
          mixBlendMode: 'multiply',
        }}
      />
      {/* Secondary accent bloom */}
      <div
        className="absolute top-1/4 -right-12 w-64 h-64 rounded-full bg-[#F2C4A0]/30 filter blur-3xl -z-10 pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      />
      {children}
    </div>
  );
};
