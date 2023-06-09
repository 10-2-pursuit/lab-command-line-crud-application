const {nanoid} = require("nanoid");
const {faker} = require("@faker-js/faker");

function create(id) {
    const customerId = {
        id: nanoid()
    };
    id.push(customerId);
    console.log(id)
    return id;
}
module.exports = {
    create,
    faker,
};