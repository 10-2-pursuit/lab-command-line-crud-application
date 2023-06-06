const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { 
    create, 
    index,
    show,
    destroy,
    update,
    score
} = require("./src/purchases-controller")


const run = () => {
    // When our users run one of our npm scripts they will pass an argument 
            // we need to get a handle on that argument so we can execute the correct action
                // this argument will always be `prcoess.argv[2]`
        const action = process.argv[2];
        // in the event the user passes a third argument it will always be `process.argv[3]`
            // our app is designed so this will be an animal
        const purchase = process.argv[3];
        // in order to get the state of our data we need to invoke our readJSONFile helper
            // we save this in the variable `animals`
        let purchases = readJSONFile("./data", "animals-data.json")
        // we will use this variable later 
            // to determine wether or not we need to record new information to the data file
        let writeToFile = false;
        let updatedPurchases = [];
        // switch statement will dictate what we are doing based on the 'action' variable
        switch (action) {
            // the index route will display all of our data
            case "index" :
                const allPurchases = index(purchases)
                console.log(allPurchases);
                break;   
            // the create route will create a new record in our data
            case "create" :
                console.log("CREATE IS FIRING")
                updatedPurchases = create(purchases, purchase) 
                writeToFile = true;
                break;
            // the show route will display information on one specific record
            case "show" :
                const foundPurchase = show(purchases, purchase)
                console.log(foundPurchase)
                break ;  
            // update will change the data at a specific record
            case "update" :
                console.log(purchase,  " %%%%%%% ")
                updatedPurchases = update(purchases, purchase, process.argv[4]);
                writeToFile = true;
                break; 
            // destroy will delete a record from our data at a specific point
            case "destroy" :
                updatedPurchases = destroy(purchases, purchase);
                writeToFile = true;
                break ;  
            // score will reduce the data's 'points' value to a number and display it to the user
            case "score" :
                console.log(score(purchases))
                break; 
            default :
            console.log("hey there was an error")  
        }
        // once the nescesarry action has been created 
            // we determine whether or not to write new data to the data file
        if (writeToFile) {
            console.log("new data detected - updating")
            // here we pass our `updatedPurchases` to our writeJSONFile to record out new entries
            writeJSONFile("./data", "animals-data.json", updatedPurchases)
        }
    
    }
    
    // executing our application
    run()