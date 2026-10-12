/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        ink: '#20251f',
        paper: '#f7f8f5',
        forest: '#244b3b',
        lime: '#d9f36a',
        muted: '#72786f'
      },
      boxShadow: { soft: '0 18px 50px rgba(31, 47, 35, .08)' }
    }
  },
  plugins: []
}