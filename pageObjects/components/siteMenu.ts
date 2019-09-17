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

    getSearchPlaceholder(){
        return this.searchField.getAttribute("placeholder");
    }

    fillSearchField(somevalue){
        this.searchField.click();
        this.searchField.setValue(somevalue);
        browser.keys("\uE007");
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

    // openCategoriesDropDown() {
    //     this.categoriesDropDown.$(' .caret').click();
    //     let catOpen = this.categoriesDropDown.getAttribute('aria-expanded');
    //     return catOpen !== null;
    // }





}