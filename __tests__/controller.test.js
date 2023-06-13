const {
  create
} = require("../sample-functions-for-test");

describe("this will test create", () => {
  it("should check if create returns an object", () => {
    const input = "chalk"
    const actual = typeof create(input)
    const expected = "object";
    expect(actual).toEqual(expected);
  });
});

describe("this will test create", () => {
    it("should check if create object.amount returns a number as a string", () => {
      const input = "chalk"
      const actual = typeof create(input).amount
      const expected = "string";
      expect(actual).toEqual(expected);
    });
  });