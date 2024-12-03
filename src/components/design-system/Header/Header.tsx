import { Github } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Button } from '../Button/Button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold">Design System</div>
        <div className="flex items-center gap-4">
          <Button
            variant="tertiary"
            size="sm"
            className="gap-2"
            onClick={() => window.open('https://github.com/MAC-Labs/design-system', '_blank')}
          >
            <Github className="h-5 w-5" />
            <span className="hidden sm:inline">GitHub</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}