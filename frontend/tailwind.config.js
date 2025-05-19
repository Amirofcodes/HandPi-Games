// frontend/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
      extend: {
          colors: {
              primary: '#6366f1',
              secondary: '#4f46e5',
              accent: '#a78bfa',
              accent2: '#f43f5e',
              dark: '#0f172a',
              darker: '#070b14',
              light: '#f8fafc',
              neutral: '#141e33',
              surface: '#0f172a',
              card: '#0c1425',
              cardLight: '#141e33',
              gradientStart: '#8b5cf6',
              gradientEnd: '#3b82f6',
          },
          fontFamily: {
              sans: ['Inter', 'sans-serif'],
          },
          boxShadow: {
              'smooth': '0 4px 20px rgba(0, 0, 0, 0.25)',
              'card': '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
              'glow': '0 0 15px rgba(99, 102, 241, 0.5)',
              'glow-accent': '0 0 15px rgba(167, 139, 250, 0.5)',
              'glow-red': '0 0 15px rgba(244, 63, 94, 0.5)',
              'inner-glow': 'inset 0 0 15px rgba(99, 102, 241, 0.2)',
          },
          borderRadius: {
              'xl': '1rem',
              '2xl': '1.5rem',
          },
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          },
          keyframes: {
            pulse: {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.5 },
            },
            glow: {
              '0%, 100%': { 
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)' 
              },
              '50%': { 
                boxShadow: '0 0 25px rgba(99, 102, 241, 0.8)' 
              },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            }
          },
          animation: {
            pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            glow: 'glow 3s ease-in-out infinite',
            float: 'float 5s ease-in-out infinite'
          }
      },
  },
  plugins: [],
};
