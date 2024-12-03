import { colors, typography } from '@/lib/constants';

export const globalStyles = {
  ':root': {
    '--color-primary': colors.primary.main,
    '--color-primary-light': colors.primary.light,
    '--color-primary-dark': colors.primary.dark,
    '--color-secondary': colors.secondary.main,
    '--color-accent': colors.accent.main,
    '--color-background': colors.background.default,
    '--color-text': colors.text.primary,
    '--font-family': typography.fontFamily.primary,
  },
  '.dark': {
    '--color-background': colors.background.dark,
    '--color-text': colors.background.paper,
  },
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  'html, body': {
    fontFamily: 'var(--font-family)',
    backgroundColor: 'var(--color-background)',
    color: 'var(--color-text)',
    lineHeight: typography.lineHeight.normal,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    marginBottom: '0.5em',
  },
  'button, input, textarea, select': {
    fontFamily: 'inherit',
  },
  '[data-focus-visible]': {
    outline: `2px solid ${colors.primary.main}`,
    outlineOffset: '2px',
  },
} as const;