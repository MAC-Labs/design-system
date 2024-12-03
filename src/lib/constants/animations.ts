export const animations = {
  transition: {
    fast: '100ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },
  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    slideIn: {
      from: { transform: 'translateY(10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: '0' },
      to: { transform: 'scale(1)', opacity: '1' },
    },
  },
} as const;