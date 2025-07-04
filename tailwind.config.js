import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0F172A',
        'subtle-teal': '#2DD4BF',
        'soft-gold': '#FBBF24',
        'light-gray': '#CBD5E1',
      },
      fontFamily: {
        heading: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        body: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
