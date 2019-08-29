const {assert} = require('chai');

describe('HEADER', function () {

    it('should be alive', function () {
        browser.url('/');
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]');
        assert.exists(img, 'Website should be opened, and logo displayed');
        //browser.pause(3000);
    });

    it('title', function () {
        let title = browser.getTitle();
        assert.equal(title, "Ducks Store | Online Store", "The Title is wrong");
    });

    it('cart', function () {
        let cart = $('#cart');
        let cartTitle = $(".details > .title").getText();
        let cartImg = $(".image:nth-child(2)");
        assert.exists(cart, "cart is not exist");
        assert.exists(cartImg, "Cart hasn't the image");
        assert.equal(cartTitle, "Shopping Cart", "The Title is not correct");
    });

    it("Search field", ()=>{
        let srch = $(".navbar-header .navbar-form");

    })

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
        console.log(ttl);
        assert.equal(href, "http://ip-5236.sunline.net.ua:38015/");
        console.log(href);
    });

    it("categories dropdown", function () {
        let drdwn = $(".categories.dropdown");
        let name = drdwn.getText();
        console.log("name: " + name);
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