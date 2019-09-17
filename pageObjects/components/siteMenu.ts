export class HeaderMenu {
    
    get topMenu() {
        return $('#site-menu');
    }

    get searchField() {
        return this.topMenu.$(' input[name="query"]');
    }

    get homeBtn() {
        return this.topMenu.$(" .hidden-xs a");
    }

    get categoriesDropDown() {
        return this.topMenu.$(' .categories a');
    }

    get manufacturesDropDown(){
        return this.topMenu.$(" .manufacturers a");
    }

    get customService(){
        return this.topMenu.$(" .customer-service a");
    }

    get signInDropDown(){
        return this.topMenu.$(" .account.dropdown");
    }

    getSearchPlaceholder(){
        return this.searchField.getAttribute("placeholder");
    }

    getSearchResult(){
        if( $("#box-search-results div em").isExisting()) {
            return $("#box-search-results div em").getText();
        } else { 
            return $("#box-search-results .title").getText();
        }
        
    }

    getHomeBtnTitle(){
        return this.homeBtn.getAttribute("title");
    }

    getHomeBtnHref(){
        return this.homeBtn.getAttribute("href");
    }

    getCategoriesDropDownTitle(){
        return this.categoriesDropDown.getText();
    }

    openCategoriesDropDown() {
        this.categoriesDropDown.$(' .caret').click();
        let catOpen = this.categoriesDropDown.getAttribute('aria-expanded');
        return catOpen !== null;
    }

    getCategoriesDropDownList(){
        return this.categoriesDropDown.$('.dropdown-menu');
    }

    getManufacturesDropDownTitle(){
        return this.manufacturesDropDown.getText();
    }

    openManufacturesDropDown() {
        this.manufacturesDropDown.$(' .caret').click();
        let manOpen = this.manufacturesDropDown.getAttribute('aria-expanded');
        return manOpen !== null;
    }

    getManufactureDropDownList(){
        return this.categoriesDropDown.$('.dropdown-menu');
    }

    getCustomServiceTitle(){
        return this.customService.getText();
    }

    getCustimServiceHref(){
        return this.customService.getAttribute("href");
    }

    getSignInTitle(){
        return this.signInDropDown.$(' a').getText();
    }





}