const d = require('../data/data.json');
const chalk = require('chalk');

/**
 * detailView()
 * -----------------------
 * log all the data
 * 
 * @param {object[]} data - json file
 */
function detailView(data = d){
    for(let str of data){
        console.log(chalk.cyan(`id \t`) + `${str.id} `.padEnd(10) + chalk.cyan(`name \t`) + `${str.name} `.padEnd(25) + chalk.cyan(`amount \t`) + `${str.amount} `.padEnd(10) + chalk.cyan(`donation `) +  chalk.yellow(`${str.donation}`.padEnd(10)));
    }
}

module.exports = {
    detailView,
}