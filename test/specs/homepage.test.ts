import { should } from 'chai';
should();
import { HomePage } from '../../pageObjects/HomePage.page';
import { Header } from '../../pageObjects/components/header';
import { Region } from '../../pageObjects/components/regionList';
import { HeaderMenu } from '../../pageObjects/components/siteMenu';

describe('HEADER', function () {
    const homePage = new HomePage();
    const header = new Header();
    const regionPref = new Region();

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
        header.favIcon.isExisting().should.be.equal(true, 'Favicon is not shown');
    });

    it('Header', function() {
        homePage.open();
        header.favIcon.isExisting().should.be.equal(true, "The FavIcon is not shown");
        homePage.getLogoHref().should.to.include('ip-5236.sunline.net', 'The logo link is not exist');
        homePage.getLogoTitle().should.be.equal('Ducks Store', 'The logo title is wrong');
        homePage.changePref();
        regionPref.regionSetOverlay.waitForDisplayed();
        regionPref.regionSetOverlay.isDisplayed().should.be.true;
        let country = 'Ukraine';
        homePage.selectCountry(country);
        let curren = 'Euros';
        homePage.selectCurrency(curren);
        regionPref.clickSaveBtn()
        header.getSelectedLanguage().should.be.equal('English', 'The language is incorrect');
        header.getSelectedCurrency().should.be.equal('EUR', 'The currency is incorrect');
        header.getSelectedCountry().should.be.equal(country, 'The country selected incorrect');
        homePage.changePref();
        country = 'United States';
        homePage.selectCountry(country);
        curren = 'US Dollars';
        homePage.selectCurrency(curren);
        regionPref.clickSaveBtn();
        header.getSelectedCurrency().should.be.equal('USD', 'The currency is incorrect');
        header.getSelectedCountry().should.be.equal(country, 'The country selected incorrect');
        header.getCartTitle().should.be.equal("Shopping Cart", "The Title is not correct");
        header.getCartImg().should.be.true;
    });

    it("Site menu", function(){
        const topMenu = new HeaderMenu();
        homePage.open();

        topMenu.getSearchPlaceholder().should.be.equal("Search products …", 'Placeholder in the search field is not shown');
        topMenu.fillSearchField('Some Value');
        //console.log("1 search result : ", topMenu.getSearchResult());
        topMenu.getSearchResult().should.to.include('No matching results', 'Search function is not working');
        browser.back();
        topMenu.fillSearchField("Duck");
        //console.log("2 search result : ", topMenu.getSearchResult());
        topMenu.getSearchResult().should.to.include('Duck', 'Search function is not working');
        topMenu.getHomeBtnTitle().should.be.equal('Home', 'Home button doesnt have title');
        topMenu.getHomeBtnHref().should.to.include('ip-5236.sunline.net.ua:38015', 'Home btn href is wrong');
        topMenu.homeBtn.click();
        browser.getUrl().should.be.equal('http://ip-5236.sunline.net.ua:38015/', 'The home page is not opened');

 
      

 
        topMenu.getCategoriesDropDownTitle().should.be.equal("Categories", "The Title of dropdown list is incorrect");


        // categotiesDropDwn.$(' .caret').click();
        // let catDropDwnOpen = categotiesDropDwn.getAttribute('aria-expanded');
        // assert.equal(catDropDwnOpen, 'true', "The Drop-down menu is not opened");
        // assert.isNotEmpty(categotiesDropDwn.$('.dropdown-menu'), 'The drop-down is empty');

        // const manufacturesDropDwn = topMenu.$(" .manufacturers a");
        // assert.equal(manufacturesDropDwn.getText(), "Manufacturers", "The Title of dropdown list is incorrect");
        // manufacturesDropDwn.$(" .caret").click();
        // let manDropDownOpen = manufacturesDropDwn.getAttribute('aria-expanded');
        // assert.equal(manDropDownOpen, 'true', "The Drop-down menu is not opened");
        // assert.isNotEmpty(manufacturesDropDwn.$(' .dropdown-menu'), "The drop down list is empty");

        // const custmSer = topMenu.$(" .customer-service a");
        // assert.equal(custmSer.getText(), "Customer Service");
        // assert.equal(custmSer.getAttribute("href"), "http://ip-5236.sunline.net.ua:38015/customer-service-s-0", "The link is not correct");
        // custmSer.click();
        // assert.equal(browser.getUrl(), "http://ip-5236.sunline.net.ua:38015/customer-service-s-0", "The link is incorrect");
        // browser.back();

        // const signIn = topMenu.$(" .account.dropdown");
        // assert.equal(signIn.$(' a').getText(), "Sign In", "The Sign IOn doesnt have name");
        // signIn.$(' .caret').click();
        // let signDropDownOpn = signIn.$(" a").getAttribute("aria-expanded");
        // assert.isTrue(signDropDownOpn ==="true", "The drop Down Sign In is not shown");

        // const loginForm = signIn.$(' .dropdown-menu');
        // loginForm.$(' a[href="http://ip-5236.sunline.net.ua:38015/create_account"]').click();
        // assert.equal(browser.getUrl(), 'http://ip-5236.sunline.net.ua:38015/create_account', "Create account page is not opened");
        // browser.back();
        // signIn.$(' .caret').click();
        // loginForm.$(' a[href="http://ip-5236.sunline.net.ua:38015/reset_password"]').click();
        // assert.equal(browser.getUrl(), 'http://ip-5236.sunline.net.ua:38015/reset_password', "Reset password page is not opened");
        // browser.back();
    });

});