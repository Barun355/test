/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0c0722',
        secondary: '#170e48',
        accent: '#8a82b6',
        'underline-dark': '#2ef010',
        'underline-light': '#65e550',
      },
      fontFamily: {
        bricolage: 'Bricolage Grotesque',
      },
      boxShadow: {
        'default': '0 -7rem 10rem -10px  rgba(138, 130, 180, 1)',
      }
    },
  },
  plugins: [],
}
