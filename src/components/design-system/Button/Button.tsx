import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Variant styles
          variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
          variant === 'secondary' && 'bg-secondary-light text-secondary-foreground hover:bg-secondary/90',
          variant === 'tertiary' && 'hover:bg-accent/10 text-accent hover:text-accent/90',
          
          // Size styles
          size === 'sm' && 'h-8 px-3 text-sm',
          size === 'md' && 'h-10 px-4 text-base',
          size === 'lg' && 'h-12 px-6 text-lg',
          
          // Width styles
          fullWidth && 'w-full',
          
          className
        )}
        {...props}
      />
    );
  }
);