const fs = require('fs')
const _ = require('lodash')
const { readJSONFile, writeJSONFile } = require("./src/helpers");
const {createRandomPlanes, planeHandler} = require("./src/plane-generator")
const { deletePlane } = require('./src/destroy')
const { showPlaneList } = require('./src/detailedlist')
const { updatePlane } = require('./src/update')
const { faker} = require("@faker-js/faker");

const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
  case 'destroy': {
    const planeId = args[0];
    deletePlane(planeId);
    break;
  }
  case 'show':
    showPlaneList();
    break;
  case 'update': {
    const [planeId, isDelayed, hours, city] = args;
    updatePlane(planeId, isDelayed, hours, city);
    break;
  }
  case 'create': {
    const numberOfPlanes = parseInt(args[0]);
    const newPlanes = planeHandler(numberOfPlanes);

    fs.readFile('./planelist.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }

      let planeList = JSON.parse(data);
      planeList = planeList.concat(newPlanes);

      fs.writeFile('./planelist.json', JSON.stringify(planeList, null, 2), (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log(`Created ${numberOfPlanes} new plane(s).`);
        }
      });
    });
    break;
  }
  default:
    console.log('Invalid command.');
}