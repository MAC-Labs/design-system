import { Github, Heart, Package, Sparkles } from 'lucide-react';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16">
      <div className="container mx-auto px-4 py-24 text-center">
        {/* Main Heading */}
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
          <Package className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Open Source Design System</span>
        </div>
        
        <Typography variant="h1" className="mb-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Beautiful Components
          <br />
          Built with Love
        </Typography>

        <Typography variant="body1" className="mb-8 mx-auto max-w-2xl text-muted-foreground">
          A comprehensive collection of beautiful, accessible, and customizable components.
          Open source and free to use under the MIT license.
        </Typography>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => window.open('https://github.com/MAC-Labs/design-system', '_blank')}
            className="gap-2 min-w-[200px]"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' })}
            className="gap-2 min-w-[200px]"
          >
            <Sparkles className="h-5 w-5" />
            Explore Components
          </Button>
        </div>

        {/* Open Source Message */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Heart className="h-4 w-4 text-red-500" />
          <span>Let's make changes together! Contributions are welcome</span>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5" />
          <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-1/2 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}