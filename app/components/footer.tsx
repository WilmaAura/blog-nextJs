// components/footer.tsx

export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-gray-100 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Nama atau Logo */}
        <p className="text-sm text-neutral-500 font-medium">
          © 2026 WilmaAura.
        </p>

        {/* Link Sosial Media atau Navigasi Kecil */}
        <div className="flex gap-6 text-sm text-neutral-400">
          <a href="#" className="hover:text-neutral-900 transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-neutral-900 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-neutral-900 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
