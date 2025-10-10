/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}", // <-- bagus, biar detect module
  ],
  theme: {
    extend: {
      colors: {
        softBackground: "#f7f8ff",
        primaryBlue: "#2563eb",
        secondaryBlue: "#3b82f6",
        gradientBlue: "#1e40af",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // ✅ tambahkan ini!
  ],
};
