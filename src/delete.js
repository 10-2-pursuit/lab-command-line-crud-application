const d = require('../data/data.json');
const _ = require("lodash");

/**
 * deleteByName()
 * -----------------------
 * search by name and delete the data
 * 
 * @param {object[]} data - json file
 * @param {string} name - name to delete
 * @returns {object[]} - new updated array
 */
function deleteByName(data = d, name){
    return _.dropRightWhile(data, {'name': name});
}

module.exports = {
    deleteByName,
}