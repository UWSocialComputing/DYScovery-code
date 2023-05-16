import * as React from "react";
import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

export default function DatePicker({
  dateTitle,
  handleChange,
  showTitle = true,
}) {
  const [show, setShow] = useState(false);

  const handleClose = (state) => {
    setShow(state);
  };

  const options = {
    title: dateTitle,
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
