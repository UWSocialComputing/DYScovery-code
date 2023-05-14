import React from "react";

const RoomStatusSelector = () => {
  const statusOptions = [
    { id: "status-option-1", value: "booked", label: "Yes" },
    { id: "status-option-2", value: "not-booked", label: "No" },
  ];

  return (
    <fieldset>
      <label
        htmlFor="booking-status"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Room booked
      </label>
      {statusOptions.map((option) => (
        <div key={option.id} className="flex items-center mb-4">
          <input
            id={option.id}
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={option.id}
            className="ml-2 text-sm text-gray-900 dark:text-gray-300"
          >
            {option.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default RoomStatusSelector;
