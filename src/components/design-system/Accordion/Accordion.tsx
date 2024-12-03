import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { HTMLAttributes, forwardRef, useState } from 'react';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
  multiple?: boolean;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, items, multiple = false, ...props }, ref) => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
      setOpenItems((prev) => {
        if (multiple) {
          return prev.includes(id)
            ? prev.filter((item) => item !== id)
            : [...prev, id];
        }
        return prev.includes(id) ? [] : [id];
      });
    };

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {items.map((item) => {
          const isOpen = openItems.includes(item.id);

          return (
            <div
              key={item.id}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className={cn(
                  'flex w-full items-center justify-between px-4 py-3',
                  'text-sm font-medium transition-colors hover:bg-muted/50',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                )}
              >
                {item.title}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    isOpen && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all',
                  isOpen ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-4 py-3 text-sm">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);