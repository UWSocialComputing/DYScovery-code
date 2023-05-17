import React, { useState } from "react";
import NewPostPageTopBar from "../../components/NewPostPageTopBar/NewPostPageTopBar";
import DatePicker from "../../components/DatePicker/DatePicker";
import GroupSizePicker2 from "../../components/CreatePost/GroupSizePicker2";
import PriceRangeSlider2 from "../../components/CreatePost/PriceRangeSlider2";
import { Card } from "flowbite-react";
import Post from "../../components/Post/Post";

function formatDateObject(dateStr) {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1; // Month value is zero-based, so add 1
  const day = date.getDate();

  return `${month}/${day}`;
}

function NewPostPage() {
  const [eventName, setEventName] = useState(undefined);
  const [checkInDate, setCheckInDate] = useState("1/1");
  const [checkOutDate, setCheckOutDate] = useState("12/30");

  const [hasFemaleCnt, setHasFemaleCnt] = useState("");
  const [hasMaleCnt, setHasMaleCnt] = useState("");
  const [hasOtherCnt, setHasOtherCnt] = useState("");

  const [wantFemaleCnt, setWantFemaleCnt] = useState("");
  const [wantMaleCnt, setWantMaleCnt] = useState("");
  const [wantOtherCnt, setWantOtherCnt] = useState("");

  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log(checkInDate);
    console.log(checkOutDate);
  };

  return (
    <div className="min-h-screen flex-col items-center justify-between p-8 relative">
      <NewPostPageTopBar />
      <div className="grid grid-cols-4 space-x-6">
        <form onSubmit={handleSubmit} className="col-span-3 space-y-3">
          <Card>
            <h1 className="text-xl font-bold dark:text-white">
              Basic Information
            </h1>
            {/* Event name */}
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

            {/* Check in/out dates */}
            <div>
              <h2
                for="check-in/out dates"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Check-in/out Dates
              </h2>
              <div date-rangepicker className="flex items-center">
                <DatePicker
                  dateTitle="Check-in Date"
                  showTitle={false}
                  onChange={(selectedDate) => {
                    setCheckInDate(formatDateObject(selectedDate));
                  }}
                  isStart={true}
                />
                <span className="mx-4 text-gray-500">to</span>
                <DatePicker
                  dateTitle="Check-out Date"
                  showTitle={false}
                  onChange={(selectedDate) => {
                    setCheckOutDate(formatDateObject(selectedDate));
                  }}
                  isStart={false}
                />
              </div>
            </div>

            {/* Group gender numbers */}
            <div>
              <h2
                for="current roommate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                We are a Group of
              </h2>
              <div className="flex justify-between space-x-6 mb-3">
                <GroupSizePicker2
                  gender="Female"
                  onChange={(newSize) => {
                    setHasFemaleCnt(newSize);
                  }}
                />
                <GroupSizePicker2
                  gender="Male"
                  onChange={(newSize) => {
                    setHasMaleCnt(newSize);
                  }}
                />
                <GroupSizePicker2
                  gender="Non-Binary"
                  onChange={(newSize) => {
                    setHasOtherCnt(newSize);
                  }}
                />
              </div>
              <h2
                for="future roommate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                We are Looking for
              </h2>
              <div className="flex justify-between space-x-6">
                <GroupSizePicker2
                  gender="Female"
                  onChange={(newSize) => {
                    setWantFemaleCnt(newSize);
                  }}
                />
                <GroupSizePicker2
                  gender="Male"
                  onChange={(newSize) => {
                    setWantMaleCnt(newSize);
                  }}
                />
                <GroupSizePicker2
                  gender="Non-Binary"
                  onChange={(newSize) => {
                    setWantOtherCnt(newSize);
                  }}
                />
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h2
                for="price range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Budget per room per day
              </h2>
              <PriceRangeSlider2
                onChange={(newRangeValues) => setPriceRange(newRangeValues)}
              />
            </div>

            {/* Cover Image */}
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
          </Card>

          <Card>
            <h1 class="text-xl font-bold dark:text-white">About You</h1>
            <div>
              <h2
                for="about_you"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Self-introduction
              </h2>
              <textarea
                id="about_you"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tell others more about you (fandom, hobbies, etc.)..."
              ></textarea>
            </div>
          </Card>

          <Card>
            <h1 class="text-xl font-bold dark:text-white">
              Roommate Preference
            </h1>
            <div>
              <h2
                for="roommate preference"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                We are Looking for Roommates Who
              </h2>
              <textarea
                id="roommate_preferences"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your specific preferences for prospective roommates (sleeping habits, etc.)..."
              ></textarea>
            </div>
          </Card>
          <Card>
            <h1 class="text-xl font-bold dark:text-white">
              Hotel / Neighborhood
            </h1>
            <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Hotel Searching Status
            </h2>

            <div class="grid gap-6 md:grid-cols-3">
              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mr-4">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-1"
                  class="w-full py-4 ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                >
                  We already booked a place{" "}
                </label>
              </div>
              <div class="inline-flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mr-4">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-2"
                  class="w-full py-4 ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                >
                  We haven't booked a place,{"\n"} but have some preference
                </label>
              </div>
              <div class="inline-flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mr-4">
                <input
                  id="bordered-radio-3"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-3"
                  class="w-full py-4 ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                >
                  We prefer searching with future roommates together
                </label>
              </div>
            </div>

            <div>
              <h2
                for="hotel preference"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Hotel Information
              </h2>
              <textarea
                id="hotel_preferences"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your specific preferences for (prospective) place to stay (location, neighborhood, etc.)..."
              ></textarea>
            </div>
          </Card>
        </form>
        <div className="col-span-1">
          <div className="sticky top-40 grid space-y-6">
            <div className="grid place-items-center font-medium text-lg">
              Listing Preview
            </div>
            <Post
              images={[
                "https://www.billboard.com/wp-content/uploads/2023/03/feature-TWICE-women-in-music-billboard-2023-bb-sami-drasin-12-1548.jpg",
              ]}
              event={eventName ? eventName : "Your Event Name"}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              hasNumGenders={[hasFemaleCnt, hasMaleCnt, hasOtherCnt]}
              wantNumGenders={[wantFemaleCnt, wantMaleCnt, wantOtherCnt]}
              priceRange={priceRange}
              isClickable={false}
            />
            <div className="grid place-items-center">
              <button
                type="submit"
                className="mt-2 px-6 py-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
