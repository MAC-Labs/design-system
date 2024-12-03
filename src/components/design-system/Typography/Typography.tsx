import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
  component?: keyof JSX.IntrinsicElements;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body1', component, children, ...props }, ref) => {
    const Component = component || getDefaultComponent(variant);

    return (
      <Component
        ref={ref}
        className={cn(
          // Base styles
          'text-foreground',
          
          // Variant styles
          variant === 'h1' && 'text-5xl font-bold tracking-tight',
          variant === 'h2' && 'text-4xl font-bold tracking-tight',
          variant === 'h3' && 'text-3xl font-bold',
          variant === 'h4' && 'text-2xl font-semibold',
          variant === 'h5' && 'text-xl font-semibold',
          variant === 'h6' && 'text-lg font-semibold',
          variant === 'body1' && 'text-base',
          variant === 'body2' && 'text-sm',
          variant === 'caption' && 'text-xs text-muted-foreground',
          
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

function getDefaultComponent(variant: TypographyProps['variant']): keyof JSX.IntrinsicElements {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;
    default:
      return 'p';
  }
}