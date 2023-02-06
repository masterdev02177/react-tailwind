/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'back-color': "#3c0d99",
        'normal-text' : "#e2e8eb",
        'icon-back' : "#f7fafc",
        'opacity-color' : "#cbc5ce"
      } ,
      fontFamily: {
        sans: [
          "Inter var, sans-serif",
          { fontFeatureSettings: '"cv11", "ss01"' },
        ],
      },
    },
  },
  plugins: [],
}