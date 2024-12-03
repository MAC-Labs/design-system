import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import { HTMLAttributes, forwardRef } from 'react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
}

const icons = {
  info: Info,
  success: CheckCircle,
  warning: AlertCircle,
  error: XCircle,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, children, ...props }, ref) => {
    const Icon = icons[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'relative rounded-lg border p-4',
          variant === 'info' && 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100',
          variant === 'success' && 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100',
          variant === 'warning' && 'border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100',
          variant === 'error' && 'border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100',
          className
        )}
        {...props}
      >
        <div className="flex gap-3">
          <Icon className="h-5 w-5 flex-shrink-0" />
          <div className="flex-1">
            {title && <h5 className="mb-1 font-medium">{title}</h5>}
            <div className="text-sm">{children}</div>
          </div>
        </div>
      </div>
    );
  }
);