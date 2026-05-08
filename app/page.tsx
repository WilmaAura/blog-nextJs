import Hero from "./section/hero";
import PostList from "./section/post-list";
export default function Home() {
  return (
    <div>
      <h1>
        <Hero></Hero>
        <PostList />
      </h1>
    </div>
  );
}
