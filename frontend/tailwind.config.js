/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#E50914',
          black: '#141414',
          gray: '#2F2F2F'
        },
        'netflix-red': '#E50914',
        'netflix-black': '#141414',
        'netflix-gray': '#2F2F2F',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #E50914, 0 0 10px #E50914' },
          '100%': { boxShadow: '0 0 10px #E50914, 0 0 20px #E50914, 0 0 30px #E50914' },
        }
      }
    },
  },
  plugins: [],
}