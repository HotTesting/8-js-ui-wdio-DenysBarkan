
import { should } from 'chai';
import { HomePage } from '../../pageObjects/smoke.page';
should();


describe('Website', function () {
    const homePage = new HomePage(); 

    beforeEach(function(){
        browser.setWindowSize(1600, 900);
    });
    afterEach(function(){
        browser.takeScreenshot();
    });
    afterEach(function(){
        browser.refresh();
    });

    // it('should be alive (use Regular Test)', function () {
    //     browser.url(`/`)
    //     const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]')
    //     img.isExisting().should.be.equal(true, 'Website should be opened, and logo displayed');
    // });

    it('should be alive (use PageObjects) ', function () {
        homePage.open();
        homePage.LogoImg.isDisplayed().should.be.true;
     });


})