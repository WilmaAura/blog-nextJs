import Hero from "./section/hero";
import PostList from "./section/post-list";
import { getStoredPostsData } from "@/lib/utils";
export default function Home() {
  const allPostsData = getStoredPostsData();
  return (
    <div>
      <h1>
        <Hero></Hero>
        <PostList initialPosts={allPostsData} />
      </h1>
    </div>
  );
}
