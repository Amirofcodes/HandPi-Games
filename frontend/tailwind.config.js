// frontend/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
      extend: {
          colors: {
              primary: '#4361ee',
              secondary: '#3f37c9',
              accent: '#4895ef',
              neutral: '#f8f9fa',
              dark: '#212529',
              gradientStart: '#4cc9f0',
              gradientEnd: '#4361ee',
          },
          fontFamily: {
              sans: ['Inter', 'sans-serif'],
          },
          boxShadow: {
              'smooth': '0 4px 20px rgba(0, 0, 0, 0.05)',
              'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
          },
          borderRadius: {
              'xl': '1rem',
              '2xl': '1.5rem',
          },
      },
  },
  plugins: [],
};
