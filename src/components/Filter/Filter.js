import React from "react";
import GroupSizePicker from "./GroupSizePicker";
import NeighborhoodList from "./NeighborhoodList";
import PriceRanger from "./PriceRanger";
import UserRatingSelector from "./UserRatingSelector";
import BookingStatusSelector from "./BookingStatusSelector";

function Filter({ handleNeighborhoodListChange, handleBookingStatusChange }) {
  return (
    <div className="w-full basis-1/3 shadow p-5 rounded-lg bg-white">
      <div className="flex items-center justify-between mt-2">
        <p className="text-xl">Filters</p>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <GroupSizePicker />
          <NeighborhoodList onChange={handleNeighborhoodListChange} />
          <PriceRanger />
          <UserRatingSelector />
          <BookingStatusSelector onChange={handleBookingStatusChange} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
