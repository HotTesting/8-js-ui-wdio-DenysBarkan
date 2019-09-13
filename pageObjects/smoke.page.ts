export class HomePage {
    open(){
        browser.url('/');
        this.LogoImg.waitForDisplayed();
    }

    get LogoImg() { return $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]'); }


}


