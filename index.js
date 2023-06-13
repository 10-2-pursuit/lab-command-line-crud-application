const { writeJSONFile, readJSONFile } = require("./helpers");
const { 
    create, 
    index,
    show,
    destroy,
    update,
    score
} = require("./purchases-controller")

const run = () => {
    const action = process.argv[2];
    const purchase = process.argv[3];
    let purchasesData = readJSONFile(".", "purchases-data.json")
    let writeToFile = false;
    let updatedpurchasesData = [];
    switch (action) {
        case "index" :
            const allPurchases = index(purchasesData)
            console.log(allPurchases);
            break;
        case "create" :
            console.log("CREATING RECIEPT FOR PURCHASE")
            updatedpurchasesData = create(purchasesData, purchase) 
            writeToFile = true;
            break;
        case "show" :
            const foundpurchase = show(purchasesData, purchase)
            console.log(foundpurchase)
            break ;  

        case "update" :
            console.log(purchase,  "updating...")
            updatedpurchasesData = update(purchasesData, purchase, process.argv[4]);
            writeToFile = true;
            break; 

        case "destroy" :
            updatedpurchasesData = destroy(purchasesData, purchase);
            writeToFile = true;
            break ;
        default :
        console.log("error detected")  
    }

    if (writeToFile) {
        console.log("new data detected - updating...")
  
        writeJSONFile(".", "purchases-data.json", updatedpurchasesData)
    }

}
run()