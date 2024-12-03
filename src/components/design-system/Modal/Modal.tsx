import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { HTMLAttributes, forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ className, isOpen, onClose, title, description, size = 'md', children, ...props }, ref) => {
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
        className="fixed inset-0 z-50 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal */}
        <div
          ref={ref}
          className={cn(
            'relative z-50 w-full rounded-lg bg-background p-6 shadow-lg',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            size === 'sm' && 'max-w-sm',
            size === 'md' && 'max-w-lg',
            size === 'lg' && 'max-w-2xl',
            className
          )}
          {...props}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-1.5">
              {title && (
                <Typography
                  id="modal-title"
                  variant="h4"
                  className="font-semibold tracking-tight"
                >
                  {title}
                </Typography>
              )}
              {description && (
                <Typography
                  id="modal-description"
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
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="mt-6">{children}</div>
        </div>
      </div>,
      document.body
    );
  }
);