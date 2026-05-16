export default function Hero() {
  return (
    <section className="py-16 border-b border-neutral-100 mb-12">
      <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">
        Wilma's Blog
      </span>

      {/* The Big Headline */}
      <h1 className=" mt-4 text-5xl font-medium font-serif leading-tight text-neutral-900">
        Karya Tulis untuk <br /> Mengabadikan Memory
      </h1>

      <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-2xl">
        Selamat datang di blog saya. Di sini, saya menulis tentang cerpen,
        ringkasan buku, dan segala hal yang aku pelajari.
      </p>

      {/* Divider line to separate from the list */}
      <div className="mt-12 w-full h-[1px] bg-neutral-200" />
    </section>
  );
}
