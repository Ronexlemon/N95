/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hci': "url('/src/assets/comp.jpg')",
        'problem': "url('/src/assets/problem.jpg')",
        
      }
    },
  },
  plugins: [],
}