const {nanoid} = require("nanoid")
const chalk = require("chalk")

// console.log(chalk.blue("strisng"))


const purchases = require("./data/purchases")

function createPurchase (data, name, amount, donation) {
    data.push({
        'id' : nanoid(),
        "name": name || "unidentified item",
        "amount": Number(amount) || 1, 
        "donation": Number(donation) || 0
    })
    return data
}


function showPurchases(data) {
    return data.map(x => {
        return {id : x.id, name: x.name}
    })
}

function showDetailedPurchases(data){
    for(element of data) {
        console.log(
            chalk.blue("id"),chalk.white(element.id),
            chalk.blue("name"),chalk.white(element.name),
            chalk.blue("amount"),chalk.white(element.amount),
            chalk.blue("donation"),chalk.white(element.donation))
    }
}

function updatePurchase(data){
    let held = data.map(item => {
        return item.id
    })

    let newArr = process.argv.slice(3).map(x => {
        return x.split("=")
    })

    newArr = Object.fromEntries(newArr)
    foundIndex = held.indexOf(newArr.id)

    if(newArr.id && foundIndex != -1) {
        //Overwrite relevant data, defaults to previous if not found
        data[foundIndex] = {
            id : data[foundIndex].id,
            name : newArr.name || data[foundIndex].name,
            amount: newArr.amount || data[foundIndex].amount
        }
        console.log("Overwrote data with id of",chalk.italic(newArr.id))
    } else {
        console.log(chalk.redBright("ID not found or specified. Please enter correct info."))
    }
    
    return data
}

function deletePurchase(){}

function showDonationTotal(){}

function run(){
    switch(process.argv[2]){
        case "create":
            createPurchase(purchases,process.argv[3],process.argv[4],process.argv[5])
            console.log(`Created `)
            break;
        case "show":
            console.log(showPurchases(purchases))
            break;
        case "details":
            console.log(showDetailedPurchases(purchases))
            break;
        case "update":
            updatePurchase(purchases)
            // console.log("update")
            break;
        case "destroy":
            console.log("delete")
            break;
    }   
}


// console.log(createPurchase("coffee",2,0.14))
// console.log(showPurchases(purchases))

run()
