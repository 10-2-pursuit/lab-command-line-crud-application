const { nanoid } = require("nanoid")
const { faker } = require("@faker-js/faker");


function create(purchases, purchaseName) {
    const purchase = {
        id: nanoid(4),
        name: purchaseName,
        amount: faker.commerce.price(),
        donation: faker.commerce.price({ min: 0, max: 5, dec: 2 }),
    }
    purchases.push(purchase)
    return purchases
}

function index(purchases) {
    return purchases.map((purchase) => purchase.id + " " + purchase.name).join("\n")
}

function show(purchases, purchaseId) {
    const foundPurchase = purchases.find((purchase) => purchase.id === purchaseId);

    return `${foundPurchase.id} ${foundPurchase.name} ${foundPurchase.amount} ${foundPurchase.donation}`;
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
        return purchases
    } else {
    console.log("couldnt find a product with that id")
   }
}

function score (purchases) {
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