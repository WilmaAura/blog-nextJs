"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

export default function PostList() {
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Logika Filter: Mencari judul yang mengandung kata dari searchQuery
  const filteredPosts = posts.filter((artikel) =>
    artikel.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="mt-12 space-y-12">
      {/* 2. Input Search Bar */}
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="Cari artikel..."
          className="w-full p-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-12">
        {/* 3. Ganti 'posts.map' menjadi 'filteredPosts.map' */}
        {filteredPosts.length > 0 ? (
          filteredPosts.map((artikel) => (
            <Link href={`/blog/${artikel.id}`} key={artikel.id}>
              <article className="group cursor-pointer">
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

                  <div className="hidden sm:block relative w-32 h-32 bg-neutral-200 rounded-lg shrink-0 overflow-hidden">
                    {/* Perhatikan 'artikel.image' (pakai i kecil sesuai standar JS) */}
                    {artikel.image && (
                      <Image
                        src={artikel.image}
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
          <p className="text-center py-10 text-neutral-400">
            Yah, artikel "{searchQuery}" nggak ada, Wil...
          </p>
        )}
      </div>
    </section>
  );
}
