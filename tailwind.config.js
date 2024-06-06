/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#41B06E',
        secondary: '#141E46',
        tertiary: '#FFF5E0',
        quaternary: '#8DECB4',
      },
      fontFamily: {
        'arvo-regular': ['arvo-regular', 'sans-serif'],
        'arvo-bold': ['arvo-bold', 'sans-serif'],
      },

      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
