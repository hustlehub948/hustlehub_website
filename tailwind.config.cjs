/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        hhBlue: '#3A8DFF',
        hhPurple: '#6C63FF',
        hhDark: '#1C1C1E',
        hhLight: '#F5F6FA',
        hhBorder: '#E5E7EB',
      },
      boxShadow: {
        hh: '0 10px 24px rgba(0,0,0,.08)',
      },
      backgroundImage: {
        hhGrad: 'linear-gradient(90deg, #3A8DFF, #6C63FF)',
        hhHero:
          'radial-gradient(1200px 400px at 50% -100px, rgba(58,141,255,.25), transparent 60%), radial-gradient(900px 400px at 80% -120px, rgba(108,99,255,.25), transparent 60%)'
      },
      borderRadius: {
        hh: '14px'
      },
      maxWidth: {
        container: '1120px'
      }
    },
  },
  plugins: [],
}

