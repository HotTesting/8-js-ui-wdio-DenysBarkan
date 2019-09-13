export class PageObj {
    static get header() { return  $('#header'); }
    static get logoImg() { return PageObj.header.$('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]'); }
    static get favIcon() { return $('link[href=\"/favicon.ico\"]'); }

}
export class HomePage {
    


    
    open(){
        browser.url('/');
        PageObj.logoImg.waitForDisplayed();
    }

    getTitle(){
        return browser.getTitle();
    }

}

export class Header {

    public header: string = PageObj.header.$('hren').getText();

}

