// app/layout.tsx
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center bg-stone-50 text-neutral-900">
        <Navbar />

        <main className="w-full max-w-4xl px-6 py-10 flex-1">{children}</main>

        <div className="w-full max-w-xl px-6">
          <Footer />
        </div>
      </body>
    </html>
  );
}
