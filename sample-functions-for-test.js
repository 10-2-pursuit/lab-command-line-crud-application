const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");

function create(purchaseName) {
    const purchase = {
        id: nanoid(4),
        name: purchaseName,
        amount: faker.commerce.price({ min: 1.00, max: 25.00, dec: 2 }),
        donation: faker.commerce.price({ min: 0.01, max: 5.00, dec: 2 }),
    }
    return purchase
}



module.exports = {
    create
}