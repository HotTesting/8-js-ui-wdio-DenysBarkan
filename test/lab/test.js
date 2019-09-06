const chai = require('chai');
const expect = chai.expect;
chai.should();
describe("JS vs TS", function(){
    it("javaScript", function(){
        browser.url("http://google.com");
        const title = browser.getTitle();
        title.should.to.be.equal("Google", "The title is wrong");
    })
})