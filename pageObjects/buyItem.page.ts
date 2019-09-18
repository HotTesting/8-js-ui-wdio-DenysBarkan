import { ProductDetails } from "./components/productDetails";
import { Checkout } from "./components/checkout";

export class BuyItem {
    
    product = new ProductDetails();
    cart = new Checkout();

    open(productPath){
        browser.url(productPath);
    }



}