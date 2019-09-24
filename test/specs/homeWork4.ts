import { should } from 'chai';
should();
import { ProductDetails } from '../../pageObjects/productDetails.page';
import { Checkout } from '../../pageObjects/checkout.page';


describe("Order", function() {
    beforeEach(function(){
        browser.reloadSession();
        browser.setWindowSize(1600, 900);
    });
    afterEach(function(){
        browser.takeScreenshot();
    });
    
    const product = new ProductDetails();
    const cart = new Checkout();

    it("is successful for regular item", function() {
        product.open('/rubber-ducks-c-1/red-duck-p-3');
        const productPrice = product.getProductPrice();
        product.addToCart();
        cart.open();
        cart.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(cart.shoppingCart.items[0].getProductPrice());
        cart.customerDetails.fillInForm('ua');
        cart.customerDetails.confirmOrderBtn();
        cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });

    it("is successful for discounted item", function() {
        product.open('/rubber-ducks-c-1/blue-duck-p-4');
        const productPrice = product.getProductPrice();
        product.addToCart();
        cart.open();
        cart.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(cart.shoppingCart.items[0].getProductPrice());
        cart.customerDetails.fillInForm('usa');
        cart.customerDetails.confirmOrderBtn();
        cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });

    it("is successful for sold out item", function() {
        product.open('/rubber-ducks-c-1/purple-duck-p-5');
        const productPrice = product.getProductPrice();
        product.getStockStatus().should.be.equal('Temporary Sold Out', "The SoldOut is not shown");
        product.addToCart();
        cart.open();
        cart.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(cart.shoppingCart.items[0].getProductPrice());
        cart.customerDetails.fillInForm('ua');
        cart.customerDetails.confirmOrderBtn();
        cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });

    it("is successful deleted from the cart", function() {
        product.open('/rubber-ducks-c-1/blue-duck-p-4');
        const productPrice = product.getProductPrice();
        product.addToCart();
        cart.open();
        cart.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(cart.shoppingCart.items[0].getProductPrice());
        const cartIsFull = cart.itemsInCart;
        (cartIsFull > 0).should.be.true;
        cart.deleteOneItemFromCart();
        (cartIsFull > cart.itemsInCart).should.be.true;

    });

    it("is successful for 2 same items in card", function() {
        product.open('/rubber-ducks-c-1/red-duck-p-3');
        product.addToCart();
        product.addToCart();
        cart.open();
        cart.isItemsInCart().should.be.true;
        (cart.sameItemsInCart >= 2).should.be.true;
        cart.customerDetails.fillInForm('usa');
        cart.customerDetails.confirmOrderBtn();
        cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });

    it("is successful for 2 different items in card", function() {
        product.open('/rubber-ducks-c-1/red-duck-p-3');
        product.addToCart();
        product.open('/rubber-ducks-c-1/blue-duck-p-4');
        product.addToCart();
        cart.open();
        (cart.itemsInCart >= 2).should.be.true;
        cart.customerDetails.fillInForm();
        cart.customerDetails.confirmOrderBtn();
        cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');

    });

    it("is successful for items with parameters", function() {
        product.open('/rubber-ducks-c-1/vip-yellow-duck-p-6');
        product.selectSize('Small');
        const price1 = product.getProductPrice();
        product.addToCart();
        product.selectSize('Medium');
        const price2 = product.getProductPrice();
        product.addToCart();
        product.selectSize('Large');
        const price3 = product.getProductPrice();
        product.addToCart();
        cart.open();
        const total = price1 + price2 + price3;
        cart.totalPrice.should.be.equal(total, "The total sum is not correct");
        cart.customerDetails.fillInForm();
        cart.customerDetails.confirmOrderBtn();
        cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });
});