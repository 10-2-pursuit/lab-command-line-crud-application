// const { uptime } = require("os");
// const { readJSONFile, writeJSONFile } = require("./helpers");
// const airports = require("airport-codes");

// function run (){
//     const action= process.argv[2]
//     console.log(action)
//     const airportCode = process.argv[3]
//     let  airportCodes= readJSONFile("./data", "codes.json")

    

//     let writeToFile = false
//     let updatedAirportCodes = []

//     switch (action){
//         case "index":
//     const airportCodes = index(airportCodes)
//         console.log (airportCodes)
//         break;
    
//     case "create":
//         console.log ("The Airport codes")
//         writeToFile=true
//         break;
    
//     case "show":
//         const airportCode = show (airportCodes, airportCode)
//         console.log("The Codes")
//         break;

//     case "destroy":

    
//     }
// }
// run()

let airportsJSON = require('./airports.json');
let Backbone = require('backbone');

let airports = new Backbone.Collection(airportsJSON);

airports.comparator = 'name';

module.exports = airports;