const chalk = require("chalk");
const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");


function create(purchases, purchaseName) {
    const purchase = {
        id: nanoid(4),
        name: chalk.red(purchaseName),
        amount: chalk.green(faker.commerce.price({ min: 1.00, max: 25.00, dec: 2 })),
        donation: chalk.green(faker.commerce.price({ min: 0.01, max: 5.00, dec: 2 })),
    }
    purchases.push(purchase)
    return purchases
}

function index(purchases) {
    return purchases.map((purchase) => purchase.id + " " + purchase.name).join("\n")
}

function show(purchases, purchaseId) {
    const foundPurchase = purchases.find((purchase) => purchase.id === purchaseId);

    return foundPurchase.id + " " + foundPurchase.name
}

function destroy(purchases, purchaseId) {
    const index = purchases.findIndex((purchase) => purchase.id === purchaseId);
    if (index >= 0) {
        purchases.splice(index, 1);
        return purchases
    } else {
        console.log("purchase with that ID cannot be found")
    }
}

function update (purchases, purchaseId, updatedPurchase) {
    const index = purchases.findIndex((purchase) => purchase.id === purchaseId);

    if (index > -1) {
        purchases[index].id = purchaseId;
        purchases[index].name = updatedPurchase;
        purchases[index].amount = purchaseAmount[updatedPurchase];
        return purchases
    } else {
        console.log("Could not find a purchase with that ID")
    }
}

function score(purchases) {
    const total = purchases.reduce((a,b) => (a + b.amount), 0)
    return total
}

module.exports = {
    create,
    index, 
    show,
    destroy,
    update,
    score
 }