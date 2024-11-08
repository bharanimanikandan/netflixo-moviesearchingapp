/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily : {
      'orbitron':["Orbitron", 'sans-serif'],
      'titilium':["Titillium Web", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

