import React from "react";
import { Card, Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const generateImages = (images) => {
  if (images.length > 1) {
    return (
      <div className="h-40">
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
    <div className="h-48">
      {images.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc}
          alt="..."
          className="object-cover aspect-[2/1] w-full h-48 rounded-lg"
        />
      ))}
    </div>
  );
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

function AboutInfo() {
  const images = [
    "https://www.allkpop.com/upload/2022/08/content/041116/1659626214-untitled-1.jpg",
  ];

  return (
    <Card id={"about"}>
      <div className="flex">
        <div className="flex-1 font-normal text-sm text-gray-700 dark:text-gray-400 pr-8">
          <h2 className="text-xl font-bold dark:text-white mb-3">About</h2>
          <ul className="list-disc pl-6">
            <li>Event: DYS Concert</li>
            <li>Dates: 4/28/23 - 4/29/23</li>
            <li>We are: 2 females</li>
            <li>Looking for: 2 females</li>
            <li>Budget: $150-$300 per day</li>
          </ul>
          <br></br>
          <p>
            We are college students and fans of DYS! We have already purchased
            tickets for the concert.
          </p>
          <br></br>
          <p>
            We prefer you are also attending the DYS concert and in college.
            Looking for easygoing roommates who won't make noise after 1am. If
            you're interested in travelling around Seattle together, let us
            know.
          </p>
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
