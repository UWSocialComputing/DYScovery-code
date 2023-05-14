import React, { useState } from "react";

const BookingStatusSelector = ({ onChange }) => {
  const [selectedStatus, setSelectedStatus] = useState([]);

  const handleStatusChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedStatus((prevSelectedStatus) => [...prevSelectedStatus, value]);
    } else {
      setSelectedStatus((prevSelectedStatus) =>
        prevSelectedStatus.filter((status) => status !== value)
      );
    }
  };

  React.useEffect(() => {
    onChange(selectedStatus);
  }, [selectedStatus, onChange]);

  const statusOptions = [
    { id: "status-option-1", value: "booked", label: "Yes" },
    { id: "status-option-2", value: "not-booked", label: "No" },
  ];

  return (
    <fieldset>
      <legend className="sr-only">Booking Status</legend>
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
            value={option.value}
            checked={selectedStatus.includes(option.value)}
            onChange={handleStatusChange}
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

export default BookingStatusSelector;
