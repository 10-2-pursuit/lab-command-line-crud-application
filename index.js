const {nanoid} = require("nanoid")
// const {
//     readJSON,
//     writeJSON
// } = require("./src/readWrite")
const purchases = require("./data/purchases")

function createPurchase (name, amount, donation) {
    let purchase = {
        'id' : nanoid(),
        "name": name,
        "amount": amount,
        "donation": donation.toFixed(2)
    }
    return purchase
}


function showPurchases(data) {
    return data.map(x => {
        return {id : x.id, name: x.name}
    })
}

function showDetailedPurchases(){}

function updatePurchase(){}

function deletePurchase(){}

function showDonationTotal(){}

function run(){
    switch(process.argv[2]){
        case "create":
            console.log("create")
            break;
        case "show":
            console.log("show")
            break;
        case "details":
            console.log("details")
            break;
        case "update":
            console.log("update")
            break;
        case "destroy":
            console.log("delete")
            break;
    }   
}


// console.log(createPurchase("coffee",2,0.14))
// console.log(showPurchases(purchases))

run()
