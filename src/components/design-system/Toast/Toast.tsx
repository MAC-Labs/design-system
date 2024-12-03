import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2, Info, X, XCircle } from 'lucide-react';
import { HTMLAttributes, forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
  variant?: ToastVariant;
  duration?: number;
  onClose: () => void;
}

const icons = {
  default: null,
  success: CheckCircle2,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ className, message, variant = 'default', duration = 5000, onClose, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(true);
    const Icon = icons[variant];

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Allow time for exit animation
      }, duration);

      return () => clearTimeout(timer);
    }, [duration, onClose]);

    return createPortal(
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        className={cn(
          'fixed bottom-4 right-4 z-50 max-w-md rounded-lg shadow-lg',
          'animate-in slide-in-from-bottom-3 duration-300',
          !isVisible && 'animate-out fade-out slide-out-to-right',
          variant === 'success' && 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-50',
          variant === 'error' && 'bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-50',
          variant === 'warning' && 'bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-50',
          variant === 'info' && 'bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-50',
          variant === 'default' && 'bg-background text-foreground',
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3 p-4">
          {Icon && (
            <Icon
              className={cn(
                'h-5 w-5',
                variant === 'success' && 'text-emerald-600 dark:text-emerald-400',
                variant === 'error' && 'text-red-600 dark:text-red-400',
                variant === 'warning' && 'text-amber-600 dark:text-amber-400',
                variant === 'info' && 'text-blue-600 dark:text-blue-400'
              )}
            />
          )}
          <p className="flex-1 text-sm font-medium">{message}</p>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className={cn(
              'text-muted-foreground hover:text-foreground',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            )}
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>,
      document.body
    );
  }
);