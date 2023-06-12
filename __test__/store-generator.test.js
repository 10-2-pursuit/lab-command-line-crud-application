const {
    create,
    show,
  } = require("../src/purchase-controller.js");
 const inventory  = require("../purchases-data.json");

    describe("this will test create", () => {
        it("should check if value input to function is a string", ()=> {
            const input = "Pencil"
            const actual = typeof create(inventory,input);
            const expected = "object";
            expect(actual).toEqual(expected);
        });
    });

    describe("this will test show", () => {
        it("should check if value input to function is a already in the data, if it is return error message", ()=> {
            const input = "Pu2Z";
            const actual = show(inventory,input);
            const expected = "Pu2Z Dog 776.00 2.00";
            expect(actual).toEqual(expected);
        });
    });