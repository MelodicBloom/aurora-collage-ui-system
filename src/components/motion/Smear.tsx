import React, { useState } from 'react';

export interface SmearProps {
  children: React.ReactNode;
  activeColor?: string;
  className?: string;
}

export const Smear: React.FC<SmearProps> = ({
  children,
  activeColor = '#E84040',
  className = '',
}) => {
  const [smearActive, setSmearActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
    setOffset({ x, y });
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setSmearActive(true)}
      onMouseLeave={() => {
        setSmearActive(false);
        setOffset({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Underlying ink ghost / drag trail */}
      {smearActive && (
        <div
          className="absolute inset-0 pointer-events-none select-none transition-transform duration-75 opacity-70"
          style={{
            transform: `translate(${offset.x * 1.5}px, ${offset.y * 1.5}px)`,
            filter: 'blur(1.5px)',
            color: activeColor,
            mixBlendMode: 'multiply',
          }}
          aria-hidden="true"
        >
          {children}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
