"use client"; // Wajib karena pakai state dan event listener

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "./themeToggle";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0); // Menyimpan posisi scroll terakhir tanpa trigger re-render

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Jika scroll ke bawah dan sudah melewati area atas (misal > 50px), sembunyikan navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(false);
      } else {
        // 2. Jika scroll ke atas, munculkan kembali navbar
        setVisible(true);
      }

      // Update posisi scroll terakhir
      lastScrollY.current = currentScrollY;
    };

    // Pasang event listener ke window browser
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen tidak dipakai (anti memory leak!)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-14 px-6 flex justify-between items-center fixed top-0 bg-stone-100/80 backdrop-blur-md z-50 border-b border-neutral-200/50 
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}`} // Rahasia transisinya ada di dua class ini
    >
      {/* Logo balik ke Home */}
      <Link
        href="/"
        className="font-bold text-xl tracking-tighter hover:text-orange-600 transition-colors"
      >
        WilmaAura
      </Link>

      <div className="flex items-center space-x-6 text-sm text-neutral-600">
        <Link
          href="/"
          className="hover:text-orange-600 transition-colors font-bold"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="hover:text-orange-600 transition-colors font-bold"
        >
          Blog
        </Link>
        {/* Cerpen diarahkan ke slug id # atau page khusus nanti */}
        <Link
          href="/"
          className="hover:text-orange-600 transition-colors font-bold"
        >
          Cerpen
        </Link>

        {/* Jangan lupa ThemeToggle-nya dipasang kembali */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
