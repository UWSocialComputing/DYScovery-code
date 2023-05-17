import * as React from "react";
import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

export default function DatePicker({
  dateTitle,
  onChange,
  showTitle = true,
  isStart = true,
}) {
  const [show, setShow] = useState(false);

  const handleChange = (selectedDate) => {
    console.log("new date: " + selectedDate);
    onChange(selectedDate);
  };

  const handleClose = (state) => {
    setShow(state);
  };

  const options = {
    title: dateTitle,
    defaultDate: isStart ? new Date("2023-01-02") : new Date("2023-12-31"),
  };

  return (
    <div>
      {showTitle && (
        <label
          htmlFor="NeedGroupSize"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {dateTitle}
        </label>
      )}
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
}
