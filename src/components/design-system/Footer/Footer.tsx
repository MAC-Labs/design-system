import { Github } from 'lucide-react';
import { Typography } from '../Typography/Typography';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Typography variant="body2" className="text-muted-foreground">
              Built with ❤️ by{' '}
              <a
                href="https://maclabs.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary"
              >
                MacLabs.io
              </a>
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/MAC-Labs/design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}