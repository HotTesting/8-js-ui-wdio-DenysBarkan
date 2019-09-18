
export class ProductDetails {

    open(productPath){
        browser.url(productPath);
    }

    addToCart(){
        $('button[name="add_cart_product"]').click();
        let checkWasAdded = +($('#cart .details .quantity').getText());
        browser.waitUntil(() => {
            return +($('#cart .details .quantity').getText()) !== checkWasAdded;
        }, 5000);
        
    }
    
    getProductPrice() {
        if($('#box-product.box .price').isExisting()) {
            return parseFloat($('#box-product.box .price').getText().slice(1))
        } else { return parseFloat($('#box-product.box .campaign-price').getText().slice(1))
    }
    }
    
    getProductName() {
        return $('h1.title').getText();
    }

    getStockStatus(){
        let status = $('#box-product .stock-status .value').getText();
        if ( status == 'Temporary Sold Out') { 
            return status} else { return "On the store"}; 
    }

    selectSize(size){
        // $('.select-wrapper select[name="options[Size]"]').click();
        $('select[name="options[Size]"]').addValue(size);
    }

}
