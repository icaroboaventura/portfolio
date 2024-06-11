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
        'opensans-regular': ['opensans-regular', 'sans-serif'],
        'opensans-bold': ['opensans-bold', 'sans-serif'],
        'opensans-bold-italic': ['opensans-bold-italic', 'sans-serif'],
      },
      fontSize: {
        clamp: 'clamp(1.5rem, 7.5vw, 5rem)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
