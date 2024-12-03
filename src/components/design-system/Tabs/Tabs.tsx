import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef, useState } from 'react';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  defaultTab?: string;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, items, defaultTab, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

    return (
      <div ref={ref} className={cn('space-y-4', className)} {...props}>
        <div className="flex space-x-1 border-b border-border">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                activeTab === item.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-2">
          {items.find((item) => item.id === activeTab)?.content}
        </div>
      </div>
    );
  }
);