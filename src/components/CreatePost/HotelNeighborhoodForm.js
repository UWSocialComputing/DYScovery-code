import React, { useState } from "react";
import { Card } from "flowbite-react";

function HotelNeighborhoodForm({
  onBookingStatusChange,
  onNeighborhoodInfoChange,
  onHotelInfoChange,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [textareaTitle, setTextareaTitle] = useState("More information");
  const [textareaValue, setTextareaValue] = useState("");

  const options = [
    {
      label: "We already booked a place",
      value: "hotel",
      placeholder:
        "Enter hotel information (location, distance to venue, etc.)...",
    },
    {
      label: "We haven't booked a place yet",
      value: "neighborhood",
      placeholder:
        "Enter any preferences for prospective place to stay (location, neighborhood, etc.)...",
    },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "hotel") {
      setTextareaTitle("Hotel Information");
    } else {
      setTextareaTitle("Neighborhood information");
    }
    onBookingStatusChange(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    if (selectedOption === "hotel") {
      onHotelInfoChange(event.target.value);
    } else {
      onNeighborhoodInfoChange(event.target.value);
    }
  };

  return (
    <Card>
      <h1 className="text-xl font-bold dark:text-white">
        Hotel / Neighborhood
      </h1>
      <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Hotel Searching Status
      </h2>

      <div className="grid gap-3 md:grid-cols-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mr-4"
          >
            <input
              id={`bordered-radio-${index + 1}`}
              type="radio"
              value={option.value}
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
              required
            />
            <label
              htmlFor={`bordered-radio-${index + 1}`}
              className="w-full py-4 ml-2 text-sm text-gray-900 dark:text-gray-300"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {selectedOption && (
        <div>
          <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {textareaTitle}
          </h2>
          <textarea
            id="hotel_preferences"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={
              options.find((option) => option.value === selectedOption)
                ?.placeholder
            }
            value={textareaValue}
            onChange={handleTextareaChange}
            required
          ></textarea>
        </div>
      )}
    </Card>
  );
}

export default HotelNeighborhoodForm;
