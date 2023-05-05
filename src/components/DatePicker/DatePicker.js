import * as React from "react";
import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

export default function DatePicker({ dateTitle }) {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  const options = {
    title: dateTitle,
  };

  return (
    <div>
      <h1 className="text-xs text-grey-300">{dateTitle}</h1>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
}
