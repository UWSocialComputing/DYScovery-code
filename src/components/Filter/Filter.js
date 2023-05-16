import React from "react";
import GroupSizePicker from "./GroupSizePicker";
import NeighborhoodList from "./NeighborhoodList";
import PriceRanger from "./PriceRanger";
import UserRatingSelector from "./UserRatingSelector";
import BookingStatusSelector from "./BookingStatusSelector";
import DatePicker from "../DatePicker/DatePicker";

function Filter({
  handleCheckInDateChange,
  handleCheckOutDateChange,
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
          <DatePicker
            dateTitle={"Check-in Date"}
            onChange={handleCheckInDateChange}
            isStart={true}
          />
          <DatePicker
            dateTitle={"Check-out Date"}
            onChange={handleCheckOutDateChange}
            isStart={false}
          />
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
