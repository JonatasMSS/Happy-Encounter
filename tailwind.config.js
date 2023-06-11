/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },

      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      },

      fontFamily: {
        sans: 'var(--font-lobster)',
      },
      colors: {
        Cred: '#FB0A0A',
        dune: {
          10: '#F4F4F4',
          20: '#CBC7C7',
          30: '#A29B9A',
          40: '#7A716F',
          50: '#514947',
          60: '#282322',
        },
        cardinal: {
          10: '#FFEDF1',
          20: '#FFB6C6',
          30: '#FF809B',
          40: '#F6476D',
          50: '#B21C3C',
          60: '#6E031A',
        },
      },
    },
  },
  plugins: [],
}
