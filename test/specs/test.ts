const chai = require('chai');
const expect = chai.expect;
chai.should();
describe("TS vs JS", function(){
    it("typeScript", function(){
        browser.url("http://google.com");
        const title = browser.getTitle();
        title.should.to.be.equal("Google", "The title is wrong");
    })
})