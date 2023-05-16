import React, { useState } from "react";
import Posts from "../../components/Post/Posts";
import Filter from "../../components/Filter/Filter";
import ResultPageTopBar from "../../components/ResultPageTopBar/ResultPageTopBar";

function ResultPage() {
  const [groupSize, setGroupSize] = useState("");
  const [neighborhoodList, setNeighborhoodList] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [userRating, setUserRating] = useState("0");
  const [bookingStatus, setBookingStatus] = useState([]);

  // Handlers
  const handleGroupSizeChange = (newSize) => {
    setGroupSize(newSize);
  };

  const handleNeighborhoodListChange = (newNeighborhood) => {
    setNeighborhoodList(newNeighborhood);
  };

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleBookingStatusChange = (newBookingStatus) => {
    setBookingStatus(newBookingStatus);
  };

  const handleUserRatingChange = (newUserRating) => {
    setUserRating(newUserRating);
  };

  return (
    <div className="min-h-screen items-center justify-between p-8">
      <ResultPageTopBar />
      <div className="w-full grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <Filter
            handleGroupSizeChange={handleGroupSizeChange}
            handleNeighborhoodListChange={handleNeighborhoodListChange}
            handlePriceRangeChange={handlePriceRangeChange}
            handleUserRatingChange={handleUserRatingChange}
            handleBookingStatusChange={handleBookingStatusChange}
          />
        </div>
        <div className="col-span-3">
          <Posts
            groupSize={groupSize}
            neighborhoodList={neighborhoodList}
            priceRange={priceRange}
            userRating={userRating}
            bookingStatus={bookingStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
