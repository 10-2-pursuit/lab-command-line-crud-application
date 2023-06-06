const { nanoid } = require("nanoid");
const { faker} = require("@faker-js/faker");
const _ = require("lodash");
// const { planeList } = require("../data/planelist")

function createRandomPlanes() {
    const plane = {
        id: nanoid(4),
        PlanesDestination: faker.location.city(),
        isDelayed: faker.datatype.boolean(),
        PlanesArrivalInHours: faker.number.int({min: 1, max: 24})
    }
    return plane;
}

function planeHandler(number) {
    planesList = [];
    for (let i = 0; i < number; i++) {
        planesList.push(createRandomPlanes())
    }
    return planesList;
}

module.exports = {
    createRandomPlanes,
    planeHandler,
    
}