// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ou 'media' si vous préférez
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Ajoutez d'autres chemins si nécessaire
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ici, nous définissons 'sans' pour utiliser la variable --font-lato.
        // Tous les éléments utilisant la classe 'font-sans' (souvent le défaut pour le body) utiliseront Lato.
        sans: [`var(--font-lato)`, ...fontFamily.sans],
        // Vous conservez geistMono pour la famille 'mono' si besoin.
        mono: [`var(--font-geist-mono)`, ...fontFamily.mono],
        // Si vous voulez aussi une utilité spécifique pour Geist Sans, vous pouvez l'ajouter :
        // geist: [`var(--font-geist-sans)`, ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
