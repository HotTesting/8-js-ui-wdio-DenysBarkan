export class Header {

    
    get header() { return  $('#header'); }
    get logoImg() { return this.header.$('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]'); }
    get favIcon() { return $('link[href=\"/favicon.ico\"]'); }
    //get cart() { return this.header.$('#cart'); }

    getSelectedLanguage(){
        return this.header.$(' .language').getText();
    }
    
    getSelectedCurrency(){
        return this.header.$(' .currency').getText();
    }

    getSelectedCountry(){
        return this.header.$(' .country img').getAttribute('title');
    }

    getCartTitle(){
        //return this.cart.$(' .title').getText();
        return this.header.$('#cart .title').getText();
    }

    getCartImg(){
        return this.header.$('#cart .image').isDisplayed();
    }
    get regionSetOverlay() {
        return $('#box-regional-settings');
    }

    get countryList() {
        return this.regionSetOverlay.$(' .select-wrapper select[name="country_code"]');
    }

    get currencyList(){
        return this.regionSetOverlay.$(' .select-wrapper select[name="currency_code"]');
    }

    get saveBtn(){
        return this.regionSetOverlay.$('button[name="save"]');
    }

    clickSaveBtn(){
        this.saveBtn.click();
        this.regionSetOverlay.waitForDisplayed(null, true);
    }


    
}