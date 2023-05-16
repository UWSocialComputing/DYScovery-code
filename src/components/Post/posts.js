import React from "react";
import Post from "./Post";
import postsData from "../../data/posts.json";

// Function to create Date object from "MM/DD" formatted date string
function createDateObject(dateString) {
  const [month, day] = dateString.split("/");
  return new Date(new Date().getFullYear(), month - 1, day);
}

export default function Posts({
  showPartial = false,
  searchQuery,
  checkInDate,
  checkOutDate,
  groupSize,
  neighborhoodList = [],
  priceRange,
  userRating,
  bookingStatus = [],
}) {
  // Filter posts based on multiple criteria
  const filteredPosts = postsData.filter((post) => {
    // Check if the post's event contains the search value
    if (
      searchQuery &&
      !post.event.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Convert checkInDate and checkOutDate from "6/14" format to Date objects
    const postCheckInDate = createDateObject(post.checkInDate);
    const postCheckOutDate = createDateObject(post.checkOutDate);

    // Compare the dates with checkInDate and checkOutDate
    if (
      checkInDate > checkOutDate || // Invalid date range
      postCheckInDate < checkInDate || // Post check-in is before desired check-in
      postCheckOutDate > checkOutDate // Post check-out is after desired check-out
    ) {
      return false; // Exclude the post from the filtered result
    }

    // Check if the post's booking status matches any selected booking status
    if (
      bookingStatus.length > 0 &&
      !bookingStatus.includes(post.bookingStatus)
    ) {
      return false;
    }

    // Check if the group size matches
    if (groupSize !== "" && parseInt(post.groupSize) !== parseInt(groupSize)) {
      return false;
    }

    // Check if any neighborhood from the selected list is in the post's neighborhood list
    if (
      neighborhoodList.length > 0 &&
      !neighborhoodList.some((neighborhood) =>
        post.neighborhoodList.includes(neighborhood)
      )
    ) {
      return false;
    }

    // Check if the post's price range falls within the selected range
    if (
      priceRange !== undefined &&
      (post.priceRange[0] < priceRange[0] || post.priceRange[1] > priceRange[1])
    ) {
      return false;
    }

    // Check if the post's user rating is above the selected rating
    if (userRating !== undefined && post.userRating < userRating) {
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
