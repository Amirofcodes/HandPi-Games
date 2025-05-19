// frontend/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
      extend: {
          colors: {
              primary: '#4f46e5',
              secondary: '#6366f1',
              accent: '#818cf8',
              gradientStart: '#36FF6F',
              gradientEnd: '#00A54F',
          },
          fontFamily: {
              sans: ['Inter', 'sans-serif'],
          },
      },
  },
  plugins: [],
};
