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
          <div className="w-1/2 font-normal text-sm text-gray-700 dark:text-gray-400">
            <div class="pl-6">
              <div class="py-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium text-gray-900">
                  {hotel === "" ? "Neighborhood:" : "Hotel:"}
                </dt>
                <dd class="mt-1 text-sm leading-4 text-gray-700 sm:col-span-1 sm:mt-0">
                  {hotel === "" ? neighborhoodList.join(", ") : hotel}
                </dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-4 text-gray-900">
                  Walking distance to venue:
                </dt>
                <dd class="mt-1 text-sm leading-4 text-gray-700 sm:col-span-1 sm:mt-0">
                  {walkingDist} minutes
                </dd>
              </div>
              <div class="px-4 py-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-4 text-gray-900">
                  Driving distance to venue:
                </dt>
                <dd class="mt-1 text-sm leading-4 text-gray-700 sm:col-span-1 sm:mt-0">
                  {drivingDist} minutes
                </dd>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default NeighborhoodInfo;
