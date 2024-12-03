import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '../Button/Button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="tertiary"
      size="sm"
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}