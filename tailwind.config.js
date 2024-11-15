/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1a365d',
          800: '#2c5282',
          700: '#2b6cb0',
          600: '#3182ce',
          500: '#4299e1',
          400: '#63b3ed',
          300: '#90cdf4',
          200: '#bee3f8',
          100: '#ebf8ff',
          50: '#f7fafc',
        },
      },
    },
  },
  plugins: [],
};