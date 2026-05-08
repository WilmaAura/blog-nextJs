// app/layout.tsx
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 1. Tambahkan bg-stone-50 agar warna latar belakangnya elegan */}
      {/* 2. Gunakan min-h-screen agar body selalu setinggi layar */}
      <body className="min-h-screen flex flex-col items-center bg-stone-50 text-neutral-900">
        <Navbar />
        {/* Content Area - Tambahkan flex-1 agar dia 'mengambil' sisa ruang */}
        <main className="w-full max-w-xl px-6 py-10 flex-1">{children}</main>

        {/* Footer - Sekarang dia akan selalu di bawah karena flex-1 di atas */}
        <div className="w-full max-w-xl px-6">
          <Footer />
        </div>
      </body>
    </html>
  );
}
