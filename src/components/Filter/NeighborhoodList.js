import React, { useState } from "react";

function NeighborhoodList({ onChange }) {
  const [selectedStatus, setSelectedStatus] = useState([]);

  const handleStatusChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedStatus((prevSelectedStatus) => [...prevSelectedStatus, value]);
    } else {
      setSelectedStatus((prevSelectedStatus) =>
        prevSelectedStatus.filter((status) => status !== value)
      );
    }
  };

  React.useEffect(() => {
    onChange(selectedStatus);
  }, [selectedStatus, onChange]);

  const neighborhoods = [
    {
      id: "downtown-seattle",
      value: "Downtown Seattle",
      label: "Downtown Seattle",
    },
    { id: "bellevue", value: "Bellevue", label: "Bellevue" },
    {
      id: "university-district",
      value: "University District",
      label: "University District",
    },
    { id: "seatac-airport", value: "SeaTac Airport", label: "SeaTac Airport" },
    { id: "tacoma", value: "Tacoma", label: "Tacoma" },
  ];

  return (
    <fieldset>
      <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Popular neighborhood
      </legend>

      {neighborhoods.map((neighborhood) => (
        <div key={neighborhood.id} className="flex items-center mb-4">
          <input
            id={neighborhood.id}
            type="checkbox"
            value={neighborhood.value}
            checked={selectedStatus.includes(neighborhood.value)}
            onChange={handleStatusChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={neighborhood.id}
            className="ml-2 text-sm text-gray-900 dark:text-gray-300"
          >
            {neighborhood.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default NeighborhoodList;
