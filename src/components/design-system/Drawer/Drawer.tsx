import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { HTMLAttributes, forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  position?: 'left' | 'right';
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ className, isOpen, onClose, title, description, position = 'right', children, ...props }, ref) => {
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
      <div
        className="fixed inset-0 z-50 flex"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
        aria-describedby={description ? 'drawer-description' : undefined}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          ref={ref}
          className={cn(
            'fixed inset-y-0 flex w-full flex-col bg-background shadow-lg',
            'animate-in duration-300 ease-in-out',
            position === 'left' ? [
              'left-0',
              'slide-in-from-left'
            ] : [
              'right-0',
              'slide-in-from-right'
            ],
            'max-w-sm',
            className
          )}
          {...props}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <div className="space-y-1">
              {title && (
                <Typography
                  id="drawer-title"
                  variant="h4"
                  className="font-semibold tracking-tight"
                >
                  {title}
                </Typography>
              )}
              {description && (
                <Typography
                  id="drawer-description"
                  variant="body2"
                  className="text-muted-foreground"
                >
                  {description}
                </Typography>
              )}
            </div>
            <Button
              variant="tertiary"
              size="sm"
              className="h-6 w-6 rounded-full p-0"
              onClick={onClose}
              aria-label="Close drawer"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </div>
      </div>,
      document.body
    );
  }
);