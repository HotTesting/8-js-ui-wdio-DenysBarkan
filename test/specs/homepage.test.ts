import { should } from 'chai';
should();
import { HomePage } from '../../pageObjects/HomePage.page';

describe('HEADER', function () {
    const homePage = new HomePage();

    beforeEach(function(){
        browser.setWindowSize(1600,900);
    });
    afterEach(function(){
        browser.refresh();
    })

    it('Title&FavIcon', function () {
        homePage.open();  
        const title = homePage.getTitle();
        title.should.be.equal("Ducks Store | Online Store", "The Title is wrong");
        homePage.favIcon.isExisting().should.be.equal(true, 'Favicon is not shown');
    });

    it('Header', function() {
        homePage.open();
        homePage.favIcon.isDisplayed().should.be.equal(true, "The FavIcon is not shown");
        homePage.getLogoHref().should.be.equal('http://ip-5236.sunline.net.ua:38015/', 'The logo link is not exist');
        homePage.getLogoTitle().should.be.equal('Ducks Store', 'The logo title is wrong');
        homePage.changePref();



        // regionalSettingsOverlay.waitForDisplayed();
        // assert.isTrue(regionalSettingsOverlay.isDisplayed(), "The region change form is not displayed");
        // const countrySelect = regionalSettingsOverlay.$(' .select-wrapper select[name="country_code"]');
        // countrySelect.selectByVisibleText('Ukraine');
        // const currencySelect = regionalSettingsOverlay.$(' .select-wrapper select[name="currency_code"]');
        // currencySelect.selectByVisibleText('Euros');
        // //const provinceSelect = regionalSettingsOverlay.$('.select-wrapper select[name="zone_code"]');
        // const saveBtn = regionalSettingsOverlay.$('button[name="save"]');
        // //browser.pause(3000);
        // saveBtn.click();

        // const langId = header.$(' .language').getText();
        // assert.equal(langId, 'English', 'The language is incorrect');
        // let currencyId = header.$(' .currency').getText();
        // assert.equal(currencyId, 'EUR', 'The currency is incorrect');
        // let countryId = header.$(' .country img').getAttribute('title');
        // assert.equal(countryId, 'Ukraine');

        // changePref.click();
        // countrySelect.selectByVisibleText('United States');
        // currencySelect.selectByVisibleText('US Dollars');
        // saveBtn.click();
        // currencyId = header.$(' .currency').getText();
        // countryId = header.$(' .country img').getAttribute('title');
        // assert.equal(currencyId, 'USD', 'The currency is incorrect');
        // assert.equal(countryId, 'United States');

        // const cart = header.$('#cart');
        // const cartTitle = cart.$(' .title').getText();
        // const cartImg = cart.$(' .image');
        // assert.isTrue(cartImg.isDisplayed(),"Cart hasn't the image");
        // assert.equal(cartTitle, "Shopping Cart", "The Title is not correct");
    });
/*
    it("Site menu", ()=>{
        const topMenu = $('#site-menu');
        const srch = topMenu.$(' input[name="query"]');
        assert.equal(srch.getAttribute("placeholder"), "Search products …");
        srch.setValue("Some Value");
        browser.keys("\uE007");
        assert.include($("#box-search-results").getText(), "Some Value", 'Search function is not working');
        assert.include($("#box-search-results div").getText(), "No matching results", 'Search function is not working');
        browser.back();
        srch.setValue("Duck");
        browser.keys("\uE007");
        assert.include($("#box-search-results").getText(), "Duck", 'Search function is not working');
        browser.back();

        const homeBtn = topMenu.$(" .hidden-xs a");
        const homeBtnTitle = homeBtn.getAttribute("title");
        const homeBtnHref = homeBtn.getAttribute("href");
        assert.equal(homeBtnTitle, "Home", 'Home button doesnt have title');
        assert.equal(homeBtnHref, "http://ip-5236.sunline.net.ua:38015/", "Home btn href is wrong");
        homeBtn.click();
        assert.equal(browser.getUrl(), 'http://ip-5236.sunline.net.ua:38015/', "The home page is not opened");

        const categotiesDropDwn = topMenu.$(" .categories a");
        assert.equal(categotiesDropDwn.getText(), "Categories", "The Title of dropdown list is incorrect");
        categotiesDropDwn.$(' .caret').click();
        let catDropDwnOpen = categotiesDropDwn.getAttribute('aria-expanded');
        assert.equal(catDropDwnOpen, 'true', "The Drop-down menu is not opened");
        assert.isNotEmpty(categotiesDropDwn.$('.dropdown-menu'), 'The drop-down is empty');

        const manufacturesDropDwn = topMenu.$(" .manufacturers a");
        assert.equal(manufacturesDropDwn.getText(), "Manufacturers", "The Title of dropdown list is incorrect");
        manufacturesDropDwn.$(" .caret").click();
        let manDropDownOpen = manufacturesDropDwn.getAttribute('aria-expanded');
        assert.equal(manDropDownOpen, 'true', "The Drop-down menu is not opened");
        assert.isNotEmpty(manufacturesDropDwn.$(' .dropdown-menu'), "The drop down list is empty");

        const custmSer = topMenu.$(" .customer-service a");
        assert.equal(custmSer.getText(), "Customer Service");
        assert.equal(custmSer.getAttribute("href"), "http://ip-5236.sunline.net.ua:38015/customer-service-s-0", "The link is not correct");
        custmSer.click();
        assert.equal(browser.getUrl(), "http://ip-5236.sunline.net.ua:38015/customer-service-s-0", "The link is incorrect");
        browser.back();

        const signIn = topMenu.$(" .account.dropdown");
        assert.equal(signIn.$(' a').getText(), "Sign In", "The Sign IOn doesnt have name");
        signIn.$(' .caret').click();
        let signDropDownOpn = signIn.$(" a").getAttribute("aria-expanded");
        assert.isTrue(signDropDownOpn ==="true", "The drop Down Sign In is not shown");

        const loginForm = signIn.$(' .dropdown-menu');
        loginForm.$(' a[href="http://ip-5236.sunline.net.ua:38015/create_account"]').click();
        assert.equal(browser.getUrl(), 'http://ip-5236.sunline.net.ua:38015/create_account', "Create account page is not opened");
        browser.back();
        signIn.$(' .caret').click();
        loginForm.$(' a[href="http://ip-5236.sunline.net.ua:38015/reset_password"]').click();
        assert.equal(browser.getUrl(), 'http://ip-5236.sunline.net.ua:38015/reset_password', "Reset password page is not opened");
        browser.back();
    });
*/
});