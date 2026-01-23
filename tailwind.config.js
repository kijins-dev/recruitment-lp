/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a24',
          600: '#24242f',
        },
        accent: {
          cyan: '#00f0ff',
          pink: '#ff2d6a',
        }
      },
      fontFamily: {
        display: ['Zen Kaku Gothic New', 'sans-serif'],
        body: ['Noto Sans JP', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
