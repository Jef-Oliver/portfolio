import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New neon design system
        dark: '#000000',
        'dark-card': '#0D0D0D',
        'dark-surface': '#111111',
        'dark-border': '#1A1A1A',
        'neon': '#00FF41',
        'neon-dim': '#00CC33',
        'neon-bright': '#39FF14',
        'neon-glow': 'rgba(0, 255, 65, 0.25)',
        light: '#FFFFFF',
        'gray-text': '#A0A0A0',
        'gray-muted': '#555555',
        // shadcn compat
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00FF41 0%, #00CC33 100%)',
        'hero-grid': `
          linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px)
        `,
        'card-gradient': 'linear-gradient(135deg, #0D0D0D 0%, #111111 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 65, 0.4), 0 0 60px rgba(0, 255, 65, 0.1)',
        'neon-sm': '0 0 10px rgba(0, 255, 65, 0.3)',
        'neon-lg': '0 0 40px rgba(0, 255, 65, 0.5), 0 0 100px rgba(0, 255, 65, 0.15)',
        'card': '0 4px 40px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'type': 'typing 3s steps(40) infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow-border': 'glowBorder 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 255, 65, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 255, 65, 0.7), 0 0 60px rgba(0, 255, 65, 0.3)' },
        },
        glowBorder: {
          '0%, 100%': { borderColor: 'rgba(0, 255, 65, 0.3)' },
          '50%': { borderColor: 'rgba(0, 255, 65, 0.9)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;