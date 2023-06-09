const {nanoid} = require("nanoid");

function create(id) {
    const customerId = {id: nanoid(4)};
    id.push(customerId);
    console.log(id)
    return id;
}