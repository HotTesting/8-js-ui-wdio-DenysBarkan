export class Region {

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