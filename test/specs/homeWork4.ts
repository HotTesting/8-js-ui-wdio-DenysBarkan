/**
 - verify prices in cart, and after order created
 - verify order is successful
 - Prefer css selectors 
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - You SHOULD use PageObjects for this tests
 - Use mocha before/after hooks to reuse pre/post conditions
 - Use ChaiJS (expect, should or assert style) to make assertions
 */
import { should } from 'chai';
should();
import { ProductDetails } from '../../pageObjects/productDetails';
import { Checkout } from '../../pageObjects/checkout';


describe("Order", function() {
    beforeEach(function(){
        browser.reloadSession();
        browser.setWindowSize(1600, 900);
    });


    const product = new ProductDetails();
    const checkout = new Checkout();

    it("is successful for regular item", function() {
        product.open('/rubber-ducks-c-1/red-duck-p-3');
        const productPrice = product.getProductPrice();
        product.addToCart();
        checkout.open();
        checkout.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(checkout.shoppingCart.items[0].getProductPrice());
    });

    it("is successful for discounted item", function() {
        product.open('/rubber-ducks-c-1/blue-duck-p-4');
        const productPrice = product.getProductPrice();
        product.addToCart();
        browser.pause(2000);
        checkout.open();
        checkout.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(checkout.shoppingCart.items[0].getProductPrice());

    });

    // it.skip("is successful for sold out item", function() {
    //     // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/purple-duck-p-5 
    //     // this duck always sold out
    //     throw new Error("NOT IMPLEMENTED");
    // });

    // it.skip("is successful for 2 same items in card", function() {
    //     // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/red-duck-p-3
    //     // Just regular duck without discounts, parameters, or sold our
    //     throw new Error("NOT IMPLEMENTED");
    // });

    // it.skip("is successful for 2 different items in card", function() {
    //     throw new Error("NOT IMPLEMENTED");
    // });

    // it.skip("is successful for items with parameters", function() {
    //     // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/premium-ducks-c-2/vip-yellow-duck-p-6 
    //     // this duck has 3 sizes - small, medium, large. Each size has own price. Verify that price calculated correctly
    //     throw new Error("NOT IMPLEMENTED");
    // });
});