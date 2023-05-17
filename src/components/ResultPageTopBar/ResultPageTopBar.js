import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import EventSearchBar from "../EventSearchBar/EventSearchBar";

function ResultPageTopBar() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <Navbar fluid={true} rounded={true} className="w-full mb-3">
        <Navbar.Brand href="/DYScovery-code" className="w-1/3">
          <div className="text-4xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
              DYScovery.com
            </span>
          </div>
        </Navbar.Brand>
        <div className="w-1/3">
          <EventSearchBar />
        </div>
        <div className="w-1/3 flex justify-end">
          <div className="grid place-items-center">
            <Link to="/DYScovery-code/postnew">
              <button className="text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <span className="font-bold">Make a New Post</span>
              </button>
            </Link>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default ResultPageTopBar;
