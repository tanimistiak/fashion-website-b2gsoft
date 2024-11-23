/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        hero: "url('/images/banner.png')",
        heroMobile: "url('/images/banner-mobile.png')",
        motive: "url('/images/motive.png')",
        motiveMobile: "url('/images/motive mobile.png')",
      },
      backgroundPosition: {
        "right-4": "center right -900px",
      },
    },
  },
  plugins: [],
};
