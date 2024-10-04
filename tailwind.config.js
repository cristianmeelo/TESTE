/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#e7e7e7',
        'dark-bg': '#1f1f1f', // Background color for dark mode
        'light-bg': '#ffffff', // Background color for light mode
        'dark-text': '#ffffff', // Text color for dark mode
        'light-text': '#000000' // Text color for light mode
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        dotgothic: ['DotGothic16', 'sans-serif']
      }
    }
  },
  plugins: []
}
