import React from "react";
import Post from "./Post";
import postsData from "../../data/posts.json";

export default function Posts({
  showPartial = false,
  neighborhoodList = [],
  bookingStatus = [],
}) {
  const limitCnt = 3; // only show 3 posts on the homepage

  // Filter posts based on bookingStatus
  const filteredPosts =
    bookingStatus.length > 0
      ? postsData.filter((post) => bookingStatus.includes(post.bookingStatus))
      : postsData;

  const postsToRender = showPartial
    ? filteredPosts.slice(0, limitCnt)
    : filteredPosts;

  return (
    <div className="w-full my-3 flex flex-wrap justify-between content-evenly">
      {postsToRender.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}
