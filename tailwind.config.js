/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "accent": "var(--accent-color)",
        "background-light": "#FFFFFF",
        "background-dark": "#000000",
        "text-light": "#000000",
        "text-dark": "#FFFFFF",
        "subtext-light": "#475569",
        "subtext-dark": "#E5E7EB"
      },
      fontFamily: {
        "display": ["var(--font-poppins)", "sans-serif"],
        "body": ["var(--font-manrope)", "sans-serif"],
        "professional": ["var(--font-roboto)", "sans-serif"],
        "times": ["Times New Roman", "serif"],
        "playfair": ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        "DEFAULT": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}