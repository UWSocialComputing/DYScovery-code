import { Card } from "flowbite-react";

function NeighborhoodInfo({
  hotel,
  neighborhoodList,
  walkingDist,
  drivingDist,
  mapSrc,
}) {
  return (
    <div>
      <Card id="neighborhood">
        <h2 className="text-xl font-bold dark:text-white mb-3">
          {hotel === "" ? "Neighborhood Information" : "Hotel Information"}
        </h2>
        <div className="flex">
          <div className="w-1/2">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={mapSrc}
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
              {hotel === "" ? (
                <li>Neighborhood: {neighborhoodList.join(", ")}</li>
              ) : (
                <li>Hotel Name: {hotel}</li>
              )}
              <li>Description: Placeholder for now... TODO</li>
              <li>Walking distance to venue: {walkingDist} minutes</li>
              <li>Driving distance to venue: {drivingDist} minutes</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default NeighborhoodInfo;
