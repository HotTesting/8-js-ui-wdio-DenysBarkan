import { Header } from './components/header'
import { Region } from './components/regionList';
export class HomePage {

    head = new Header();
    region = new Region();
    

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
        this.region.countryList.selectByVisibleText(con);
    }

    selectCurrency(cur){
        this.region.currencyList.selectByVisibleText(cur);
    }




}