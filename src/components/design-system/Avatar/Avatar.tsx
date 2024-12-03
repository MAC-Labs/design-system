import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import { HTMLAttributes, forwardRef, useState } from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'away' | 'busy';
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = 'md', status, ...props }, ref) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-block rounded-full bg-muted',
          size === 'sm' && 'h-8 w-8',
          size === 'md' && 'h-10 w-10',
          size === 'lg' && 'h-12 w-12',
          className
        )}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User className="h-1/2 w-1/2 text-muted-foreground" />
          </div>
        )}
        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background',
              status === 'online' && 'bg-emerald-500',
              status === 'offline' && 'bg-slate-500',
              status === 'away' && 'bg-yellow-500',
              status === 'busy' && 'bg-red-500'
            )}
          />
        )}
      </div>
    );
  }
);