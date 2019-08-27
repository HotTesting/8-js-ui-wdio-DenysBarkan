const {assert, expect} = require('chai');

describe('Website', function () {
    it('should be alive', function () {
        browser.url('/');
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]');
        assert.exists(img, 'Website should be opened, and logo displayed');
        browser.pause(3000);
    });

    it('title', function () {
        browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, "Ducks Store | Online Store", "The Title is wrong");
    })
})