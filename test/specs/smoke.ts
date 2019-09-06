//import * as assert from 'assert';
import { should } from 'chai';
should();


describe('Website', function () {
    it('should be alive', function () {
        browser.url(`/`)
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]')
        img.isExisting().should.be.equal(true, 'Website should be opened, and logo displayed');
    })
})