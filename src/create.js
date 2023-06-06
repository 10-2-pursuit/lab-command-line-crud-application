const { nanoid } = require("nanoid");
const d = require("../data/data.json");
const _ = require("lodash");

function create(data = d, ...inputStream){
    console.log(inputStream)
    const prop = ['id','name','amount','donation'];

    if(inputStream.length > 3 || inputStream.length <3){
        return data;
    }



    let field1 = inputStream[0].split("=");
    let field2 = inputStream[1].split("=");
    let field3 = inputStream[2].split("=");

    console.log(field1);
    console.log(field2);
    console.log(field3);

    const newObj = {
        id: nanoid(4),
        [field1[0]]:field1[1],
        [field2[0]]:Number(field2[1]),
        [field3[0]]:Number(field3[1]),
    }

    if(!prop.every(prop => _.has(newObj,prop))){
        return data;
    }
    
    data.push(newObj);
    return data;
}

module.exports = {
    create,
}