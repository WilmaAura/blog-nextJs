const posts = [
  {
    id: 1,
    title: "I Use Arch Btw.",
    category: "Tech",
    date: "May 08, 2026",
    description:
      "Alasan aku menggunakan Arch Linux sebagai OS untuk kebutuhan produktivitas",
  },
];

export default function PostList() {
  return (
    <section className="mt-12 space-y-12">
      {/* .map() Mengambil setiap data satu per satu dan mengubahnya menjadi sesuatu yang baru 
      (dalam hal ini, menjadi tampilan HTML*/}
      {posts.map((artikel) => (
        <article key={artikel.id} className="group cursor-pointer">
          {" "}
          {/* group: agar ada  */}
          <div className="flex justify-between items-start gap-8">
            <div className="space-y-2">
              <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">
                {artikel.category} - {artikel.date}
              </span>
              <h2 className="text-2xl font-serif font-bold group-hover:text-orange-600 transition colors">
                {artikel.title}
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                {artikel.description}
              </p>
            </div>
            <div className="hidden sm:block w-24 h-24 bg-neutral-200 rounded-lg shrink-0"></div>
          </div>
        </article>
      ))}
    </section>
  );
}
