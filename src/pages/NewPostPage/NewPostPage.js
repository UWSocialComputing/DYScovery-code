import React, { useState } from "react";
import Title from "../../components/Title/Title";
import DatePicker from "../../components/DatePicker/DatePicker";
import GroupSizePicker2 from "../../components/CreatePost/GroupSizePicker2";
import PriceRangeSlider2 from "../../components/CreatePost/PriceRangeSlider2";

function NewPostPage() {
  const [eventName, setEventName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log(checkInDate);
    console.log(checkOutDate);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <Title />
      <form onSubmit={handleSubmit} className="w-1/2 space-y-3">
        <h1 className="text-xl font-bold dark:text-white">Basic Information</h1>

        <div>
          <h2
            for="event name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Event Name
          </h2>
          <input
            type="text"
            id="event-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <h2
          for="check-in/out dates"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Check-in/out Dates
        </h2>
        <div date-rangepicker className="flex items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <DatePicker
              dateTitle="Check-in Date"
              showTitle={false}
              handleChange={(selectedDate) => {
                //   console.log("check-in date changed:", selectedDate);
                setCheckInDate(selectedDate);
              }}
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <DatePicker
              dateTitle="Check-out Date"
              showTitle={false}
              handleChange={(selectedDate) => {
                //   console.log("check-out date changed:", selectedDate);
                setCheckOutDate(selectedDate);
              }}
            />
          </div>
        </div>

        <h2
          for="current roommate"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          We are a Group of
        </h2>
        <div className="relative">
          <GroupSizePicker2 gender="Female" />
          <GroupSizePicker2 gender="Male" />
          <GroupSizePicker2 gender="Non-Binary" />
        </div>
        <h2
          for="future roommate"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          We are Looking for
        </h2>
        <div className="relative">
          <GroupSizePicker2 gender="Female" />
          <GroupSizePicker2 gender="Male" />
          <GroupSizePicker2 gender="Non-Binary" />
        </div>
        <div>
          <h2
            for="price range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Budget per Person per Day
          </h2>
          <PriceRangeSlider2 />
        </div>

        <div>
          <h2
            for="cover image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cover Image
          </h2>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="cover_image"
            type="file"
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="user_avatar_help"
          >
            Upload an useful cover image to attract potential roommates!
          </div>
        </div>

        <h1 className="text-xl font-bold dark:text-white">About You</h1>
        <div>
          <h2
            for="cover image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            TODO
          </h2>
          <textarea
            id="about_you"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tell others more about you (fandom, hobbies, etc.)..."
          ></textarea>
        </div>
        <h1 className="text-xl font-bold dark:text-white">
          Roommate Preference
        </h1>

        <h1 className="text-xl font-bold dark:text-white">
          Hotel / Neighborhood
        </h1>

        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="preferences"
          >
            Other Preferences
          </label>
          <textarea
            id="preferences"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Some specific preferences (location, sleeping habits, etc.)..."
          ></textarea>
        </div>

        <div className="grid place-items-center">
          <button
            type="submit"
            className="mt-2 px-6 py-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPostPage;
