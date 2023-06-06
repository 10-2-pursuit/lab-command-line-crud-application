const { totalDonation, totalPurchase } = require("../src/total.js");

describe("totalDonation()", ()=>{
    const data = [
        {"id":"-aZF3","name":"Tracey Terry Sr.","amount":736899.54,"donation":392017.58},
        {"id":"aDts","name":"Leah Hahn","amount":163451.15,"donation":270976.85},
        {"id":"1VCa","name":"Miss Josephine Emard","amount":448605.04,"donation":580819.22},
        {"id":"Zjv0","name":"Kirk Bernhard","amount":52355.09,"donation":247504.28}
    ];
    test("does this function return in the right form?", () => {
        const actual = totalDonation(data);
        const expected = 392017.58 + 270976.85 + 580819.22 + 247504.28;
        expect(actual).toStrictEqual(expected);
    })
});

describe("totalPurchase()", ()=>{
    const data = [
        {"id":"-aZF3","name":"Tracey Terry Sr.","amount":736899.54,"donation":392017.58},
        {"id":"aDts","name":"Leah Hahn","amount":163451.15,"donation":270976.85},
        {"id":"1VCa","name":"Miss Josephine Emard","amount":448605.04,"donation":580819.22},
        {"id":"Zjv0","name":"Kirk Bernhard","amount":52355.09,"donation":247504.28}
    ];
    test("does this function return in the right form?", () => {
        const actual = totalPurchase(data);
        const expected = 736899.54 + 163451.15 + 448605.04 + 52355.09;
        expect(actual).toStrictEqual(expected);
    })
})