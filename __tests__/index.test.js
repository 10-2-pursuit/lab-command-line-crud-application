const {
    createPurchase,
    showPurchases,
    showDetailedPurchases,
    updatePurchase,
    deletePurchase,
    showDonationTotal
} = require("../index.js")
const purchases = require("../data/purchases.js")

describe("createPurchase()",() => {
    it("should only create one item", () => {
        const actual = createPurchase(purchases, "test", 7, 2.2).length
        const expected = 4
        expect(actual).toStrictEqual(expected)
    })
    it("should make all the proper keys", () => {
        const actual = createPurchase(purchases, "test", 7, 2.2)
        const expected = true
        expect(!!actual[3].id 
            && !!actual[3].name 
            && !!actual[3].amount
            && !!actual[3].donation).toStrictEqual(expected)
    })
})
describe("showPurchases()",() => {
    it("should work", () => {
        const actual = showPurchases(purchases)
        const expected = []
        expect(actual).toStrictEqual(expected)
    })
})
describe("showDetailedPurchases()",() => {
    it("should work", () => {
        const actual = []
        const expected = []
        expect(actual).toStrictEqual(expected)
    })
})
describe("updatePurchase()",() => {
    it("should work", () => {
        const actual = []
        const expected = []
        expect(actual).toStrictEqual(expected)
    })
})
describe("deletePurchase()",() => {
    it("should work", () => {
        const actual = []
        const expected = []
        expect(actual).toStrictEqual(expected)
    })
})
describe("showDonations()",() => {
    it("should work", () => {
        const actual = []
        const expected = []
        expect(actual).toStrictEqual(expected)
    })
})