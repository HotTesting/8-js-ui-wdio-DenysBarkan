import { ProductDetails } from "../../pageObjects/productDetails.page";
import { Checkout } from "../../pageObjects/checkout.page";
import { expect } from 'chai';

describe('Cart', function(){
    beforeEach(function(){
        browser.maximizeWindow();
    });

    const product = new ProductDetails();
    const checkout = new Checkout();

    it('can be added item', function(){    
        product.open('/rubber-ducks-c-1/red-duck-p-3');
        product.addToCart();
        checkout.open();
        expect(checkout.isItemsInCart()).to.be.true;
    })

    it('can be added correct item', function(){
        product.open('/rubber-ducks-c-1/red-duck-p-3');
        const productName = product.getProductName();
        const productPrice = product.getProductPrice();
        product.addToCart();
        checkout.open();
        expect(checkout.isItemsInCart()).to.be.true;
        const productNameInCart = checkout.shoppingCart.items[0].getProductName();
        const productPriceInCart = checkout.shoppingCart.items[0].getProductPrice();
        expect(productNameInCart).to.equal(productName);
        expect(productPriceInCart).to.equal(productPrice);
    })
})