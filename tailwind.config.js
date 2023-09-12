/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#428aea',
          light: '#8cb8f2',
          dark: '#155ebf',
          'extra-light': '#d9e7fb',
          'extra-dark': '#0d3873',
        },
        secondary: {
          main: '#fed14f',
          light: '#fede80',
          dark: '#d39d01',
          'extra-light': '#fff4d5',
          'extra-dark': '#7f5e01',
        },
      },
    },
  },
  plugins: [],
};
