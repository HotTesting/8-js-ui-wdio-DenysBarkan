import { Header } from './components/header'
export class HomePage extends Header{

    head = new Header();

    open(){
    browser.url('/');
    // this.head.logoImg.waitForDisplayed();
    this.logoImg.waitForDisplayed();
    }

    getTitle(){
        return browser.getTitle();
    }

    getLogoHref(){
        return this.header.$(' .logotype').getAttribute('href');
    }

    getLogoTitle(){
        return this.header.$(' .logotype img').getAttribute('title');
    }

    changePref(){
        this.header.$(' .change a').click();
    }

}