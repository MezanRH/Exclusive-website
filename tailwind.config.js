/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      fontFamily: {
        'pop': ['Poppins'],
        'inter': ['Inter'],
      },
      colors: {
        'primary': '#DB4444',
        'secound': '#FAFAFA',
        'third': '#FFAD33',
        'four': '#000',
      },
      width:{
        19:"19%",
        70:"70%"
      },
      minHeight: {
        '250': '250px',
      }
    },
  },
  plugins: [],
}

