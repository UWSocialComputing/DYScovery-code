import React, { useState } from "react";
import { Card, Rating, Avatar } from "flowbite-react";
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

function renderRatingStars(rating) {
  const starComponents = Array.from({ length: 5 }, (_, index) => (
    <Rating.Star key={index} filled={index + 1 < rating} />
  ));

  return starComponents;
}

function ReviewInfo({ userInformation }) {
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(null);

  const handleAvatarClick = (index) => {
    if (index === selectedAvatarIndex) {
      setSelectedAvatarIndex(null); // Deselect if the same avatar is clicked again
    } else {
      setSelectedAvatarIndex(index);
    }
  };

  return (
    <Card id="reviews">
      <h2 className="text-xl font-bold dark:text-white">User Reviews</h2>
      <p>Click on the avatar to see more. </p>
      <div id="detailedreviews" className="grid grid-cols-4">
        {userInformation.map((user, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer ${
              selectedAvatarIndex === index ? "bg-gray-200" : ""
            }`}
            onClick={() => handleAvatarClick(index)}
          >
            <Avatar img={user.profileImage} rounded={true} />
            <p className="">{user.name}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="flex-1 font-normal text-sm text-gray-700 dark:text-gray-400 pr-8">
          {selectedAvatarIndex !== null && (
            <>
              <dt className="text font-medium text-gray-500 dark:text-gray-400 mb-1">
                Overall
              </dt>
              <Rating>
                {renderRatingStars(
                  userInformation[selectedAvatarIndex].ratings.reduce(
                    (total, rating) => total + rating,
                    0
                  ) / userInformation[selectedAvatarIndex].ratings.length
                )}
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {(
                    userInformation[selectedAvatarIndex].ratings.reduce(
                      (total, rating) => total + rating,
                      0
                    ) / userInformation[selectedAvatarIndex].ratings.length
                  ).toFixed(2)}{" "}
                  out of 5
                </p>
              </Rating>

              {renderRatingBars(
                userInformation[selectedAvatarIndex].ratings,
                userInformation[selectedAvatarIndex].criteria
              )}
            </>
          )}
        </div>
        <div className="flex-1 space-y-6">
          {selectedAvatarIndex !== null &&
            userInformation[selectedAvatarIndex].reviews.map(
              (review, index) => <ReviewDetail review={review} key={index} />
            )}
        </div>
      </div>
    </Card>
  );
}

export default ReviewInfo;
