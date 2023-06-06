const _ = require("lodash");

function deleteByName(data, name){
    return _.dropRightWhile(data, {'name': name});
}

module.exports = {
    deleteByName,
}