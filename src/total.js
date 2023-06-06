const d = require('../data/data.json');
const _ = require('lodash');

/**
 * totalDonation()
 * ----------------------
 * return total amount of the donation.
 * 
 * @param {object[]} data - json file
 * @returns {number} - total amount in the donation field.
 */
function totalDonation (data = d){
    return _.sumBy(data, "donation");
}

/**
 * totalPurchase()
 * --------------------------
 * total purchases in the amount fields
 * 
 * @param {object[]} data - from json file 
 * @returns {number} - total amount in the amount fields
 */
function totalPurchase (data = d){
    return _.sumBy(data, "amount");
}

module.exports = {
    totalDonation,
    totalPurchase,
}