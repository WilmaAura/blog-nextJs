"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { posts } from "@/data/posts";

export default function PostList() {
  const [searchQuerry, setSearchQuerry] = useState("");
  const filteredPosts = posts.filter((artikel) =>
    artikel.title.toLowerCase().includes(searchQuerry.toLocaleLowerCase())
  );
  return (
    <section className="mt-20 space-y-12">
      {/* -- Search Bar -- */}
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="Cari artikel..."
          className="w-full p-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          onChange={(e) => setSearchQuerry(e.target.value)}
        />
      </div>

      <div className="space-y-24">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((artikel) => (
            <Link href={`/blog/${artikel.slug}`} key={artikel.id}>
              <article className="group cursor-pointer">
                <div className="flex justify-between items-center gap-8 py-4">
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

                  <div className="hidden sm:block relative w-32 h-32 bg-neutral-200 rounded-lg shrink-0 overflow-hidden">
                    {/* Perhatikan 'artikel.image' (pakai i kecil sesuai standar JS) */}
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
          ))
        ) : (
          /* 4. Tampilan kalau hasil pencarian kosong */
          <p className="text-center py-10 text-neutral-400">Tidak ada</p>
        )}
      </div>
    </section>
  );
}
