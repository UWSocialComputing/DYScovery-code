import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Posts from "../../components/Post/Posts";
import Filter from "../../components/Filter/Filter";
import ResultPageTopBar from "../../components/ResultPageTopBar/ResultPageTopBar";

function ResultPage() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  const [groupSize, setGroupSize] = useState("");
  const [neighborhoodList, setNeighborhoodList] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [userRating, setUserRating] = useState("0");
  const [bookingStatus, setBookingStatus] = useState([]);
  const [checkInDate, setCheckInDate] = useState(Date());
  const [checkOutDate, setCheckOutDate] = useState(Date());

  // Handlers
  const handleCheckInDateChange = (newCheckInDate) => {
    setCheckInDate(newCheckInDate);
  };

  const handleCheckOutDateChange = (newCheckOutDate) => {
    setCheckOutDate(newCheckOutDate);
  };

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
            handleCheckInDateChange={handleCheckInDateChange}
            handleCheckOutDateChange={handleCheckOutDateChange}
            handleGroupSizeChange={handleGroupSizeChange}
            handleNeighborhoodListChange={handleNeighborhoodListChange}
            handlePriceRangeChange={handlePriceRangeChange}
            handleUserRatingChange={handleUserRatingChange}
            handleBookingStatusChange={handleBookingStatusChange}
          />
        </div>
        <div className="col-span-3">
          <Posts
            searchQuery={searchQuery}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
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
