const d = require('../data/data.json');
const _ = require('lodash');

function basicView(data = d){
    return _.map(data, a => { return {id:a.id, name:a.name};});
}

module.exports = {
    basicView,
}