const _ = require('lodash');
const planes = require('./plane-generator');
const fs = require('fs');

function showPlaneList() {
  fs.readFile('./planelist.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const planeList = JSON.parse(data);

    _.each(planeList, (plane, index) => {
      console.log(`Plane ${index + 1}:`);
      console.log(`ID: ${plane.id}`);
      console.log(`Destination: ${plane.planesDestination}`);
      console.log(`Delayed: ${plane.isDelayed}`);
      console.log(`Arrival Time (in hours): ${plane.PlanesArrivalInHours}`);
      console.log('-------------');
    });
  });
}

module.exports = {
  showPlaneList,
};