import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    // For dynamic category colors in Skills.tsx
    'hover:border-green-400',
    'hover:border-blue-400',
    'hover:border-cyan-400',
    'hover:border-purple-400',
    'hover:border-orange-400',
    'hover:border-pink-400',
    'hover:shadow-green-400/10',
    'hover:shadow-blue-400/10',
    'hover:shadow-cyan-400/10',
    'hover:shadow-purple-400/10',
    'hover:shadow-orange-400/10',
    'hover:shadow-pink-400/10',
    'group-hover:text-green-400',
    'group-hover:text-blue-400',
    'group-hover:text-cyan-400',
    'group-hover:text-purple-400',
    'group-hover:text-orange-400',
    'group-hover:text-pink-400',
    'group-hover:text-green-300',
    'group-hover:text-blue-300',
    'group-hover:text-cyan-300',
    'group-hover:text-purple-300',
    'group-hover:text-orange-300',
    'group-hover:text-pink-300',
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
