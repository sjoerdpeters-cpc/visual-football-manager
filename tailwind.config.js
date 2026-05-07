/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 28px 80px rgba(0, 0, 0, 0.55)',
        glow: '0 0 28px rgba(74, 255, 178, 0.72)',
      },
    },
  },
  plugins: [],
};
