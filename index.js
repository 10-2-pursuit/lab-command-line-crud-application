const {nanoid} = require("nanoid");

function create(id) {
    const customerId = {id: nanoid(4)};
    customerId.push(id);
    return id;
}