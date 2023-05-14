import * as React from "react";
import GroupSizePicker from "./GroupSizePicker";
import NeighborhoodList from "./NeighborhoodList";
import PriceRanger from "./PriceRanger";
import UserRatingSelector from "./UserRatingSelector";
import RoomStatusSelector from "./RoomStatusSelector";

function Filter() {
  return (
    <div class="w-full basis-1/3 shadow p-5 rounded-lg bg-white">
      <div class="flex items-center justify-between mt-2">
        <p class="text-xl">Filters</p>
      </div>

      <div>
        <div class="grid grid-cols-1 gap-4 mt-4">
          <GroupSizePicker />
          <NeighborhoodList />
          <PriceRanger />
          <UserRatingSelector />
          <RoomStatusSelector />
        </div>
      </div>
    </div>
  );
}

export default Filter;
