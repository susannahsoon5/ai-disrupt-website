module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'], // for <h1>, <h2> etc.
        body: ['Inter', 'sans-serif'],      // for paragraphs and buttons
        sans: ['Inter', 'sans-serif'],      // optional: default sans
      },
    },
  },
  plugins: [],
}