import * as React from 'react';
import { cn } from '../../lib/utils';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md border border-black/15 bg-[var(--color-paper)] px-3 py-2 text-sm text-[var(--color-ink)] placeholder:text-black/40',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-riso-red)] focus-visible:ring-offset-2',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';
