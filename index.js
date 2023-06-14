const {nanoid} = require("nanoid");
const {faker} = require("@faker-js/faker");

function create(id) {
    const customerId = {
        id: nanoid()
    };
   customerId.push(id)
   return id;
}
module.exports = {
    create,
    faker,
};