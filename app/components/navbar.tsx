"use client";

import ThemeToggle from "./themeToggle";
import Link from "next/link";
import { useState, useEffect, useRef } from "react"; /* 
useState: menyimpan state
useEffect: menjalankan logic setelah component muncul
useRef: menyimpan value tanpa re-render
*/

export default function Navbar() {
  const [visible, setVisible] = useState(true); //menentukan navbar terlihat atau tidak (true: navbar terlihat)
  const lastScrolly = useRef(0); //Menyimpan posisi scroll terakhir tanpa trigger re-render

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>; //It's not even an error, its just typescript needs a type of the variable
    //function yang dijalankan setiap user scroll
    const handleScroll = () => {
      const currentScrolly = window.scrollY; //Ambil posisi scroll browser secarang
      // Jika scroll ke baweh dan sudah melewati area atas (misal > 50px), sembunyikan navbar
      if (currentScrolly > lastScrolly.current && currentScrolly > 50) {
        setVisible(false);
      }
      // update posisi scroll terakhir
      lastScrolly.current = currentScrolly;
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(true);
      }, 300); //tunggu 300ms baru muncul navbarnya
    };
    window.addEventListener("scroll", handleScroll);

    //Membersihkan event listener saaat komponen tidak dipakai
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-14 px-6 flex justify-between items-center fixed top-0 bg-stone-100/80 backdrop-blur-md z-50 border-b border-neutral-200/50 
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}`} // jika visible === true maka keliatan navbarnya (translate-y-0). Else: jika visible === false maka navbar digeser keatas sejauh tinggi penuh navbar.
    >
      <Link
        href="/"
        className="font-bold font-serif text-3xl tracking-tighter hover:text-orange-600"
      >
        AURA
      </Link>
      <div className="space-x-6 text-sm text-gray500">
        <Link
          href="/"
          className="hover:text-orange-600 transition-colors font-bold text-xl"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="hover:text-orange-600 transition-colors font-bold text-xl"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
