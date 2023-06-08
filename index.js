const { readJSON, writeJSON } = require("./src/fs.js");
const { createArrF } = require("./src/gen.js");
const { basicView } = require("./src/basicView.js");
const { totalDonation, totalPurchase } = require("./src/total.js");
const { detailView } = require("./src/detailView.js");
const { deleteByName } = require("./src/delete.js");
const { updateData } = require("./src/update.js");
const { create } = require("./src/create.js");
const data = require('./data/data.json');

/**
 * run()
 * -------------------------
 * main function to handle argv & other supportive functions.
 * 
 * @returns {number} - if it ends successfully, return 0
 */
function run(){
    const argc = process.argv.length;

    switch(process.argv[2]){
        case "detail":
            console.log(detailView());
            break;
        case "delete":
            writeJSON(`./data`, `data.json`, deleteByName(data, process.argv[3]));
            break;
        case "total":
            console.log(`Total amount for purchases is \$${totalPurchase()}`);
            break;
        case "update":
            writeJSON('./data', 'data.json', updateData(data,process.argv[3],process.argv[4]));
            break;
        case "donation":
            console.log(`Total amount for donation is \$${totalDonation()}`);
            break;
        case "faker":
            let temp = process.argv[3] ? createArrF(Number(process.argv[3])) : createArrF(5);
            console.log(temp)
            writeJSON(`./data`, 'data.json', temp);
            break;
        case "help":
            console.log("faker (number | null) : will generate [number] amount fake data");
            console.log("donation : will show total amount for donation");
            console.log("detail : log all the data");
            console.log("delete (id) : erase [id] and its data");
            console.log("update (id) '(property)=(update value)' : will update (property) in the (id)");
            console.log("create (property1)=(value) ... (property3)=(value) : create new data, YOU MUST FILL name/amount/donation ");
            break;
        case "create":
            writeJSON(`./data`, 'data.json', create(data,process.argv[3],process.argv[4],process.argv[5]));
            break;
        default:
            console.log(basicView());
            
    }

    return 0;
}

run()