import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        'primary-text': '#F5F5F7',
        'secondary-text': '#86868B',
        accent: '#0071E3',
        'accent-hover': '#0077ED',
        surface: '#111111',
        'surface-2': '#161616',
        border: '#1D1D1F',
        'border-light': 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        sans: ['var(--font-aldrich)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        doto: ['var(--font-aldrich)', 'sans-serif'],
      },
      fontSize: {
        'display-xl':   ['clamp(3rem, 8vw, 7rem)',     { lineHeight: '1.04', letterSpacing: '-0.04em' }],
        'display-lg':   ['clamp(2.5rem, 6vw, 5rem)',   { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md':   ['clamp(2rem, 4vw, 3.5rem)',   { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-doto': ['clamp(2.25rem, 5.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '0em' }],
      },
      spacing: {
        section: '8rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
    },
  },
  plugins: [],
  // Safelist dynamically-constructed classes so JIT doesn't purge them
  safelist: [
    'reveal-delay-1',
    'reveal-delay-2',
    'reveal-delay-3',
    'reveal-delay-4',
    'reveal-delay-5',
    'reveal-delay-6',
    'reveal-delay-7',
    'reveal-delay-8',
  ],
}

export default config
