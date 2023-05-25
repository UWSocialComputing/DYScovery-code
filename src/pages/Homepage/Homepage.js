import * as React from "react";
import Title from "../../components/Title/Title";
import EventSearchBar from "../../components/EventSearchBar/EventSearchBar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen mx-32 py-8 flex flex-col justify-between">
      <Title showTag={true} />
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <EventSearchBar />
        </div>
        <div className="col-span-1 flex justify-center">
          <div className="grid place-items-center">
            <Link to="/DYScovery-code/postnew">
              <button className="text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <span className="font-bold">Make a New Post</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Explore events like...
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Twice: 5th World Tour 'Ready To Be'</li>
          <li>Ed Sheeran: +-=÷x Tour</li>
          <li>Blackpink: Born Pink World Tour</li>
          <li>... and More!</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
