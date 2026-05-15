import fs from "fs"; //File system: libary node.js untuk membaca/tulis file di ssd/hdd
import path from "path"; //Mengatur alamat folder
import matter from "gray-matter"; //Matter: "Penerjemah" buat misahin bagian metadata (---) dan isi cerpen.

const postDirectory = path.join(process.cwd(), "app/content/cerpen");

export function getStoredPostsData() {
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Hapus ".md" dari nama file untuk jadi slug/id
    const id = fileName.replace(/\.md$/, "");

    // Baca file markdown sebagai string
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Gunakan gray-matter untuk membedah bagian metadata
    const { data } = matter(fileContents);

    return {
      id,
      slug: id,
      ...(data as {
        title: string;
        date: string;
        category: string;
        description: string;
        Image: string;
      }),
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// untuk mengambil isi md lengkap berdasarkan slug
export function getPostData(slug: string) {
  const fullPath = path.join(postDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as {
      title: string;
      date: string;
      category: string;
      description: string;
      Image: string;
    }),
  };
}
