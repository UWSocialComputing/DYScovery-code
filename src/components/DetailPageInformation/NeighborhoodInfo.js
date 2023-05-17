import { Card } from "flowbite-react";

function NeighborhoodInfo() {
  const neighborhoodDetails = {
    name: "Warwick Seattle",
    text: "Downtown Seattle",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.6239399290803!2d-122.34340762350878!3d47.61400158746624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154b7e336c5b%3A0x202a343f203ca321!2sWarwick%20Seattle!5e0!3m2!1sen!2sus!4v1684178350536!5m2!1sen!2sus",
  };

  return (
    <div>
      <Card id="neighborhood">
        <h2 className="text-xl font-bold dark:text-white mb-3">
          Neighborhood / Hotel
        </h2>
        <div className="flex">
          <div className="w-1/2">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={neighborhoodDetails.mapSrc}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
          <div className="w-1/2 font-normal text-sm text-gray-700 dark:text-gray-400 pr-8">
            <ul className="list-disc pl-6">
              <li>Neighborhood: {neighborhoodDetails.name}</li>
              <li>Description: {neighborhoodDetails.text}</li>
              <li>Walking distance to venue: 10 minutes</li>
              <li>Driving distance to venue: 3 minutes</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default NeighborhoodInfo;
