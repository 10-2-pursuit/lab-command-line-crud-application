const d = require('../data/data.json');
const chalk = require('chalk');

function detailView(data = d){
    for(let str of data){
        console.log(chalk.cyan(`id \t`) + `${str.id} ` + chalk.cyan(`name \t`) + `${str.name} ` + chalk.cyan(`amount \t`) + `${str.amount} ` + chalk.cyan(`donation \t`) +  chalk.yellow(`${str.donation}`));
    }
}

module.exports = {
    detailView,
}