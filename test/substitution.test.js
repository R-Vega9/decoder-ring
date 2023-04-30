// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution")
describe ("substitution()", ()=> {
    it("should return false if the given alphabet isn't 26 characters long", ()=> {
        expect(substitution("message","zxcvbnmasd")).to.be.false;
        expect(substitution("message","zxcvbnmasdfghjklqwertyuiop/")).to.be.false;
    });
    it("should return false if there are any duplicate characters in the given alphabet", ()=> {
        expect(substitution("message","zxcvbnnmasdfghjklqwertyuio")).to.be.false;
    });
    it("should correctly translate the given phrase based on the alphabet given to the function", ()=> {
        expect(substitution("message","zxcvbnmasdfghjklqwertyuiop")).to.equal("hbeezmb");
    });
    it("should maintain spaces in the message, before and after encoding or decoding", ()=> {
        expect(substitution("a message","zxcvbnmasdfghjklqwertyuiop")).to.equal("z hbeezmb");
        expect(substitution("z hbeezmb","zxcvbnmasdfghjklqwertyuiop", false)).to.equal("a message");

    });
    it("should ingnore capital letters", ()=> {
        expect(substitution("A Message","zxcvbnmasdfghjklqwertyuiop")).to.equal("z hbeezmb");
    });

})