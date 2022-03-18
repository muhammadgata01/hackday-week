const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    fontFamily: {
      sans: ['Patrick Hand', 'cursive'],
    },
    extend: {
      colors: {
        dark: {
          500: '#4B5563',
          600: '#374151',
          700: '#1F2937',
          800: '#111827',
        },
        typo: colors.neutral,
      },
    },
  },
  plugins: [],
};
