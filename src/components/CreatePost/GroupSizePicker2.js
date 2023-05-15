function GroupSizePicker2({ gender}) {
    return (
      <div class="inline-block mr-2">
        <select id="size_picker" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected># of {gender}(s)</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4+</option>
</select>
      </div>

    );
  }
  
  export default GroupSizePicker2;
  