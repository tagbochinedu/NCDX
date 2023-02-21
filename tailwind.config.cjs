/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#72E028",
        orange: "#F8C04B",
        logo: "#626477",
        lgr: "#B6B6C0",
        lgr2: "#EDEFF1",
      },
    },
  },
  plugins: [],
};
