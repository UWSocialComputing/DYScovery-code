import React from "react";
import { Card, Rating } from "flowbite-react";
import ReviewDetail from "./ReviewDetail";

function renderRatingBars(ratings, criteria) {
  const calculateWidth = (rating) => {
    return `${(rating / 5) * 100}%`;
  };

  return (
    <div className="gap-8 mt-3 sm:grid sm:grid-cols-2">
      <div>
        {ratings.map((rating, index) => (
          <dl key={index}>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {criteria[index]}
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                <div
                  className="bg-cyan-600 h-2.5 rounded dark:bg-cyan-500"
                  style={{ width: calculateWidth(rating) }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {rating.toFixed(1)}
              </span>
            </dd>
          </dl>
        ))}
      </div>
    </div>
  );
}

function ReviewInfo() {
  const ratings = [4.8, 5.0, 4.5, 5.0];
  const criteria = [
    "Cleanliness",
    "Communication",
    "Trustworthiness",
    "Respectfulness",
  ];

  return (
    <Card id={"reviews"}>
      <h2 className="text-xl font-bold dark:text-white">User Reviews</h2>
      <div className="flex">
        <div className="flex-1 font-normal text-sm text-gray-700 dark:text-gray-400 pr-8">
          <dt className="text font-medium text-gray-500 dark:text-gray-400 mb-1">
            Overall
          </dt>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.80 out of 5
            </p>
          </Rating>
          {renderRatingBars(ratings, criteria)}
        </div>
        <div className="flex-1">
          <div id="detailedreviews">
            <ReviewDetail
              name="Jessie L."
              date="August 2022"
              rating={5}
              review="Ella and Rory were fab roomies! They were patient and clean. 10/10 would room together again."
              helpfulCount={2}
            />
            <br />
            <ReviewDetail
              name="Arya M."
              date="Feb 2023"
              rating={4}
              review="Had a great experience living with Ella. She was very friendly and respectful. The only downside was that the Wi-Fi was a bit slow at times."
              helpfulCount={1}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ReviewInfo;
