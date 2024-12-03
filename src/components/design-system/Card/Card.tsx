import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'outlined' | 'elevated' | 'interactive' | 'gradient';
  color?: 'default' | 'primary' | 'accent';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'elevated', color = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg',
          'transition-all duration-200',
          // Variant styles
          variant === 'elevated' && 'bg-card shadow-lg dark:shadow-none',
          variant === 'outlined' && 'border border-border',
          variant === 'interactive' && 'bg-card hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-200',
          variant === 'gradient' && 'bg-gradient-to-br',
          // Color styles
          color === 'default' && variant === 'gradient' && 'from-primary/10 to-accent/10',
          color === 'primary' && variant === 'gradient' && 'from-primary/20 to-primary/5',
          color === 'accent' && variant === 'gradient' && 'from-accent/20 to-accent/5',
          className
        )}
        {...props}
      />
    );
  }
);