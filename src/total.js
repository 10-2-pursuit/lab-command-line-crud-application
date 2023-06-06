const d = require('../data/data.json');
const _ = require('lodash');

function totalDonation (data = d){
    return _.sumBy(data, "donation");
}

function totalPurchase (data = d){
    return _.sumBy(data, "amount");
}

module.exports = {
    totalDonation,
    totalPurchase,
}