// this file will organize all the logic that interacts with our animals data
const { nanoid } = require("nanoid");
const purchaseDonation = require("../data/purchases-donations.json")
const purchasePrice = require("../data/purchases-price.json")
const inform = console.log
// this is where we will create our CRUD logic

// accepts all of our animals from our data and a name from the user
function create (purchases, purchaseName) {
    const purchase = { name: purchaseName, 
        // nanoid gives us a uniqe id for our animals
        id: nanoid(4),
        price: purchasePrice[purchaseName],
        donation: purchaseDonation[purchaseName]
    };
    // adds to our animals array
    purchases.push(purchase);
    // returns the animals array with the new object
    return purchases
}
// returns a string for all of our animals 
function index (purchases) {
    return purchases.map((purchase) => purchase.id + " " + purchase.name).join("\n")
}
// accepts all of our animals from our data and an ID from the user
function show (purchases, purchaseId) {
    // finds the matching animal
    const foundPurchase = purchases.find((purchase) => purchase.id === purchaseId) ;
    // reutrns a formattes string
    return foundPurchase.id + " " + foundPurchase.name + " price: " + foundPurchase.price + " donation: " + foundPurchase.donation
}
// accepts all of our animals from our data and an ID from the user
function destroy (purchases, purchaseId) {
    // finds the matching animal's index in the animals array
   const index =  purchases.findIndex((purchase) => purchase.id === purchaseId);
    // if a match is found
   if (index > -1) {
    // removes it from the array if it is fond
    purchases.splice(index, 1);
    console.log("we deleted your purchase");
    // returns the updated array
    return purchases
   } else {
    console.log("couldn't find a purchase with that id")
   }
}
// accepts all of our animals from our data and an ID from the user and a new name for the animal to update
function update (purchases, purchaseId, updatedPurchase ) {
   //  finds the matching animal's index in the animals array
    const index =  purchases.findIndex((purchase) => purchase.id === purchaseId);
    // if a match is found
    if (index > -1) {
        // update the id of the animal at the index we found
        purchases[index].id = purchaseId;
       // update the name of the animal at the index we found
       purchases[index].name = updatedPurchase;
       // update the price of the animal at the index we found
       purchases[index].price = purchasePrice[updatedPurchase];
       // update the points of the animal at the index we found
        // by accessing our `animalPoints` data at the key of our updatedAnimal from the user
        purchases[index].donation = purchaseDonation[updatedPurchase];
       console.log("your purchase has been updated");
       // return the modified array
       return purchases
   } else {
     console.log("couldn't find a purchase with that id")
    }
   
}
// accepts all of our animals data as an array
function score (purchases) {
    // iterates over the array and combines the donations of each animal
    const total = purchases.reduce((a,b) => (a + b.donation), 0)
    // returns that number
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