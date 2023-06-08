const d = require('../data/data.json');
const _ = require('lodash');

/**
 * basicView()
 * ----------------------
 * return an array w/ id & name
 * @param {object[]} data - JSON file, default value is ../data/data.json
 * @return {object[]} - array object w/ only name & id
 */
function basicView(data = d){
    return _.map(data, a => { return {id:a.id, name:a.name};});
}

module.exports = {
    basicView,
}