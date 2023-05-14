import React, { useState } from "react";
import { Slider } from "@mui/material";

const PriceRangeSlider = () => {
  const [values, setValues] = useState([150, 300]);

  const handleChange = (event, newValues) => {
    setValues(newValues);
  };

  return (
    <div className="space-y-4">
      <label
        htmlFor="price-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Price range (/room /night)
      </label>
      <div>
        <div className="flex justify-between">
          <div className="text-gray-900 text-sm dark:text-white">
            ${values[0]}
          </div>
          <div className="text-gray-900 text-sm dark:text-white">
            ${values[1] === 1000 ? values[1] + "+" : values[1]}
          </div>
        </div>
        <Slider
          id="price-range-slider"
          value={values}
          onChange={handleChange}
          min={0}
          max={1000}
          step={50}
          valueLabelDisplay="auto"
          getAriaLabel={(index) =>
            index === 0 ? "Minimum price" : "Maximum price"
          }
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
