import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";

const getGenderLabels = (numOfFemales, numOfMales, numOfNonBinary) => {
  const genderLabels = [];

  if (numOfFemales > 0) {
    genderLabels.push({
      count: numOfFemales,
      label: `${numOfFemales > 1 ? "females" : "female"}`,
      color: "pink",
    });
  }

  if (numOfMales > 0) {
    genderLabels.push({
      count: numOfMales,
      label: `${numOfMales > 1 ? "males" : "male"}`,
      color: "blue",
    });
  }

  if (numOfNonBinary > 0) {
    genderLabels.push({
      count: numOfNonBinary,
      label: `${numOfNonBinary > 1 ? "people" : "person"}`,
      color: "gray",
    });
  }

  return genderLabels.map((gender) => (
    <span key={gender.label}>
      {gender.count}{" "}
      <span className={`text-${gender.color}-700`}>{gender.label}</span>{" "}
    </span>
  ));
};

const generateImages = (images) => {
  if (images.length > 1) {
    return (
      <div className="h-32">
        <Carousel slide={false} indicators={false}>
          {images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt="..."
              className="object-cover aspect-[2/1] w-full"
            />
          ))}
        </Carousel>
      </div>
    );
  }
  return (
    <div className="h-32">
      {images.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc}
          alt="..."
          className="object-cover aspect-[2/1] w-full h-32 rounded-lg"
        />
      ))}
    </div>
  );
};

export default function Post({
  images,
  event,
  checkInDate,
  checkOutDate,
  hasNumGenders,
  wantNumGenders,
  priceRange,
  hotel,
  neighborhoodList,
}) {
  const [hasNumOfFemales, hasNumOfMales, hasNumOfNonBinary] = hasNumGenders;
  const [wantNumOfFemales, wantNumOfMales, wantNumOfNonBinary] = wantNumGenders;

  return (
    <div className="w-72 bg-white shadow rounded-lg">
      {generateImages(images)}

      <div className="px-6 p-2 flex flex-col space-y-0.5">
        <div className="flex justify-between items-center">
          <p className="font-medium text-base truncate">{event}</p>
          <p className="text-xs">
            {checkInDate} - {checkOutDate}
          </p>
        </div>
        <p className="text-sm truncate">
          {getGenderLabels(hasNumOfFemales, hasNumOfMales, hasNumOfNonBinary)}{" "}
          wants{" "}
          {getGenderLabels(
            wantNumOfFemales,
            wantNumOfMales,
            wantNumOfNonBinary
          )}
        </p>
        <p className="text-sm text-gray-500 truncate">
          ${priceRange[0]}-${priceRange[1]} /room /night
        </p>
        <p className="text-sm truncate text-gray-500">
          {hotel === "" ? neighborhoodList.join(", ") : hotel}
        </p>

        <div className="grid place-items-center">
          <Link to="/DYScovery-code/details">
            <button className="mt-2 px-6 py-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-lg">
              More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
