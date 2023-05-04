/**
 *
 * @returns A date picker component.
 */

import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

interface DatepickerOptions {
  title: string;
}

export default function DatePicker({ title }: DatepickerOptions) {
  const [show, setShow] = useState<boolean>(false);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const options = {
    title: title,
  };

  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
}
