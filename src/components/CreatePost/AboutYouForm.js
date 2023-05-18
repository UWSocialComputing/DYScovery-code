import React, { useState } from "react";
import { Card } from "flowbite-react";

function AboutYouForm({ onChange }) {
  const [textareaValue, setTextareaValue] = useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Card>
      <h1 className="text-xl font-bold dark:text-white">About You</h1>
      <div>
        <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Self-introduction
        </h2>
        <textarea
          id="about_you"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Tell others more about you (fandom, hobbies, etc.)..."
          value={textareaValue}
          onChange={handleTextareaChange}
          required
        ></textarea>
      </div>
    </Card>
  );
}

export default AboutYouForm;
