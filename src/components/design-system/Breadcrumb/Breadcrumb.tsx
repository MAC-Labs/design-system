import { cn } from '@/lib/utils';
import { ChevronRight, Home } from 'lucide-react';
import { HTMLAttributes, forwardRef } from 'react';

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: {
    label: string;
    href?: string;
    icon?: React.ReactNode;
  }[];
  separator?: React.ReactNode;
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, items, separator = <ChevronRight className="h-4 w-4" />, ...props }, ref) => {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn('', className)} {...props}>
        <ol className="flex items-center space-x-2">
          <li>
            <a
              href="/"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </a>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-muted-foreground">{separator}</span>
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </a>
              ) : (
                <span className="flex items-center space-x-1 text-sm">
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
);