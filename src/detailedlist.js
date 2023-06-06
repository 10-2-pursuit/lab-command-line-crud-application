const { planeHandler } = require("./plane-generator")
const _ = require("lodash");
const fs = require('fs')

function showPlaneList() {
    const planes = planeHandler(process.argv[3])

    _.forEach(planes, (plane, index) => {
        console.log(`Plane ${index + 1}:`);
        console.log(`ID:`, plane.id);
        console.log(`Destination:`, plane.planeDestination);
        console.log(`Delayed:`, plane.isDelayed);
        console.log(`Arrival Time (in hours):`, plane.PlanesArrivalInHours);
        console.log(`-------------`);
    });
}
showPlaneList()