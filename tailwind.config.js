/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          500: '#F45EBB',
          600: '#E044A7'
        }
      }
    }
  },
  plugins: []
}
