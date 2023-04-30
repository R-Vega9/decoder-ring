// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius")

describe ("polybius()", ()=> {
    it("should translate the letter i and j to 42 when encoding.", ()=> {
        expect(polybius("i",)).to.equal("42");
        expect(polybius("j",)).to.equal("42");

    });
    it("should translate 42 to (i/j) when decoding.", ()=> {
        expect(polybius("42",false)).to.equal("(i/j)");
    });
    it("should ignore capital letters.", ()=> {
        expect(polybius("R",)).to.equal("24");
    });
    it("should maintain spaces in the message before and after encoding or decoding", ()=> {
        expect(polybius("a message",)).to.equal("11 23513434112251");
    });


})
