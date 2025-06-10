import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Ajoutez d'autres chemins si nécessaire
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [],
}

export default config
