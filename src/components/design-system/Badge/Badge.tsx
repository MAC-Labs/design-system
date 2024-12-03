import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium',
          // Size variants
          size === 'sm' && 'px-2 py-0.5 text-xs',
          size === 'md' && 'px-2.5 py-0.5 text-sm',
          size === 'lg' && 'px-3 py-1 text-base',
          // Color variants
          variant === 'default' && 'bg-secondary text-secondary-foreground',
          variant === 'primary' && 'bg-primary text-primary-foreground',
          variant === 'secondary' && 'bg-secondary text-secondary-foreground',
          variant === 'success' && 'bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100',
          variant === 'warning' && 'bg-amber-100 text-amber-700 dark:bg-amber-700 dark:text-amber-100',
          variant === 'error' && 'bg-destructive text-destructive-foreground',
          className
        )}
        {...props}
      />
    );
  }
);