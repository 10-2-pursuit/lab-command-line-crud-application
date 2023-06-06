const fs = require('fs');
const _ = require('lodash');

function deletePlane(planeId) {
  fs.readFile('./planelist.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    let planeList = JSON.parse(data);
    const deletedPlane = _.remove(planeList, { id: planeId });

    fs.writeFile('./planelist.json', JSON.stringify(planeList, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        if (deletedPlane.length > 0) {
          console.log(`Plane with ID ${planeId} has been deleted`);
        } else {
          console.log(`No plane with ID ${planeId} found`);
        }
      }
    });
  });
}

module.exports = {
  deletePlane,
};