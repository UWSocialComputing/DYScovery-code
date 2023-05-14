import React, { useState } from "react";
import Title from "../../components/Title/Title";
import Posts from "../../components/Post/Posts";
import Filter from "../../components/Filter/Filter";
import { Link } from "react-router-dom";

function ResultPage() {
  const [neighborhoodList, setNeighborhoodList] = useState([]);

  const [bookingStatus, setBookingStatus] = useState([]);

  // Handlers
  const handleNeighborhoodListChange = (selectedStatus) => {
    setNeighborhoodList(selectedStatus);
  };

  const handleBookingStatusChange = (selectedStatus) => {
    setBookingStatus(selectedStatus);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <Title />
      <div className="grid place-items-center">
        <Link to="/DYScovery-code/postnew">
          <button className="mt-2 px-6 py-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-lg">
            Make a New Post
          </button>
        </Link>
      </div>

      <div className="flex space-x-6">
        <Filter
          handleNeighborhoodListChange={handleNeighborhoodListChange}
          handleBookingStatusChange={handleBookingStatusChange}
        />
        <Posts
          neighborhoodList={neighborhoodList}
          bookingStatus={bookingStatus}
        />
      </div>
    </div>
  );
}

export default ResultPage;
