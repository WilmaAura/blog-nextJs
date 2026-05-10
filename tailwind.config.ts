import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // INI WAJIB ADA DAN PAKAI TANDA PETIK
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./section/**/*.{js,ts,jsx,tsx,mdx}", // Tambahkan ini jika kamu pakai folder section
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
