"use client";

import ThemeToggle from "./themeToggle";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrolly = useRef(0); //Menyimpan posisi scroll terakhir tanpa trigger re-render

  useEffect(() => {
    let timeout; //It's not even an error, its just typescript needs a type of the variable
    const handleScroll = () => {
      const currentScrolly = window.scrollY;
      // Jika scroll ke baweh dan sudah melewati area atas (misal > 50px), sembunyikan navbar
      if (currentScrolly > lastScrolly.current && currentScrolly > 50) {
        setVisible(false);
      }
      // update posisi scroll terakhir
      lastScrolly.current = currentScrolly;
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(true);
      }, 50);
    };
    window.addEventListener("scroll", handleScroll);

    //Membersihkan evet listener saaat komponen tidak dipakai
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-14 px-6 flex justify-between items-center fixed top-0 bg-stone-100/80 backdrop-blur-md z-50 border-b border-neutral-200/50 
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Link
        href="/"
        className="font-bold text-xl tracking-tighter hover:text-orange-600"
      >
        WilmaAura
      </Link>
      <div className="space-x-6 text-sm text-gray500">
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
        <Link
          href="/"
          className="hover:text-orange-600 transition-colors font-bold"
        >
          Cerpen
        </Link>
      </div>
    </nav>
  );
}
