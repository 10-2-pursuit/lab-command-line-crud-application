const _ = require("lodash");

function updateData(data, id, str){
    str = str.split("=");
    if (str[0] == "amount" || str[0] == "donation"){
        str[1] = Number(str[1]);
    }
    return _.map(data, (a) => {
        if(a.id == id){
            a[str[0]] = str[1];
        }
        return a;
    })
}

module.exports = {
    updateData,
}