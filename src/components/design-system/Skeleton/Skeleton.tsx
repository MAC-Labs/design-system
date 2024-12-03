import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'text', width, height, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'animate-pulse bg-muted',
          variant === 'text' && 'h-4 w-full rounded',
          variant === 'circular' && 'rounded-full',
          variant === 'rectangular' && 'rounded-md',
          className
        )}
        style={{
          width,
          height,
          ...style,
        }}
        {...props}
      />
    );
  }
);