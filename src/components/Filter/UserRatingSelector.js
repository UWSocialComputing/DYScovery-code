import React from "react";

const UserRatingSelector = () => {
  const ratingOptions = [
    { id: "guest-rating-option-1", value: "0", label: "Any" },
    { id: "guest-rating-option-2", value: "5", label: "5" },
    { id: "guest-rating-option-3", value: "4", label: "4+" },
    { id: "guest-rating-option-4", value: "3", label: "3+" },
  ];

  return (
    <fieldset>
      <label
        htmlFor="guest-rating"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        User group rating
      </label>
      {ratingOptions.map((option) => (
        <div className="flex items-center mb-4" key={option.id}>
          <input
            id={option.id}
            type="radio"
            name="guest-rating"
            value={option.value}
            className="mr-2"
            defaultChecked={option.value === "0"}
          />
          <label
            htmlFor={option.id}
            className="flex items-center text-sm text-gray-900 dark:text-gray-300"
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <svg
                key={index}
                aria-hidden="true"
                className={`w-5 h-5 ${
                  index <= option.value
                    ? "text-yellow-400"
                    : "text-gray-300 dark:text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Star {index}</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="ml-1">{option.label}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default UserRatingSelector;
