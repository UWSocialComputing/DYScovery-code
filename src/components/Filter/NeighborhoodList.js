function NeighborhoodList() {
  const neighborhoods = [
    { id: "downtown-seattle", label: "Downtown Seattle" },
    { id: "bellevue", label: "Bellevue" },
    { id: "university-district", label: "University District" },
    { id: "seatac-airport", label: "SeaTac Airport" },
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
            value=""
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
