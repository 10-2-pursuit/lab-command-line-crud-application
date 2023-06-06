const { nanoid } = require("nanoid");
const { faker} = require("@faker-js/faker");
const _ = require("lodash");
// const { planeList } = require("../data/planelist")

const destinations = ['New York', 'London', 'Tokyo', 'Sydney'];

function createRandomPlanes() {
    const plane = {
        id: nanoid(4),
        planesDestination: faker.location.city(destinations),
        isDelayed: faker.datatype.boolean(),
        planesArrivalInHours: faker.number.int({min: 1, max: 15})
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