import React, { useState } from "react";

function GroupSizePicker({ onChange }) {
  const [groupSize, setGroupSize] = useState("");

  const handleGroupSizeChange = (event) => {
    const newSize = event.target.value;
    if ((newSize >= 1 && newSize <= 7) || newSize === "") {
      setGroupSize(newSize);
      onChange(newSize); // Pass the new value to the parent component
    }
  };

  return (
    <div>
      <label
        htmlFor="NeedGroupSize"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Looking for group size
      </label>
      <input
        type="number"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="NeedGroupSize"
        min="1"
        max="7"
        value={groupSize}
        onChange={handleGroupSizeChange}
      />
    </div>
  );
}

export default GroupSizePicker;
