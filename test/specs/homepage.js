const {assert} = require('chai');

describe('HEADER', function () {

    it('title&FavIcon', function () {
        browser.url(`/`);
        const title = browser.getTitle();
        assert.equal(title, "Ducks Store | Online Store", "The Title is wrong");
        const favIcon = $('link[href=\"/favicon.ico\"]');
        assert.exists(favIcon, 'Favicon is not shown');
    });
    it('header', ()=>{
        const header = $('#header');
        const logoImg = header.$('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]');
        assert.isTrue(logoImg.isDisplayed(), "The Logo img is not shown");
        const logoHref = header.$(' .logotype').getAttribute('href');
        assert.equal(logoHref, 'http://ip-5236.sunline.net.ua:38015/', 'The logo link is not exist');
        const logoTitle = header.$(' .logotype img').getAttribute('title');
        console.log('the logo title we have got ', logoTitle);
        assert.equal(logoTitle, 'Ducks Store', 'The logo title is wrong');

        const changePref = header.$(' .change a');
        changePref.click();
        browser.pause(2000);

        //const regionForm = header.$('#region');

        const regionalSettingsOverlay = $('form[name="region_form"]');
        assert.isTrue(regionalSettingsOverlay.isDisplayed(), "The region change form is not displayed");
        let countrySelect = regionalSettingsOverlay.$(' .select-wrapper select[name="country_code"]');
        countrySelect.selectByVisibleText('Ukraine');
        let currencySelect = regionalSettingsOverlay.$(' .select-wrapper select[name="currency_code"]');
        currencySelect.selectByVisibleText('Euros');
        //const provinceSelect = regionalSettingsOverlay.$('.select-wrapper select[name="zone_code"]');
        const saveBtn = regionalSettingsOverlay.$('button[name="save"]');
        browser.pause(3000);
        saveBtn.click();

        const langId = header.$(' .language').getText();
        assert.equal(langId, 'English', 'The language is incorrect');
        let currencyId = header.$(' .currency').getText();
        assert.equal(currencyId, 'EUR', 'The currency is incorrect');
        let countryId = header.$(' .country img').getAttribute('title');
        assert.equal(countryId, 'Ukraine');

        changePref.click();
        countrySelect.selectByVisibleText('United States');
        currencySelect.selectByVisibleText('US Dollars');
        saveBtn.click();
        currencyId = header.$(' .currency').getText();
        countryId = header.$(' .country img').getAttribute('title');
        assert.equal(currencyId, 'USD', 'The currency is incorrect');
        assert.equal(countryId, 'United States');

        const cart = header.$('#cart');
        const cartTitle = cart.$(' .title').getText();
        const cartImg = cart.$(' .image');
        assert.isTrue(cartImg.isDisplayed(),"Cart hasn't the image");
        assert.equal(cartTitle, "Shopping Cart", "The Title is not correct");

    });

    it("Search field", ()=>{
        let srch = $(".navbar-header .navbar-form .form-control");
        assert.equal(srch.getAttribute("placeholder"), "Search products …");
        $(".navbar-header input.form-control").setValue("SomeValue");
        browser.keys("\uE007");
        assert.include($("#box-search-results").getText(), "SomeValue");
        //browser.pause(3000);
        browser.back();
        //browser.pause(3000);
    });

    it("box slide", function () {
        let slide = $("#box-slides > carousel-inner > item");
        assert.exists(slide, "the slide box is not visiable");
    });

    it("corp logo", function () {
        let corp = $("li img");
       assert.exists(corp, "the corp logo is not shown");
    });

    it("home btn", function () {
        let hb = $(".hidden-xs > a");
        let ttl = hb.getAttribute("title");
        let href = hb.getAttribute("href");
        assert.equal(ttl, "Home");
       // console.log(ttl);
        assert.equal(href, "http://ip-5236.sunline.net.ua:38015/");
        //console.log(href);
    });

    it("categories dropdown", function () {
        let drdwn = $(".categories.dropdown");
        let name = drdwn.getText();
        //console.log("name: " + name);
        assert.equal(name, "Categories", "The Title of dropdown list is incorrect");
        $(".categories .caret").click();
        //browser.pause(3000);
        let drmn = $(".categories > .dropdown-menu").isDisplayed();
        assert.isTrue(drmn);
    });

    it("Manufactures dropdown", function () {
        let drdwn = $(".manufacturers.dropdown");
        let name = drdwn.getText();
        console.log("name: " + name);
        assert.equal(name, "Manufacturers", "The Title of dropdown list is incorrect");
        $(".manufacturers .caret").click();
        //browser.pause(3000);
        let drmn = $(".manufacturers > .dropdown-menu").isDisplayed();
        assert.isTrue(drmn);
    });

    it("Sigh in btn", ()=>{
        let accdrdwn = $(".account.dropdown");
        accdrdwn.click();
        let atrb = $(".account.dropdown a").getAttribute("aria-expanded");
        assert.isTrue(atrb ==="true", "mes");
        let acbtn = $(".btn");
        assert.exists(acbtn, "mes2");
        accdrdwn.click();
    })

    it("Customer service", ()=>{
        let cstmr = $(".customer-service a");
        assert.equal(cstmr.getText(), "Customer Service");
        assert.equal(cstmr.getAttribute("href"), "http://ip-5236.sunline.net.ua:38015/customer-service-s-0", "The link is not correct");
        cstmr.click();
        let caspg = $("#page.twelve-eighty");
        assert.equal(browser.getUrl(), "http://ip-5236.sunline.net.ua:38015/customer-service-s-0");
        assert.isOk(caspg);
        browser.back();
    })
})