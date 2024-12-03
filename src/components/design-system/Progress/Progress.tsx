import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'success';
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, size = 'md', variant = 'default', ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className={cn(
          'relative overflow-hidden rounded-full bg-secondary',
          size === 'sm' && 'h-2',
          size === 'md' && 'h-3',
          size === 'lg' && 'h-4',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'h-full w-full flex-1 transition-all duration-500',
            variant === 'default' && 'bg-foreground',
            variant === 'primary' && 'bg-primary',
            variant === 'success' && 'bg-emerald-500'
          )}
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </div>
    );
  }
);