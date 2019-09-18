

export class Checkout {

    shoppingCart
    
    constructor() {
        this.shoppingCart = new ShoppingCart();
    }

    open() {
        browser.url("/checkout");
        $('.loader-wrapper .loader').waitForDisplayed(2000, true);
    }

    get itemsInCart() {
        if($('.items.table.table-striped.table-hover.data-table .item').isDisplayed()) {
            return $$('.items.table.table-striped.table-hover.data-table .item').length; 
        } else { return +0};
    }

    get sameItemsInCart(){
        let a = $('.items.table.table-striped.table-hover.data-table .item .form-control').getAttribute('value');
        return +a;
    }

    get totalPrice() {
        return parseFloat($('.subtotal .formatted-value').getText().slice(1));
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

    deleteOneItemFromCart(){
        if(this.itemsInCart > 0){
            $('.item button[name="remove_cart_item"]').click();
            $('.loader-wrapper .loader').waitForDisplayed(2000, true);
            } else { return 'The Cart is Empty'}
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