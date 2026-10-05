import React, { useEffect, useRef, useState } from 'react';

export interface RevealProps {
  children: React.ReactNode;
  delayMs?: number;
  creaseOrigin?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delayMs = 0,
  creaseOrigin = 'top',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delayMs);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delayMs]);

  const originClass = {
    top: 'origin-top',
    bottom: 'origin-bottom',
    left: 'origin-left',
    right: 'origin-right',
  }[creaseOrigin];

  return (
    <div
      ref={elementRef}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      className={`${className}`}
    >
      <div
        className={`
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${originClass}
          ${
            isVisible
              ? 'opacity-100 rotate-x-0 translate-y-0 scale-100'
              : 'opacity-0 -rotate-x-12 translate-y-6 scale-[0.98]'
          }
        `}
      >
        {children}
      </div>
    </div>
  );
};
