import * as React from "react";
import DatePicker from "../DatePicker/DatePicker";

function Filter() {
  return (
    <div class="w-full basis-1/3 shadow p-5 rounded-lg bg-white">
      <div class="flex items-center justify-between mt-2">
        <p class="text-xl">Filters</p>
        <button class="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg">
          Reset Filter
        </button>
      </div>

      <div>
        <div class="grid grid-cols-1 gap-4 mt-4">
          <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Looking for group size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <div>
            <label
              for="Check-in Date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Check-in Date
            </label>
            <DatePicker dateTitle="Check-in Date" showTitle={false} />
          </div>

          <div>
            <label
              for="Check-out Date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Check-out Date
            </label>
            <DatePicker dateTitle="Check-out Date" showTitle={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
