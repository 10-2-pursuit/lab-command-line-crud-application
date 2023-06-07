const { readJSONFile, writeJSONFile } = require("./src/helper");
const {
  index,
  show,
  update,
  destroy,
  total,
} = require("./src/changeToDonation-controller");

const run = () => {
  const action = process.argv[2];
  const donation = process.argv[3];
  console.log(donation);
  //let donations = readJSONFile("./data", "changeToDonation.json")
    switch (action) {
        case "index":
            const allDonations = index(donations)
            console.log(allDonations)
            break;
        case "create":
            updatedDonations = create(userInput);
            break;
        case "show":
            const foundDonation = show(userInput);
            console.log(foundDonation);
            break;
        case "update":
            console.log(donation)
            updatedDonations = update(userInput);
            break;
        case "destroy":
            updatedDonations = destroy(userInput)
            break;
        case "total":
            console.log(total(userInput))
            break;
        default:
            console.log("hey there was an error")      
    }

};
run();
