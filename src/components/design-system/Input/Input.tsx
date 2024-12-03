import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, fullWidth, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          // Base styles
          'rounded-md border border-input bg-background px-3 py-2',
          'text-sm text-foreground shadow-sm transition-colors',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          'disabled:cursor-not-allowed disabled:opacity-50',
          
          // Error styles
          error && 'border-destructive focus-visible:ring-destructive',
          
          // Width styles
          fullWidth && 'w-full',
          
          className
        )}
        {...props}
      />
    );
  }
);