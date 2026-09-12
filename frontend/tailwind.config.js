export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6B00',
          50: '#FFF4EB',
          100: '#FFE4D1',
          200: '#FFC89A',
          500: '#FF6B00',
          600: '#E55E00',
          700: '#B94A00',
        },
        charcoal: '#1A1A1A',
        black: '#111111',
      },
      boxShadow: {
        soft: '0 18px 48px rgba(26, 26, 26, 0.12)',
      },
    },
  },
  plugins: [],
}