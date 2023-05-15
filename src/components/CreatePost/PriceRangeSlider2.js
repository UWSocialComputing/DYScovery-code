import React, { useState } from "react";
import { Slider } from "@mui/material";

const PriceRangeSlider2 = () => {
  const [values, setValues] = useState([150, 300]);

  const handleChange = (event, newValues) => {
    setValues(newValues);
  };

  return (
    <div className="space-y-4">
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

export default PriceRangeSlider2;
