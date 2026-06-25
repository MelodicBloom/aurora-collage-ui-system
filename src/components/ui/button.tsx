import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
        variant === 'default' && 'bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-soft-black)]',
        variant === 'outline' && 'border border-[var(--color-ink)] bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-warm-paper)]',
        variant === 'ghost' && 'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-warm-paper)]',
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-11 px-5 text-sm',
        size === 'lg' && 'h-12 px-6 text-base',
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';
