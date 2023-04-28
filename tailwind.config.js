/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ADFD97",

          "secondary": "#9825fc",

          "accent": "#e28914",

          "neutral": "#1B262C",

          "base-100": "white",

          "info": "#8ABCE5",

          "success": "#5DEABB",

          "warning": "#F4B74E",

          "error": "#F7455A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

