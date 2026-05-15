import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-40 pb-32">
      <div className="max-w-3xl space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-orange-600 font-semibold">
          WilmaAura
        </p>

        <h1 className="text-5xl md:text-7xl leading-tight tracking-tight font-serif">
          Writing thoughts,
          <br />
          building software,
          <br />
          and preserving memories.
        </h1>

        <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
          Personal space for writing, software engineering, Linux, philosophy,
          and everything I want to remember.
        </p>

        <div className="flex gap-4 pt-4">
          <Link
            href="/blog"
            className="px-6 py-3 bg-neutral-900 text-white rounded-full hover:opacity-80 transition-opacity"
          >
            Read Blog
          </Link>

          <Link
            href="/projects"
            className="px-6 py-3 border border-neutral-300 rounded-full hover:bg-neutral-200 transition-colors"
          >
            My Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
