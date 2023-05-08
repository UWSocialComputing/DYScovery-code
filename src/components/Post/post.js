import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";

const getGenderLabels = (numOfFemales, numOfMales, numOfNonBinary) => {
  const genderLabels = [];

  if (numOfFemales > 0) {
    genderLabels.push({
      count: numOfFemales,
      label: `${numOfFemales > 1 ? "females" : "female"}`,
      color: "pink-500",
    });
  }

  if (numOfMales > 0) {
    genderLabels.push({
      count: numOfMales,
      label: `${numOfMales > 1 ? "males" : "male"}`,
      color: "sky-500",
    });
  }

  if (numOfNonBinary > 0) {
    genderLabels.push({
      count: numOfNonBinary,
      label: `${numOfNonBinary > 1 ? "people" : "person"}`,
      color: "gray-500",
    });
  }

  return genderLabels.map((gender) => (
    <span key={gender.label}>
      {gender.count}{" "}
      <span className={`underline decoration-${gender.color}/60`}>
        {gender.label}
      </span>{" "}
    </span>
  ));
};

const generateImages = (images) => {
  if (images.length > 1) {
    return (
      <div className="h-32">
        <Carousel slide={false} indicators={false}>
          {images.map((imageSrc) => (
            <img
              src={imageSrc}
              alt="..."
              className="object-cover aspect-[2/1] w-full"
            />
          ))}
        </Carousel>
      </div>
    );
  }

  return images.map((imageSrc) => (
    <img
      src={imageSrc}
      alt="..."
      className="object-cover aspect-[2/1] w-full rounded-lg"
    />
  ));
};

export default function Post({
  images,
  title,
  checkInDate,
  checkOutDate,
  hasNumGenders,
  wantNumGenders,
  budget,
  location,
}) {
  const [hasNumOfFemales, hasNumOfMales, hasNumOfNonBinary] = hasNumGenders;
  const [wantNumOfFemales, wantNumOfMales, wantNumOfNonBinary] = wantNumGenders;

  return (
    <div className="w-64 my-3 bg-white shadow rounded-lg">
      {generateImages(images)}

      <div className="px-6 p-2 flex flex-col space-y-0.5">
        <div className="flex justify-between items-center">
          <p className="font-medium text-base">{title}</p>
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
        <p className="text-sm text-gray-500 truncate">{budget} /room /night</p>
        <p className="text-sm truncate text-gray-500">{location}</p>

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
