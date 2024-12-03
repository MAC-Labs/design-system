import { useState } from 'react';
import { ToastVariant } from '@/components/design-system/Toast/Toast';

interface ToastOptions {
  variant?: ToastVariant;
  duration?: number;
}

interface Toast {
  id: number;
  message: string;
  variant: ToastVariant;
  duration: number;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const show = (message: string, options: ToastOptions = {}) => {
    const id = Date.now();
    setToasts((prev) => [
      ...prev,
      {
        id,
        message,
        variant: options.variant || 'default',
        duration: options.duration || 5000,
      },
    ]);
  };

  const close = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return {
    toasts,
    show,
    close,
  };
};