/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'soft-grey' : '#D9D9D9',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 0px 7px 3px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

