/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{},
    fontFamily:{
      Concert :["Concert One","sans-serif"],
      Permanent :["Permanent Marker","cursive"],
      Bree :["Bree Serif","serif"],
    }
  },
  plugins: [],
}

