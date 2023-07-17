const {nanoid} = require("nanoid");


function create(id) {
    const customerId = {
        id: nanoid()
    };
   customerId.push(id)
   return id;
}
module.exports = {
    create
};