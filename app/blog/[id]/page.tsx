export default function detailBlog({ params }: { params: { id: string } }) {
  return (
    <main className="py-20">
      <h1 className="text-4xl font-serif font-bold">
        Halaman Artikel dengan ID: {params.id}
      </h1>
      <p className="mt-6 text-neutral-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        provident nemo illo adipisci corrupti facere mollitia tempore optio
        repellendus odit eligendi expedita pariatur ab, dignissimos architecto
        hic voluptatum culpa? Nemo.
      </p>
    </main>
  );
}
