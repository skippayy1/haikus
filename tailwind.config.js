/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },
      textOrientation: {
        'upright': 'upright',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-mode-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
        '.text-orientation-upright': {
          'text-orientation': 'upright',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
};