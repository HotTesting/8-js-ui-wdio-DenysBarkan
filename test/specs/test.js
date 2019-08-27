const {assert} = require('chai');

describe('Website', function () {
    it('should be alive', function () {
        browser.url('/');
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]');
        assert.exists(img, 'Website should be opened, and logo displayed');
        //browser.pause(3000);
    });
    it('title', function () {
        //browser.url('/');
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
        assert.equal(name, "Categories", "The Title of dropdown list is incorrect");
        $(".categories.dropdown > .dropdown-toggle").click();
        let drmn = $(".categories > .dropdown-menu a");
        console.log("drmn" + drmn);
        let drList = $(drmn).getText();
        let drLink = $(drmn).getAttribute("href");
        assert.isTrue(drList);
        assert.equal(drLink, "http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/");
    })

})