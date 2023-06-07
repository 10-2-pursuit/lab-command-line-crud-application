// this file will organize all the logic that interacts with our animals data
const { nanoid } = require("nanoid");
const purchaseDonation = require("../data/purchases-donations.json")
const purchasePrice = require("../data/purchases-price.json")
const inform = console.log



function create (purchases, purchaseName) {
    const purchase = { name: purchaseName, 
        id: nanoid(4),
        price: purchasePrice[purchaseName],
        donation: purchaseDonation[purchaseName]
    };

    purchases.push(purchase);
    
    return purchases
}
 
function index (purchases) {
    return purchases.map((purchase) => purchase.id + " " + purchase.name).join("\n")
}

function show (purchases, purchaseId) {
    
    const foundPurchase = purchases.find((purchase) => purchase.id === purchaseId) ;
    
    return foundPurchase.id + " " + foundPurchase.name + " price: " + foundPurchase.price + " donation: " + foundPurchase.donation
}

function destroy (purchases, purchaseId) {
    
   const index =  purchases.findIndex((purchase) => purchase.id === purchaseId);
    
   if (index > -1) {
    
    purchases.splice(index, 1);
    console.log("we deleted your purchase");
    
    return purchases
   } else {
    console.log("couldn't find a purchase with that id")
   }
}

function update (purchases, purchaseId, updatedPurchase ) {
   
    const index =  purchases.findIndex((purchase) => purchase.id === purchaseId);
    
    if (index > -1) {
        
        purchases[index].id = purchaseId;
       
       purchases[index].name = updatedPurchase;
       
       purchases[index].price = purchasePrice[updatedPurchase];
     
        purchases[index].donation = purchaseDonation[updatedPurchase];
       console.log("your purchase has been updated");
       
       return purchases;
   } else {
     console.log("couldn't find a purchase with that id")
    }
   
}

function score (purchases) {
    
    const total = purchases.reduce((a,b) => (a + b.donation), 0)
    
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