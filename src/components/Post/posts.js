import React, { useState, useEffect } from "react";
import Post from "./Post";
import postsData from "../../data/posts.json";
import { useLocation } from "react-router-dom";

// Function to create Date object from "MM/DD" formatted date string
function createDateObject(dateString) {
  const [month, day] = dateString.split("/");
  return new Date(new Date().getFullYear(), month - 1, day);
}

function computeOverallAverage(userInformation) {
  let totalSum = 0;
  let totalCount = 0;

  userInformation?.forEach((element) => {
    const ratings = element.ratings;
    const elementSum = ratings.reduce(
      (accumulator, rating) => accumulator + rating,
      0
    );
    const elementCount = ratings.length;

    totalSum += elementSum;
    totalCount += elementCount;
  });

  if (totalCount === 0) {
    return 4.0; // default rating
  }

  return totalSum / totalCount;
}

function filterUniquePosts(posts) {
  const uniquePosts = [];
  const postIds = [];

  for (const post of posts) {
    if (!postIds.includes(post.postId)) {
      uniquePosts.push(post);
      postIds.push(post.postId);
    }
  }

  return uniquePosts;
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
  isClickable = false,
}) {
  const location = useLocation();
  const [posts, setPosts] = useState(postsData);

  useEffect(() => {
    const storedPosts = localStorage.getItem("newPosts");
    const parsedPosts = storedPosts ? JSON.parse(storedPosts) : [];

    if (location.state && location.state.newPost) {
      const newPost = location.state.newPost;

      const postExists = parsedPosts.some(
        (post) => Number(post.postId) === Number(newPost.postId)
      ); // Convert postId values to numbers for comparison

      if (!postExists) {
        parsedPosts.push(newPost);
        localStorage.setItem("newPosts", JSON.stringify(parsedPosts));
      }
    }

    setPosts(filterUniquePosts([...postsData, ...parsedPosts]));
  }, [location.state]);

  // Filter posts based on multiple criteria
  const filteredPosts = posts.filter((post) => {
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
    if (
      userRating !== undefined &&
      computeOverallAverage(post.userInformation) < userRating
    ) {
      return false;
    }

    // All criteria match, include the post
    return true;
  });

  // Apply the showPartial flag and render the filtered posts
  const renderedPosts = showPartial ? posts.slice(0, 3) : filteredPosts;
  renderedPosts.sort(() => Math.random() - 0.5);

  console.log(filteredPosts.map((post) => post.postId).join(", "));

  if (renderedPosts.length >= 1) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {renderedPosts.map((post, index) => (
          <Post key={index} {...post} isClickable={isClickable} />
        ))}
      </div>
    );
  }

  return <p>No posts found.</p>;
}
