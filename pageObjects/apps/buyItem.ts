import { ProductDetails } from "../productDetails.page";
import { Checkout } from "../checkout.page";

export class BuyItem {
    
    product = new ProductDetails();
    cart = new Checkout();

    open(productPath){
        browser.url(productPath);
    }
}