"use client";

import { useEffect, useState } from "react"; //useState untuk menyimpan status gelap/terang, dan useEffect untuk menjalankan perintah otomatis saat halaman pertama kali dibuka

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Saat pertama kali load, menyamakan user memilih apa sebelumnya
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      // Tambahkan dark:bg-neutral-800 dan dark:text-white
      className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer transition-colors"
    >
      {darkMode ? "🌙 Mode Gelap" : "☀️ Mode Terang"}
    </button>
  );
}
