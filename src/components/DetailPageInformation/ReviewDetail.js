import React from "react";
import { Rating } from "flowbite-react";

function renderRatingStars(rating) {
  const starComponents = Array.from({ length: 5 }, (_, index) => (
    <Rating.Star key={index} filled={index < rating} />
  ));

  return starComponents;
}

const ReviewDetail = ({ review }) => {
  return (
    <article>
      <div className="flex items-center mb-4 space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src={review.profileImage}
          alt=""
        />
        <div className="space-y-1 font-medium dark:text-white">
          <p>
            {review.name}{" "}
            <time
              dateTime="2014-08-16 19:00"
              className="block text-sm text-gray-500 dark:text-gray-400"
            >
              Joined {review.joinedDate}
            </time>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1">
        <Rating>{renderRatingStars(review.rating)}</Rating>
        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
          {review.reviewTitle}
        </h3>
      </div>
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>Reviewed on {review.date}</p>
      </footer>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        {review.reviewContent}
      </p>
      <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {review.helpfulCount} people found this helpful
        </p>
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
          <a
            href="#reviews"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Helpful
          </a>
          <a
            href="#reviews"
            className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Report abuse
          </a>
        </div>
      </aside>
    </article>
  );
};

export default ReviewDetail;
