import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "I Use Arch Btw.",
    category: "Tech",
    date: "May 08, 2026",
    description:
      "Alasan aku menggunakan Arch Linux sebagai OS untuk kebutuhan produktivitas.",
    Image: "/arch.jpg",
  },
  {
    id: 2,
    title: "Kolom.",
    category: "Cerpen",
    date: "May 09, 2026",
    description:
      " Damar bertemu dengan wanita yang perawakannya lebih pendek dari Damar, kulitnya putih, dan ia memiliki senyuman yang entah kenapa membuat Damar tersenyum.",
    Image: "/kolom.jpg",
  },
];

export default function PostList() {
  return (
    <section className="mt-12 space-y-12">
      {posts.map((artikel) => (
        <Link href={`/blog/${artikel.id}`} key={artikel.id}>
          <article className="group cursor-pointer">
            {/* Ganti items-start menjadi items-center agar sejajar tengah */}
            <div className="flex justify-between items-center gap-8">
              <div className="space-y-2">
                <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">
                  {artikel.category} - {artikel.date}
                </span>
                <h2 className="text-2xl font-serif font-bold group-hover:text-orange-600 transition-colors">
                  {artikel.title}
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                  {artikel.description}
                </p>
              </div>

              {/* Kotak Gambar dengan Image asli */}
              <div className="hidden sm:block relative w-32 h-32 bg-neutral-200 rounded-lg shrink-0 overflow-hidden">
                {/* Jika belum ada file gambarnya, kotak ini akan tetap abu-abu */}
                {artikel.Image && (
                  <Image
                    src={artikel.Image}
                    alt={artikel.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}
