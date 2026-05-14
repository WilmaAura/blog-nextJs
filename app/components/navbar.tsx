import ThemeToggle from "./themeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-14 px-5 py-6 flex justify-between items-center fixed bg-stone-100">
      <div className="font-bold text-xl tracking-tighter">WilmaAura</div>
      <div className="space-x-6 text-sm text-gray500">
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <Link href="/blog" className="hover:text-orange-600 transition-colors">
          Blog
        </Link>
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Cerpen
        </Link>
      </div>
    </nav>
  );
}
