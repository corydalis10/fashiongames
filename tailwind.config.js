/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {'light': {
          "base-200": "#D09EF8",
          "base-300": "#BB8EDF"
        }
      }
    ]
  }
}

