const {nanoid} = require("nanoid")
const {
    readJSON,
    writeJSON
} = require("./src/readWrite")

function createPurchase (name, amount, donation) {
    let purchase = {
        'id' : nanoid(),
        "name": name,
        "amount": amount,
        "donation": donation.toFixed(2)
    }
    return purchase
}


function showPurchases() {}

function showDetailedPurchases(){}

function updatePurchase(){}

function deletePurchase(){}

function showDonationTotal(){}


console.log(createPurchase("coffee",2,0.14))
