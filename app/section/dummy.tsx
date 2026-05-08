// section/post-list.tsx

const posts = [
  {
    id: 1,
    title: "Membangun Kebiasaan Menulis Setiap Hari",
    category: "Productivity",
    date: "Jan 12, 2026",
    description:
      "Bagaimana saya mulai menulis 500 kata setiap pagi tanpa merasa terbebani.",
  },
  {
    id: 2,
    title: "Kenapa Saya Memilih Arch Linux",
    category: "Tech",
    date: "Feb 05, 2026",
    description:
      "Pengalaman belajar sistem operasi yang mengubah cara saya memandang komputer.",
  },
];

export default function PostList() {
  return (
    <section className="mt-12 space-y-12">
      {posts.map((post) => (
        <article key={post.id} className="group cursor-pointer">
          <div className="flex justify-between items-start gap-8">
            <div className="space-y-2">
              <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">
                {post.category} — {post.date}
              </span>
              <h2 className="text-2xl font-serif font-bold group-hover:text-orange-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                {post.description}
              </p>
            </div>
            {/* Gambar Miniatur */}
            <div className="hidden sm:block w-24 h-24 bg-neutral-200 rounded-lg shrink-0"></div>
          </div>
        </article>
      ))}
    </section>
  );
}
