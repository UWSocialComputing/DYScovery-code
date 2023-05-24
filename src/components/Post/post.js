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
  postId,
  images,
  event,
  checkInDate,
  checkOutDate,
  hasNumGenders,
  wantNumGenders,
  priceRange,
  bookingStatus,
  hotel,
  neighborhoodList,
  selfIntro,
  roommatePreference,
  isClickable = false,
}) {
  const [hasNumOfFemales, hasNumOfMales, hasNumOfNonBinary] = hasNumGenders;
  const [wantNumOfFemales, wantNumOfMales, wantNumOfNonBinary] = wantNumGenders;

  function PostContent() {
    return (
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
      </div>
    );
  }

  const newPost = {
    postId,
    images,
    event,
    checkInDate,
    checkOutDate,
    hasNumGenders,
    wantNumGenders,
    priceRange,
    bookingStatus,
    hotel,
    neighborhoodList,
    selfIntro,
    roommatePreference,
    walkingDist: 15,
    drivingDist: 7,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86350.23528006677!2d-122.37819308259222!3d47.442267308174614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905b6cc75964d3%3A0x7822b21dad52b646!2sSeaTac%2C%20WA!5e0!3m2!1sen!2sus!4v1684867179031!5m2!1sen!2sus",
    userInformation: [
      {
        profileImage:
          "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
        name: "Happy H.",
        joinedDate: "May 2023",
        ratings: [4.0, 4.0, 4.0, 4.0],
        criteria: [
          "Cleanliness",
          "Communication",
          "Trustworthiness",
          "Respectfulness",
        ],
      },
    ],
  };

  if (isClickable) {
    return (
      <div className="w-72 bg-white shadow rounded-lg hover:shadow-cyan-500/50 hover:shadow-lg">
        {generateImages(images)}
        <Link
          to={
            postId
              ? `/DYScovery-code/details/${postId}`
              : "/DYScovery-code/details/new"
          }
          state={{ newPost }}
        >
          <PostContent />
        </Link>
      </div>
    );
  }
  return (
    <div className="w-72 bg-white shadow rounded-lg">
      {generateImages(images)}
      <PostContent />
    </div>
  );
}
