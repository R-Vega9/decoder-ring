// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar")

describe ("caesar()", ()=> {
    it("should return false if shift equals 0, less than -25, greater than 25 or not present", ()=> {
        expect(caesar("hello",0)).to.be.false;
        expect(caesar("hello",-26)).to.be.false;
        expect(caesar("hello",26)).to.be.false;
        expect(caesar("hello",)).to.be.false;
    });

    it("should handle shifts that go past the end of the alphabet", ()=>{
        expect(caesar("z",3)).to.equal("c")
    })
    it("should ignore capital letters", ()=>{
        expect(caesar("BZS",-1,false)).to.equal("cat")
    })
    it("should maintain spaces and other nonalphabetic symbols in the message", ()=>{
        expect(caesar("!hello?",3)).to.equal("!khoor?")
    })
})