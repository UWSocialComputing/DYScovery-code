import Post from "./post";

/**
 *
 * @returns A post component that has the posts.
 */

export default function Posts() {
  const obj1 = {
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  };

  const obj2 = {
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  };

  return (
    <div className="mt-3 flex flex-wrap justify-between content-evenly">
      <Post {...obj1} />
      <Post {...obj2} />
      <Post {...obj1} />
    </div>
  );
}
