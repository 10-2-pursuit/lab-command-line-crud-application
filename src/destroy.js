const fs = require(`fs`);
const _ = require(`lodash`);
const { planeHandler } = require("./plane-generator");

function deletePlane(planeId) {
    let planes = planeHandler(process.argv[4]);
    plane = _.filter(planes, (plane) => plane.id !== planeId);

    fs.writeFile('./planelist.json')
}