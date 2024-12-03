import { cn } from '@/lib/utils';
import {
  HTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
  useState,
} from 'react';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  children: React.ReactElement;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, position = 'top', children, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    if (!isValidElement(children)) {
      return null;
    }

    return (
      <div className="relative inline-block" ref={ref} {...props}>
        {cloneElement(children, {
          onMouseEnter: () => setIsVisible(true),
          onMouseLeave: () => setIsVisible(false),
          onFocus: () => setIsVisible(true),
          onBlur: () => setIsVisible(false),
        })}
        {isVisible && (
          <div
            className={cn(
              'absolute z-50 px-2 py-1 text-xs rounded bg-foreground text-background',
              'animate-in fade-in-0 zoom-in-95',
              position === 'top' && '-top-8 left-1/2 -translate-x-1/2',
              position === 'right' && 'top-1/2 left-full ml-2 -translate-y-1/2',
              position === 'bottom' && 'top-full left-1/2 mt-2 -translate-x-1/2',
              position === 'left' && 'top-1/2 right-full mr-2 -translate-y-1/2',
              className
            )}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);