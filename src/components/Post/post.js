import { Link } from "react-router-dom";

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

export default function Post({
  image,
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
      <img
        src={image}
        alt="some description"
        className="object-cover aspect-[8/3] w-full rounded-t-lg"
      />

      <div className="px-6 p-2 flex flex-col space-y-0.5">
        <div className="flex justify-between items-center">
          <p className="font-medium">{title}</p>
          <p className="text-sm">
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
        <p className="text-sm text-gray-500">{budget} /room /night</p>
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
