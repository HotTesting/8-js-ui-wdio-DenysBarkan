import { ProductDetails } from "../../pageObjects/productDetails.page";
import { Checkout } from "../../pageObjects/checkout.page";
import { expect } from 'chai';

describe('Cart', function(){
    beforeEach(function(){
        browser.maximizeWindow();
    });

    it('can be added item', function(){
        const product = new ProductDetails();
        product.open('/rubber-ducks-c-1/red-duck-p-3');
        product.addToCart();

        const checkout = new Checkout();
        checkout.open();
        expect(checkout.isItemsInCart()).to.be.true;
    })

    it('can be added correct item', function(){
        const product = new ProductDetails();
        product.open('/rubber-ducks-c-1/red-duck-p-3');
        const productName = product.getProductName();
        const productPrice = product.getProductPrice();

        console.log('productName ', productName);
        console.log('productPrice ', productPrice);

        product.addToCart();

        const checkout = new Checkout();
        checkout.open();
        expect(checkout.isItemsInCart()).to.be.true;
        const productNameInCart = checkout.shoppingCart.items[0].getProductName();
        const productPriceInCart = checkout.shoppingCart.items[0].getProductPrice();

        console.log('productNameInCart', productNameInCart);
        console.log('productPriceInCart', productPriceInCart);

        expect(productNameInCart).to.equal(productName);
        expect(productPriceInCart).to.equal(productPrice);
    })
})