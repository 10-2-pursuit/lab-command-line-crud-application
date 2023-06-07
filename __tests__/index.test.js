const {
    createPurchase,
    showPurchases,
    showDetailedPurchases,
    updatePurchase,
    deletePurchase,
    showDonationTotal
} = require("../index.js")

let purchases = require("../data/purchases.js")

describe("createPurchase()",() => {
    it("should only create one item", () => {
        let testing = JSON.parse(JSON.stringify(purchases))
        const actual = createPurchase(testing, "test", 7, 2.2).length
        const expected = 4
        expect(actual).toStrictEqual(expected)
    })
    it("should make all the proper keys", () => {
        let testing = JSON.parse(JSON.stringify(purchases))
        const actual = createPurchase(testing, "test", 7, 2.2)
        const expected = true
        expect(!!actual[3].id 
            && !!actual[3].name 
            && !!actual[3].amount
            && !!actual[3].donation).toStrictEqual(expected)
    })
})

describe("showPurchases()",() => {
    it("should return all of the items in the dataset", () => {
        const actual = showPurchases(purchases).length
        const expected = 3
        expect(actual).toStrictEqual(expected)
    })
    it("should contain the id key and show purchases key.", () => {
        const actual = (!!showPurchases(purchases)[0].id && !!showPurchases(purchases)[0].name)
        const expected = true
        expect(actual).toStrictEqual(expected)
    })
})
describe("showDetailedPurchases()",() => {
    it("should return the entire array", () => {
        const actual = showDetailedPurchases(purchases)
        const expected = [
            {
                id: 'first',
                name: 'coffee',
                amount: 2,
                donation: 0.15
            },
            {
                id: 'second',
                name: 'green tea',
                amount: 1,
                donation: 0.25
            },
            {
                id: 'third',
                name: 'juice',
                amount: 10,
                donation: 0.50
            }
        ]
        expect(actual).toStrictEqual(expected)
    })
})
describe("updatePurchase()",() => {
    it("Replaces the input data with the correct info", () => {
        let testing = JSON.parse(JSON.stringify(purchases))
        let testObj = {id: "first", name: "loaf", amount: 2, donation: 0.3}
        const actual = updatePurchase(testing, testObj)[0]
        const expected = {id: "first", name: "loaf", amount: 2, donation: 0.3}
        expect(actual).toStrictEqual(expected)
    })
})
describe("deletePurchase()",() => {
    it("should remove the data with the id given", () => {
        let testing = JSON.parse(JSON.stringify(purchases))
        const actual = deletePurchase(testing,"third")
        const expected = [{"amount": 2, "donation": 0.15, "id": "first", "name": "coffee"},
        {"amount": 1, "donation": 0.25, "id": "second", "name": "green tea",}]
        expect(actual).toStrictEqual(expected)
    }),
    it("should be able to remove from the middle", () => {
        let testing = JSON.parse(JSON.stringify(purchases))
        const actual = deletePurchase(testing,"second")
        const expected = [{"amount": 2, "donation": 0.15, "id": "first", "name": "coffee"},
        {id: 'third',name: 'juice',amount: 10,donation: 0.50}]
        expect(actual).toStrictEqual(expected)
    })
})
describe("showDonations()",() => {
    it("should return the total of all donations", () => {
        let testing = JSON.parse(JSON.stringify(purchases))
        const actual = showDonationTotal(testing)
        const expected = 0.90
        expect(actual).toStrictEqual(expected)
    })
})