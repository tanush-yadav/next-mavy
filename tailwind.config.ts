import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        crimson: ['var(--font-crimson-text)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        neutral: {
          0: '#ffffff',
          100: '#f6f6f6',
          900: '#101010',
          1000: '#000000',
        },
        alphaNeutralLight: {
          900: 'rgba(255, 255, 255, 0.9000)',
          800: 'rgba(255, 255, 255, 0.7000)',
          700: 'rgba(255, 255, 255, 0.5500)',
          600: 'rgba(255, 255, 255, 0.3000)',
          500: 'rgba(255, 255, 255, 0.2000)',
          400: 'rgba(255, 255, 255, 0.1000)',
          300: 'rgba(255, 255, 255, 0.0500)',
        },
        alphaNeutralDark: {
          900: 'rgba(0, 0, 0, 0.9000)',
          800: 'rgba(0, 0, 0, 0.7000)',
          700: 'rgba(0, 0, 0, 0.5500)',
          600: 'rgba(0, 0, 0, 0.3000)',
          500: 'rgba(0, 0, 0, 0.2000)',
          400: 'rgba(0, 0, 0, 0.1000)',
          300: 'rgba(0, 0, 0, 0.0500)',
        },
        blue: {
          100: '#e3e7ec',
          300: '#c1dbff',
          500: '#1575d2',
          900: '#151617',
        },
        text: {
          primary: 'rgba(0, 0, 0, 0.9000)',
          secondary: 'rgba(0, 0, 0, 0.7000)',
          tertiary: 'rgba(0, 0, 0, 0.5500)',
          brand: {
            DEFAULT: '#1575d2',
          },
          inverse: {
            primary: 'rgba(255, 255, 255, 0.9000)',
            secondary: 'rgba(255, 255, 255, 0.7000)',
            tertiary: 'rgba(255, 255, 255, 0.5500)',
          },
        },
        bg: {
          primary: '#f6f6f6',
          brandSubtler: '#e3e7ec',
          brandSubtle: '#c1dbff',
          secondary: '#ffffff',
        },
        icon: {
          neutral: {
            active: '#101010',
            inactive: 'rgba(0, 0, 0, 0.5500)',
          },
          primaryBrand: '#1575d2',
        },
        border: {
          inactive: 'rgba(0, 0, 0, 0.1000)',
          active: 'rgba(0, 0, 0, 0.9000)',
        },
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
          light: 'hsl(var(--primary-light))',
          blue: 'hsl(var(--primary-blue))',
          'blue-light': 'hsl(var(--primary-blue-light))',
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
        sidebar: {
          bg: 'hsl(var(--sidebar-bg))',
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
