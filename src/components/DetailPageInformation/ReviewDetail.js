import React from "react";
import { Rating } from "flowbite-react";

const ReviewDetail = ({ name, date, rating, review, helpfulCount }) => {
  const starComponents = Array.from({ length: 5 }, (_, index) => (
    <Rating.Star key={index} filled={index < rating} />
  ));

  return (
    <article>
      <div className="flex items-center mb-4 space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src={
            name === "Jessie L."
              ? "https://cdn.pixabay.com/photo/2020/11/25/10/30/phone-5775234_960_720.png"
              : "https://cdn.pixabay.com/photo/2020/12/20/03/58/girl-5846034_960_720.jpg"
          }
          alt=""
        />
        <div className="space-y-1 font-medium dark:text-white">
          <p>
            {name}{" "}
            <time
              datetime="2014-08-16 19:00"
              className="block text-sm text-gray-500 dark:text-gray-400"
            >
              Joined {date}
            </time>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1">
        <Rating>{starComponents}</Rating>
        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
          Favorite roommates!
        </h3>
      </div>
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>Reviewed on {date}</p>
      </footer>
      <p className="mb-2 text-gray-500 dark:text-gray-400">{review}</p>
      <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {helpfulCount} people found this helpful
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
