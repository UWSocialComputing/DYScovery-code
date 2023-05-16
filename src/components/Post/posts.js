import React from "react";
import Post from "./Post";
import postsData from "../../data/posts.json";

export default function Posts({
  showPartial = false,
  groupSize,
  neighborhoodList = [],
  priceRange,
  userRating,
  bookingStatus = [],
}) {
  // Filter posts based on multiple criteria
  const filteredPosts = postsData.filter((post) => {
    // Check if the post's booking status matches any selected booking status
    if (
      bookingStatus.length > 0 &&
      !bookingStatus.includes(post.bookingStatus)
    ) {
      console.log(
        `Filtered out post due to booking status: ${post.bookingStatus}`
      );
      return false;
    }

    // Check if the group size matches
    if (groupSize !== "" && parseInt(post.groupSize) !== parseInt(groupSize)) {
      console.log(`Filtered out post due to group size: ${post.groupSize}`);
      return false;
    }

    // Check if any neighborhood from the selected list is in the post's neighborhood list
    if (
      neighborhoodList.length > 0 &&
      !neighborhoodList.some((neighborhood) =>
        post.neighborhoodList.includes(neighborhood)
      )
    ) {
      console.log(
        `Filtered out post due to neighborhood list: ${post.neighborhoodList}`
      );
      return false;
    }

    // Check if the post's price range falls within the selected range
    if (
      priceRange !== undefined &&
      (post.priceRange[0] < priceRange[0] || post.priceRange[1] > priceRange[1])
    ) {
      console.log(`Filtered out post due to price range: ${post.priceRange}`);
      return false;
    }

    // Check if the post's user rating is above the selected rating
    if (userRating !== undefined && post.userRating < userRating) {
      console.log(`Filtered out post due to user rating: ${post.userRating}`);
      return false;
    }

    // All criteria match, include the post
    return true;
  });

  // Apply the showPartial flag and render the filtered posts
  const renderedPosts = showPartial ? postsData.slice(0, 3) : filteredPosts;

  if (renderedPosts.length > 1) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {renderedPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    );
  }

  return <p>No posts found.</p>;
}
