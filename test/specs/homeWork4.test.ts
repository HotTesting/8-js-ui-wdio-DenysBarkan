import { should } from 'chai';
should();
import { BuyItem } from '../../pageObjects/apps/buyItem';


describe("Order", function() {
    beforeEach(function(){
        browser.reloadSession();
        browser.setWindowSize(1600, 900);
    });
    afterEach(function(){
        browser.takeScreenshot();
    })

    const Buy = new BuyItem();

    it("is successful for regular item", function() {
        Buy.product.open('/rubber-ducks-c-1/red-duck-p-3');
        const productPrice = Buy.product.getProductPrice();
        Buy.product.addToCart();
        Buy.cart.open();
        Buy.cart.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(Buy.cart.shoppingCart.items[0].getProductPrice());
        Buy.cart.customerDetails.fillInForm();
        Buy.cart.customerDetails.saveCustomerDetails(); 
        Buy.cart.customerDetails.confirmOrderBtn();
        Buy.cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });

    it("is successful for discounted item", function() {
        Buy.product.open('/rubber-ducks-c-1/blue-duck-p-4');
        const productPrice = Buy.product.getProductPrice();
        Buy.product.addToCart();
        Buy.cart.open();
        Buy.cart.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(Buy.cart.shoppingCart.items[0].getProductPrice());
        Buy.cart.customerDetails.fillInForm();
        Buy.cart.customerDetails.saveCustomerDetails(); 
        Buy.cart.customerDetails.confirmOrderBtn();
        Buy.cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });

    it("is successful for sold out item", function() {
        Buy.product.open('/rubber-ducks-c-1/purple-duck-p-5');
        const productPrice = Buy.product.getProductPrice();
        Buy.product.getStockStatus().should.be.equal('Temporary Sold Out', "The SoldOut is not shown");
        Buy.product.addToCart();
        Buy.cart.open();
        Buy.cart.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(Buy.cart.shoppingCart.items[0].getProductPrice());
        Buy.cart.customerDetails.fillInForm();
        Buy.cart.customerDetails.saveCustomerDetails(); 
        Buy.cart.customerDetails.confirmOrderBtn();
        Buy.cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });

    it("is successful deleted from the cart", function() {
        Buy.product.open('/rubber-ducks-c-1/blue-duck-p-4');
        const productPrice = Buy.product.getProductPrice();
        Buy.product.addToCart();
        Buy.cart.open();
        Buy.cart.isItemsInCart().should.be.true;
        productPrice.should.to.be.equal(Buy.cart.shoppingCart.items[0].getProductPrice());
        const cartIsFull = Buy.cart.itemsInCart;
        (cartIsFull > 0).should.be.true;
        Buy.cart.deleteOneItemFromCart();
        (cartIsFull > Buy.cart.itemsInCart).should.be.true;

    });

    it("is successful for 2 same items in card", function() {
        Buy.product.open('/rubber-ducks-c-1/red-duck-p-3');
        Buy.product.addToCart();
        Buy.product.addToCart();
        Buy.cart.open();
        Buy.cart.isItemsInCart().should.be.true;
        (Buy.cart.sameItemsInCart >= 2).should.be.true;
        Buy.cart.customerDetails.fillInForm();
        Buy.cart.customerDetails.saveCustomerDetails(); 
        Buy.cart.customerDetails.confirmOrderBtn();
        Buy.cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });

    it("is successful for 2 different items in card", function() {
        Buy.product.open('/rubber-ducks-c-1/red-duck-p-3');
        Buy.product.addToCart();
        Buy.product.open('/rubber-ducks-c-1/blue-duck-p-4');
        Buy.product.addToCart();
        Buy.cart.open();
        (Buy.cart.itemsInCart >= 2).should.be.true;
        Buy.cart.customerDetails.fillInForm();
        Buy.cart.customerDetails.saveCustomerDetails(); 
        Buy.cart.customerDetails.confirmOrderBtn();
        Buy.cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');

    });

    it("is successful for items with parameters", function() {
        Buy.product.open('/rubber-ducks-c-1/vip-yellow-duck-p-6');
        Buy.product.selectSize('Small');
        const price1 = Buy.product.getProductPrice();
        Buy.product.addToCart();
        Buy.product.selectSize('Medium');
        const price2 = Buy.product.getProductPrice();
        Buy.product.addToCart();
        Buy.product.selectSize('Large');
        const price3 = Buy.product.getProductPrice();
        Buy.product.addToCart();
        Buy.cart.open();
        const total = price1 + price2 + price3;
        Buy.cart.totalPrice.should.be.equal(total, "The total sum is not correct");
        Buy.cart.customerDetails.fillInForm();
        Buy.cart.customerDetails.saveCustomerDetails(); 
        Buy.cart.customerDetails.confirmOrderBtn();
        Buy.cart.customerDetails.confirmMessage.should.to.include('is successfully completed!');
    });
});