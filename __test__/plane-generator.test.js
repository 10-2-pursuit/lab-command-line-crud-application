const { createRandomPlanes, planeHandler } = require("../src/plane-generator")

describe('createRandomPlanes', () => {
    test('Should create an object with id, planeDestination, isDelayed, trainArrivalInMins.', () => {
        const actual = createRandomPlanes()
        expect(actual).toHaveProperty('id', 'planeDestination', 'isDelayed', 'planeArrivalInMins')
    });
});

describe('planeHandler', () => {
    test('Should push train object thats made into trains array.', () => {
        const actual = planeHandler()
        expect(actual).toEqual(expect.arrayContaining(actual))
    });
});