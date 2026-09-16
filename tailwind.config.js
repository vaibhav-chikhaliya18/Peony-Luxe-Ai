/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'surface': 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-brand': 'var(--border)',
        'brand-blue': 'var(--blue)',
        'brand-violet': 'var(--violet)',
        'brand-magenta': 'var(--magenta)',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'var(--brand-gradient)',
      },
      maxWidth: {
        'site': '1360px',
      }
    },
  },
  plugins: [],
}
