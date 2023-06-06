const fs = require('fs');
const _ = require('lodash');

function updatePlane(planeId, isDelayed, hours, city) {
  fs.readFile('./planelist.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    let planeList = JSON.parse(data);
    const planeToUpdate = _.find(planeList, { id: planeId });

    if (planeToUpdate) {
      planeToUpdate.isDelayed = isDelayed;
      planeToUpdate.planesArrivalInHours = hours;
      planeToUpdate.planesDestination = city;

      fs.writeFile('./planelist.json', JSON.stringify(planeList, null, 2), (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log(`Plane with ID ${planeId} has been updated`);
        }
      });
    } else {
      console.log(`No plane with ID ${planeId} found`);
    }
  });
}

module.exports = {
  updatePlane,
};