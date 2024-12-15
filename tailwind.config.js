/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainYellow: "#fcb72b",
        darkNavy: "#495567",
        dimgrey: "#939caa",
        lightGrey: "#e5ecf4",
        snow: "#f2f5f9",
        lightYellow: "#fff4df",
        footer: "#333a44"
      },
      fontFamily: {
        monoSpace: ["Space Mono", "monospace"],
        Lexend: ["Lexend Deca", "sans-serif"]
      }
    },
  },
  plugins: [],
}

