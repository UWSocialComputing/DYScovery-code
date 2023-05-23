import React from "react";
import { Card, Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const generateImages = (images) => {
  if (images.length > 1) {
    return (
      <div className="h-60 ">
        <Carousel slide={false} indicators={false}>
          {images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt="..."
              className="object-cover aspect-[2/1] w-full rounded-lg"
            />
          ))}
        </Carousel>
      </div>
    );
  }
  return (
    <div className="h-60">
      {images.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc}
          alt="..."
          className="object-cover aspect-[2/1] w-full h-54 rounded-lg"
        />
      ))}
    </div>
  );
};

const getGenderLabels = (numbers) => {
  const [numOfFemales, numOfMales, numOfNonBinary] = numbers;
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

const generateSocialMedia = () => {
  return (
    <div className="flex gap-x-4 mt-3">
      <div className="min-w-0 flex-auto">
        <div className="grid grid-cols-4 gap-4">
          <a href="https://www.instagram.com">
            <button
              id="instagram"
              href="instagram.com"
              className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 "
            >
              <FontAwesomeIcon
                icon={icon({ name: "instagram", style: "brands" })}
              />
            </button>
          </a>

          <a href="https://www.twitter.com">
            <button
              id="twitter"
              className="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl"
            >
              <FontAwesomeIcon
                icon={icon({ name: "twitter", style: "brands" })}
              />
            </button>
          </a>

          <a href="https://www.discord.com">
            <button
              id="discord"
              className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white text-2xl"
            >
              <FontAwesomeIcon
                icon={icon({ name: "discord", style: "brands" })}
              />
            </button>
          </a>

          <a href="https://www.spotify.com">
            <button
              id="spotify"
              className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-green-500 border-green-500 hover:bg-green-500 hover:text-white text-2xl"
            >
              <FontAwesomeIcon
                icon={icon({ name: "spotify", style: "brands" })}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

function AboutInfo({
  images,
  event,
  checkInDate,
  checkOutDate,
  hasNumGenders,
  wantNumGenders,
  priceRange,
  selfIntro,
  roommatePreference,
}) {
  return (
    <Card id={"about"}>
      <div className="flex">
        <div className="flex-1 font-normal text-sm text-gray-700 dark:text-gray-400 pr-8">
          <h2 className="text-xl font-bold dark:text-white mb-3">About</h2>
          {/* Important details */}
          <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100"/>
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">Event:</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{event}</dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">Dates:</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{checkInDate}/23 - {checkOutDate}/23</dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">We are:</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{getGenderLabels(hasNumGenders)}</dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">Looking for:</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{getGenderLabels(wantNumGenders)}</dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">Budget:</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${priceRange[0]}-${priceRange[1]} per day</dd>
              </div>
            </div>
          <br></br>
          <p>{selfIntro}</p>
          <br></br>
          <p>{roommatePreference}</p>
        </div>
        <div className="flex-1">
          {generateImages(images)}
          {generateSocialMedia()}
        </div>
      </div>
    </Card>
  );
}
export default AboutInfo;
