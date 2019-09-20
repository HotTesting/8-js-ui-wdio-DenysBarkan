import { Header } from './components/header'
import { HeaderMenu } from './components/siteMenu';
export class HomePage {

    head = new Header();
    topMenu = new HeaderMenu();
    

    open(){
    browser.url('/');
    this.head.logoImg.waitForDisplayed();
    }

    getTitle(){
        return browser.getTitle();
    }

    getLogoHref(){
        return this.head.header.$(' .logotype').getAttribute('href');
    }

    getLogoTitle(){
        return this.head.header.$(' .logotype img').getAttribute('title');
    }

    changePref(){
        this.head.header.$(' .change a').click();

    }

    selectCountry(con){
        this.head.countryList.selectByVisibleText(con);
    }

    selectCurrency(cur){
        this.head.currencyList.selectByVisibleText(cur);
    }

    fillSearchField(somevalue){
        this.topMenu.searchField.click();
        this.topMenu.searchField.setValue(somevalue);
        browser.keys("\uE007");
    }

    openSignInDropDown(){
        this.topMenu.signInDropDown.$(' .caret').click();
        return this.topMenu.signInDropDown.$(" a").getAttribute("aria-expanded");
    }

}