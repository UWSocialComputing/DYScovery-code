import React, { useState } from "react";
import Title from "../../components/Title/Title";
import DatePicker from "../../components/DatePicker/DatePicker";

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
      <form onSubmit={handleSubmit} class="w-1/2 space-y-3">
        <div>
          <label
            for="event name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Event Name
          </label>
          <input
            type="text"
            id="event-name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div>
          <label
            for="Check-in Date"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Check-in Date
          </label>
          <DatePicker
            dateTitle="Check-in Date"
            showTitle={false}
            handleChange={(selectedDate) => {
              //   console.log("check-in date changed:", selectedDate);
              setCheckInDate(selectedDate);
            }}
          />
        </div>

        <div>
          <label
            for="Check-out Date"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Check-out Date
          </label>
          <DatePicker
            dateTitle="Check-out Date"
            showTitle={false}
            handleChange={(selectedDate) => {
              //   console.log("check-out date changed:", selectedDate);
              setCheckOutDate(selectedDate);
            }}
          />
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="cover image"
          >
            Upload Cover Image
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="cover_image"
            type="file"
          />
          <div
            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="user_avatar_help"
          >
            A picture is useful to attract potential roommates
          </div>
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="information"
          >
            Other Information
          </label>
          <textarea
            id="information"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Some other information about you (fandom, hobbies, etc.)..."
          ></textarea>
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="preferences"
          >
            Other Preferences
          </label>
          <textarea
            id="preferences"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
