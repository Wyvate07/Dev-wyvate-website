/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      important: true,
      colors:{
        pri:"#09C27E",
        sec:"#ED1C24",
        tri:"#7B66FF"
      }
    },
  },
  plugins: [],
}