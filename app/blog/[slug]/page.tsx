import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import { getPostData } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function DetailBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. Tunggu (await) params-nya dulu biar dapet slug yang bener
  const resolvedParams = await params;
  // const slug = resolvedParams.slug;

  // 2. Cari di data posts
  const post = await getPostData(resolvedParams.slug);

  // 3. Kalau nggak ketemu, lempar ke 404
  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-2xl mx-auto py-20 px-6">
      <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
        {post.category} — {post.date}
      </span>
      <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 leading-tight">
        {post.title}
      </h1>

      <div className="mt-12 leading-relaxed text-lg text-neutral-800 space-y-6">
        {/* Ini simulasi konten, nanti bisa kita ganti pake Markdown */}
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
