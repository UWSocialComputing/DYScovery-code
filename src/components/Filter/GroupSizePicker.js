function GroupSizePicker() {
  return (
    <div>
      <label
        for="Need Group Size"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Looking for group size
      </label>
      <input
        type="number"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="NeedGroupSize"
        min="1"
        max="7"
      />
    </div>
  );
}

export default GroupSizePicker;
