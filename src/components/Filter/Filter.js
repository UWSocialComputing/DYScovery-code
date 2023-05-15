import React from "react";
import GroupSizePicker from "./GroupSizePicker";
import NeighborhoodList from "./NeighborhoodList";
import PriceRanger from "./PriceRanger";
import UserRatingSelector from "./UserRatingSelector";
import BookingStatusSelector from "./BookingStatusSelector";

function Filter({
  handleGroupSizeChange,
  handleNeighborhoodListChange,
  handlePriceRangeChange,
  handleUserRatingChange,
  handleBookingStatusChange,
}) {
  return (
    <div className="shadow p-5 rounded-lg bg-white">
      <div className="flex items-center justify-between mt-2">
        <p className="text-xl">Filter by</p>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <GroupSizePicker onChange={handleGroupSizeChange} />
          <NeighborhoodList onChange={handleNeighborhoodListChange} />
          <PriceRanger onChange={handlePriceRangeChange} />
          <UserRatingSelector onChange={handleUserRatingChange} />
          <BookingStatusSelector onChange={handleBookingStatusChange} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
