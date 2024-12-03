import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';
import { Typography } from '../Typography/Typography';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ title, description, className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('space-y-6', className)}
        {...props}
      >
        <div className="space-y-1">
          <Typography variant="h2" className="text-2xl font-semibold tracking-tight">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" className="text-muted-foreground">
              {description}
            </Typography>
          )}
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </section>
    );
  }
);