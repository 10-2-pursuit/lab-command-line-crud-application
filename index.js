const { readJSON, writeJSON } = require("./src/fs.js");
const { createArrF } = require("./src/gen.js");
const { basicView } = require("./src/basicView.js");
const { total, totalDonation, totalPurchase } = require("./src/total.js");
const { detailView } = require("./src/detailView.js");
const data = require('./data/data.json');
const { deleteByName } = require("./src/delete.js");
const { updateData } = require("./src/update.js");
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
            break;
        default:
            console.log(basicView());
            
    }
    return 0;
}

run()