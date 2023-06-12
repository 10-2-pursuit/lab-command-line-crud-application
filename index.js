const { writeJSONFile, readJSONFile } = require("./helpers");
const { 
    create, 
    index,
    show,
    destroy,
    update,
} = require("./src/purchase-controller")

const run = () => {
    const action = process.argv[2];
    const purchase = process.argv[3];
    let purchasesData = readJSONFile("./", "purchases-data.json")
    let writeToFile = false;
    let updatedpurchasesData = [];
    switch (action) {
        case "index" :
            const allPurchases = index(purchasesData)
            console.log(allPurchases);
            break;
        case "create" :
            console.log("CREATING YOUR RECIEPT")
            updatedpurchasesData = create(purchasesData, purchase) 
            writeToFile = true;
            break;
        case "show" :
            const foundpurchase = show(purchasesData, purchase)
            console.log(foundpurchase)
            break ;  

        case "update" :
            console.log(purchase,  " %%%%%%% ")
            updatedpurchasesData = update(purchasesData, purchase, process.argv[4]);
            writeToFile = true;
            break; 

        case "destroy" :
            updatedpurchasesData = destroy(purchasesData, purchase);
            writeToFile = true;
            break ;
        default :
        console.log("hey there was an error")  
    }

    if (writeToFile) {
        console.log("new data detected - updating")
  
        writeJSONFile(".", "purchases-data.json", updatedpurchasesData)
    }

}
run()