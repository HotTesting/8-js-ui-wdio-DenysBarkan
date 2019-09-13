import { Some } from '../../pageObjects/some';

descride('Order', function(){
    it('singel item', function(){
        Some.open('/rubber-ducks-c-1/red-duck-p-3');
        const productPrice = S;
        $('button[name="add_cart_product"]').click();
        browser.pause(3500);

        browser.url("/checkout");
        browser.pause(3500);


    })
} )