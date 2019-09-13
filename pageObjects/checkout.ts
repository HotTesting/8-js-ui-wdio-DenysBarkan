

export class Checkout {

    shoppingCart
    
    constructor() {
        this.shoppingCart = new ShoppingCart();
    }

    open() {
        browser.url("/checkout");
        browser.pause(3500);
    }

    isNoItemsInCart(){
        if($('.cart.wrapper em').isDisplayed()){
           return $('.cart.wrapper em').getText().includes('There are no items in your cart');
        } else {
            return false;
        }
    }

    isItemsInCart(){
        return !this.isNoItemsInCart();
    }

   

}

// Component
class ShoppingCart {
    private get container(){
        return $('#box-checkout-cart');
    };

    public get items(){
        return $$('table.items tr.item').map(item => {
            return new Item(item);
        }); //convert to item
    }

}


class Item {
    container

    constructor(itemContainer){
        this.container = itemContainer
    }

    getProductName(){
        return this.container.getAttribute('data-name');
    }
    getProductPrice(){
        return parseFloat(this.container.getAttribute('data-price'));
    }

}