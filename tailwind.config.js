/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#9987F9",
          200: "#7B66E8",
          300: "#472CD5",
        },
        secondary: {
          100: "#62D1FF",
          200: "#00B4FF",
          300: "#0389C2",
        },
      },
    },
  },
  plugins: [],
};
