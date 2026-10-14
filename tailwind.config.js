export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#a3e635',
          'lime-hover': '#bef264',
          dark: '#0d0d0d',
          card: '#141414',
          border: '#1f242c',
          dim: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 25px -5px rgba(163, 230, 53, 0.35)',
        'glow-subtle': '0 0 40px -10px rgba(163, 230, 53, 0.15)',
      },
    },
  },
  plugins: [],
};
