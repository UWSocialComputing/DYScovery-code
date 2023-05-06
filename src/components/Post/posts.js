import Post from "./Post";
import postsData from "../../data/posts.json";

export default function Posts({ showPartial = false }) {
  const limitCnt = 3; // only show 3 posts on the homepage
  const limitedPostsData = showPartial
    ? postsData.slice(0, limitCnt)
    : postsData;

  return (
    <div className="w-full my-3 flex flex-wrap justify-between content-evenly">
      {limitedPostsData.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}
